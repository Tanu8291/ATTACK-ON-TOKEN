We have participated in the ATTACK ON THE TOKEN Event ,
our group name is Token Titans.
My name is Tanuja Adhav with Mahalaxmi Chavan 
We have created a profile with creativity


# TANUJA.exe — Beyond the Profile

An interactive two-page portfolio for **Tanuja Adhav**, built for a creative prompt-engineering hackathon.
Theme: *"TANUJA.exe — A Human Behind the Code."*

Plain HTML, CSS and JavaScript. No build step and no dependencies (only Google Fonts: Space Grotesk and Inter).

## Run it

1. Unzip and open the `tanuja-exe` folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server**.

You can also double-click `index.html` to open it in a browser.

## Before you share it (important)

The resume was not available when this was built, so personal details are intentionally blank.
Open `script.js` and fill in the `C` object at the very top:

```js
const C = {
  email: "",     // e.g. "name@example.com"
  phone: "",
  linkedin: "",  // full https:// profile URL
  location: "",
  resume: ""     // e.g. "assets/Tanuja_Adhav_Resume.pdf"
};
```

Then put the resume PDF inside `assets/`.
Until these are filled in, EMAIL ME, VIEW LINKEDIN, COPY CONTACT and DOWNLOAD RESUME stay disabled and say why.
Education years are not shown because none were supplied.

## Project structure

```
tanuja-exe/
├── index.html      Page structure for both pages, modals and overlays
├── styles.css      Theme (dark/light), layout, animations
├── script.js       Routing, interactions, games, effects
├── assets/         Put your resume PDF here
└── README.md
```

## Pages

Navigation uses hash routes, so there are no server settings to change.

| Route | Page |
|-------|------|
| `#/` | Home / Digital Identity |
| `#/projects` | Projects / Innovation Lab |

## Features

**Home**
- Short boot sequence (click to skip), typed hero intro
- Holographic profile card with 3D tilt, scanning line and SYSTEM ONLINE indicator
- RUN IDENTITY SCAN: shows a resume-based summary, not a skill measurement
- Skill constellation: click a node to see the linked project, with a reset button
- Secret terminal: click the `>_ TANUJA.exe` logo 5 times

**Games (EXPLORE MY UNIVERSE)**
- Signal Catcher, Bug Whack, Skill Memory
- A funny sticker appears when a game ends
- Skip, back, close button and Escape always available

**Projects**
- Two project cards with hover/click dossiers (objective, workflow, limitations)
- Illustrations are labelled as simulations, since no real demos or screenshots were supplied
- Education timeline, filterable skill explorer
- SEND A SIGNAL envelope with email, LinkedIn and copy actions
- "SUBMIT TO THE VOID" form: validates input. It is a **local demo and sends nothing**; the message is kept and can be sent through your email app
- DOWNLOAD RESUME, and the "UNLOCK NEXT LEVEL" final secret

**Extras**
- Sparkle cursor trail and a different click effect per element type (toggle with ✨ FX)
- Contact gate: a pop-up saying to contact yourself first before contacting
- Skill travel: click a skill and choose a bull cart, bicycle, scooter or rocket
- Dark and light theme switch

## Accessibility

Semantic HTML, labelled form fields and icon buttons, visible focus outlines, focus-managed modals (Escape or click outside to close), and `prefers-reduced-motion` support (animations and sparkles are turned off).

## Content accuracy

Everything shown is based on the resume details given in the project brief. No work experience, awards, certifications, GitHub links, proficiency percentages or project outcomes were invented.

## Customising

- Colours: edit the CSS variables at the top of `styles.css`.
- Project text: edit the `P` array in `script.js`.
- Skill relationships: edit `SK` (constellation) and `G` (explorer) in `script.js`.
- Sticker captions: edit `STK` in `script.js`.
