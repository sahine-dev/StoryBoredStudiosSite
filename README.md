# StoryBored Studios - Landing Page Developer Guide

Welcome to the internal development hub for the **StoryBored Studios** landing page. This site uses a bespoke "Windowed Retro-Futurism" UI framework built with React and Vite.

## 🛠️ Developer Workflow

To ensure the highest visual fidelity, please follow these steps when making changes:

### 1. Local Environment Setup
Ensure you have Node.js installed, then:
```bash
npm install
npm run dev
```

### 2. Modifying Site Elements
- **Styling**: All global styles, window frameworks, and TCG frames are located in `src/index.css`.
- **Logic & Components**: The main structure is in `src/App.jsx`. Use the `OSWindow` component for any new modular sections.
- **Assets**: Always place new images/icons in `src/assets/`.

### 3. Deploying Changes
Instead of manual git commands, use the provided `deploy.bat` (Windows) for a streamlined update to the live Vercel production site.

#### One-Click Deployment:
```bash
# Simply run the deploy script from the root
./deploy.bat "Your commit message here"
```

---

## 🚀 Deployment Script Details
The `deploy.bat` script performs the following actions:
1.  Stages all local changes.
2.  Creates a versioned commit.
3.  Pushes to the `main` branch on GitHub.
4.  Triggers the Vercel production build automatically.

## 🎨 Design Standards
- **TCG Frames**: Maintain the 63:88 aspect ratio. Every card must include:
    - Unit Name (Silkscreen Font)
    - Role Badge (Top Right)
    - Type Line (Center)
    - Flavor/Logic Text (JetBrains Mono)
    - Power/Defense Stats (Bottom Right)
- **Windowed UI**: Use the `os-window` and `os-title-bar` classes for all dashboard content.

---
*Maintained by the StoryBored Studios Core Team.*
