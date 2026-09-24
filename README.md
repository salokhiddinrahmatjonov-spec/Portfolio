# Salokh — Portfolio

Static single-page site (HTML + CSS + JS, no build step).

## Edit
- **Contact details:** the `CONFIG` block at the top of `script.js` (WhatsApp number, email, greeting).
- **Projects:** the `#work` section in `index.html`. Replace each `.project__thumb` placeholder with an `<img>`.
- **Accent color:** `--accent` in `styles.css` (dark and light theme blocks).
- **Link preview image:** add `og-image.png` (1200×630) to the root.

## Preview locally
Open `index.html` in a browser, or run `npx serve .`

## Deploy (Vercel, free)
Push to GitHub → vercel.com → "Add New Project" → import the repo → Deploy. No settings needed.
Or from this folder: `npx vercel`.
