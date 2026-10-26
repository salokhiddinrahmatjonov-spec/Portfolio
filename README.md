# Salokh — Portfolio

Static single-page site (HTML + CSS + JS, no build step).

## Edit
- **Contact details:** the `CONFIG` block at the top of `script.js` (WhatsApp number, email). The WhatsApp greeting is in `i18n.js` (`js.greeting`).
- **Projects:** the `#work` section in `index.html`. Replace each `.project__thumb` placeholder with an `<img>`.
- **Text / translations:** English is in `index.html`; Arabic and Uzbek are in `i18n.js` under the same keys (`data-i18n="..."`). Link to a language directly with `?lang=ar` or `?lang=uz`.
- **Accent color:** `--accent` in `styles.css` (dark and light theme blocks).
- **Link preview image:** add `og-image.png` (1200×630) to the root.

## Preview locally
Open `index.html` in a browser, or run `npx serve .`

## Deploy (Vercel, free)
Push to GitHub → vercel.com → "Add New Project" → import the repo → Deploy. No settings needed.
Or from this folder: `npx vercel`.
