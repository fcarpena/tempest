# TEMPEST website

Website for **TEMPEST – Typhoon Effects on Enterprises in the Philippines**, served by GitHub Pages at <https://fcarpena.github.io/tempest/>.

The site is built with [Jekyll](https://jekyllrb.com/). GitHub rebuilds and publishes it automatically every time a change is pushed to `main`, usually within a minute or two.

## Where things are

| What | File |
|------|------|
| Home page | `index.md` |
| Project Summary | `project-summary.md` |
| Project Team | `_data/team.yml` (people) and `project-team.md` (section order) |
| News list | `project-updates.md` (generated automatically from `_posts/`) |
| News articles | `_posts/YYYY-MM-DD-slug.md` |
| Top menu | `_data/navigation.yml` |
| Images / PDFs | `assets/images/`, `assets/files/` |
| Header, footer, styling | `_includes/`, `_layouts/`, `assets/css/style.scss` |

## Adding a news item

1. Upload the photo to `assets/images/`. Keep it under about 1600 px wide.
2. Create `_posts/2026-11-15-my-news-title.md`. The date in the filename is the publication date, and the rest becomes the URL (`/tempest/my-news-title/`):

   ```markdown
   ---
   title: My News Title
   image: my-photo.jpg        # thumbnail on the News page (optional)
   byline: Jane Doe           # optional "By ..." line
   ---

   ![]({{ '/assets/images/my-photo.jpg' | relative_url }})

   {: .caption}
   Photo caption goes here.

   Article text in Markdown. [Links look like this](https://example.com).
   ```

3. Commit and push. You can do this directly on github.com with **Add file → Create new file** and **Add file → Upload files**.

## Adding a team member

Add an entry to the appropriate section in `_data/team.yml`, and put the photo, ideally square, in `assets/images/`.

## Previewing locally (optional)

```bash
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
# open http://localhost:4000/tempest/
```
