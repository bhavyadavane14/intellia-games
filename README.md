# Intellia360 Games — Think. Play. Level Up. 🎮✨

> A modern, curriculum-aligned educational gaming arcade designed with official Intellia360 branding. Combines mathematical intuition, spatial reasoning, speed arithmetic, fractions, and interactive physics into an engaging 10-game learning suite.

---

## 🌟 Overview

**Intellia360 Games** brings curiosity, problem-solving, and play together. Built purely with modern **HTML5, CSS3, and Vanilla JavaScript**, it provides a lightning-fast, zero-dependency educational gaming platform with dedicated pages, in-game learning guides, an interactive Dark/Light mode theme switcher, and a universal hamburger navigation menu.

---

## 🕹️ Included Games Suite (10 Games)

| # | Game | Subject & Domain | Target Level | Description |
|---|---|---|---|---|
| 1 | **Clock Station** | Time & Clocks | Grades K – 5 | Interactive analog clock hands, AM/PM calculation, and train schedule challenges. |
| 2 | **Math Runner** | Mental Math & Speed | Grades 1 – 8 | High-speed 3D runner requiring instant mental arithmetic to dodge obstacles and clear track stages. |
| 3 | **Tug of War** | Multiplayer Math Battle | Grades 1 – 8 | Head-to-head 2-player battle where rapid calculation pulls the rope to victory. |
| 4 | **Realistic Golf Challenge** | Physics & Curves | Grades 6 – 12 | Parabolic trajectories ($y = ax^2 + bx + c$), launch velocity, angles, and physics problem solving. |
| 5 | **Vector Skies** | 3D Vectors & Space | Grades 7 – 12 | 3-axis $(X, Y, Z)$ coordinate navigation, spatial reasoning, and aerospace vector calculations. |
| 6 | **MathMerge** | Number Puzzle & Powers of 2 | Grades 1 – 8 | 2048-style matching & merging puzzles across 20 levels, sandbox, and predict modes. |
| 7 | **Times Table Tower** | Times Tables & Arithmetic Quest | Grades K – 6 | 100 progressive levels across 5 categories (Add, Sub, Mult, Div, Frac) with human voice feedback. |
| 8 | **Pizza Fraction Adventure** | Fractions & Spatial Slicing | Grades 1 – 6 | Interactive pizza slicing, shading, customer orders, and equivalent fraction visualization. |
| 9 | **Catch the Correct Answer** | Retro Arcade Drop & Primes | Grades 1 – 8 | Fast-paced falling-number arcade drop across Arcade, Time Attack, Zen, and Number Ninja modes. |
| 10 | **Math Buggy Rush** | 3D Kart Racing & Math Speed | Grades 1 – 8 | Speedway Grand Prix buggy racer where hitting the correct arithmetic gates activates turbo boost. |

---

## 🚀 Key Features

* **🎨 Official Intellia360 Dark Mode & Theme Toggle:** High-contrast, brand-aligned dark design system (`#0B0F19` canvas, `#121826` cards, `#38BDF8` blue, `#FB923C` orange) with an interactive Sun/Moon switcher that persists user preference in `localStorage`.
* **🍔 Universal Hamburger Drawer:** Slide-out navigation menu available in the header on both the landing page and all dedicated game pages, allowing quick switching between all 10 games.
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
├── index.html                           # Arcade landing page with write-up & 10 game cards
├── vercel.json                          # Clean URL rewrites and routing for all 10 games
├── assets/
│   ├── logo/
│   │   ├── logo.png                     # Light mode logo
│   │   └── logo-dark.png                # Dark mode high-contrast logo
│   └── games/                           # High-res 16:9 covers for all 10 games
├── games/
│   ├── clock-station.html               # Game 1: Clock Station
│   ├── math-runner.html                 # Game 2: Math Runner 3D
│   ├── tug-of-war.html                  # Game 3: Tug of War
│   ├── golf-challenge.html              # Game 4: Realistic Golf Challenge
│   ├── vector-skies.html                # Game 5: Vector Skies
│   ├── math-merge.html                  # Game 6: MathMerge
│   ├── times-table-tower.html           # Game 7: Times Table Tower
│   ├── pizza-fraction-slicer.html       # Game 8: Pizza Fraction Adventure
│   ├── catch-the-correct-answer.html    # Game 9: Catch the Correct Answer
│   └── math-buggy-rush.html             # Game 10: Math Buggy Rush
├── css/
│   └── style.css                        # Intellia360 dark/light design system & responsive grid
└── js/
    └── script.js                        # Theme manager, drawer navigation, smooth scroll
```

---

## 📜 License & Copyright

&copy; 2026 **Intellia360**. All rights reserved.
