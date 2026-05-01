# UCLA DataSquad Website

The source for [ucla-datasquad.github.io](https://ucla-datasquad.github.io), the website for the UCLA Library Data Science Center's DataSquad program.

DataSquad students own and maintain this site. That's intentional. Managing the site, writing about your work, and documenting project impact are part of what it means to be a DataSquad member.

---

## What's here

```
ucla-datasquad.github.io/
├── _posts/          # Blog posts — one per file, named YYYY-MM-DD-title.md
├── _portfolio/      # Project pages — one per client project
├── _data/           # Site text, navigation, and style settings
├── assets/          # Images and other static files
└── _config.yml      # Site-wide settings (title, email, etc.)
```

---

## Common tasks

### Add a blog post

Create a new file in `_posts/` named `YYYY-MM-DD-your-title.md`. Add this front matter at the top:

```yaml
---
layout: blogs
title: Your Post Title
author: Your Name
---
```

Then write your post in Markdown below the front matter. Push to `master` and GitHub Pages will build and publish it automatically.

### Add or update a project

Each project in the portfolio grid is a file in `_portfolio/`. Copy an existing one as a starting point. The front matter controls everything shown on the grid tile and project page:

```yaml
---
title: "Project Title"
image: assets/img/your-image.jpg
alt: image description

caption:
  title: "Short Title"
  subtitle: "Tools used"
  thumbnail: assets/img/your-image.jpg
---
```

Write the project description in Markdown below the front matter.

### Update site text or navigation

Most visible text (section headers, about blurb, team bios) lives in `_data/sitetext.yml`. Navigation is in `_data/navigation.yml`. Colors and background images are in `_data/style.yml`.

---

## Run locally

You need Ruby and Bundler installed.

```sh
git clone https://github.com/ucla-datasquad/ucla-datasquad.github.io.git
cd ucla-datasquad.github.io
bundle install
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000). Changes to most files reload automatically; changes to `_config.yml` require a server restart.

---

## Publishing

Push to `master`. GitHub Pages builds and deploys automatically. Changes are usually live within a minute or two.

---

## Questions

Reach out to DSC staff or open an issue on this repo.
