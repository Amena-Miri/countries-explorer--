# 🌍 Countries Explorer

Countries Explorer is a React application that allows users to explore real-world country data using the **REST Countries API**.  
Users can search for countries by name, filter them by region, and view key information in a clean and responsive UI.

This project was built as part of the **Week 3 Assignment** and fulfills all mandatory requirements.

---

## 🎯 Objective

Build a Countries Explorer app that enables users to:

- Load real country data from an external API
- Search countries by name
- Filter countries by region
- Properly handle loading and error states
- Display country information in a user-friendly interface

---

## 🏗️ Project Structure

```text
countries-explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── RegionFilter.js
│   │   ├── CountryList.js
│   │   └── CountryCard.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── README.md
└── package.json
```

---

## 🚀 Features

- Search countries by name (debounced input)
- Filter countries by region
- Loading state while fetching data
- Error handling with retry button
- Clear filters button
- Country cards with flag, name, region, and population
- Safe rendering for missing data

---

## 🧰 Technologies Used

- React (useState, useEffect)
- JavaScript (ES6+)
- Fetch API
- REST Countries API
- CSS

---

## 🔌 API Used

REST Countries API (No API key required)

### Endpoints

- All countries  
  https://restcountries.com/v3.1/all

- Search by name  
  https://restcountries.com/v3.1/name/{name}

- Filter by region  
  https://restcountries.com/v3.1/region/{region}

---

## 🗂 State Management

```js
countries   // array
loading     // boolean
error       // string | null
search      // string
region      // string (default: "all")
```

---

## 🧩 UI Controls

- Search input for country name
- Region dropdown:
  - All
  - Africa
  - Americas
  - Asia
  - Europe
  - Oceania
- Clear filters button

---

## 🔄 Fetch Logic

Data is fetched using `useEffect` when:

- App loads
- Search value changes
- Region value changes

```js
useEffect(() => {
  // fetch logic
}, [search, region]);
```

Notes:
- Search runs only when input length ≥ 2
- Debouncing reduces API requests

---

## ⏳ Loading & Error Handling

- Loading: shows **Loading Countries...**
- Error: shows message and Retry button

---

## 🗃 Countries List UI

Each country card displays:

- Flag image
- Country name
- Region
- Population

Example:

```
🇩🇪 Germany
Region: Europe
Population: 83,000,000
```

---

## ⭐ Bonus Features

- Debounced search (500ms)
- No results found UI
- Clear filters button

---

## 🛠 How to Run

1. Clone repo  
   git clone <repository-url>

2. Install dependencies  
   npm install

3. Run project  
   npm run dev

4. Open browser  
   http://localhost:3000

---

## 📸 Screenshots

Home Page  
![Home](./screenshots/home.png)

Region Filter  
![Region](./screenshots/region.png)

Search Result  
![Search](./screenshots/search.png)

---

## 👤 Author

Amena Miri  
Week 3 Assignment — React
