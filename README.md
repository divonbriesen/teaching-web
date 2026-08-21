# teaching-web — redirect shim

This repository exists only to keep old links working. The site moved to
**[divonbriesen/teaching](https://github.com/divonbriesen/teaching)**, served at
<https://divonbriesen.github.io/teaching/>.

GitHub redirects repository URLs after a rename, but it does **not** redirect
GitHub Pages URLs. Anything already pointing at
`https://divonbriesen.github.io/teaching-web/…` would 404 without this.

- `404.html` catches every path under the old site and rewrites it to the same
  path under `/teaching/`, so a deep link keeps working, not just the root.
- `index.html` redirects the root.
- `tools/standards-check.js` is a loader, not a copy. Student pages from earlier
  terms carry that exact URL in a `<script>` tag, and a `<script src>` needs real
  JavaScript back — an HTML redirect cannot serve it. The loader injects the real
  checker from the new location and carries the `data-` options across.

Nothing else belongs here. Edit the real site in the `teaching` repo.
