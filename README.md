# Renate AI – Modern Hiring Infrastructure

A sleek, high-conversion, and fully responsive landing page interface for **Renate AI**—an AI-powered hiring platform designed to automate and optimize the recruitment process.

---

## 🚀 Features

- **Modern UI/UX:** Built with a clean, deep-contrast dark mode and airy light mode sections, utilizing glassmorphism effects and modern gradient overlays.
- **Fully Responsive:** Adapts seamlessly from mobile screens to ultra-wide desktop monitors using Tailwind CSS grid and flexbox utilities.
- **Component-Driven Architecture:** Code is split into logical, reusable React functional components.
- **Interactive Elements:** Includes hover states, pulse animations, and perfectly aligned UI grids.

---

## 🛠️ Tech Stack

- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Icons:** FontAwesome
  - `@fortawesome/react-fontawesome`
  - `@fortawesome/free-solid-svg-icons`
  - `@fortawesome/free-brands-svg-icons`

---

## 📂 Project Structure

The landing page is divided into the following core sections:

```text
src/
├── components/
│   ├── RenateHero.jsx
│   ├── RenateFeatures.jsx
│   ├── RenateStatsSection.jsx
│   ├── RenateScaleSection.jsx
│   └── RenateLastScreen.jsx
├── assets/
│   ├── renate_ai.png
│   ├── hero_background.png
│   ├── frame.png
│   ├── team.png
│   └── footer.jpeg
├── App.jsx
└── main.jsx
```

### Components

#### `RenateHero.jsx`
Top navigation and main hero section with the floating **"Ask AI"** widget.

#### `RenateFeatures.jsx`
Interactive dashboard section showcasing AI-powered screening capabilities.

#### `RenateStatsSection.jsx`
Dark-themed metrics section highlighting hiring accuracy and processing speed.

#### `RenateScaleSection.jsx`
Left-aligned content paired with right-aligned metric cards demonstrating automated workflow performance.

#### `RenateLastScreen.jsx`
Final call-to-action section featuring the hero image and multi-column footer.

---

## 💻 Local Development Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd renate-ai-frontend
```

### 2. Install dependencies

```bash
npm install
```

Install FontAwesome packages:

```bash
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
```

### 3. Start the development server

```bash
npm run dev
```

---

## ⚠️ Troubleshooting

If you encounter a Vite cache or module export error, start the server with:

```bash
npm run dev -- --force
```

You can also clear dependencies and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 🎨 Asset Management

Ensure the following files exist inside `src/assets/`:

```text
src/assets/
├── renate_ai.png
├── hero_background.png
├── frame.png
├── team.png
└── footer.jpeg
```

---

## 📱 Responsive Design

Designed to provide a seamless experience across:

- 📱 Mobile Devices
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop Monitors
- 🖥️ Ultra-Wide Displays

---

## ✨ Highlights

- Dark mode with glassmorphism aesthetics
- Modern gradient overlays
- Pixel-perfect spacing and alignment
- Interactive hover animations
- Reusable React components
- Tailwind CSS utility-first styling
- Fast development powered by Vite

---

Built with ❤️ using React, Vite, Tailwind CSS, and FontAwesome.