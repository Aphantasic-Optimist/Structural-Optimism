# GitHub Pages Configuration Guide

This document provides step-by-step instructions for configuring GitHub Pages to deploy the Structural Optimism static site using GitHub Actions.

## Prerequisites

- Repository pushed to GitHub
- GitHub Actions workflow file (`.github/workflows/deploy.yml`) committed to the repository
- Repository must be public (or GitHub Pro/Team/Enterprise for private repos)

## Configuration Steps

### 1. Enable GitHub Pages

1. Navigate to your repository on GitHub
2. Click on **Settings** (top navigation bar)
3. In the left sidebar, click on **Pages** (under "Code and automation")

### 2. Configure Build and Deployment Source

1. Under **Build and deployment**, find the **Source** dropdown
2. Select **GitHub Actions** from the dropdown menu
   - This tells GitHub to use the workflow file instead of the legacy Jekyll build process
   - The workflow file at `.github/workflows/deploy.yml` will handle the build and deployment

### 3. Verify Workflow Permissions

1. In the left sidebar, click on **Actions** → **General**
2. Scroll down to **Workflow permissions**
3. Ensure the following is selected:
   - ✅ **Read and write permissions** (or at minimum, read permissions with Pages write access)
4. Ensure **Allow GitHub Actions to create and approve pull requests** is checked (optional, but recommended)
5. Click **Save** if you made any changes

### 4. Trigger Initial Deployment

The workflow is configured to run on:
- **Push to main branch**: Automatic deployment when you push changes
- **Manual trigger**: You can manually trigger the workflow

To manually trigger the first deployment:

1. Go to **Actions** tab in your repository
2. Click on **Deploy MkDocs to GitHub Pages** workflow in the left sidebar
3. Click **Run workflow** button (top right)
4. Select the **main** branch
5. Click **Run workflow**

### 5. Monitor Deployment

1. Go to the **Actions** tab
2. Click on the running workflow to see progress
3. The workflow has two jobs:
   - **build**: Installs dependencies and builds the MkDocs site
   - **deploy**: Deploys the built site to GitHub Pages
4. Wait for both jobs to complete (green checkmarks)

### 6. Access Your Site

Once deployment is complete:

1. Go back to **Settings** → **Pages**
2. You'll see a message: **"Your site is live at https://[username].github.io/structural-optimism/"**
3. Click the **Visit site** button or navigate to the URL

**Note**: The first deployment may take 1-2 minutes to become accessible after the workflow completes.

## Custom Domain Configuration (Optional)

If you want to use a custom domain (e.g., `structuraloptimism.org`):

### 1. Add Custom Domain in GitHub

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain name
3. Click **Save**
4. GitHub will create a `CNAME` file in your repository

### 2. Configure DNS Records

Add the following DNS records with your domain registrar:

**For apex domain (e.g., `structuraloptimism.org`):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: [username].github.io
```

**For custom subdomain (e.g., `docs.structuraloptimism.org`):**
```
Type: CNAME
Name: docs
Value: [username].github.io
```

### 3. Enable HTTPS

1. After DNS propagation (can take up to 24 hours), return to **Settings** → **Pages**
2. Check the box for **Enforce HTTPS**
3. GitHub will automatically provision an SSL certificate

### 4. Update mkdocs.yml

Update the `site_url` in `mkdocs.yml`:

```yaml
site_url: https://your-custom-domain.org/
```

Commit and push this change to trigger a new deployment.

## Troubleshooting

### Workflow Fails with "Permission denied"

**Solution**: Check workflow permissions in **Settings** → **Actions** → **General** → **Workflow permissions**. Ensure read and write permissions are enabled.

### Site Shows 404 Error

**Possible causes**:
1. Deployment hasn't completed yet (wait 1-2 minutes)
2. GitHub Pages is not enabled (check **Settings** → **Pages**)
3. Source is not set to "GitHub Actions" (change from dropdown)

### Custom Domain Not Working

**Possible causes**:
1. DNS records not configured correctly (verify with `dig` or `nslookup`)
2. DNS propagation not complete (wait up to 24 hours)
3. CNAME file missing (GitHub should create it automatically)

### Build Fails

**Check the workflow logs**:
1. Go to **Actions** tab
2. Click on the failed workflow run
3. Click on the **build** job
4. Expand the failed step to see error details

**Common issues**:
- Missing dependencies in `requirements.txt`
- Broken links (workflow uses `--strict` flag)
- Invalid YAML in `mkdocs.yml`
- Missing files referenced in navigation

## Workflow Details

The workflow performs the following steps:

1. **Checkout**: Clones the repository
2. **Setup Python**: Installs Python 3.11 with pip caching
3. **Install dependencies**: Installs MkDocs Material and plugins from `requirements.txt`
4. **Build site**: Runs `mkdocs build --strict` (fails on warnings)
5. **Upload artifact**: Packages the `site/` directory
6. **Deploy**: Deploys the artifact to GitHub Pages

## Updating the Site

To update the site content:

1. Make changes to Markdown files in the `docs/` directory
2. Commit and push to the `main` branch
3. GitHub Actions will automatically rebuild and deploy
4. Changes will be live in 1-2 minutes

## Manual Local Testing

Before pushing, test locally:

```bash
# Install dependencies
pip install -r requirements.txt

# Serve locally
mkdocs serve

# Build with strict mode (same as workflow)
mkdocs build --strict
```

Visit `http://127.0.0.1:8000` to preview changes.

## Security Considerations

- The workflow uses minimal permissions (read for contents, write for pages)
- Secrets are not required for public repositories
- HTTPS is enforced for custom domains
- The workflow only runs on the `main` branch

## Next Steps

After successful deployment:

1. ✅ Verify all pages load correctly
2. ✅ Test navigation and search functionality
3. ✅ Check mobile responsiveness
4. ✅ Run Lighthouse audit for performance
5. ✅ Test social media preview cards
6. ✅ Verify all links work (internal and external)

---

**Deployment Status**: Once configured, your site will be automatically deployed on every push to `main`. The workflow typically completes in 2-3 minutes.
