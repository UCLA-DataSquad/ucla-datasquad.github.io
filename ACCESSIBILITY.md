# Accessibility Conformance

**Standard:** WCAG 2.1 Level AA  
**Policy:** UC IMT-1300 Information Technology Accessibility  
**Status:** Conformant  
**Last audited:** 2026-05-01  
**Audited by:** UCLA Library Data Science Center

## Conformance Badge

This site displays the W3C WCAG 2.1 AA conformance badge in the footer. Conformance is self-certified following manual audit and automated testing with pa11y (WCAG2AA standard) across all pages.

## Remediation History

All issues were identified through manual audit and pa11y automated scanning, tracked as GitHub issues #61–71, and resolved in May 2026.

### Keyboard Navigation

| Issue | Fix | Commit | WCAG |
|---|---|---|---|
| No skip navigation link | Added visually-hidden skip link as first focusable element; target is `<main id="main-content">` | `577de25` | 2.4.1 (A) |
| Portfolio grid links had no visible focus indicator | Added `:focus-visible` outline; focus also triggers hover overlay | `0c4ebde` | 2.1.1 (A), 2.4.7 (AA) |
| Social buttons suppressed focus with `outline: none` | Removed suppression; added `:focus-visible` ring in Darker Blue | `66c3a6e` | 2.4.7 (AA) |
| Nav links had no focus indicator | Added white `:focus-visible` outline (16:1 on dark background) | `034af32` | 2.4.7 (AA) |
| Blog title link focus outline used gold (1.46:1, fails) | Changed to Darker Blue `#005587` | `034af32` | 2.4.7 (AA) |
| Close modal button had no focus indicator | Added `:focus-visible` outline | `034af32` | 2.4.7 (AA) |

### Color Contrast

| Issue | Fix | Commit | WCAG |
|---|---|---|---|
| UCLA Gold (`#FFD100`) used as link/button text on white (1.46:1) | Replaced with UCLA Darker Blue `#005587` (7.93:1) in global link styles | `1632a1d` | 1.4.3 (AA) |
| `.btn-primary` gold background with white text (1.46:1) | Changed to `#005587` background; white text is 7.93:1 | `1632a1d` | 1.4.3 (AA) |
| Mobile navbar toggler: white on gold (1.46:1) | Changed toggler background to `#005587` | `1632a1d` | 1.4.3 (AA) |
| Social button hover: white icon on gold (1.46:1) | Changed hover background to `#005587` | `66c3a6e` | 1.4.3 (AA) |
| Bootstrap `.text-muted` (`#6c757d`, 3.32:1) fails on white | Overridden globally to `#595959` (7.0:1) | `01cff98` | 1.4.3 (AA) |
| Blog post metadata used `$gray-600` directly (2.79:1) | Changed to `#595959` | `01cff98` | 1.4.3 (AA) |
| Stale inline style in `<head>` using `#6b747c` (3.3:1) overriding correct fix | Removed | `c249e85` | 1.4.3 (AA) |

### Headings and Structure

| Issue | Fix | Commit | WCAG |
|---|---|---|---|
| Homepage missing `<h1>` | Added visible `<h1>` to masthead (dropped `markdownify` to prevent `<p>` wrapping) | `bbc5bbb` | 2.4.6 (AA), 1.3.1 (A) |
| Blog post title rendered as `<h2>` | Promoted to `<h1>` in blogs layout | `f6297f5` | 2.4.6 (AA) |
| Empty `<h3>` tags when data fields are blank | Added Liquid conditionals in team/staff/hof includes | `7905ee8` | 1.3.1 (A), 4.1.1 (A) |
| Duplicate `id="team"` on Hall of Fame section | Changed to `id="hof"` | `7905ee8` | 4.1.1 (A) |
| Deprecated `align` attributes on images and paragraphs across 6 posts | Replaced with CSS `float` and Bootstrap `text-center` | `1b9d929` | 1.3.1 (A) |

### Images and Media

| Issue | Fix | Commit | WCAG |
|---|---|---|---|
| Blog post images with generic `alt="Data Squad photo"` | Replaced with descriptive captions per image | `e2b4cc4` | 1.1.1 (A) |
| External links using `class="visually-hidden"` (Bootstrap 5 naming, not active on Bootstrap 4) | Changed to `sr-only` | `bbc5bbb` | — |

### Links

| Issue | Fix | Commit | WCAG |
|---|---|---|---|
| Generic link text ("here", "Hours here") in blog posts | Replaced with destination-describing text | `e2b4cc4` | 2.4.4 (A) |

### ARIA and Modals

| Issue | Fix | Commit | WCAG |
|---|---|---|---|
| Portfolio modals missing `aria-labelledby` | Added to both modal loops with unique IDs per `forloop.index` | `0c4ebde` | 4.1.2 (A) |
| Portfolio modals missing `aria-modal="true"` | Added to both modal loops | `bbc5bbb` | 4.1.2 (A) |

## Testing

Automated scans run with [pa11y](https://pa11y.org/) at WCAG2AA standard against a local Jekyll build. Results at time of certification:

| Page | Issues |
|---|---|
| Homepage | 0 |
| Blog index | 0 |
| All 8 blog posts | 0 each |

## Known Limitations

- Third-party booking widget (UCLA Library calendar) opened via external links — not under DataSquad control; links include `(opens in a new tab)` notices
- Site uses Bootstrap 4 with Jekyll Agency theme — `:focus-visible` is used throughout; supported in all maintained browsers as of 2026

## Contact

To report an accessibility issue with this site, contact the UCLA Library Data Science Center at [dsc@library.ucla.edu](mailto:dsc@library.ucla.edu) or open an issue at [github.com/UCLA-DataSquad/ucla-datasquad.github.io](https://github.com/UCLA-DataSquad/ucla-datasquad.github.io/issues).
