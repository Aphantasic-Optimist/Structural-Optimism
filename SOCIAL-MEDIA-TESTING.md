# Social Media Integration Testing Guide

## Overview

The Structural Optimism site now includes social media integration with automatic social card generation for sharing on platforms like Twitter, Facebook, LinkedIn, and Mastodon.

## Features Implemented

### 1. Social Plugin Configuration
- **Automatic social card generation** for all pages
- **Custom branding** with indigo color scheme
- **1200x630px images** optimized for all platforms

### 2. Open Graph Metadata
- Automatic generation of Open Graph tags for Facebook, LinkedIn
- Custom image, title, and description for each page
- Proper URL canonicalization

### 3. Twitter Card Metadata
- Summary large image cards for rich Twitter previews
- Custom Twitter handle integration
- Optimized image dimensions

### 4. Social Media Links
- GitHub repository link
- Twitter/X profile link
- Mastodon profile link

## Testing Social Cards

### Local Testing

1. **Build the site with social cards:**
   ```bash
   mkdocs build
   ```

2. **Check generated social cards:**
   - Social cards are generated in `.cache/plugin/social/`
   - Each page gets its own social card image
   - Images are 1200x630px PNG files

3. **Serve locally to preview:**
   ```bash
   mkdocs serve
   ```

### Testing Social Card Appearance

#### Option 1: Social Media Debuggers (Recommended)

**Twitter Card Validator:**
- URL: https://cards-dev.twitter.com/validator
- Enter your page URL
- Preview how the card will appear on Twitter

**Facebook Sharing Debugger:**
- URL: https://developers.facebook.com/tools/debug/
- Enter your page URL
- Preview Open Graph tags and image

**LinkedIn Post Inspector:**
- URL: https://www.linkedin.com/post-inspector/
- Enter your page URL
- Preview how the card will appear on LinkedIn

#### Option 2: Meta Tag Inspector

Use browser developer tools to inspect the generated meta tags:

```html
<!-- Open Graph tags -->
<meta property="og:type" content="website">
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page Description">
<meta property="og:image" content="https://.../.cache/plugin/social/...png">
<meta property="og:url" content="https://...">

<!-- Twitter Card tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page Description">
<meta name="twitter:image" content="https://.../.cache/plugin/social/...png">
```

### Testing Social Links

1. **Verify social links in footer:**
   - GitHub icon should link to repository
   - Twitter icon should link to Twitter profile
   - Mastodon icon should link to Mastodon profile

2. **Test link functionality:**
   - Click each social icon
   - Verify correct destination
   - Check that links open in new tab (if configured)

## Customization

### Updating Social Media Handles

Edit `mkdocs.yml` to update social media links:

```yaml
extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/YOUR_USERNAME/structural-optimism
      name: GitHub Repository
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/YOUR_HANDLE
      name: Twitter/X
```

### Customizing Social Card Design

Edit the social plugin configuration in `mkdocs.yml`:

```yaml
plugins:
  - social:
      cards: true
      cards_layout_options:
        background_color: "#3f51b5"  # Change color
        color: "#ffffff"              # Change text color
```

### Adding Custom Social Card Image

To use a custom image instead of auto-generated cards:

1. Create image at `docs/assets/images/social-card.png` (1200x630px)
2. Update `mkdocs.yml`:
   ```yaml
   extra:
     og_image: assets/images/social-card.png
   ```

## Troubleshooting

### Social cards not generating

**Issue:** No images in `.cache/plugin/social/`

**Solutions:**
1. Ensure `mkdocs-material[imaging]` is installed:
   ```bash
   pip install mkdocs-material[imaging]
   ```

2. Ensure Pillow and CairoSVG are installed:
   ```bash
   pip install pillow cairosvg
   ```

3. **Windows-specific issue:** CairoSVG requires Cairo library which is difficult to install on Windows
   - Social cards will still work when deployed to GitHub Actions (Linux environment)
   - For local testing on Windows, you can:
     - Use WSL (Windows Subsystem for Linux)
     - Test on the deployed site instead
     - Or skip social card generation locally (metadata will still be correct)

4. Check for build errors:
   ```bash
   mkdocs build --verbose
   ```

### Social cards not showing in validators

**Issue:** Validators show no image or wrong image

**Solutions:**
1. Ensure site is deployed and publicly accessible
2. Check that `.cache/plugin/social/` is included in deployment
3. Verify image URLs are absolute (not relative)
4. Clear validator cache and re-test

### Social links not appearing

**Issue:** Footer doesn't show social icons

**Solutions:**
1. Verify `extra.social` is configured in `mkdocs.yml`
2. Check that FontAwesome icons are loading
3. Inspect browser console for errors

## Best Practices

### Social Card Content

- **Keep titles short:** 60 characters or less
- **Descriptive descriptions:** 150-200 characters
- **High contrast:** Ensure text is readable on background
- **Consistent branding:** Use same color scheme across all cards

### Testing Workflow

1. **Local testing:** Build and check `.cache/plugin/social/`
2. **Deploy to staging:** Test with social media validators
3. **Share test post:** Verify appearance on actual platforms
4. **Monitor analytics:** Track social media referrals

### Performance

- Social cards are generated at build time (not runtime)
- Images are cached for fast subsequent builds
- No impact on page load performance

## Resources

- [MkDocs Material Social Cards Documentation](https://squidfunk.github.io/mkdocs-material/setup/setting-up-social-cards/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/best-practices)

## Next Steps

After testing social media integration:

1. ✅ Verify social cards generate correctly
2. ✅ Test with social media validators
3. ✅ Update social media handles to actual accounts
4. ✅ Share test posts on platforms
5. ✅ Monitor engagement and adjust as needed

---

*Social media integration complete! Share the optimism.* ✨
