# GreenLeaf — Nursery Management Software

A responsive, browser-based nursery business management application built with HTML, CSS and vanilla JavaScript.

## Features
- Dashboard with inventory totals, low-stock alerts and sales overview
- Product catalogue: add, edit, delete and stock-level tracking
- Sales and billing records with discount validation and automatic stock deduction
- Purchase records with automatic stock increases
- Customer and supplier directories
- Plant-care task scheduling and completion tracking
- Reports: inventory valuation, category stock and low-stock list
- Business settings, JSON backup/restore and CSV inventory export
- Responsive navigation and layouts for desktop, tablet and mobile

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern browser, or use VS Code Live Server.
3. Sample records are loaded automatically on first launch.

No build step, package installation, server or database is required.

## GitHub Pages
The project is a static website. In the repository, open **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**, then save. The site is served from the repository root.

## Data storage and limitations
This is a front-end demonstration. Data is stored in the current browser using `localStorage`. It is not shared between devices or browsers. Clearing browser site data may erase records. JSON backup and restore are available in Settings.

There is no server-side authentication, payment gateway, multi-user access or cloud synchronization. Do not use this demo as a production accounting system without a secure backend and database.

## Project structure
```
Nursary_management/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── README.md
```

## Technology
- HTML5
- CSS3 (responsive layout)
- Vanilla JavaScript
- Browser localStorage

## License
No license has been specified yet. Add a license before redistributing this project.
