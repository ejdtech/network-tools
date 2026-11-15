# EJD Tech: Admin Toolkit

Free, browser-based tools for system administrators and network engineers, plus a small "Office Fun" section.
Plain HTML, CSS and JavaScript. No build step, no server and no database. Hosted on GitHub Pages at https://ejdtech.in

## Structure

```
index.html, about.html, contact.html, fun.html   Main pages
sitemap.xml, robots.txt, CNAME                   Search engines and custom domain
css/style.css                                    Shared styles and the light/dark theme variables
js/theme.js                                      Auto / Light / Dark switcher (stores only "light" or "dark" in the visitor's browser)
tools/                                           Tools, shown on the home page in four groups
  Network Tools:        public-ip, subnet-calculator, dns-lookup, port-number-reference (live);
                        ip-calculator, mac-lookup, http-latency, http-headers, traceroute, wifi-analyzer (hidden, noindex)
  System Administration: timezone-converter, cron-expression-generator
  Security Tools:       password-generator (live); ssl-checker (hidden, noindex)
  Developer Utilities:  qr-code-generator
fun/                                             Office Fun tools: spin-the-wheel, team-splitter
```

## Adding or enabling a tool

1. Build or finish the page in `tools/` (or `fun/`) with its own title, description and short explanation.
2. Remove `<meta name="robots" content="noindex">` from the page if it has one.
3. On `index.html` put the card in the right group section (Network, System Administration, Security, Developer) as a normal link card, or on `fun.html` for Office Fun. Replace the grey "Coming soon" card if there is one.
4. Add the page to `sitemap.xml`.
5. Add the tool to the "Related tools" links of the other tool pages, and give the page a breadcrumb for its group.
6. Push with `git add -A`, `git commit -m "..."`, `git push`.

## Theme

Colours are CSS variables at the top of `css/style.css`. Light is the default, dark overrides them under
`:root[data-theme="dark"]`. New pages need the `<script src="...js/theme.js"></script>` line in `<head>` and the
`themeToggle` button in the menu, as on the existing pages.
