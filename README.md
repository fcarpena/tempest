# TEMPEST website

Website for **TEMPEST – Typhoon Effects on Enterprises in the Philippines**, served by GitHub Pages at <https://fcarpena.github.io/tempest/>.

The site is built with [Jekyll](https://jekyllrb.com/). GitHub rebuilds and publishes it automatically every time a change is pushed to `main`, usually within a minute or two.

## Where things are

| What | File |
|------|------|
| Home page | `index.md` |
| About | `about.md` |
| Team | `_data/team.yml` (people) and `team.md` (section order) |
| News list | `news.md` (generated automatically from `_posts/`) |
| News articles | `_posts/YYYY-MM-DD-slug.md` |
| Top menu | `_data/navigation.yml` |
| Images / PDFs | `assets/images/`, `assets/files/` (news files start with the date, e.g. `2025-12-19-psa-meeting.jpg`; team photos start with `team-`) |
| Header, footer, styling | `_includes/`, `_layouts/`, `assets/css/style.scss` |

## Adding a news item

1. Upload the photo to `assets/images/`, named with the article's date first, e.g. `2026-11-15-short-description.jpg`. Keep it under about 1600 px wide.
2. Create `_posts/2026-11-15-my-news-title.md`. The date in the filename is the publication date, and the rest becomes the URL (`/tempest/my-news-title/`):

   ```markdown
   ---
   title: My News Title
   image: 2026-11-15-short-description.jpg        # thumbnail on the News page (optional)
   byline: Jane Doe           # optional "By ..." line
   ---

   ![]({{ '/assets/images/2026-11-15-short-description.jpg' | relative_url }})

   {: .caption}
   Photo caption goes here.

   Article text in Markdown. [Links look like this](https://example.com).
   ```

3. Commit and push. You can do this directly on github.com with **Add file → Create new file** and **Add file → Upload files**.

## Adding a team member

Add an entry to the appropriate section in `_data/team.yml`, and put the photo, ideally square, in `assets/images/` named `team-firstname-lastname.jpg`.

## Previewing locally (optional)

```bash
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
# open http://localhost:4000/tempest/
```
