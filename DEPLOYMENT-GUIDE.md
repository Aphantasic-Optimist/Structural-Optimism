# Deployment Guide

## Current Status

✅ All changes have been committed to the local `master` branch
✅ GitHub Actions workflow is configured (`.github/workflows/deploy.yml`)
✅ Site is ready for deployment

## Next Steps for Deployment

### Step 1: Create GitHub Repository

If you haven't already created a GitHub repository:

1. Go to https://github.com/new
2. Create a new repository named `structural-optimism`
3. **Do NOT initialize with README, .gitignore, or license** (we already have these)
4. Choose visibility (Public recommended for GitHub Pages)

### Step 2: Add Remote and Push

Once you have the repository URL, run these commands:

```bash
# Add the remote repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/structural-optimism.git

# Verify the remote was added
git remote -v

# Push to GitHub (this will trigger the GitHub Actions workflow)
git push -u origin master
```

**Note:** If your default branch should be `main` instead of `master`, rename it first:
```bash
git branch -M main
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions** (not "Deploy from a branch")
4. Click **Save**

### Step 4: Verify Deployment

1. Go to **Actions** tab in your repository
2. You should see the "Deploy MkDocs to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be available at:
   - `https://USERNAME.github.io/structural-optimism/`

### Step 5: Test the Live Site

Once deployed, test the following:

- [ ] Home page loads correctly
- [ ] Navigation works (all 5 levels accessible)
- [ ] Search functionality works
- [ ] Mobile responsive design
- [ ] All internal links work
- [ ] Social media cards display correctly
- [ ] Language switcher works (if translations are complete)

## Troubleshooting

### Workflow Fails

If the GitHub Actions workflow fails:

1. Check the **Actions** tab for error messages
2. Common issues:
   - Missing dependencies in `requirements.txt`
   - Broken links in Markdown files
   - Invalid `mkdocs.yml` configuration

### Site Not Appearing

If the site doesn't appear after successful deployment:

1. Verify GitHub Pages is enabled in Settings → Pages
2. Check that Source is set to "GitHub Actions"
3. Wait a few minutes for DNS propagation
4. Try accessing in incognito/private browsing mode

### 404 Errors

If you get 404 errors on the deployed site:

1. Check that `site_url` in `mkdocs.yml` matches your GitHub Pages URL
2. Verify all file paths are correct (case-sensitive)
3. Ensure all referenced files exist in the `docs/` directory

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `docs/` directory with your domain
2. Update `site_url` in `mkdocs.yml` to your custom domain
3. Configure DNS records with your domain provider
4. Enable HTTPS in GitHub Pages settings

## Monitoring

After deployment, monitor:

- **GitHub Actions**: Check for successful builds
- **Analytics**: If enabled, track visitor metrics
- **Issues**: Monitor GitHub issues for bug reports
- **Performance**: Use Lighthouse to verify performance scores

## Next Steps After Deployment

Once the site is live:

1. ✅ Complete Task 17: Post-Deployment Configuration
   - Set up Zenodo DOI
   - Configure RSS feed
   - Set up Dependabot
2. Share the site URL with your community
3. Monitor for feedback and issues
4. Plan content updates and improvements

---

**Current Commit:** `401c711` - Initial deployment with complete MkDocs Material site
**Ready to Push:** Yes
**GitHub Actions:** Configured and ready
**Estimated Deployment Time:** 2-3 minutes after push
