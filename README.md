# GreenLeaf Nursery

GreenLeaf is being developed as a two-part nursery platform:

- `index.html` — existing nursery administration dashboard (inventory, sales, customers, reports).
- `shop.html` — customer-facing plant storefront with search, category filters, shopping bag and WhatsApp order handoff.

## Customer storefront

Open `shop.html` or visit the GitHub Pages site at `/shop.html`.

### WhatsApp ordering
The storefront is configured to contact the nursery at **+91 99085 16488**. Customers can:
- Open a general support chat from the contact and floating WhatsApp buttons.
- Add plants to the bag and adjust quantities.
- Submit name, phone and delivery address to generate a WhatsApp order summary.
- Review stock, delivery charges and final amount directly with the owner.

WhatsApp click-to-chat does not submit an order automatically. The customer must send the prefilled message, and the nursery must confirm the order. No payment is collected by this static storefront.

## Data and deployment status

- The existing admin dashboard uses browser localStorage; it is not shared cloud storage.
- The storefront currently uses a local browser cart and a sample catalog in `js/shop.js`.
- A starter database design is in `supabase/schema.sql`. It is not deployed.
- Supabase currently has no project connected to this ChatGPT session. To enable shared online products/orders, connect or create the intended Supabase project, then configure public catalog reads and a trusted order-creation function with RLS.
- Do not expose Supabase service-role/secret keys in frontend code.
- Product imagery currently loads from remote Unsplash image URLs.

## Run locally

Because this is a static site, open `shop.html` in a browser or serve the repository with a local static server. GitHub Pages can host both the admin dashboard and storefront.
