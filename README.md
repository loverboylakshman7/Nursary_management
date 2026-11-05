# GreenLeaf — Nursery Business Management Software

A responsive browser-based nursery management demo based on the supplied **Nursery Business Management Software Project Documentation**.

## Included modules
- Dashboard with summary cards, sales overview, stock alerts and care tasks
- Plant and product catalogue (add, edit, delete, search, category filter)
- Sales and billing (invoice records, payment method, discount validation and automatic stock deduction)
- Purchases (supplier delivery records and automatic stock increase)
- Customer directory
- Supplier directory
- Plant-care task scheduling and completion
- Reports (category stock breakdown, low-stock report and indicative stock valuation)
- Business settings and JSON data backup
- Responsive layout for desktop, tablet and mobile

## Run the project
1. Extract the ZIP file.
2. Open the `nursery-management-software` folder.
3. Double-click `index.html`, or use VS Code Live Server.
4. The sample data loads automatically on first launch.

No package installation or build step is required.

## Important implementation note
This is a front-end demonstration. Records are stored in the current browser with `localStorage`; there is no server, shared database, real authentication, or multi-user synchronization. Browser storage can be cleared by the user or browser. Do not use this demo as a production accounting or inventory system without adding a secure backend and database.

## Suggested production architecture
The documentation describes a three-layer architecture:
- Presentation: HTML, CSS and JavaScript
- Business/application layer: server-side validation, authentication, stock and invoice rules
- Data layer: relational database such as MySQL

Before production, add secure password hashing, role-based authorization, parameterized database queries, HTTPS, audit logging, automated backups and restore testing.

## Sample data
Sample products include Areca Palm, Rose, Tulsi, Snake Plant, Marigold and Terracotta Pot. These are illustrative records and should be replaced with actual nursery data.
