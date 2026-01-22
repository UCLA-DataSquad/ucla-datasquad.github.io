# DataSquad Project Intake Setup Guide

This guide explains how to set up the project intake form that creates GitHub issues in your private repo.

## Overview

The intake form is a Jekyll page that submits to a Cloudflare Worker backend. The Worker creates GitHub issues in your private repository without exposing credentials.

## Files Created

1. **`intake.md`** - The public intake form page (already created)
2. **`cloudflare-worker.js`** - The backend Worker code (already created)

## Setup Steps

### 1. Deploy Cloudflare Worker

1. Sign up for a free account at https://workers.cloudflare.com
2. Click "Create a Worker"
3. Name it (e.g., `datasquad-intake`)
4. Delete the default code and paste the contents of `cloudflare-worker.js`
5. Click "Save and Deploy"

### 2. Configure Worker Secrets

In your Worker dashboard:

1. Go to **Settings** → **Variables and Secrets**
2. Add the following secrets:

   - **`GITHUB_TOKEN`**: A GitHub Personal Access Token (PAT) or GitHub App token
     - For PAT: Go to GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens
     - Create a token with `repo` scope for the `ucla-data-science-center/DataSquad` repository
     - Copy the token and paste it as the `GITHUB_TOKEN` secret

   - **(Optional) `SECONDARY_REPO_OWNER`**: If you want to create a second issue in another repo
   - **(Optional) `SECONDARY_REPO_NAME`**: The name of the secondary repo

### 3. Get Your Worker URL

After deployment, Cloudflare will give you a URL like:
```
https://datasquad-intake.your-subdomain.workers.dev
```

### 4. Update the Intake Form

Edit `intake.md` and update line 47:

```javascript
const ENDPOINT = "https://YOUR-WORKER.yourdomain.workers.dev/intake";
```

Replace with your actual Worker URL:
```javascript
const ENDPOINT = "https://datasquad-intake.your-subdomain.workers.dev/intake";
```

### 5. Test the Form

1. Build and serve your Jekyll site locally:
   ```bash
   bundle exec jekyll serve
   ```
2. Visit http://localhost:4000/intake/
3. Fill out the form and submit
4. Check your private GitHub repo for the new issue

## Security Considerations

### Rate Limiting

Cloudflare Workers have built-in rate limiting. You can also add custom rate limiting in the Worker code.

### CAPTCHA (Optional)

To prevent spam, consider adding Cloudflare Turnstile (free):
1. Sign up at https://www.cloudflare.com/products/turnstile/
2. Add the Turnstile widget to your form
3. Verify the token in your Worker before creating the issue

### Email Validation

The Worker code includes an optional UCLA email validation (commented out). Uncomment lines 38-41 in `cloudflare-worker.js` if you want to restrict submissions to UCLA emails only.

## Customization

### Change Labels

Edit the `labels` array in the `createIssue` call (line ~60 in `cloudflare-worker.js`):
```javascript
labels: ["project", "intake:new", "your-custom-label"]
```

### Change Assignees

Edit the `assignees` array:
```javascript
assignees: ["lianlinton", "other-username"]
```

### Change Repository

Update the `owner` and `repo` in the `createIssue` call:
```javascript
owner: "your-org",
repo: "your-repo",
```

## Troubleshooting

### "GITHUB_TOKEN not configured"
- Make sure you added the secret in Cloudflare Worker settings
- Verify the token has the correct permissions

### "GitHub API error: 401"
- Your token may be expired or invalid
- Regenerate the token and update the secret

### "GitHub API error: 403"
- The token doesn't have access to the repository
- Make sure the token has `repo` scope for the private repo

### CORS Errors
- Verify the `Access-Control-Allow-Origin` header in the Worker matches your site URL
- Currently set to `https://ucla-datasquad.github.io`

## Next Steps

1. Deploy the Worker and get your URL
2. Update `intake.md` with the Worker URL
3. Test the form
4. Commit and push to GitHub Pages
5. The form will be live at: https://ucla-datasquad.github.io/intake/

## Support

If you encounter issues:
1. Check the Cloudflare Worker logs (in the dashboard)
2. Check browser console for JavaScript errors
3. Verify all secrets are set correctly
4. Test the GitHub API token manually using curl or Postman
