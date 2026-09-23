const links = [
  {
    label: "GitHub",
    href: "https://github.com/vinimp2003",
    icon: "github",
  },
  {
    label: "Previx — Case Study",
    href: "https://github.com/vinimp2003/previx-case-study",
    icon: "folder",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/REPLACE-ME",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:vinimp2003@gmail.com",
    icon: "mail",
  },
];

const icons = {
  github:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v6.5M7.5 7.5v.01M11.5 16.5V13c0-1.1.9-2 2-2s2 .9 2 2v3.5M11.5 13.2v3.3"/></svg>',
  folder:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
};

const container = document.getElementById("links");

for (const link of links) {
  const a = document.createElement("a");
  a.className = "link";
  a.href = link.href;
  if (link.href.startsWith("http")) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }

  const iconSpan = document.createElement("span");
  iconSpan.className = "link-icon";
  iconSpan.innerHTML = icons[link.icon] ?? "";

  const labelSpan = document.createElement("span");
  labelSpan.className = "link-label";
  labelSpan.textContent = link.label;

  a.append(iconSpan, labelSpan);
  container.append(a);
}
