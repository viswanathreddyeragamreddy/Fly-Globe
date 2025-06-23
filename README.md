# ✈️ FlyGlobe – Travel Booking Interface

FlyGlobe is a modern travel booking interface built using **React.js** and **Vite** based on the official **Figma design assignment from Blumox Technologies**. It features a responsive design, clean component structure, and interactive flight filtering/search functionality.

---

## 📸 Screenshots

| Home Page | Flight Results |
|-----------|----------------|
| ![Home Screenshot]![image](https://github.com/user-attachments/assets/442b9b96-ef97-493f-a4fd-db3b91e8376b)
 | ![Results Screenshot]![image](https://github.com/user-attachments/assets/b9e93098-4a48-482f-97a7-ebcd3f82dbee)
 |

---

## 🚀 Live Demo

🌐 [Click here to view the hosted site on Vercel]([https://your-vercel-deploy-url.vercel.app](https://fly-globe-five.vercel.app/))

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
