---
layout: page
title: Accessibility Statement
background: grey
permalink: /accessibility/
---

UCLA DataSquad is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards to this site.

### Conformance Status

The [UCLA DataSquad website](https://ucla-datasquad.github.io/) conforms to **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA**. Conformance is self-certified following a full audit completed in May 2026, conducted against the [UC IMT-1300 Information Technology Accessibility Policy](https://policy.ucop.edu/doc/7020587/IMT-1300). Automated testing was conducted with [Pa11y](https://pa11y.org/) (WCAG2AA) across all pages.

### Living Lab

This site also serves as a pedagogical resource for the DataSquad program — used to train UCLA students in digital accessibility best practices and data science communication. Accessibility improvements made here are documented as learning examples for the team.

### Feedback and Alternate Access

We welcome feedback on the accessibility of this site. If you experience barriers or require an Equally Effective Alternate Access Plan (EEAAP) for any content, please contact us:

- **Email:** [dsc@library.ucla.edu](mailto:dsc@library.ucla.edu)
- **Location:** UCLA Library Data Science Center, YRL Room 11630L
- **Response time:** We aim to respond within 2 business days.

If you are unable to access content on this site, we will work with you to provide the information in an alternate format at no cost.

### Assessment Approach

- Manual keyboard navigation and focus testing across all page types
- Automated scanning with Pa11y at WCAG2AA standard
- ARIA and semantic structure review
- Color contrast verification against WCAG 1.4.3 (AA)
- Review against UC IMT-1300 (ITAP) policy requirements

### Known Limitations

- Third-party booking widget (UCLA Library calendar) opens via external links not under DataSquad control. All links include "(opens in a new tab)" notices.
- Site uses Bootstrap 4 with a Jekyll theme. `:focus-visible` is used throughout and is supported in all maintained browsers as of 2026.

### Formal Complaints

If you are not satisfied with our response, you may contact the [UCLA Disabilities and Computing Program (DCP)](https://dcp.ucla.edu/) or file a complaint under the UC ITAP policy.

---

### Technical Audit Record

**Standard:** WCAG 2.1 Level AA | **Policy:** UC IMT-1300 | **Last audited:** 2026-05-01

All issues were identified through manual audit and pa11y automated scanning, tracked as GitHub issues #61–71, and resolved in May 2026.

#### Keyboard Navigation

| Issue | WCAG | Commit |
|---|---|---|
| No skip navigation link | 2.4.1 (A) | `577de25` |
| Portfolio grid: no focus indicator, hover overlay not keyboard-triggered | 2.1.1 (A), 2.4.7 (AA) | `0c4ebde` |
| Social buttons suppressed focus with `outline: none` | 2.4.7 (AA) | `66c3a6e` |
| Nav links had no `:focus-visible` rule | 2.4.7 (AA) | `034af32` |
| Blog title link focus outline was gold (1.46:1, fails) | 2.4.7 (AA) | `034af32` |
| Close modal button had no focus indicator | 2.4.7 (AA) | `034af32` |

#### Color Contrast

| Issue | WCAG | Commit |
|---|---|---|
| UCLA Gold as link/button text on white (1.46:1) — replaced with `#005587` (7.93:1) | 1.4.3 (AA) | `1632a1d` |
| `.btn-primary` gold background + white text (1.46:1) | 1.4.3 (AA) | `1632a1d` |
| Mobile navbar toggler: white on gold (1.46:1) | 1.4.3 (AA) | `1632a1d` |
| Social button hover: white on gold (1.46:1) | 1.4.3 (AA) | `66c3a6e` |
| Bootstrap `.text-muted` (#6c757d, 3.32:1) — overridden to `#595959` (7.0:1) | 1.4.3 (AA) | `01cff98` |
| Stale inline `<head>` style (#6b747c, 3.3:1) overriding correct fix | 1.4.3 (AA) | `c249e85` |

#### Headings and Structure

| Issue | WCAG | Commit |
|---|---|---|
| Homepage missing `<h1>` | 2.4.6 (AA), 1.3.1 (A) | `bbc5bbb` |
| Blog post title rendered as `<h2>` | 2.4.6 (AA) | `f6297f5` |
| Empty `<h3>` tags when data fields blank | 1.3.1 (A), 4.1.1 (A) | `7905ee8` |
| Duplicate `id="team"` on Hall of Fame section | 4.1.1 (A) | `7905ee8` |
| Deprecated `align` attributes across 6 posts | 1.3.1 (A) | `1b9d929` |

#### Images and Links

| Issue | WCAG | Commit |
|---|---|---|
| Generic `alt="Data Squad photo"` on blog images | 1.1.1 (A) | `e2b4cc4` |
| Generic link text ("here") in blog posts | 2.4.4 (A) | `e2b4cc4` |

#### ARIA and Modals

| Issue | WCAG | Commit |
|---|---|---|
| Portfolio modals missing `aria-labelledby` | 4.1.2 (A) | `0c4ebde` |
| Portfolio modals missing `aria-modal="true"` | 4.1.2 (A) | `bbc5bbb` |

#### Pa11y Results (post-remediation, local build)

| Page | Issues |
|---|---|
| Homepage | 0 |
| Blog index | 0 |
| All 8 blog posts | 0 each |
