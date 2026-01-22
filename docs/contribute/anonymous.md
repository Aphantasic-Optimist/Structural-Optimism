---
title: Anonymous Contributions
description: Contribute without career risk using anonymous methods
tags:
  - anonymous
  - privacy
  - academic
---

# Anonymous Contributions

**Your ideas matter, not your identity.**

Academic researchers, industry professionals, and others can contribute to Structural Optimism without revealing their identity or risking their careers.

## Why Anonymous Contributions?

### Academic Freedom

- Explore controversial ideas without career risk
- Contribute outside your official research area
- Engage with interdisciplinary work
- Avoid institutional politics

### Professional Safety

- Industry researchers with NDAs
- Government employees with restrictions
- Professionals in conservative fields
- Anyone facing potential retaliation

### Personal Privacy

- Maintain separation between work and personal interests
- Avoid unwanted attention
- Protect against harassment
- Simply prefer privacy

## Anonymous Contribution Methods

### Method 1: gitGost (Recommended)

**gitGost** is an AGPL-3.0 licensed git proxy that enables anonymous pull requests.

#### How gitGost Works

1. You create commits locally (with your real identity)
2. gitGost strips identifying information
3. Commits are pushed anonymously
4. Your contributions appear as "Anonymous Contributor"
5. You maintain a secret key to prove authorship later (if desired)

#### Setting Up gitGost

**Installation:**

```bash
# Install gitGost
npm install -g gitgost

# Or use Docker
docker pull gitgost/gitgost
```

**Configuration:**

```bash
# Initialize gitGost for this repository
gitgost init

# Configure anonymous identity
gitgost config --anonymous-name "Anonymous Contributor"
gitgost config --anonymous-email "anonymous@structural-optimism.org"
```

**Making Anonymous Contributions:**

```bash
# 1. Fork the repository normally
# 2. Clone your fork
git clone https://github.com/your-username/structural-optimism.git

# 3. Make your changes
# 4. Commit with gitGost
gitgost commit -m "Add evidence for quantum coherence claim"

# 5. Push anonymously
gitgost push origin your-branch

# 6. Create pull request (appears as anonymous)
```

**Resources:**

- [gitGost Documentation](https://github.com/gitgost/gitgost)
- [gitGost Tutorial](https://gitgost.org/tutorial)
- [Anonymous Git Guide](https://gitgost.org/guide)

### Method 2: Anonymous Email

For simpler contributions:

1. Create anonymous email account (ProtonMail, Tutanota, etc.)
2. Email your contribution to: [anonymous-contributions@structural-optimism.org]
3. We'll post on your behalf
4. You can engage in discussion anonymously

**What to Include:**

- Type of contribution (evidence, correction, research request)
- Content (following relevant template)
- Preferred attribution (e.g., "Anonymous Researcher", "A.C.", or none)
- Whether you want to be notified of updates

### Method 3: Anonymous GitHub Account

Create a separate GitHub account:

1. Use anonymous email (ProtonMail, etc.)
2. Use VPN or Tor for additional privacy
3. Create GitHub account with pseudonym
4. Contribute normally through this account

**Privacy Tips:**

- Don't link to your real identity
- Use different writing style
- Avoid revealing identifying details
- Use VPN consistently

### Method 4: Intermediary Submission

Have someone else submit on your behalf:

1. Share your contribution with a trusted colleague
2. They submit using their identity
3. Attribution is to them (or anonymous)
4. You remain completely hidden

## What You Can Contribute Anonymously

### Everything

All contribution types support anonymity:

- ✅ Evidence submissions
- ✅ Research requests
- ✅ Corrections
- ✅ Translations
- ✅ Documentation improvements
- ✅ Code contributions
- ✅ Discussion participation

### With Full Rights

Anonymous contributors have:

- Same review process as identified contributors
- Equal consideration of contributions
- Recognition (if desired)
- Ability to engage in discussion
- Option to reveal identity later

## Anonymous Peer Review

### Anonymous Github

For academic peer review, we use **Anonymous Github**:

- Enables double-blind peer review
- Reviewers don't see author identities
- Authors don't see reviewer identities
- Maintains academic standards
- Preserves anonymity throughout

**How to Request Anonymous Review:**

1. Submit your contribution via gitGost
2. Request anonymous peer review in PR description
3. We'll set up Anonymous Github review
4. Reviewers provide feedback anonymously
5. You respond anonymously
6. Process continues until acceptance

**Resources:**

- [Anonymous Github](https://github.com/tdurieux/anonymous_github)
- [Double-Blind Review Guide](https://anonymous.4open.science/)

## Attribution Options

Choose your preferred attribution:

### No Attribution

- Contribution appears as "Anonymous Contributor"
- No record of your involvement
- Complete anonymity

### Pseudonymous Attribution

- Contribution credited to pseudonym
- Consistent identity across contributions
- Partial anonymity

### Delayed Attribution

- Anonymous initially
- Reveal identity later (using gitGost key)
- Useful for career-sensitive work

### Selective Attribution

- Anonymous in public
- Identified in academic citations
- Controlled disclosure

## Proving Authorship Later

If you use gitGost, you can prove authorship later:

```bash
# Generate proof of authorship
gitgost prove <commit-hash>

# This creates a cryptographic proof that you made the commit
# You can reveal this proof at any time
```

**Use Cases:**

- Tenure review (prove your contributions)
- Job applications (demonstrate expertise)
- Academic citations (claim credit)
- Personal satisfaction (reveal your work)

## Privacy and Security

### What We Track

- Contribution content (public)
- Timestamps (public)
- Discussion threads (public)

### What We Don't Track

- IP addresses (not logged)
- Email addresses (if using gitGost)
- Real identities (if anonymous)
- Metadata that could identify you

### Security Measures

- HTTPS everywhere
- No tracking cookies
- No analytics on contribution pages
- Encrypted email options
- VPN-friendly infrastructure

### Your Responsibilities

- Use VPN or Tor if needed
- Don't reveal identifying information
- Use separate email/account
- Be consistent with pseudonym
- Protect your gitGost keys

## Anonymous Contribution Guidelines

### Same Standards Apply

Anonymous contributions are held to:

- Same evidence standards
- Same review process
- Same quality expectations
- Same code of conduct

### Additional Considerations

**Do:**

- Provide clear, detailed contributions
- Respond to feedback promptly
- Maintain consistent pseudonym (if using one)
- Follow all contribution guidelines

**Don't:**

- Use anonymity to avoid accountability
- Submit low-quality work
- Engage in harassment
- Violate code of conduct

### Code of Conduct

Anonymous contributors must:

- Be respectful and constructive
- Engage in good faith
- Accept feedback gracefully
- Maintain professional standards

**Note**: Anonymity is not a shield for bad behavior. Violations may result in contributions being rejected or accounts being blocked.

## Examples of Anonymous Contributions

### Example 1: Anonymous Evidence Submission

> **Submitted by**: Anonymous Researcher (AR-2024-001)
>
> **Type**: Evidence submission
>
> **Content**: New meta-analysis on social connection and health outcomes
>
> **Attribution**: "Anonymous Researcher"
>
> **Status**: Accepted, integrated into Level 1

### Example 2: Anonymous Correction

> **Submitted by**: Anonymous Contributor
>
> **Type**: Correction
>
> **Content**: Citation error in quantum biology section
>
> **Attribution**: None requested
>
> **Status**: Accepted, corrected

### Example 3: Anonymous Research Request

> **Submitted by**: A.C.
>
> **Type**: Research request
>
> **Content**: Investigation of cross-cultural evidence for integration
>
> **Attribution**: "A.C."
>
> **Status**: In progress

## Recognition Without Identity

Anonymous contributors can be recognized through:

### Pseudonymous Credits

- "Anonymous Researcher (AR-2024-001)"
- "A.C."
- "Anonymous Contributor"
- Custom pseudonym

### Aggregate Recognition

- "15 anonymous contributors"
- "Anonymous community members"
- "Unnamed researchers"

### No Recognition

- Contribution included
- No attribution given
- Complete anonymity

## Academic Citations

### Citing Anonymous Contributions

When citing work with anonymous contributions:

**APA Format:**
```
Anonymous Contributor. (2024). Evidence for quantum coherence in biological systems. 
In Structural Optimism Framework. Retrieved from https://structural-optimism.org
```

**MLA Format:**
```
Anonymous Contributor. "Evidence for Quantum Coherence in Biological Systems." 
Structural Optimism Framework, 2024, structural-optimism.org.
```

### Revealing Authorship for Citations

If you need to claim credit later:

1. Use gitGost proof of authorship
2. Contact us with proof
3. We'll update attribution
4. You can cite under your real name

## Questions?

### About gitGost

- [gitGost Documentation](https://github.com/gitgost/gitgost)
- [gitGost FAQ](https://gitgost.org/faq)

### About Anonymous Github

- [Anonymous Github Guide](https://anonymous.4open.science/)
- [Double-Blind Review](https://github.com/tdurieux/anonymous_github)

### About Privacy

- Email: [anonymous-help@structural-optimism.org]
- [GitHub Discussions](https://github.com/[username]/structural-optimism/discussions) (use anonymous account)

---

**Your ideas matter, not your identity. We welcome your contributions, however you choose to share them.** 🔒✨

**Remember**: Anonymous contribution is not about hiding from accountability - it's about enabling honest intellectual exploration without career risk.
