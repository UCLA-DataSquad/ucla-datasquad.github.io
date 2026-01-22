---
layout: default
title: DataSquad Project Intake
permalink: /intake/
---

{% include nav.html %}

<section class="page-section" style="padding-top: 150px; padding-bottom: 40px;">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h2 class="section-heading text-uppercase text-center mb-3">DataSquad Project Intake</h2>
        <p class="text-muted text-center mb-4">Please provide as much detail as possible to help us scope your project. All fields marked with * are required.</p>

        <form id="intakeForm" class="bg-light p-4 rounded">
          <div class="form-group mb-4">
            <label for="researcherName" class="font-weight-bold">Researcher Name(s) *</label>
            <input type="text" class="form-control" id="researcherName" name="researcherName" required placeholder="Jane Doe (UCLA Library)"/>
          </div>

          <div class="form-group mb-4">
            <label for="affiliationEmail" class="font-weight-bold">Affiliation & Contact Email *</label>
            <input type="email" class="form-control" id="affiliationEmail" name="affiliationEmail" required placeholder="Department / jane.doe@g.ucla.edu"/>
          </div>

          <div class="form-group mb-4">
            <label for="projectGoal" class="font-weight-bold">Project Goal and Deliverables *</label>
            <textarea class="form-control" id="projectGoal" name="projectGoal" required rows="5" placeholder="Describe the main objectives and expected deliverables for this project..."></textarea>
          </div>

          <div class="form-group mb-4">
            <label for="dataDescription" class="font-weight-bold">Data Description & Status *</label>
            <textarea class="form-control" id="dataDescription" name="dataDescription" required rows="5" placeholder="Describe your data: format, size, current state, accessibility, etc..."></textarea>
          </div>

          <div class="form-group mb-4">
            <label for="timeline" class="font-weight-bold">Desired Completion Date or Timeline</label>
            <input type="text" class="form-control" id="timeline" name="timeline" placeholder="e.g., March 30, 2026 or Q2 2026"/>
          </div>

          <div class="form-group mb-4">
            <label for="serviceType" class="font-weight-bold">Primary Service Requested *</label>
            <select class="form-control" id="serviceType" name="serviceType" required>
              <option value="">Select a service...</option>
              <option>Data Wrangling & Cleaning</option>
              <option>Data Visualization (Viz)</option>
              <option>Statistical Analysis</option>
              <option>Database Design/Lifecycle Mgt</option>
              <option>Reproducibility Testing</option>
              <option>Other</option>
            </select>
          </div>

          <div class="form-group mb-4">
            <label for="priority" class="font-weight-bold">Priority *</label>
            <select class="form-control" id="priority" name="priority" required>
              <option value="">Select priority...</option>
              <option>Medium (Standard)</option>
              <option>High (Urgent/Due Soon)</option>
              <option>Low (Future/Idea)</option>
            </select>
          </div>

          <div class="form-group mb-4">
            <label for="notes" class="font-weight-bold">Additional Notes</label>
            <textarea class="form-control" id="notes" name="notes" rows="3" placeholder="Any additional information that would be helpful..."></textarea>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary btn-xl text-uppercase">Submit Intake</button>
          </div>
        </form>

        <div id="result" class="mt-4"></div>
      </div>
    </div>
  </div>
</section>

<script>
  const ENDPOINT = "https://datasquad-intake.lianelsalinton.workers.dev/intake"; // CHANGE LATER

  document.getElementById("intakeForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const result = document.getElementById("result");
    
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";
    submitBtn.classList.add("disabled");
    result.innerHTML = '<div class="alert alert-info"><strong>Submitting your intake form...</strong> Please wait.</div>';

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        result.innerHTML = `<div class="alert alert-danger"><strong>Error:</strong> ${json.error || "Submission failed. Please try again or contact us directly."}</div>`;
        submitBtn.disabled = false;
        submitBtn.classList.remove("disabled");
        submitBtn.textContent = "Submit Intake";
        return;
      }

      result.innerHTML = `
        <div class="alert alert-success">
          <h5 class="alert-heading">Success!</h5>
          <p><strong>Your intake form has been submitted successfully.</strong> We've created a ticket for your project.</p>
          <hr>
          <p class="mb-0">
            <a href="${json.issueUrl}" class="btn btn-outline-primary btn-sm" target="_blank" rel="noopener">View GitHub Issue</a>
            ${json.secondaryIssueUrl ? `<a href="${json.secondaryIssueUrl}" class="btn btn-outline-secondary btn-sm ml-2" target="_blank" rel="noopener">View Follow-up Issue</a>` : ""}
          </p>
        </div>
      `;
      form.reset();
      submitBtn.disabled = false;
      submitBtn.classList.remove("disabled");
      submitBtn.textContent = "Submit Intake";
    } catch (error) {
      result.innerHTML = `<div class="alert alert-danger"><strong>Network Error:</strong> ${error.message}. Please check your connection and try again.</div>`;
      submitBtn.disabled = false;
      submitBtn.classList.remove("disabled");
      submitBtn.textContent = "Submit Intake";
    }
  });
</script>
