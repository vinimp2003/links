# links

My personal links page — a small, dependency-free static site (no framework, no build
step) meant to be deployed as-is to Vercel.

## Editing

- **Photo**: replace `avatar-placeholder.svg` with your own image (e.g. `avatar.jpg`) and
  update the `src` in `index.html`.
- **Links**: edit the `links` array at the top of `script.js`. Update the LinkedIn URL
  (currently a placeholder).
- **Name / tagline**: edit directly in `index.html`.

## Running locally

Just open `index.html` in a browser, or serve the folder with any static file server:

```sh
npx serve .
```

## Deploying

Zero-config static site — works with Vercel, Netlify, GitHub Pages, or any static host.
