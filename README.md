# Cricket & Football Gear Store

A small React + Vite product catalog app that fetches sports product data
and displays it in styled, filterable cards. Built to practice:

- `useState` for storing fetched data and UI state
- `useEffect` for loading data when the component first mounts
- Component composition and props (`App` → `ProductCard`)
- Rendering lists with `map` and `key`
- Custom CSS for a polished storefront look

## Features

- Fetches product data from a local mock API (`public/products.json`) using
  the `fetch()` API inside `useEffect`, exactly like you would with a real
  REST endpoint.
- Loading spinner while data is being fetched.
- 12 products across two categories: **Cricket** and **Football**.
- Category filter (All / Cricket / Football).
- Bonus: "Add to Cart" button on each card with a live cart counter in the header.

## Project structure

```
sports-catalog/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── products.json        # mock product data (acts as the API response)
└── src/
    ├── main.jsx
    ├── App.jsx               # parent component: fetch + state + composition
    ├── App.css
    ├── index.css
    └── components/
        ├── ProductCard.jsx   # child component, receives product via props
        ├── ProductCard.css
        ├── Loader.jsx        # loading indicator
        └── Loader.css
```

## Getting started

1. Make sure you have **Node.js 18+** installed.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Notes on the data source

The project brief suggested `https://dummyjson.com/products`, but that API
doesn't have cricket/football-specific items. To keep the catalog on-theme,
this project ships its own mock "API" at `public/products.json` and fetches
it with `fetch('/products.json')` inside `useEffect` — the exact same pattern
you'd use to call `dummyjson.com` or any other REST endpoint. If you want to
swap in a real API later, just change the URL in `src/App.jsx` inside the
`useEffect` fetch call.
