# Deployment Checklist

Quick checklist for deploying the Structural Optimism site to GitHub Pages.

## Pre-Deployment

- [ ] All content files are in `docs/` directory
- [ ] `mkdocs.yml` is properly configured
- [ ] `requirements.txt` includes all dependencies
- [ ] Local build succeeds: `mkdocs build --strict`
- [ ] Local preview works: `mkdocs serve`
- [ ] All files committed to Git
- [ ] Repository pushed to GitHub

## GitHub Pages Configuration

- [ ] Repository is public (or you have GitHub Pro/Team/Enterprise)
- [ ] Navigate to **Settings** → **Pages**
- [ ] Set **Source** to **GitHub Actions**
- [ ] Verify **Actions** → **General** → **Workflow permissions** are set correctly
- [ ] Workflow file exists at `.github/workflows/deploy.yml`

## Initial Deployment

- [ ] Go to **Actions** tab
- [ ] Click **Deploy MkDocs to GitHub Pages** workflow
- [ ] Click **Run workflow** → Select **main** branch → **Run workflow**
- [ ] Wait for workflow to complete (both build and deploy jobs)
- [ ] Check for green checkmarks (success)

## Verification

- [ ] Go to **Settings** → **Pages** to find site URL
- [ ] Visit site URL: `https://[username].github.io/structural-optimism/`
- [ ] Verify home page loads
- [ ] Test navigation between levels
- [ ] Test search functionality
- [ ] Check mobile responsiveness
- [ ] Verify all internal links work
- [ ] Check external links (citations, DOIs)
- [ ] Test social media preview (share on Twitter/LinkedIn)

## Performance Testing

- [ ] Run Lighthouse audit (target: 90+ mobile)
- [ ] Check page load times (target: <3 seconds)
- [ ] Test on 3G connection (if possible)
- [ ] Verify images load properly
- [ ] Check for console errors (F12 Developer Tools)

## Accessibility Testing

- [ ] Run axe DevTools scan
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Test with screen reader (if available)
- [ ] Verify color contrast ratios
- [ ] Check alt text on images

## Custom Domain (Optional)

- [ ] Add custom domain in **Settings** → **Pages**
- [ ] Configure DNS records with domain registrar
- [ ] Wait for DNS propagation (up to 24 hours)
- [ ] Enable **Enforce HTTPS**
- [ ] Update `site_url` in `mkdocs.yml`
- [ ] Commit and push changes

## Post-Deployment

- [ ] Update README.md with live site URL
- [ ] Add site URL to repository description
- [ ] Share site with stakeholders
- [ ] Monitor GitHub Actions for future deployments
- [ ] Set up Dependabot for dependency updates (optional)
- [ ] Configure analytics (if desired, privacy-respecting only)

## Ongoing Maintenance

- [ ] Content updates automatically deploy on push to `main`
- [ ] Monitor workflow runs for failures
- [ ] Keep dependencies updated
- [ ] Review and respond to issues/PRs
- [ ] Update content based on new research

## Troubleshooting

If deployment fails:

1. Check **Actions** tab for error logs
2. Review **GITHUB-PAGES-SETUP.md** troubleshooting section
3. Verify all files are committed and pushed
4. Test local build with `mkdocs build --strict`
5. Check for broken links or missing files

## Quick Commands

```bash
# Local development
mkdocs serve

# Build with strict mode (catches errors)
mkdocs build --strict

# Clean build directory
rm -rf site/

# Install/update dependencies
pip install -r requirements.txt --upgrade
```

## Success Criteria

✅ Site is live and accessible  
✅ All pages load without errors  
✅ Navigation works correctly  
✅ Search functionality works  
✅ Mobile responsive  
✅ Lighthouse score 90+ on mobile  
✅ No broken links  
✅ Social media previews work  

---

**Status**: Once all items are checked, your site is successfully deployed! 🎉
