// Single source of truth for the site's tabs.
// Add or reorder pages here and every page updates.
const TABS = [
  { href: "index.html", label: "About" },
  { href: "work.html", label: "Past Projects" },
];

(function renderNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  const nav = document.createElement("nav");
  nav.className = "tabs";

  for (const tab of TABS) {
    const a = document.createElement("a");
    a.href = tab.href;
    a.textContent = tab.label;
    if (tab.href === current) a.className = "active";
    nav.appendChild(a);
  }

  const mount = document.querySelector("[data-nav]");
  if (mount) mount.replaceWith(nav);
})();
