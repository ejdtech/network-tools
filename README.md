# Network Tools

A free, static collection of browser-based tools for network engineers and
system administrators: public IP lookup, subnet calculator, IP calculator,
DNS lookup, MAC vendor lookup, HTTP latency check, HTTP headers, and
placeholders for traceroute / SSL checker / Wi-Fi analyzer (which need a
backend to work for real).

No build step, no server, no database. Plain HTML/CSS/JS only — open
`index.html` in a browser or deploy as-is to GitHub Pages.

## Structure

```
index.html              Home page
about.html
contact.html
css/style.css            Shared styles
tools/
  public-ip.html
  subnet-calculator.html
  ip-calculator.html
  dns-lookup.html
  mac-lookup.html
  http-latency.html
  http-headers.html
  traceroute.html         (placeholder)
  ssl-checker.html        (placeholder)
  wifi-analyzer.html      (placeholder / browser-limited)
CNAME                     Custom domain for GitHub Pages (ejdtech.in)
```

## Deploying

See the step-by-step hosting guide provided alongside this project for
pushing to GitHub and enabling GitHub Pages with the `ejdtech.in` domain.
