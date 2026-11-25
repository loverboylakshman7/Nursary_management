# GreenLeaf

A static, responsive plant-shopping website hosted with GitHub Pages.

## Architecture
- HTML, CSS and vanilla JavaScript
- No database or backend
- No localStorage, cookies, IndexedDB or browser persistence
- Product catalogue is defined in `assets/js/app.js`
- Shopping cart exists only in page memory and resets on refresh
- Checkout hands the order to the nursery through WhatsApp

## Owner contact
WhatsApp: +91 99085 16488

## Update products
Edit the `products` array in `assets/js/app.js`, then commit the change to the `main` branch.

## Deploy
In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`. GitHub Pages publishes the static site.

## Important
Orders are not stored by this website. The customer must send the prepared WhatsApp message and the nursery must confirm availability, delivery and payment directly.
