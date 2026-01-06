# Bella Coola AI Hub — The 7 Laws of Success

A calm, authoritative, single-page diagnostic system that enables self-reflection and optional submission for customized PDF delivery.

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout with chaos field background
│   ├── page.js             # Main landing page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── StopAnimation.jsx   # Hero STOP animation
│   ├── LawSection.jsx      # Reusable law section with form
│   ├── Hero.jsx
│   ├── AlignmentStatement.jsx
│   ├── WhatYouReceive.jsx
│   ├── HowToUse.jsx
│   ├── HowThisWorks.jsx
│   ├── OptionalDeepening.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── lib/
│   └── lawsData.js         # Law content and section IDs
├── AGENTS.md               # Project specification (LOCKED)
└── backend.md              # Backend architecture documentation
```

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Backend Setup

See `backend.md` for detailed backend infrastructure setup:

1. **Google Sheets CRM** - Create BC-AIHUB-CRM spreadsheet with 4 tabs
2. **Apps Script Web App** - Deploy endpoint and update `NEXT_PUBLIC_APPS_SCRIPT_URL` in `.env.local`
3. **GA4 + GTM** - Create property and container, update `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`
4. **Looker Studio** - Connect GA4 and Sheets for dashboards

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Design System

- **Background**: Slate-950 with chaos field SVG texture
- **Colors**: Seven Laws palette (Blue, Indigo, Rose, Amber, Emerald)
- **Typography**: Inter font, uppercase headings, high tracking
- **States**: Law-specific colors on hover/focus

## Deployment

Optimized for Vercel:

```bash
vercel
```

Or connect your Git repository to Vercel for automatic deployments.

## Key Features

- ✅ STOP animation on page load
- ✅ 5 Law sections with reusable component
- ✅ Form submission to Google Sheets via Apps Script
- ✅ GA4 event tracking (section views, form events, scroll depth)
- ✅ UTM parameter extraction
- ✅ Anti-spam measures (honeypot, timing)
- ✅ Toast notifications
- ✅ Chaos field background texture
- ✅ Fully responsive design

## Content Updates

All section copy is locked per AGENTS.md. To update law content, edit `lib/lawsData.js`.

## Analytics Events

Tracked via GTM/GA4:
- `page_view`
- `scroll` (25/50/75/90%)
- `section_view` and `section_revisit`
- `form_start`, `question_focus`
- `form_submit_attempt`, `form_submit_success`, `form_submit_error`

## License

Private project. All rights reserved.
