# Contributing to Structural Optimism

Thank you for your interest in contributing to Structural Optimism! This project is built on the principle that **your ideas matter, not your identity**. We welcome contributions from everyone, whether you want to be credited or remain anonymous.

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Anonymous Contributions](#anonymous-contributions)
- [Direct GitHub Contributions](#direct-github-contributions)
- [Contribution Guidelines](#contribution-guidelines)
- [Translation Contributions](#translation-contributions)
- [Code of Conduct](#code-of-conduct)
- [Review Process](#review-process)
- [Academic Researchers](#academic-researchers)

---

## Ways to Contribute

You can contribute in several ways:

1. **Research Requests** - Suggest topics that need investigation
2. **Evidence Submissions** - Share peer-reviewed sources and data
3. **Corrections** - Propose fixes to errors or outdated information
4. **Translations** - Help make content accessible in other languages
5. **Documentation** - Improve guides and explanations
6. **Technical Improvements** - Enhance site functionality, accessibility, or performance

---

## Anonymous Contributions

**Your ideas matter, not your identity.**

We support anonymous contributions for those who:
- Fear professional repercussions
- Work in restrictive environments
- Prefer to focus on evidence over authority
- Want to contribute without creating a GitHub account

### Why Anonymous Contributions?

Anonymous contributions align with our core philosophy of **ME AND WE** - integration without uniformity. By removing identity from the equation, we:
- Reduce ego-driven contributions
- Focus purely on evidence quality
- Protect vulnerable contributors
- Encourage controversial but valid evidence
- Reduce unconscious bias in review

**Important**: Anonymous contributions receive the same rigorous verification as attributed ones.

### How to Contribute Anonymously with gitGost

**gitGost** is a git remote proxy that strips all identifying information from your commits and submits pull requests from a neutral bot account.

#### Step 1: Install Git (if not already installed)

**Windows**:
```bash
# Download from https://git-scm.com/download/win
# Or use winget:
winget install Git.Git
```

**macOS**:
```bash
brew install git
```

**Linux**:
```bash
sudo apt-get install git  # Debian/Ubuntu
sudo yum install git      # RedHat/CentOS
```

#### Step 2: Clone the Repository

```bash
git clone https://github.com/[username]/structural-optimism.git
cd structural-optimism
```

**Note**: Replace `[username]` with the actual repository owner's username.

#### Step 3: Add gitGost as a Remote

```bash
# Add gitGost remote (no account needed!)
git remote add gitmask https://gitmask.com/[username]/structural-optimism.git
```

#### Step 4: Make Your Changes

```bash
# Create a new branch for your contribution
git checkout -b my-anonymous-contribution

# Make your changes to files
# (edit Markdown files, add evidence, fix errors, etc.)

# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Add evidence for social connection mortality study"
```

#### Step 5: Push Anonymously

```bash
# Push to gitGost (this strips all your identifying information)
git push gitmask my-anonymous-contribution
```

#### Step 6: gitGost Creates the Pull Request

gitGost will automatically:
- Remove your name, email, and timestamp from commits
- Create a pull request from a neutral bot account
- Preserve your contribution content and commit message

#### Step 7: Track Your Contribution

After pushing, gitGost will provide a link to the created pull request. You can:
- Monitor the PR status
- Respond to review comments (anonymously)
- See when your contribution is merged

### What Gets Anonymized?

gitGost removes:
- ✅ Author name
- ✅ Author email
- ✅ Committer name
- ✅ Committer email
- ✅ Commit timestamps
- ✅ Any identifying information in commit metadata

gitGost preserves:
- ✅ Your contribution content
- ✅ Your commit messages
- ✅ File changes and diffs

### Verification Process

Anonymous contributions go through the same verification process:

1. **Automated Checks**: Link validation, build verification, linting
2. **Content Review**: Evidence verification, accuracy check
3. **Community Review**: Other contributors can review and comment
4. **Maintainer Approval**: Final approval from project maintainers
5. **Merge**: Contribution is merged and credited to "Anonymous Contributor"

**Your contribution is judged on merit, not on who you are.**

---

## Direct GitHub Contributions

**For those comfortable with GitHub.**

### Fork and Pull Request Workflow

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/structural-optimism.git
   cd structural-optimism
   ```
3. **Create a branch**:
   ```bash
   git checkout -b feature/my-contribution
   ```
4. **Make your changes**
5. **Test locally**:
   ```bash
   mkdocs serve
   ```
6. **Commit**:
   ```bash
   git add .
   git commit -m "Descriptive message"
   ```
7. **Push**:
   ```bash
   git push origin feature/my-contribution
   ```
8. **Create Pull Request** on GitHub

### Issue Creation

You can also create issues directly:

1. Go to [Issues](https://github.com/[username]/structural-optimism/issues)
2. Click "New Issue"
3. Choose template:
   - Research Request
   - Evidence Submission
   - Correction Proposal
   - Bug Report
   - Feature Request
4. Fill in template
5. Submit

---

## Contribution Guidelines

### Evidence Standards

All evidence submissions must meet these criteria:

1. **Peer-Reviewed**: Published in peer-reviewed journals (or preprints with clear labeling)
2. **Primary Sources**: Link to original research, not secondary summaries
3. **Proper Citation**: Include full citation with DOI when available
4. **Confidence Rating**: Use ★ system (see below)
5. **Replication Status**: Note if findings have been replicated

### Confidence Rating System

Use this system to rate evidence:

| Rating | Meaning | Criteria |
|--------|---------|----------|
| ★★★★★ | Established | Multiple independent replications, peer-reviewed, consistent findings |
| ★★★★☆ | Strong | Replicated findings, peer-reviewed, minor inconsistencies |
| ★★★☆☆ | Promising | Initial peer-reviewed findings, awaiting replication |
| ★★☆☆☆ | Preliminary | Single study or preprint, mechanism speculative |
| ★☆☆☆☆ | Speculative | No direct experimental evidence, theoretical only |

### Writing Style

- **Clear and Concise**: Use simple language when possible
- **Evidence-Based**: Every claim needs a source
- **Neutral Tone**: Avoid emotional or promotional language
- **Accessible**: Explain technical terms
- **Structured**: Use headings, lists, and formatting

### File Naming

- Use kebab-case: `my-new-document.md`
- Be descriptive: `social-connection-mortality-evidence.md`
- Avoid special characters

### Markdown Formatting

Use standard Markdown with MkDocs Material extensions:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet list
- Item 2

1. Numbered list
2. Item 2

[Link text](https://example.com)

> Blockquote

`inline code`

\`\`\`python
code block
\`\`\`
```

### Evidence Admonitions

Use admonitions for evidence ratings:

```markdown
!!! success "Established Evidence (★★★★★)"
    Social connection reduces mortality risk by 50% (Wang et al. 2023, 2.2M people studied)
    
    **Source**: [Wang et al. 2023, Nature Human Behaviour](https://doi.org/...)

!!! info "Supported Evidence (★★★★☆)"
    Romantic love found in 166 cultures (Jankowiak & Fischer 1992)
    
    **Source**: [Jankowiak & Fischer 1992](https://doi.org/...)

!!! warning "Preliminary Evidence (★★☆☆☆)"
    Further research needed to confirm mechanism
```

---

## Translation Contributions

We welcome translations to make Structural Optimism accessible worldwide!

### How to Translate

1. **Choose a document** to translate
2. **Create a new file** with language code: `document-name.es.md` (Spanish), `document-name.fr.md` (French), etc.
3. **Translate content** while preserving:
   - Markdown formatting
   - Links to sources
   - Evidence ratings
   - Technical accuracy
4. **Submit** via pull request

### Translation Guidelines

- **Accuracy over fluency**: Preserve technical meaning
- **Cite sources**: Keep original citations, add translated titles in brackets
- **Cultural adaptation**: Adapt examples for local context when appropriate
- **Consistency**: Use consistent terminology throughout

---

## Code of Conduct

### Our Standards

- **Respectful**: Treat all contributors with respect
- **Constructive**: Provide helpful, actionable feedback
- **Evidence-based**: Focus on facts and sources
- **Inclusive**: Welcome diverse perspectives
- **Compassionate**: Remember we're all learning

### Unacceptable Behavior

- Personal attacks or harassment
- Dismissing evidence without counter-evidence
- Bad faith arguments or trolling
- Sharing private information without consent

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for full details.

---

## Review Process

### What Happens After You Contribute?

1. **Automated Checks** (immediate):
   - Link validation
   - Build verification
   - Linting

2. **Content Review** (1-7 days):
   - Evidence verification
   - Accuracy check
   - Other contributors can comment

3. **Maintainer Review** (1-14 days):
   - Final verification of sources
   - Integration with existing content
   - Approval or request for changes

4. **Merge** (immediate after approval):
   - Contribution is merged
   - Website automatically rebuilds
   - Changes live in 2-3 minutes

### Timeline

- **Simple corrections**: 1-3 days
- **Evidence submissions**: 3-7 days
- **Research requests**: 7-14 days (depends on complexity)
- **Major contributions**: 14-30 days

---

## Academic Researchers

### Citing This Work

This repository has a DOI via Zenodo for proper academic citation:

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)

**Note**: Replace XXXXXXX with actual DOI after enabling Zenodo GitHub integration.

**APA Format**:
```
Structural Optimist. (2026). Structural Optimism: An Evidence-Based Philosophical Framework. 
Zenodo. https://doi.org/10.5281/zenodo.XXXXXXX
```

**BibTeX**:
```bibtex
@software{structural_optimism_2026,
  author = {Structural Optimist},
  title = {Structural Optimism: An Evidence-Based Philosophical Framework},
  year = {2026},
  publisher = {Zenodo},
  doi = {10.5281/zenodo.XXXXXXX},
  url = {https://doi.org/10.5281/zenodo.XXXXXXX}
}
```

### Double-Blind Peer Review

For double-blind peer review, use [Anonymous Github](https://anonymous.4open.science/):

1. Visit https://anonymous.4open.science/
2. Enter repository URL
3. Get anonymized version for review
4. Share anonymized link with reviewers

### Preprints

We host preprints on:
- **arXiv**: [link to be added]
- **PhilPapers**: [link to be added]
- **OSF**: [link to be added]

---

## Questions?

- **General questions**: Open a [Discussion](https://github.com/[username]/structural-optimism/discussions)
- **Bug reports**: Open an [Issue](https://github.com/[username]/structural-optimism/issues) with `bug` label
- **Feature requests**: Open an [Issue](https://github.com/[username]/structural-optimism/issues) with `enhancement` label
- **Research requests**: Open an [Issue](https://github.com/[username]/structural-optimism/issues) with `research-request` label

---

## Thank You!

Your contributions help build an evidence-based understanding of reality's structure. Whether you contribute openly or anonymously, your ideas matter.

**Remember**: Integration without uniformity. ME AND WE. Your voice is valuable.

---

**Everyone lives happily ever after.** ✨

---

*This project is licensed under MIT License (code) and Creative Commons Attribution 4.0 International (content). By contributing, you agree that your contributions will be licensed under the same licenses.*

*For anonymous contributions via gitGost, your identity is never revealed, but your contribution is still licensed under the project licenses.*
