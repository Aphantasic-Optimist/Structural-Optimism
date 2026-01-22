---
title: Accessibility Guidelines
description: How to ensure your contributions are accessible to all users
---

# Accessibility Guidelines for Contributors

When contributing content to Structural Optimism, please follow these accessibility guidelines to ensure the site remains usable by everyone, including people with disabilities.

---

## Why Accessibility Matters

**Accessibility is not optional—it's essential.**

- **15% of the world's population** has some form of disability
- **Accessible design benefits everyone** (mobile users, older adults, people in noisy environments)
- **It's the right thing to do** - knowledge should be available to all

Our goal: **WCAG 2.1 AA compliance** (Web Content Accessibility Guidelines)

---

## Quick Checklist

Before submitting content, verify:

- [ ] All images have descriptive alt text
- [ ] Headings follow proper hierarchy (h1 → h2 → h3)
- [ ] Links have descriptive text (not "click here")
- [ ] Color is not the only way to convey information
- [ ] Text has sufficient contrast with background
- [ ] Content is readable without CSS
- [ ] Tables have proper headers
- [ ] Lists use proper markup

---

## Images and Alt Text

### Rule: Every Image Needs Alt Text

**Good alt text:**
```markdown
![Graph showing social connection reduces mortality risk by 32%](mortality-graph.png)
```

**Bad alt text:**
```markdown
![graph](mortality-graph.png)
![](mortality-graph.png)  <!-- Missing alt text -->
```

### When to Use Empty Alt Text

For **purely decorative** images, use empty alt text:

```markdown
![](decorative-border.png)
```

Or in HTML:
```html
<img src="decorative-border.png" alt="" role="presentation">
```

### Alt Text Guidelines

**DO:**
- Describe the content and function
- Be concise (< 150 characters)
- Convey the same information as the image
- Use proper punctuation

**DON'T:**
- Start with "Image of..." (screen readers announce it's an image)
- Include "graphic" or "picture" (redundant)
- Describe decorative elements
- Use alt text for text that's already on the page

### Examples

**Informative image:**
```markdown
![Bar chart comparing optimism levels across 5 countries, showing highest in Denmark](optimism-chart.png)
```

**Functional image (button):**
```markdown
![Download PDF](download-icon.png)
```

**Complex diagram:**
```markdown
![L0-L5 consciousness framework showing 6 layers from quantum to experiential](framework-diagram.png)

The diagram shows six layers:
1. L0: Zero-point field (quantum substrate)
2. L0.5: Quantum-classical interface
3. L1: Biological transduction
... (detailed description in text)
```

---

## Headings

### Rule: Use Proper Heading Hierarchy

**Good hierarchy:**
```markdown
# Page Title (h1)

## Main Section (h2)

### Subsection (h3)

#### Detail (h4)

## Another Main Section (h2)
```

**Bad hierarchy:**
```markdown
# Page Title (h1)

### Subsection (h3)  <!-- Skipped h2! -->

## Main Section (h2)  <!-- Out of order! -->
```

### Guidelines

- **One h1 per page** (the page title)
- **Don't skip levels** (h1 → h2 → h3, not h1 → h3)
- **Use headings for structure**, not just styling
- **Make headings descriptive** ("Evidence Summary" not "Section 2")

---

## Links

### Rule: Links Must Be Descriptive

**Good links:**
```markdown
Read the [complete philosophical proof](../level5/full-proof.md)

[Wang et al. 2023 study on social connection and mortality](https://doi.org/...)
```

**Bad links:**
```markdown
Click [here](../level5/full-proof.md) to read more

For more information, see [this link](https://doi.org/...)
```

### Guidelines

- Link text should make sense out of context
- Avoid "click here", "read more", "this link"
- Describe the destination
- Keep link text concise but meaningful

---

## Color and Contrast

### Rule: Don't Rely on Color Alone

**Good:**
```markdown
!!! success "Established Evidence (★★★★★)"
    This claim is supported by multiple peer-reviewed studies.
```
(Uses icon, text, and color)

**Bad:**
```markdown
<span style="color: green;">This claim is established.</span>
```
(Color only - not accessible to colorblind users)

### Contrast Requirements

- **Normal text:** 4.5:1 contrast ratio minimum
- **Large text (18pt+):** 3:1 contrast ratio minimum
- **UI components:** 3:1 contrast ratio minimum

Our Material theme provides good contrast by default. If you add custom colors, check contrast with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

---

## Tables

### Rule: Tables Need Headers

**Good table:**
```markdown
| Study | Sample Size | Finding | Confidence |
|-------|-------------|---------|------------|
| Wang et al. 2023 | 2.2M | Social connection reduces mortality | ★★★★★ |
| Smith et al. 2022 | 50K | Loneliness increases risk | ★★★★☆ |
```

**Bad table:**
```markdown
| Wang et al. 2023 | 2.2M | Social connection reduces mortality | ★★★★★ |
| Smith et al. 2022 | 50K | Loneliness increases risk | ★★★★☆ |
```
(No headers - screen readers can't navigate)

### Guidelines

- Always include header row
- Use `|---|` to separate headers from data
- Keep tables simple (complex tables are hard to navigate)
- Consider using lists for simple data

---

## Lists

### Rule: Use Proper List Markup

**Good lists:**
```markdown
Unordered list:
- Item 1
- Item 2
- Item 3

Ordered list:
1. First step
2. Second step
3. Third step
```

**Bad lists:**
```markdown
- Item 1
- Item 2
- Item 3
```
(Using hyphens for visual effect only)

### Guidelines

- Use `-` or `*` for unordered lists
- Use `1.` for ordered lists
- Nest lists properly with indentation
- Don't use lists for non-list content

---

## Admonitions (Callout Boxes)

### Rule: Use Semantic Admonition Types

**Good admonitions:**
```markdown
!!! success "Established Evidence (★★★★★)"
    Multiple peer-reviewed studies confirm this finding.

!!! warning "Preliminary Evidence (★★☆☆☆)"
    This claim needs more research.

!!! info "Note"
    This is additional context.
```

**Bad admonitions:**
```markdown
!!! note "IMPORTANT!!!"
    This is really important!
```
(Using wrong type, excessive punctuation)

### Available Types

- `success` - Positive, established findings
- `info` - Neutral information, notes
- `warning` - Cautions, preliminary findings
- `danger` - Critical warnings, safety information
- `tip` - Helpful suggestions
- `question` - Questions, uncertainties

---

## Forms (When Implemented)

### Rule: Label All Form Fields

**Good form:**
```html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email" required>
```

**Bad form:**
```html
<input type="email" placeholder="Email">
```
(No label - screen readers can't identify field)

### Guidelines

- Use `<label>` elements
- Associate labels with inputs (for/id)
- Mark required fields clearly
- Provide helpful error messages
- Use appropriate input types

---

## Keyboard Navigation

### Rule: All Functionality Must Work with Keyboard

**Test your content:**
1. Use only Tab, Shift+Tab, Enter, Esc
2. Verify all interactive elements are reachable
3. Check focus indicators are visible
4. Ensure no keyboard traps

### Guidelines

- Don't use `tabindex` > 0 (breaks natural tab order)
- Ensure custom interactive elements are keyboard accessible
- Provide keyboard shortcuts where helpful
- Test with keyboard only (no mouse)

---

## Writing for Accessibility

### Use Clear, Simple Language

**Good:**
```markdown
Social connection reduces death risk by 32%.
```

**Bad:**
```markdown
The ameliorative effects of interpersonal connectivity on mortality outcomes demonstrate a 32% reduction in risk factors.
```

### Guidelines

- Use short sentences
- Avoid jargon (or explain it)
- Use active voice
- Break up long paragraphs
- Use headings to organize content

---

## Testing Your Contributions

### Before Submitting

1. **Run automated tests:**
   - Lighthouse (Chrome DevTools)
   - axe DevTools (browser extension)
   - WAVE (browser extension)

2. **Test manually:**
   - Navigate with keyboard only
   - Test with screen reader (NVDA, VoiceOver)
   - Check color contrast
   - Verify heading hierarchy

3. **Ask yourself:**
   - Can I understand this without images?
   - Can I navigate this with keyboard only?
   - Is the structure clear from headings?
   - Are all links descriptive?

---

## Resources

### Testing Tools

- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (Built into Chrome)
- [axe DevTools](https://www.deque.com/axe/devtools/) (Browser extension)
- [WAVE](https://wave.webaim.org/extension/) (Browser extension)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Screen Readers

- [NVDA](https://www.nvaccess.org/) (Windows, Free)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/) (Windows, Paid)
- VoiceOver (Mac, Built-in - Cmd+F5)

### Guidelines

- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Articles](https://webaim.org/articles/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [Material Design Accessibility](https://material.io/design/usability/accessibility.html)

---

## Questions?

If you're unsure about accessibility for your contribution:

1. Check this guide
2. Review existing accessible content
3. Ask in your pull request
4. Test with automated tools

**When in doubt, ask!** We're happy to help make your contribution accessible.

---

## Summary

**Accessibility is about inclusion.**

By following these guidelines, you ensure that Structural Optimism is available to everyone, regardless of ability. This aligns with our core principle: **integration without exclusion**.

Thank you for making the web more accessible! ✨

---

**See also:**
- [Contributing Guide](index.md)
- [Accessibility Report](../../ACCESSIBILITY-REPORT.md)
