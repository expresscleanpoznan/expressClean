# ExpressClean Poznan Landing Page

This is a static landing page. There is no build step, npm setup, or backend in this project. You can open `index.html` directly in a browser, or run it locally with a simple HTTP server.

## Main Files

- `index.html` — page structure: sections, header, form, buttons, CSS/JS imports.
- `styles.css` — all visual styling, responsive layout, header positioning, cards, buttons, and form styles.
- `content.js` — editable site data: phone number, form email, social links, media, and translations.
- `app.js` — site behavior: language switching, gallery/video rendering, contact link setup, AJAX form submission, and back-to-top button.
- `logo.png` — ExpressClean logo.
- `karcher_logo.jpg` — Karcher logo shown in the bar below the header.
- `hero_before_after_sofa.png`, `mattress_before_after.png` — gallery images.
- `video.mp4` — video used in the work/results section.

## Main Settings

Most editable settings are at the top of `content.js`.

### Assets

```js
assets: {
  logo: "logo.png",
  karcherLogo: "karcher_logo.jpg"
}
```

- `logo` — main ExpressClean logo file.
- `karcherLogo` — Karcher logo file.

### Phone

```js
phone: "+48517744957",
displayPhone: "+48 517 744 957"
```

- `phone` is used for `tel:` links.
- `displayPhone` is the number shown on the page.

### Form Email

```js
formEmail: "expresscleanpoznan@gmail.com"
```

This is the email address where FormSubmit sends form requests.

### Social Links

```js
socials: {
  instagram: "https://www.instagram.com/_express_clean_...",
  facebook: "https://www.facebook.com/share/...",
  tiktok: "https://www.tiktok.com/@express_clean_poznan...",
  youtube: "https://youtube.com/@expressclean-v6s..."
}
```

The header currently shows:

- Instagram
- Facebook
- TikTok
- YouTube

WhatsApp was removed from the header. The phone number remains as a separate contact link.

## Contact Form

The form is in `index.html` inside the `order-form` section.

The email is set in two places:

1. `content.js`

```js
formEmail: "expresscleanpoznan@gmail.com"
```

2. `index.html`

```html
action="https://formsubmit.co/expresscleanpoznan@gmail.com"
```

`app.js` uses `formEmail` to send the AJAX request to:

```text
https://formsubmit.co/ajax/...
```

If you change the form email, update both `content.js` and the form `action` in `index.html`.

After the first submission, FormSubmit may send a confirmation email that must be accepted before requests start arriving.

## Header Social Icons

The social icons are in `index.html` inside:

```html
header-socials-top
```

The actual URLs are configured in `content.js` inside `socials`.

If you add a new social network:

1. Add the icon/link markup in `index.html`.
2. Add the matching key and URL in `content.js`.
3. Make sure the link has `data-social-link="yourKey"`.

## Photos And Videos

Gallery images and videos are configured in `content.js`.

### Images

Use `media.gallery`:

```js
{
  title: {
    pl: "...",
    en: "...",
    ua: "...",
    ru: "..."
  },
  src: "image-file.png",
  alt: {
    pl: "...",
    en: "...",
    ua: "...",
    ru: "..."
  }
}
```

To add a new image:

1. Put the image file in the project folder.
2. Add a new object to `media.gallery`.
3. Add `title` and `alt` for all four languages.

### Videos

Use `media.videos`:

```js
{
  title: {
    pl: "...",
    en: "...",
    ua: "...",
    ru: "..."
  },
  src: "video.mp4"
}
```

To add a new video:

1. Put the MP4 file in the project folder.
2. Add a new object to `media.videos`.

## Text And Translations

All translations are in `content.js` inside `translations`.

Available languages:

- `pl` — Polish
- `en` — English
- `ua` — Ukrainian
- `ru` — Russian

HTML elements use `data-i18n` keys:

```html
<h1 data-i18n="hero_title">...</h1>
```

`app.js` reads the key and inserts the matching text from `content.js`.

Important:

- If you add a new `data-i18n` key in `index.html`, add it to all four language objects in `content.js`.
- If a key is missing, the site may show a fallback text or the key name itself.

## Prices

Price item labels are translated through `content.js`.

The numeric prices are currently written directly in `index.html` inside the `prices` section.

To change a price:

1. Open `index.html`.
2. Find the section with `id="prices"`.
3. Change the needed value, for example `120–400 zł`.

## Header Layout

The header structure is in `index.html`.

Header positioning is controlled in `styles.css`:

- `.header-wrap` — main header grid.
- `.header-main` — central header block.
- `.header-tools` — language buttons and social icons row.
- `.langs` — language buttons.
- `.header-socials-top` — social icons.
- `.header-contact-row` — phone number and "Zamow teraz" button.
- `.karcher-bar` / `.karcher-wrap` — Karcher logo bar.

To move the language/social row higher, wider, or closer to the logo, edit:

```css
.header-tools
.header-main
```

To adjust the Karcher logo position, edit:

```css
.karcher-wrap
.karcher-wrap img
```

## Responsive CSS

All responsive styles are in `styles.css`.

Main breakpoints:

- `max-width: 1100px` — tablets and narrow desktop widths.
- `max-width: 900px` — header switches to a single-column layout.
- `max-width: 680px` — mobile layout.
- `max-width: 480px` — small phones.
- `max-width: 380px` — very narrow screens.

## Browser Cache

CSS and JS are imported in `index.html` with version query strings:

```html
styles.css?v=20260424p
content.js?v=20260424j
app.js?v=20260424j
```

If you change CSS or JS but the browser still shows the old version:

1. Change the value after `?v=`, for example to `20260424k`.
2. Or hard refresh the browser.

## Local Development

From the project folder, run:

```bash
python3 -m http.server 8765
```

Then open:

```text
http://localhost:8765/
```

## Be Careful With

- `app.js` — it controls site behavior. Edit it only when behavior needs to change.
- `data-i18n` keys in `index.html` — if you rename a key, update `content.js` too.
- Media filenames — if you rename an image or video file, update the matching path in `content.js` or `index.html`.

## Quick Checklist After Changes

1. Open the site locally.
2. Check the header on desktop and mobile widths.
3. Switch between `PL`, `EN`, `UA`, and `RU`.
4. Check that images and videos render.
5. Check that social links point to the correct profiles.
6. Check that the form action uses the correct email.
