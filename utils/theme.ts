export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

// Runs before first paint so the page never flashes the wrong theme.
// An explicit choice from the toggle wins; otherwise follow the OS/browser preference.
export const themeInitScript = `(function () {
  try {
    var theme = localStorage.getItem("${THEME_STORAGE_KEY}");
    if (theme !== "light" && theme !== "dark") {
      theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();`;
