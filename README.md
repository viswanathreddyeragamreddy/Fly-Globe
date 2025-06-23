# ✈️ FlyGlobe – Travel Booking Interface

FlyGlobe is a modern travel booking interface built using **React.js** and **Vite** based on the official **Figma design assignment from Blumox Technologies**. It features a responsive design, clean component structure, and interactive flight filtering/search functionality.

---

## 📸 Screenshots

| Home Page | Flight Results |
|-----------|----------------|
| ![Home Screenshot](./public/screenshots/home.png) | ![Results Screenshot](./public/screenshots/results.png) |

---

## 🚀 Live Demo

🌐 [Click here to view the hosted site on Vercel](https://your-vercel-deploy-url.vercel.app)

---

## 📁 Project Structure

flyglobe/
├── public/
│ └── assets/ # Images & logos
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── FlightForm.jsx
│ │ ├── DestinationGrid.jsx
│ │ ├── ModifySearchBar.jsx
│ │ ├── PriceSelector.jsx
│ │ ├── FlightCards.jsx
│ │ └── FlightDetails.jsx
│ ├── pages/
│ │ └── Home.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── styles/
│ └── *.css # Component styles
├── index.html
├── package.json
└── vite.config.js

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js ≥ 16.x
- npm ≥ 8.x

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/flyglobe.git
cd flyglobe

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Build for production
npm run build
