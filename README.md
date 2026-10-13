# 🎂 Interactive Birthday Surprise Website

A beautiful, emotional, romantic, and immersive digital birthday celebration website built with HTML5, CSS3, and Vanilla JavaScript.

Designed to feel like a deeply personal digital gift combining cinematic animations, personal photographs, heartfelt letters, background music, floating particles, and delightful interactive surprises.

---

## ✨ Features & Highlights

1. **Cinematic Opening Screen ("The Birthday Surprise")**
   - Fullscreen dreamy atmospheric entrance with glowing lights and floating hearts.
   - Recipient's personalized name with glowing text shimmer.
   - Smooth opening animation and fade-in background music transition.
   - Quick skip option to proceed instantly.

2. **Main Birthday Hero Section**
   - Grand animated greeting with glowing typography.
   - Live typewriter effect cycling through sweet sentimental thoughts.
   - Luxury gold-rimmed polaroid photograph with delicate pin and tape accents.
   - Call-to-action buttons leading directly to interactive celebrations.

3. **Interactive Birthday Cake & Candles**
   - 3-tier realistic animated cake with strawberry toppings, frosting drippings, and cream.
   - Realistic flickering candle flames with glowing heat aura.
   - Interactive **"Blow Out the Candles 🕯️💨"** button that extinguishes the flames with a soft smoke animation, changes the celebration state, and triggers an explosive multi-colored confetti shower!
   - Option to relight the candles at any time.

4. **Photo Gallery Scrapbook & Lightbox**
   - Editorial scrapbook grid featuring staggered polaroid cards with sweet handwritten captions, stickers, and dates.
   - Fullscreen interactive Lightbox with high-resolution image viewer, Next/Previous controls, photo counter, Escape-key support, and mobile touch swipe gestures.
   - **Graceful Fallback**: If an image is missing, an attractive illustrated placeholder card displays guidance on how to drop a photo in.

5. **Heartfelt Birthday Letter (Wax-Sealed Interactive Envelope)**
   - 3D-styled cream envelope with realistic triangular flap and an embossed red wax seal heart.
   - Clicking the wax seal breaks the seal, unfolds the envelope flap, and pulls out an elegant folded parchment letter.
   - Formatted for comfortable reading on all screen sizes (mobile and desktop) with an accessible direct read button.

6. **Interactive Surprise Gift Box**
   - 3D gift box wrapped in satin gold ribbons and a bow.
   - Tapping the box pops the lid off, unleashes confetti, and reveals a custom birthday gift voucher/coupon card.

7. **Click-to-Reveal Secret Heart Cards**
   - 6 interactive 3D-flippable cards revealing sweet reasons why the recipient is cherished.
   - Responsive grid with gentle hover animations and confetti bursts.

8. **Magic Birthday Wish Dispenser**
   - "Send a Little Birthday Magic ✨" button that summons random heartwarming wishes with celebratory sparkles.

9. **Special Memories Timeline**
   - Vertical milestone journey featuring dates, memorable titles, photos, and nostalgic descriptions.

10. **Grand Finale & "One Last Surprise"**
    - Dreamy night-sky background with starry sparkles.
    - Fullscreen celebration fireworks cascade and sentimental closing blessing.

11. **Persistent Floating Music Player**
    - Floating disc player with spinning vinyl animation, volume control, mute/unmute, and animated visualizer bars.
    - **Zero-Failure Audio**: If `assets/audio/birthday-music.mp3` is provided, it plays smoothly with fade-in. If no audio file is provided yet, a built-in gentle music-box chime progression automatically plays via the **Web Audio API** so audio works right out of the box!

---

## 📂 Project Structure

```text
bheillzie/
├── index.html                    # Semantic HTML5 structure
├── style.css                     # Glassmorphic romantic design system & animations
├── script.js                     # Personalization configuration & interaction engine
├── README.md                     # Documentation & customization guide
└── assets/
    ├── images/                   # Photographs folder
    │   ├── bheillzie.jpg         # Authentic portrait of Bheillzie (Hero & Finale photo)
    │   ├── hero-photo.jpg        # Linked to bheillzie.jpg
    │   ├── motherhood-hero.jpg   # (Optional) Mother & baby featured portrait
    │   ├── motherhood-1.jpg      # (Optional) Motherhood memory slot 1
    │   ├── motherhood-2.jpg      # (Optional) Motherhood memory slot 2
    │   ├── motherhood-3.jpg      # (Optional) Motherhood memory slot 3
    │   ├── photo-1.jpg           # (Optional) Drop your custom memory photos here
    │   ├── photo-2.jpg           # (Optional) Drop your custom memory photos here
    │   └── ...                   # Up to photo-8.jpg for scrapbook slots
    └── audio/                    # Audio folder
        ├── Ken Cezar - 7352 (Official Lyric Video).mp3
        └── birthday-music.mp3    # Active background track
```

---

## 🚀 How to Run Locally

### Option 1: VS Code Live Server (Recommended)
1. Open the folder in **VS Code**.
2. Right-click on `index.html` and click **"Open with Live Server"**.
3. The website will open in your default browser at `http://127.0.0.1:5500/index.html`.

### Option 2: Python HTTP Server
Run the following command in PowerShell / Terminal:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 3: Direct Browser Launch
Double-click `index.html` to open it in Chrome, Edge, Firefox, or Safari.

---

## 🎨 How to Personalize the Website

All personalization options are located at the very top of `script.js` in the `birthdayConfig` object:

```javascript
const birthdayConfig = {
  // 1. Recipient & Sender Names
  recipientName: "Bheillzie",        // Put your recipient's name here
  senderName: "With All My Heart",   // Put your name or signature here
  heroSubtitle: "Today is a celebration of...",

  // 2. Background Music File Path
  musicSrc: "assets/audio/birthday-music.mp3",

  // 3. Hero Typewriter Quotes
  typingMessages: [
    "You make every ordinary moment feel special.",
    "Your laughter is my favorite melody.",
    ...
  ],

  // 4. Personal Birthday Letter
  birthdayLetter: {
    salutation: "My Dearest [NAME],",
    paragraphs: [
      "Your first paragraph here...",
      "Your second paragraph here...",
      ...
    ],
    closing: "With all my love,",
    signature: "Always Yours ♡"
  },

  // 5. Photo Gallery Scrapbook
  gallery: [
    {
      src: "assets/images/photo-1.jpg",
      caption: "A memory to treasure",
      date: "Sunset Memories"
    },
    ...
  ],

  // 6. Secret Heart Notes (6 messages)
  secretNotes: [
    "You make ordinary days feel special.",
    "You deserve every beautiful thing life has to offer.",
    ...
  ],

  // 7. Surprise Gift Box Voucher
  giftBox: {
    title: "Golden Birthday Ticket",
    description: "Unlimited warm hugs and a dinner date!",
    code: "BIRTHDAY-LOVE-2026"
  },

  // 8. Story Timeline Milestones
  timeline: [
    {
      title: "The Beginning",
      date: "Chapter One",
      description: "The very first day our paths crossed...",
      image: "assets/images/photo-1.jpg",
      icon: "✨"
    },
    ...
  ]
};
```

---

## 🎵 Background Music

- **Current Track**: `Ken Cezar - 7352 (Official Lyric Video)`
- **File Location**: `assets/audio/birthday-music.mp3`
- Configured in `script.js` (`musicSrc: "assets/audio/birthday-music.mp3"`, `musicTitle: "Ken Cezar - 7352"`).
- Starts automatically with gentle volume fade-in upon opening the surprise.
- Continues playing seamlessly across all interactions, photo viewing, letters, and celebrations.
- Includes full controls: play/pause, volume slider, mute/unmute, and animated visualizer bars.

---

## 📱 Responsive & Accessibility Support

- **Fully responsive** on all viewports: iPhone/Android phones (320px+), iPads/tablets, and high-resolution desktop screens.
- **Fluid typography** with `clamp()` for perfect readability without horizontal overflow.
- **Touch-friendly** buttons, tap-to-flip cards, and mobile swipe navigation in the gallery lightbox.
- Respects user's **`prefers-reduced-motion`** system preferences.
- Keyboard accessible (`Tab`, `Enter`, `Space`, `ArrowLeft`, `ArrowRight`, `Escape`).
#   B h e i l l z i e  
 