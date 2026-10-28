# Intellia360 Games — Think. Play. Level Up. 🎮✨

> A modern, clean, curriculum-aligned educational gaming arcade designed with official Intellia360 branding. Combines mathematical intuition, spatial reasoning, speed arithmetic, and interactive physics into an engaging learning suite.

---

## 🌟 Overview

**Intellia360 Games** brings curiosity, problem-solving, and play together. Built purely with modern **HTML5, CSS3, and Vanilla JavaScript**, it provides a lightning-fast, zero-dependency educational gaming platform with dedicated pages, in-game learning guides, and a universal hamburger navigation menu.

---

## 🕹️ Included Games Suite

| # | Game | Subject & Domain | Target Level | Description |
|---|---|---|---|---|
| 1 | **Clock Station** | Time & Clocks | Grades K – 5 | Interactive analog clock hands, AM/PM calculation, and train schedule challenges. |
| 2 | **Math Runner** | Mental Math & Speed | Grades 1 – 8 | High-speed 3D runner requiring instant mental arithmetic to dodge obstacles and clear track stages. |
| 3 | **Tug of War** | Multiplayer Math Battle | Grades 1 – 8 | Head-to-head 2-player battle where rapid calculation pulls the rope to victory. |
| 4 | **Realistic Golf Challenge** | Physics & Curves | Grades 6 – 12 | Parabolic trajectories ($y = ax^2 + bx + c$), launch velocity, angles, and physics problem solving. |
| 5 | **Vector Skies** | 3D Vectors & Space | Grades 8 – 12 | 3-axis $(X, Y, Z)$ coordinate navigation, spatial reasoning, and aerospace vector calculations. |

---

## 🚀 Key Features

* **🎨 Official Intellia360 Brand Aesthetics:** Clean, bright white design system (`#FFFFFF`), Intellia Blue (`#0066FF`), Vibrant Orange (`#FF7A00`), and Deep Navy (`#0F172A`).
* **🍔 Universal Hamburger Drawer:** Slide-out navigation menu available in the header on both the landing page and all dedicated game pages, allowing quick switching between games.
* **⬅️ Intuitive Back Navigation:** Dedicated game pages include sticky `← Back to Games` arrow buttons, in-player exit buttons, and breadcrumbs.
* **📖 Built-in Educational Guides:** Each game features grade-level tags, key mathematical concepts, and control instructions.
* **⚡ Zero Build Dependencies:** Pure HTML5, CSS3, and vanilla JavaScript. Runs out of the box with any static file server.

---

## 💻 Local Setup & Running

You can run this project locally using Python, Node.js, or VS Code Live Server:

### Option 1: Python (Recommended)
```bash
# Clone the repository
git clone https://github.com/bhavyadavane14/intellia-games.git

# Navigate to the project directory
cd intellia-games

# Start local server
python -m http.server 3000
```
Then open [http://localhost:3000](http://localhost:3000) in your web browser.

### Option 2: Node.js / npx
```bash
npx serve . -l 3000
```

---

## 📁 Repository Structure

```
intellia-games/
├── index.html                   # Arcade landing page with write-up & 5 game cards
├── logo.png                     # Official Intellia360 Games high-res transparent logo
├── assets/
│   ├── logo/logo.png            # Favicon & header logo
│   └── games/                   # Game covers and visual assets
├── css/
│   └── style.css                # Intellia360 educational brand design system
├── js/
│   └── script.js                # Hamburger drawer, interactions & accessibility
├── games/                       # Dedicated standalone game pages
│   ├── clock-station.html       # Clock Station arena & guide
│   ├── math-runner.html         # Math Runner arcade stage & guide
│   ├── tug-of-war.html          # Tug of War 2-player arena & guide
│   ├── golf-challenge.html      # Realistic Golf Challenge physics arena & guide
│   └── vector-skies.html        # Vector Skies 3D rocket arena & guide
└── README.md
```

---

## 📄 License & Attribution

Designed for **Intellia360** educational gaming initiatives.
© 2026 Intellia360. All rights reserved.
