# Design System Reference: Bella Coola Luxury Black & Gold

**Objective:** Use this document to instruct another AI agent or developer to replicate the exact visual style of the "7 Laws of Success" project. Each section below defines the core aesthetic pillars.

---

## 1. Aesthetic Overview
- **Theme:** Ultra-Premium, Luxury, "Dark Mode" Default.
- **Core Colors:** Deepest Black backgrounds (`#000000`) with Rich Gold accents (`#d4af37`).
- **Surface Texture:** Glassmorphism with gold borders, subtle gradients/glows rather than flat colors.
- **Vibe:** Authoritative, Expensive, Mystical yet Corporate.

---

## 2. Core Color Palette (Tailwind Config)
Use these exact hex codes in your `tailwind.config.js`.

### Black Scale (Backgrounds)
- **Default (bg-black):** `#000000` (Pure Black - main background)
- **900:** `#0a0a0a` (Component background)
- **800:** `#141414` (Card/Form background)

### Gold Scale (Accents & Text)
- **Primary (text-gold / border-gold):** `#d4af37` (Classic Gold)
- **Light (text-gold-light):** `#f4d56f` (Highlighter/Hover)
- **Dark (text-gold-dark):** `#aa8a2e` (Muted/Borders)
- **100 (text-gold-100):** `#fef3c7` (Body Text - readable off-white gold)
- **Gradient:** `linear-gradient(135deg, #f4d56f 0%, #d4af37 50%, #aa8a2e 100%)`

---

## 3. Typography
- **Font Family:** `Inter` (sans-serif) for clean readability.
- **Headings:** Bold, Uppercase, often with `tracking-wider` or `tracking-widest`.
- **Body:** `leading-relaxed` for readability.

---

## 4. Implementation Details

### A. Tailwind Configuration (`tailwind.config.js`)
Copy this `theme` block to replicate the custom tokens:

```javascript
theme: {
  extend: {
    colors: {
      black: {
        DEFAULT: '#000000',
        900: '#0a0a0a',
        800: '#141414',
      },
      gold: {
        DEFAULT: '#d4af37',
        light: '#f4d56f',
        dark: '#aa8a2e',
        100: '#fef3c7', // Main text color
        200: '#fde68a',
        900: '#78350f',
      }
    },
    letterSpacing: {
      widest: '0.25em',
      'ultra-wide': '0.3em',
    },
    boxShadow: {
      'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.39)',
      'gold-lg': '0 10px 40px rgba(212, 175, 55, 0.3)',
      'glow': '0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)',
    },
    backgroundImage: {
      'gold-gradient': 'linear-gradient(135deg, #f4d56f 0%, #d4af37 50%, #aa8a2e 100%)',
    }
  }
}
```

### B. Global CSS (`globals.css`)
Key utility classes to enforce the style:

**1. Body Defaults**
```css
body {
  @apply bg-black text-gold-100 font-sans;
  background-color: #000000;
}
```

**2. Buttons (The "Luxury" Button)**
```css
button.primary {
  @apply font-semibold uppercase tracking-wider px-8 py-4 rounded-md;
  @apply transition-all duration-200;
  /* Glassy Gold Border Look */
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #fef3c7;
}
button.primary:hover {
  border-color: #d4af37;
  background: rgba(212, 175, 55, 0.1);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
  transform: translateY(-2px);
}
```

**3. Inputs / Forms**
```css
input, textarea {
  @apply bg-black-800 border-2 border-gold-dark/30 text-gold-100 rounded-md px-4 py-3;
  @apply focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold;
  background: rgba(20, 20, 20, 0.8);
}
```

**4. Section Dividers (The "Laser Line")**
```css
.gold-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.5), transparent);
  margin: 2rem 0;
}
```

---

## 5. UI Pattern Instructions for the AI Agent
When generating the new project, instruct the agent with these rules:

1.  **Never use white backgrounds.** Always use pure black `#000000` or very dark gray `#0a0a0a`.
2.  **Never use pure white text.** Use "Gold-100" `#fef3c7` for body text to reduce eye strain and maintain warmth.
3.  **Gold is the only accent.** Do not introduce blues, greens, or reds unless absolutely critical for status messages.
4.  **Uppercasing:** Uppercase all headers (`h1`, `h2`, `h3`) and Button text. Use `tracking-wider` to make it look expensive.
5.  **Glows:** Use subtle gold `box-shadows` on active elements (`focus` states, `hover` states) to simulate light.
