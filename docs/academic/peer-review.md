---
title: Peer Review Process
description: Double-blind peer review using Anonymous Github
tags:
  - peer-review
  - academic
  - anonymous
  - quality-control
last_updated: 2026-01-21
---

# Peer Review Process

**Maintaining academic rigor through anonymous, community-driven peer review.**

---

## Overview

The Structural Optimism framework uses **double-blind peer review** for major contributions, ensuring:
- Academic rigor
- Unbiased evaluation
- Protection for contributors
- Quality control
- Continuous improvement

**Tool:** [Anonymous Github](https://anonymous.4open.science/)  
**Process:** Double-blind (reviewers don't know authors, authors don't know reviewers)  
**Standards:** Academic peer review standards

---

## What Gets Peer Reviewed?

### Major Contributions (Peer Review Required)

**These require formal peer review:**

1. **New evidence claims** (★★★☆☆ or higher)
   - Meta-analyses
   - Systematic reviews
   - Large-scale studies
   - Cross-cultural replications

2. **Theoretical extensions**
   - New mechanisms
   - Framework modifications
   - Integration with other theories
   - Novel applications

3. **Critical challenges**
   - Contradictions to existing claims
   - Alternative explanations
   - Boundary conditions
   - Methodological critiques

4. **Methodological innovations**
   - New measurement approaches
   - Improved study designs
   - Statistical methods
   - Replication protocols

### Minor Contributions (Community Review)

**These use standard GitHub review:**

1. **Corrections** (typos, citation errors, clarifications)
2. **Translations** (language versions)
3. **Documentation improvements** (clarity, organization)
4. **Evidence updates** (new citations for existing claims)

**Community review is faster but less rigorous. Major claims need formal peer review.**

---

## The Peer Review Process

### Step 1: Submission

**Submit your contribution:**

1. **Fork the repository** on GitHub
2. **Make your changes** in a new branch
3. **Create pull request** with:
   - Clear title describing contribution
   - Detailed description of changes
   - Evidence and reasoning
   - Request for peer review: `@structural-optimism-bot request-review`

**Example PR description:**
```markdown
## Contribution Type
New evidence claim (★★★★☆)

## Summary
Meta-analysis of 50 studies (N=100,000) showing integration practices 
improve well-being across 12 cultures.

## Evidence
- Attached: meta-analysis.pdf
- Pre-registered: OSF.io/xxxxx
- Data: github.com/username/data

## Request
Requesting double-blind peer review via Anonymous Github.

@structural-optimism-bot request-review
```

### Step 2: Anonymous Github Setup

**We create anonymous repository:**

1. **Bot processes request** - Detects `request-review` tag
2. **Anonymous repo created** - Your contribution copied without identifying info
3. **Reviewers assigned** - 2-3 experts in relevant field
4. **You're notified** - Link to anonymous discussion thread

**What's anonymized:**
- Author names (removed from commits)
- Email addresses (stripped)
- GitHub usernames (hidden)
- Identifying details (redacted)

**What's preserved:**
- Contribution content
- Evidence and reasoning
- Discussion threads
- Review feedback

### Step 3: Review Process

**Reviewers evaluate your contribution:**

**Timeline:**
- **Week 1-2:** Reviewers read and analyze
- **Week 2-3:** Reviewers provide feedback
- **Week 3-4:** Author responds to feedback
- **Week 4+:** Iterate until resolution

**Reviewers assess:**
1. **Evidence quality** - Are sources reliable and peer-reviewed?
2. **Reasoning validity** - Is logic sound and coherent?
3. **Clarity** - Is it understandable and well-written?
4. **Originality** - Is it novel or redundant?
5. **Significance** - Does it matter? Does it advance the framework?
6. **Rigor** - Is methodology appropriate? Are limitations acknowledged?

**Possible outcomes:**
- **Accept** - Contribution is ready to merge
- **Minor revisions** - Small changes needed
- **Major revisions** - Significant changes required
- **Reject** - Contribution doesn't meet standards

### Step 4: Author Response

**You respond to reviewer feedback:**

1. **Read reviews carefully** - Understand concerns
2. **Revise your contribution** - Address feedback
3. **Explain changes** - Document what you changed and why
4. **Resubmit** - Update anonymous repository

**Example response:**
```markdown
## Response to Reviewer 1

**Concern:** Sample size insufficient for claimed effect.

**Response:** Agreed. I've revised the confidence rating from ★★★★☆ 
to ★★★☆☆ and added note about replication needs.

**Changes:** Lines 45-52 in evidence.md

---

## Response to Reviewer 2

**Concern:** Alternative explanation not addressed.

**Response:** Good point. I've added section discussing alternative 
explanation and why it's less parsimonious.

**Changes:** New section 3.2 in analysis.md
```

### Step 5: Iteration

**Process continues until:**
- All reviewers approve, OR
- Consensus is reached, OR
- Contribution is rejected

**Typical iterations:** 1-3 rounds  
**Total timeline:** 4-12 weeks

### Step 6: Integration

**Once approved:**

1. **Anonymous repo merged** - Changes integrated into main framework
2. **Attribution added** - You receive credit (if desired)
3. **Changelog updated** - Contribution documented
4. **Community notified** - Announcement of new content

**Your contribution is now part of the framework!**

---

## Review Criteria

### Evidence Quality (★ Rating System)

**Reviewers assess evidence using our confidence system:**

**★★★★★ Established**
- Multiple independent replications
- Large sample sizes (N > 1000)
- Peer-reviewed in top journals
- Consistent findings across studies
- Mechanistically understood

**★★★★☆ Strong**
- Replicated findings (2+ studies)
- Adequate sample sizes (N > 100)
- Peer-reviewed
- Mostly consistent findings
- Plausible mechanism

**★★★☆☆ Promising**
- Initial peer-reviewed findings
- Moderate sample size (N > 30)
- Awaiting replication
- Some inconsistencies
- Mechanism proposed

**★★☆☆☆ Preliminary**
- Single study or preprint
- Small sample size (N < 30)
- Not yet replicated
- Mechanism speculative
- Needs validation

**★☆☆☆☆ Theoretical**
- No direct empirical evidence
- Mathematically consistent
- Testable predictions
- Requires extraordinary evidence
- Highly speculative

**Reviewers verify:**
- Rating matches evidence strength
- Sources are properly cited
- Methodology is sound
- Limitations are acknowledged
- Claims are falsifiable

### Reasoning Validity

**Reviewers check for:**

**Logical fallacies:**
- Correlation ≠ causation
- Affirming the consequent
- False dichotomies
- Circular reasoning
- Ad hoc explanations

**Argument structure:**
- Premises clearly stated
- Inferences valid
- Conclusions follow logically
- Assumptions explicit
- Alternative explanations considered

**Integration:**
- Consistent with existing framework
- Contradictions addressed
- Implications explored
- Boundary conditions specified

### Clarity and Presentation

**Reviewers assess:**

**Writing quality:**
- Clear and concise
- Well-organized
- Appropriate level for audience
- Technical terms defined
- Examples provided

**Documentation:**
- Proper citations
- Complete references
- Figures and tables (if needed)
- Appendices (if needed)
- Supplementary materials

### Originality and Significance

**Reviewers evaluate:**

**Novelty:**
- Is this new information?
- Does it add to existing knowledge?
- Is it redundant with existing content?

**Impact:**
- Does this matter?
- Does it change our understanding?
- Does it enable new applications?
- Does it resolve contradictions?

**Scope:**
- Is it appropriately scoped?
- Is it too narrow or too broad?
- Does it fit the framework?

---

## Reviewer Guidelines

### Who Can Be a Reviewer?

**We need reviewers with:**
- Relevant expertise (PhD or equivalent experience)
- Familiarity with peer review process
- Commitment to constructive feedback
- Ability to meet deadlines (2-4 weeks)
- Willingness to maintain anonymity (if desired)

**Relevant fields:**
- Philosophy (especially philosophy of mind)
- Neuroscience (consciousness research)
- Psychology (social, positive, clinical)
- Physics (quantum mechanics, consciousness theories)
- Anthropology (cross-cultural studies)
- Statistics (meta-analysis, research methods)
- Interdisciplinary studies

### Reviewer Responsibilities

**Reviewers commit to:**

1. **Thorough evaluation** - Read carefully, assess rigorously
2. **Constructive feedback** - Help improve, not just criticize
3. **Timely response** - Complete review within 2-4 weeks
4. **Confidentiality** - Don't share under-review work
5. **Objectivity** - Evaluate ideas, not identity
6. **Professionalism** - Respectful, collegial tone
7. **Disclosure** - Report conflicts of interest

### Reviewer Compensation

**We do NOT provide:**
- Payment for reviews
- Academic credit
- Institutional recognition

**We DO provide:**
- Recognition in acknowledgments (if desired)
- Reviewer badge on profile (if desired)
- Contribution to open science
- Networking opportunities
- Intellectual engagement

**Reviewing is volunteer service to the community.**

### How to Become a Reviewer

**To volunteer:**

1. **Open GitHub issue** titled "Volunteer as Reviewer"
2. **Provide information:**
   - Areas of expertise
   - Relevant credentials (optional)
   - Preferred anonymity level
   - Availability (reviews per year)
3. **We'll add you** to reviewer pool
4. **You'll be contacted** when relevant contributions arrive

**Example:**
```markdown
## Volunteer as Reviewer

**Expertise:** Social psychology, meta-analysis, cross-cultural research

**Credentials:** PhD in Psychology, 15 years research experience 
(can provide privately if needed)

**Anonymity:** Prefer to remain anonymous

**Availability:** 2-3 reviews per year

**Interests:** Evidence for social connection, cross-cultural validation, 
methodological rigor
```

---

## Review Templates

### For Reviewers

**Review template:**

```markdown
## Summary
[Brief summary of contribution and your overall assessment]

## Major Comments

### Evidence Quality
[Assessment of sources, methodology, confidence rating]

### Reasoning Validity
[Assessment of logic, arguments, integration]

### Clarity
[Assessment of writing, organization, presentation]

### Originality and Significance
[Assessment of novelty and impact]

## Minor Comments
[Line-by-line feedback, typos, suggestions]

## Recommendation
- [ ] Accept
- [ ] Minor revisions needed
- [ ] Major revisions needed
- [ ] Reject

## Justification
[Explanation of recommendation]

## Suggestions for Improvement
[Specific, actionable suggestions]
```

### For Authors

**Response template:**

```markdown
## Response to Reviewers

### Reviewer 1

#### Comment 1: [Quote reviewer concern]
**Response:** [Your response]
**Changes:** [What you changed]
**Location:** [Where in document]

#### Comment 2: [Quote reviewer concern]
**Response:** [Your response]
**Changes:** [What you changed]
**Location:** [Where in document]

### Reviewer 2
[Same structure]

## Summary of Changes
[Overview of all revisions made]

## Remaining Disagreements
[If you disagree with reviewer, explain why]
```

---

## Conflict Resolution

### Disagreements Between Reviewers

**If reviewers disagree:**

1. **Third reviewer assigned** - Breaks tie
2. **Discussion facilitated** - Reviewers discuss (anonymously)
3. **Editor decision** - Final call by maintainers
4. **Transparency** - Reasoning documented

### Author-Reviewer Disagreements

**If author disagrees with reviewer:**

1. **Explain disagreement** - Provide reasoning
2. **Provide evidence** - Support your position
3. **Seek compromise** - Find middle ground
4. **Escalate if needed** - Request editor review

**Remember:** Reviewers are trying to help. Engage constructively.

### Appeals Process

**If contribution is rejected:**

1. **Request clarification** - Understand reasons
2. **Revise and resubmit** - Address concerns
3. **Request new reviewers** - If bias suspected
4. **Community discussion** - Open issue for community input

**Final decision:** Maintainers, based on evidence and community input

---

## Quality Control

### Reviewer Quality

**We monitor reviewers for:**
- Timeliness (meeting deadlines)
- Thoroughness (detailed feedback)
- Constructiveness (helpful suggestions)
- Professionalism (respectful tone)
- Accuracy (correct assessments)

**Poor reviewers are:**
- Provided feedback
- Given training
- Removed if necessary

### Review Quality

**We assess reviews for:**
- Depth of analysis
- Specificity of feedback
- Fairness of evaluation
- Helpfulness to author

**Reviews should be:**
- Detailed (not superficial)
- Specific (not vague)
- Fair (not biased)
- Helpful (not just critical)

---

## Anonymous Github Details

### How Anonymous Github Works

**Technical process:**

1. **Repository anonymization:**
   - Forks original repo
   - Strips all identifying information
   - Creates anonymous clone
   - Generates unique anonymous URL

2. **Discussion anonymization:**
   - All participants assigned pseudonyms
   - Comments stripped of metadata
   - Timestamps preserved
   - Content preserved

3. **De-anonymization (after acceptance):**
   - Original identities revealed (optional)
   - Contributions merged to main repo
   - Attribution added
   - Credit given

**Privacy guarantees:**
- No IP logging
- No metadata leakage
- No cross-referencing
- No identity inference

### Anonymous Github Resources

**Documentation:**
- [Anonymous Github Guide](https://anonymous.4open.science/)
- [Technical Documentation](https://github.com/tdurieux/anonymous_github)
- [FAQ](https://anonymous.4open.science/faq)

**Support:**
- [GitHub Issues](https://github.com/tdurieux/anonymous_github/issues)
- [Community Forum](https://anonymous.4open.science/forum)

---

## Questions?

**About the process:**

**Q: How long does peer review take?**  
A: Typically 4-12 weeks, depending on complexity and revisions needed.

**Q: Can I choose my reviewers?**  
A: No, reviewers are assigned based on expertise. You can request exclusions if there's a conflict.

**Q: What if reviewers disagree?**  
A: Third reviewer breaks tie, or editor makes final decision.

**Q: Can I appeal a rejection?**  
A: Yes, you can revise and resubmit, or request new reviewers.

**About anonymity:**

**Q: Is peer review always anonymous?**  
A: For major contributions, yes. Minor contributions use standard GitHub review.

**Q: Can I reveal my identity?**  
A: After acceptance, yes. During review, no.

**Q: Can reviewers reveal their identity?**  
A: After review is complete, yes. During review, no.

**Q: What if someone figures out my identity?**  
A: Report to maintainers. We'll investigate and take action if needed.

**About standards:**

**Q: What are the acceptance criteria?**  
A: Evidence quality, reasoning validity, clarity, originality, significance, rigor.

**Q: Can I submit work that's already published?**  
A: Yes, if you have rights to share it. Cite original publication.

**Q: What if my contribution is rejected?**  
A: Revise based on feedback and resubmit, or try a different approach.

**More questions?** Open an issue on GitHub or see [Academic Resources](index.md).

---

**Your ideas matter, not your identity.**  
**Rigorous review ensures quality.**  
**Anonymous process protects everyone.**

**Welcome to peer review at Structural Optimism.** 💚
