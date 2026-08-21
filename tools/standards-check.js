/* Loader for the old URL.
 *
 * Student pages built in earlier terms hardcode
 *   https://divonbriesen.github.io/teaching-web/tools/standards-check.js
 * and a <script src> needs JavaScript back — an HTML redirect cannot serve it.
 * So this file loads the real checker from where the site lives now.
 *
 * The checker resolves standards/rules.json from its own script src, so the
 * injected tag makes it read the new location's rules, not a stale copy here.
 */
(function () {
  var original = document.currentScript;
  var s = document.createElement("script");
  s.src = "https://divonbriesen.github.io/teaching/tools/standards-check.js";
  s.defer = true;
  if (original) {
    // carry the page's options over, so data-mode / data-site / data-page
    // keep working exactly as they did before the move
    ["mode", "site", "page"].forEach(function (k) {
      if (original.dataset[k]) s.dataset[k] = original.dataset[k];
    });
  }
  (document.head || document.documentElement).appendChild(s);
})();
