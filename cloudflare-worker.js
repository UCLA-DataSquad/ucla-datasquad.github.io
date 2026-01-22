/**
 * Cloudflare Worker for DataSquad Project Intake
 * 
 * Deploy this to Cloudflare Workers:
 * 1. Sign up at https://workers.cloudflare.com
 * 2. Create a new Worker
 * 3. Paste this code
 * 4. Add secrets: GITHUB_TOKEN (and optionally SECONDARY_REPO_OWNER, SECONDARY_REPO_NAME)
 * 5. Update the route to match your domain
 */

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });
    }

    // Only allow POST to /intake
    const url = new URL(request.url);
    if (url.pathname !== "/intake" || request.method !== "POST") {
      return json({ error: "Not found" }, 404);
    }

    // Parse request body
    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400);
    }

    // Basic validation
    const required = ["researcherName", "affiliationEmail", "projectGoal", "dataDescription", "serviceType", "priority"];
    for (const k of required) {
      if (!payload[k] || String(payload[k]).trim() === "") {
        return json({ error: `Missing required field: ${k}` }, 400);
      }
    }

    // Optional: Validate email domain (uncomment if you want UCLA-only)
    // if (!payload.affiliationEmail.endsWith('@ucla.edu') && !payload.affiliationEmail.endsWith('@g.ucla.edu')) {
    //   return json({ error: "Email must be a UCLA email address" }, 400);
    // }

    // Build issue title/body
    const title = `[INTAKE] ${firstLine(payload.projectGoal, 80)}`;
    const body = formatBody(payload);

    // Create issue in PRIVATE repo
    let issueUrl;
    try {
      issueUrl = await createIssue(env, {
        owner: "ucla-data-science-center",
        repo: "DataSquad",
        title,
        body,
        labels: ["project", "intake:new"],
        assignees: ["lianlinton"]
      });
    } catch (error) {
      console.error("Failed to create issue:", error);
      return json({ error: `Failed to create issue: ${error.message}` }, 500);
    }

    // OPTIONAL: create a second issue in another repo (if configured)
    let secondaryIssueUrl = null;
    if (env.SECONDARY_REPO_OWNER && env.SECONDARY_REPO_NAME) {
      try {
        secondaryIssueUrl = await createIssue(env, {
          owner: env.SECONDARY_REPO_OWNER,
          repo: env.SECONDARY_REPO_NAME,
          title: `Mirror: ${title}`,
          body: `This is a mirror / routing ticket.\n\nPrimary issue: ${issueUrl}\n\n---\n\n${body}`,
          labels: ["intake"]
        });
      } catch (error) {
        console.error("Failed to create secondary issue:", error);
        // Don't fail the whole request if secondary issue fails
      }
    }

    return json({ ok: true, issueUrl, secondaryIssueUrl }, 200);

    // ---- Helper Functions ----

    function corsHeaders() {
      return {
        "Access-Control-Allow-Origin": "https://ucla-datasquad.github.io",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      };
    }

    function json(obj, status = 200) {
      return new Response(JSON.stringify(obj), {
        status,
        headers: { "Content-Type": "application/json", ...corsHeaders() }
      });
    }

    function firstLine(text, max) {
      const t = String(text).trim().split("\n")[0];
      return t.length > max ? t.slice(0, max - 1) + "…" : t;
    }

    function formatBody(p) {
      return `### Requester
- **Researcher Name(s):** ${escapeMarkdown(p.researcherName)}
- **Affiliation & Contact Email:** ${escapeMarkdown(p.affiliationEmail)}

### Project Goal & Deliverables
${escapeMarkdown(p.projectGoal)}

### Data Description & Status
${escapeMarkdown(p.dataDescription)}

### Desired Completion Date / Timeline
${p.timeline ? escapeMarkdown(p.timeline) : "_Not provided_"}

### Primary Service Requested
${escapeMarkdown(p.serviceType)}

### Priority
${escapeMarkdown(p.priority)}

### Additional Notes
${p.notes ? escapeMarkdown(p.notes) : "_None_"}

---
_Submitted via public intake page_`;
    }

    function escapeMarkdown(text) {
      // Basic markdown escaping for user input
      return String(text || "").replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }

    async function createIssue(env, { owner, repo, title, body, labels = [], assignees = [] }) {
      if (!env.GITHUB_TOKEN) {
        throw new Error("GITHUB_TOKEN not configured");
      }

      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
          "Accept": "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/json",
          "User-Agent": "DataSquad-Intake-Worker/1.0"
        },
        body: JSON.stringify({ title, body, labels, assignees })
      });

      const data = await response.json().catch(() => ({}));
      
      if (!response.ok) {
        const errorMsg = data?.message || `GitHub API error: ${response.status}`;
        console.error("GitHub API error:", errorMsg, data);
        throw new Error(errorMsg);
      }

      return data.html_url;
    }
  }
};
