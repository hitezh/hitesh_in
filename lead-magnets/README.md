# Lead magnets

Sources for the PDFs offered on `/resources/`. Each `*.html` file is an HTML
fragment using the small set of elements styled in `_print.css` (cover section,
`h2`/`h3`, `p.how`, `ul.checks`, `p.fill`, tables, `.note`, a final
`section.reading`). The author line on the cover and the closing "About the
author" page are added by the build script.

Build after editing a source:

    node .github/scripts/build-lead-magnets.cjs            # all
    node .github/scripts/build-lead-magnets.cjs ai-readiness-assessment

The PDFs land in `static/downloads/` and are committed. Each one has a landing
page under `content/resources/<name>/` whose form (`resource-download`, a
Netlify form) records the lead and then starts the download.

Content rule: every framework and claim comes from Hitesh's published posts.
No invented numbers, clients or case studies.
