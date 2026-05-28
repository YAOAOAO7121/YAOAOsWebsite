# 林士恩 Shi-en Lin — Personal Website

A minimal autumn-toned personal portfolio site.

## File Structure

```
/
├── index.html       ← 首頁 (Homepage)
├── portfolio.html   ← 作品集頁 (Works)
├── style.css        ← 共用樣式
├── main.js          ← 共用互動邏輯
└── README.md
```

## Deploy to GitHub Pages

1. Create a repo named `<your-username>.github.io`
2. Upload all 4 files to the repo root
3. Go to **Settings → Pages → Source → Deploy from branch → main / root**
4. Your site will be live at `https://<your-username>.github.io`

## Customise

- **Your info**: Search `hello@shi-en.com` and replace with your real email; replace social media `href="#"` links
- **Works**: Click directly on the cards in the browser to fill in your project info (saved in localStorage)
- **Bio**: Edit the text in `index.html` under the `manifesto-body` div
- **Now section**: Update the three cards with what you're currently working on

## Interactive Features

- 🖱️ Custom autumn-orange cursor
- ✨ Click anywhere → coloured sparks
- 🌿 Floating particles in the hero
- 📝 Directly editable work cards (saved in browser)
- 🔍 Filter works by category
- ➕ Add new work cards
- 🏷️ Click work emojis to cycle through options
- 📜 Scroll-triggered reveal animations
- ⏱️ Intro animation on first load
