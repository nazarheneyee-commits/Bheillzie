/**
 * ============================================================================
 * INTERACTIVE BIRTHDAY SURPRISE WEBSITE — SCRIPT ENGINE
 * ============================================================================
 * Designed for emotional impact, romantic storytelling, and smooth interactivity.
 * 
 * Instructions:
 * Customize the 'birthdayConfig' object below to personalize the recipient's
 * name, love letter, photo gallery, memories timeline, and secret messages.
 * ============================================================================
 */

/* ============================================================================
   1. PERSONALIZATION CONFIGURATION (EASY TO CUSTOMIZE)
   ============================================================================ */
const birthdayConfig = {
  // Recipient & Sender Information
  recipientName: "Bheillzie",          // Change to the birthday person's name
  senderName: "With All My Heart",       // Change to your name or signature
  heroSubtitle: "Today is a celebration of your radiant smile, your gentle heart, and the magic you bring to everyone around you.",
  birthdayDate: "2026-10-14",            // Optional: YYYY-MM-DD
  
  // Background Audio Source: Ken Cezar - 7352 (Official Lyric Video)
  musicSrc: "assets/audio/birthday-music.mp3",
  musicTitle: "Ken Cezar - 7352",

  // Typewriter Messages for Hero Section
  typingMessages: [
    "You make every ordinary moment feel special.",
    "Your laughter is my favorite melody.",
    "The world is brighter simply because you are in it.",
    "May this year give back all the kindness you bring into the world.",
    "Happy Birthday, my favorite person in the universe! ♡"
  ],

  // Featured Hero Photograph (Using authentic photo of Bheillzie)
  heroPhoto: {
    src: "assets/images/bheillzie.jpg",
    caption: "The sweetest smile on your special day ♡",
    date: "Forever Cherished"
  },

  // Heartfelt Letter Content
  birthdayLetter: {
    salutation: "My Dearest Bheillzie,",
    paragraphs: [
      "Happy birthday to someone who makes life infinitely more beautiful. Today is a celebration of you—your gentle heart, your contagious laugh, your dreams, and all the quiet wonders that make you uniquely special.",
      "Looking back at all the laughter we've shared, the stories we've told, and the memories we've woven together, I find myself overwhelmed with gratitude. Having you in my life feels like finding sunshine on a rainy afternoon.",
      "I hope this new chapter brings you peace of mind, adventures that fill your spirit with wonder, dreams turned into reality, and all the genuine happiness this universe has to offer.",
      "Happy Birthday, Bheillzie. You deserve a day as breathtaking as your soul, and an even more magnificent year ahead."
    ],
    closing: "With all my love and warmest blessings,",
    signature: "Always Yours ♡"
  },

  // Photo Gallery Memories (At least 8 expandable slots)
  gallery: [
    {
      src: "assets/images/photo-1.jpg",
      caption: "Golden hour walks & quiet smiles",
      date: "Sunset Memories"
    },
    {
      src: "assets/images/photo-2.jpg",
      caption: "Sparklers, laughter, and starry skies",
      date: "Night of Magic"
    },
    {
      src: "assets/images/photo-3.jpg",
      caption: "Warm morning coffee & blooming flowers",
      date: "Peaceful Mornings"
    },
    {
      src: "assets/images/photo-4.jpg",
      caption: "A celebration of your radiant glow",
      date: "Birthday Joy"
    },
    {
      src: "assets/images/photo-5.jpg",
      caption: "By the ocean where time stood still",
      date: "Coastal Bliss"
    },
    {
      src: "assets/images/photo-6.jpg",
      caption: "Endless laughter under fairy lights",
      date: "Unforgettable"
    },
    {
      src: "assets/images/photo-7.jpg",
      caption: "Adventures yet to come & dreams to share",
      date: "Future Horizons"
    },
    {
      src: "assets/images/photo-8.jpg",
      caption: "Every memory with you is a treasure",
      date: "In My Heart"
    }
  ],

  // 6 Click-to-Reveal Secret Heart Cards
  secretNotes: [
    "You make ordinary days feel special.",
    "You deserve every beautiful thing life has to offer.",
    "Never forget how amazing and capable you are.",
    "Keep chasing the dreams that make your heart truly happy.",
    "Thank you for simply being you.",
    "One more reason to smile: today is all about celebrating you!"
  ],

  // Surprise Gift Box Rewards
  giftBox: {
    title: "Golden Birthday Ticket",
    description: "This voucher entitles you to: Unlimited warm hugs, your favorite dessert whenever you crave it, and my unconditional support forever!",
    code: "GIFT-BHEILLZIE-LOVE-2026"
  },

  // Magic Birthday Wishes Dispenser
  birthdayWishes: [
    "May your upcoming year be filled with unexpected blessings and boundless joy.",
    "Wishing you 365 days of good health, hearty laughter, and sweet victories.",
    "May every door you knock on open wide with new and exciting opportunities.",
    "May you always be surrounded by people who cherish and uplift your heart.",
    "Wishing you cozy evenings, adventurous mornings, and peaceful nights.",
    "May your sweetest dreams quietly unfold into your everyday reality.",
    "You are worthy of every happiness, today and every single day that follows."
  ],

  // Special Memories Timeline
  timeline: [
    {
      title: "The Beginning",
      date: "Chapter One",
      description: "The very first day our paths crossed. Who would have guessed that a simple greeting would become one of my favorite stories?",
      image: "",
      icon: "✨"
    },
    {
      title: "A Day Worth Remembering",
      date: "Unforgettable Trip",
      description: "Getting lost together, laughing till our stomachs hurt, and realizing that any place is paradise when shared with you.",
      image: "",
      icon: "🌅"
    },
    {
      title: "One of My Favorite Memories",
      date: "Golden Moments",
      description: "Under starry skies with glowing sparklers, sharing dreams and whispering wishes into the midnight breeze.",
      image: "",
      icon: "💖"
    },
    {
      title: "A Moment That Made Me Smile",
      date: "Quiet Comfort",
      description: "Sitting side by side on a lazy Sunday with warm coffee, saying nothing at all, yet understanding everything.",
      image: "",
      icon: "☕"
    },
    {
      title: "More Memories to Come",
      date: "Today & Forever",
      description: "Celebrating another milestone year of your wonderful life. The journey has only just begun!",
      image: "assets/images/bheillzie.jpg",
      icon: "🚀"
    }
  ],

  // Her Journey Into Motherhood Tribute
  motherhood: {
    heroPhoto: {
      src: "assets/images/motherhood-hero.jpg",
      caption: "Holding your whole world in your arms ♡"
    },
    letterSalutation: "Dear Bheilzzie,",
    letterParagraphs: [
      "Life has given you a beautiful new chapter, and now there's a little person who gets to know your love in a way no one else ever will.",
      "I hope you never forget that beyond being a mother, you are still the beautiful, wonderful, and extraordinary woman you have always been. You deserve to be celebrated, cared for, appreciated, and reminded of how special you are.",
      "Motherhood may bring new responsibilities, sleepless nights, unexpected challenges, and moments that change you forever. But I hope it also brings you countless reasons to smile, little moments of happiness, and a love that grows deeper with every passing day.",
      "As you celebrate another year of your life, I wish you happiness not only for the mother you are becoming, but also for the woman you are and all the dreams you still carry in your heart.",
      "May you always find time to care for yourself, chase your dreams, laugh freely, and remember that you deserve love and kindness, too.",
      "Happy Birthday, Bheilzzie. May this new chapter be filled with beautiful memories, a happy heart, and so much love for you and your little one."
    ],
    letterClosing: "With love, always. ♡",
    gallery: [
      {
        src: "assets/images/motherhood-1.jpg",
        caption: "A favorite memory with your little one",
        date: "Purest Love"
      },
      {
        src: "assets/images/motherhood-2.jpg",
        caption: "Sweet everyday giggles & cuddles",
        date: "Quiet Moments"
      },
      {
        src: "assets/images/motherhood-3.jpg",
        caption: "A special milestone in your journey",
        date: "Treasured Chapter"
      }
    ],
    babyWish: "May your home be filled with laughter, your heart with peace, and your days with little moments that remind you how beautiful this journey can be. May you and your little one grow together in love, strength, and happiness. And may you always remember to give yourself the same tenderness you give to everyone you love. ♡"
  },

  // Final Birthday Message
  finalMessage: "May all your beautiful wishes find their way to you. Happy Birthday! ♡"
};

/* ============================================================================
   2. GLOBAL STATE & HELPERS
   ============================================================================ */
let audioCtx = null;
let synthInterval = null;
let isPlayingAudio = false;
let isAudioSynthesized = false;
let currentLightboxIndex = 0;
let candlesBlown = false;
let touchStartX = 0;
let touchEndX = 0;

/**
 * Shows accessible toast notifications
 */
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}

/* ============================================================================
   3. DOM HYDRATION FROM CONFIGURATION
   ============================================================================ */
function hydrateDOM() {
  // Update recipient names across the page
  const recipientPlaceholders = [
    ".recipient-name",
    ".recipient-name-curtain",
    ".recipient-name-nav",
    ".recipient-name-letter",
    ".recipient-name-footer"
  ];
  recipientPlaceholders.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.textContent = birthdayConfig.recipientName;
    });
  });

  // Update sender names
  document.querySelectorAll(".sender-name-footer").forEach(el => {
    el.textContent = birthdayConfig.senderName;
  });

  // Hero Subtitle & Photos
  const heroSubtitleEl = document.getElementById("hero-subtitle");
  if (heroSubtitleEl) heroSubtitleEl.textContent = birthdayConfig.heroSubtitle;

  const heroPhotoEl = document.getElementById("hero-photo");
  if (heroPhotoEl && birthdayConfig.heroPhoto) {
    heroPhotoEl.src = birthdayConfig.heroPhoto.src;
    heroPhotoEl.onerror = () => handleImageError(heroPhotoEl, "hero-photo-fallback");
  }

  const heroCaptionEl = document.getElementById("hero-photo-caption");
  if (heroCaptionEl && birthdayConfig.heroPhoto) {
    heroCaptionEl.textContent = birthdayConfig.heroPhoto.caption;
  }

  const heroDateEl = document.getElementById("hero-photo-date");
  if (heroDateEl && birthdayConfig.heroPhoto) {
    heroDateEl.textContent = birthdayConfig.heroPhoto.date;
  }

  // Hydrate Letter
  const letterGreetingEl = document.getElementById("letter-greeting");
  if (letterGreetingEl) {
    letterGreetingEl.textContent = birthdayConfig.birthdayLetter.salutation || `My Dearest ${birthdayConfig.recipientName},`;
  }

  const letterSenderEl = document.getElementById("letter-sender-name");
  if (letterSenderEl) {
    letterSenderEl.textContent = birthdayConfig.birthdayLetter.signature || birthdayConfig.senderName;
  }

  const letterBodyContainer = document.getElementById("letter-body-paragraphs");
  if (letterBodyContainer && birthdayConfig.birthdayLetter.paragraphs) {
    letterBodyContainer.innerHTML = "";
    birthdayConfig.birthdayLetter.paragraphs.forEach(para => {
      const p = document.createElement("p");
      p.textContent = para;
      letterBodyContainer.appendChild(p);
    });
  }

  // Hydrate Gift Box Reward
  const giftRewardTitle = document.getElementById("gift-reward-title");
  if (giftRewardTitle) giftRewardTitle.textContent = birthdayConfig.giftBox.title;

  const giftRewardDesc = document.getElementById("gift-reward-desc");
  if (giftRewardDesc) giftRewardDesc.textContent = birthdayConfig.giftBox.description;

  const giftRewardCode = document.querySelector(".reward-coupon-code");
  if (giftRewardCode) giftRewardCode.textContent = `CODE: ${birthdayConfig.giftBox.code}`;

  // Hydrate Photo Gallery Scrapbook
  hydrateGallery();

  // Hydrate Secret Heart Cards
  hydrateSecretCards();

  // Hydrate Timeline
  hydrateTimeline();
}

/**
 * Graceful Image Fallback Card Creator
 */
function handleImageError(imgEl, fallbackContainerId) {
  if (fallbackContainerId) {
    const fallbackEl = document.getElementById(fallbackContainerId);
    if (fallbackEl) {
      imgEl.style.display = "none";
      fallbackEl.style.display = "flex";
      return;
    }
  }

  // Replace missing image with an attractive card
  const parent = imgEl.parentElement;
  if (!parent) return;

  // Prevent duplicate placeholders
  if (parent.querySelector(".photo-fallback-card")) return;

  const srcPath = imgEl.getAttribute("src") || "";
  const filename = srcPath.split("/").pop() || "photo.jpg";

  const placeholder = document.createElement("div");
  placeholder.className = "photo-fallback-card";
  placeholder.innerHTML = `
    <span class="fallback-icon">📸</span>
    <span class="fallback-title">Memory Slot</span>
    <span class="fallback-text">Drop <code>${filename}</code> into <code>assets/images/</code></span>
  `;
  imgEl.style.display = "none";
  parent.appendChild(placeholder);
}

/**
 * Hydrates Photo Gallery (8+ Slots)
 */
function hydrateGallery() {
  const galleryGrid = document.getElementById("scrapbook-gallery");
  if (!galleryGrid) return;
  galleryGrid.innerHTML = "";

  const stickers = ["💖", "✨", "🌸", "🦋", "🌷", "⭐", "💌", "🎂"];

  birthdayConfig.gallery.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "scrapbook-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `View photograph ${index + 1}: ${item.caption}`);

    const sticker = stickers[index % stickers.length];

    card.innerHTML = `
      <div class="scrapbook-tape" aria-hidden="true"></div>
      <div class="scrapbook-sticker" aria-hidden="true">${sticker}</div>
      <div class="scrapbook-img-frame">
        <img src="${item.src}" alt="${item.caption}" loading="lazy">
      </div>
      <div class="scrapbook-card-caption">
        <p class="scrapbook-caption-text">${item.caption}</p>
        <span class="scrapbook-meta">${item.date || `Memory #${index + 1}`}</span>
      </div>
    `;

    // Handle image error gracefully
    const img = card.querySelector("img");
    img.onerror = () => handleImageError(img);

    // Click & Keyboard to open in lightbox
    const openCard = () => openLightbox(index);
    card.addEventListener("click", openCard);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCard();
      }
    });

    galleryGrid.appendChild(card);
  });
}

/**
 * Hydrates 6 Secret Heart Cards
 */
function hydrateSecretCards() {
  const container = document.getElementById("secret-cards-grid");
  if (!container) return;
  container.innerHTML = "";

  const heartIcons = ["💝", "💖", "💗", "💓", "💘", "💌"];

  birthdayConfig.secretNotes.forEach((note, index) => {
    const card = document.createElement("div");
    card.className = "secret-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Secret note ${index + 1}. Tap to flip.`);

    card.innerHTML = `
      <div class="secret-card-inner">
        <div class="card-front">
          <div class="card-heart-icon">${heartIcons[index % heartIcons.length]}</div>
          <span class="card-number">Secret Note 0${index + 1}</span>
          <span class="card-tap-hint">Tap to Open ♡</span>
        </div>
        <div class="card-back">
          <p class="card-message-text">“${note}”</p>
        </div>
      </div>
    `;

    const flipCard = () => {
      card.classList.toggle("is-flipped");
      if (card.classList.contains("is-flipped")) {
        createMiniBurst(card);
      }
    };

    card.addEventListener("click", flipCard);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        flipCard();
      }
    });

    container.appendChild(card);
  });
}

/**
 * Hydrates Timeline
 */
function hydrateTimeline() {
  const tree = document.getElementById("timeline-tree");
  if (!tree) return;
  // Keep the spine, clear items
  const spine = tree.querySelector(".timeline-spine");
  tree.innerHTML = "";
  if (spine) tree.appendChild(spine);

  birthdayConfig.timeline.forEach((item, index) => {
    const itemEl = document.createElement("div");
    itemEl.className = "timeline-item";

    itemEl.innerHTML = `
      <div class="timeline-node" aria-hidden="true">${item.icon || "♡"}</div>
      <div class="timeline-card">
        <span class="timeline-badge">${item.date}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.description}</p>
        ${item.image ? `<img class="timeline-thumb" src="${item.image}" alt="${item.title}" loading="lazy">` : ""}
      </div>
    `;

    const img = itemEl.querySelector(".timeline-thumb");
    if (img) img.onerror = () => handleImageError(img);

    tree.appendChild(itemEl);
  });
}

/* ============================================================================
   4. TYPEWRITER EFFECT
   ============================================================================ */
let typeMsgIndex = 0;
let typeCharIndex = 0;
let isDeleting = false;
let typingTimeout = null;

function runTypewriter() {
  const el = document.getElementById("typing-text");
  if (!el || !birthdayConfig.typingMessages.length) return;

  const currentMsg = birthdayConfig.typingMessages[typeMsgIndex];

  if (!isDeleting) {
    el.textContent = currentMsg.substring(0, typeCharIndex + 1);
    typeCharIndex++;

    if (typeCharIndex === currentMsg.length) {
      // Pause before backspacing
      isDeleting = true;
      typingTimeout = setTimeout(runTypewriter, 2800);
      return;
    }
    typingTimeout = setTimeout(runTypewriter, 65);
  } else {
    el.textContent = currentMsg.substring(0, typeCharIndex - 1);
    typeCharIndex--;

    if (typeCharIndex === 0) {
      isDeleting = false;
      typeMsgIndex = (typeMsgIndex + 1) % birthdayConfig.typingMessages.length;
      typingTimeout = setTimeout(runTypewriter, 600);
      return;
    }
    typingTimeout = setTimeout(runTypewriter, 35);
  }
}

/* ============================================================================
   5. BACKGROUND AUDIO & WEB AUDIO API SYNTHESIZER
   ============================================================================ */
/**
 * Built-in Web Audio API soothing music box synthesizer
 * Generates an enchanting gentle birthday lullaby progression if no mp3 is found.
 */
function playSynthesizedChimes() {
  if (isAudioSynthesized) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === "suspended") audioCtx.resume();

    isAudioSynthesized = true;
    updateAudioUI(true, "Music Box");

    // Chord frequency notes for a dreamy music-box lullaby (C major / G / Am / F)
    const melodyNotes = [
      261.63, 329.63, 392.00, 523.25, // C E G C
      392.00, 329.63, 440.00, 523.25, // G E A C
      349.23, 440.00, 523.25, 659.25, // F A C E
      392.00, 493.88, 587.33, 523.25  // G B D C
    ];

    let noteIdx = 0;

    synthInterval = setInterval(() => {
      if (!isPlayingAudio) return;
      playSoftChime(melodyNotes[noteIdx % melodyNotes.length]);
      noteIdx++;
    }, 600);

  } catch (err) {
    console.warn("Synthesizer error:", err);
  }
}

function playSoftChime(frequency) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  // Gentle bell/chime harmonics
  osc.type = "sine";
  osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  const volSlider = document.getElementById("volume-slider");
  const baseVol = volSlider ? parseFloat(volSlider.value) * 0.18 : 0.12;

  gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(baseVol, audioCtx.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 1.25);
}

function stopSynthesizedChimes() {
  if (synthInterval) clearInterval(synthInterval);
  synthInterval = null;
  isAudioSynthesized = false;
}

let fadeTimer = null;

function initAudioEngine() {
  const audioEl = document.getElementById("birthday-audio");
  const playPauseBtn = document.getElementById("btn-play-pause");
  const muteBtn = document.getElementById("btn-mute");
  const volumeSlider = document.getElementById("volume-slider");
  const songTitleEl = document.querySelector(".player-song-title");

  // Display song title
  if (songTitleEl && birthdayConfig.musicTitle) {
    songTitleEl.textContent = birthdayConfig.musicTitle;
  }

  if (!audioEl) return;

  // Set source to Ken Cezar - 7352
  audioEl.src = birthdayConfig.musicSrc;
  audioEl.loop = true;

  // Sync UI automatically on audio element state changes
  audioEl.addEventListener("play", () => {
    isPlayingAudio = true;
    updateAudioUI(true, "Playing");
  });

  audioEl.addEventListener("pause", () => {
    if (!audioEl.seeking) {
      isPlayingAudio = false;
      updateAudioUI(false, "Paused");
    }
  });

  audioEl.addEventListener("error", (e) => {
    console.warn("Audio element encountered an issue:", e);
    // Fall back to synthesized gentle chimes if file cannot be loaded
    if (isPlayingAudio) {
      playSynthesizedChimes();
    }
  });

  // Play / Pause button toggle
  if (playPauseBtn) {
    playPauseBtn.addEventListener("click", () => {
      toggleAudio();
    });
  }

  // Mute / Unmute toggle
  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      audioEl.muted = !audioEl.muted;
      const muteIcon = document.getElementById("mute-icon");
      if (muteIcon) muteIcon.textContent = audioEl.muted ? "🔇" : "🔊";
      showToast(audioEl.muted ? "Audio muted" : "Audio unmuted");
    });
  }

  // Volume slider with live adjustment
  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      audioEl.volume = val;
      if (audioEl.muted && val > 0) {
        audioEl.muted = false;
        const muteIcon = document.getElementById("mute-icon");
        if (muteIcon) muteIcon.textContent = "🔊";
      }
    });
  }
}

function toggleAudio() {
  const audioEl = document.getElementById("birthday-audio");
  if (!isPlayingAudio || (audioEl && audioEl.paused)) {
    startAudioWithFade();
  } else {
    pauseAudio();
  }
}

function startAudioWithFade() {
  const audioEl = document.getElementById("birthday-audio");
  const volumeSlider = document.getElementById("volume-slider");
  const targetVol = volumeSlider ? parseFloat(volumeSlider.value) : 0.75;

  // Prevent restarting if already actively playing
  if (audioEl && !audioEl.paused && isPlayingAudio) {
    return;
  }

  if (fadeTimer) {
    clearInterval(fadeTimer);
    fadeTimer = null;
  }

  isPlayingAudio = true;
  updateAudioUI(true, "Playing");

  if (audioEl) {
    audioEl.volume = 0;
    const playPromise = audioEl.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Smooth 30-step fade-in over ~1.5s
          let current = 0;
          const fadeStep = targetVol / 30;
          fadeTimer = setInterval(() => {
            current = Math.min(targetVol, current + fadeStep);
            audioEl.volume = current;
            if (current >= targetVol) {
              clearInterval(fadeTimer);
              fadeTimer = null;
            }
          }, 50);
        })
        .catch((err) => {
          console.warn("Autoplay restriction prevented audio start:", err);
          isPlayingAudio = false;
          updateAudioUI(false, "Click Play");
          showToast("🎵 Tap the music disc to play Ken Cezar - 7352!");
        });
    }
  } else {
    playSynthesizedChimes();
  }
}

function pauseAudio() {
  const audioEl = document.getElementById("birthday-audio");
  
  if (fadeTimer) {
    clearInterval(fadeTimer);
    fadeTimer = null;
  }

  if (audioEl && !audioEl.paused) {
    // Gentle quick fade-out
    let current = audioEl.volume;
    const fadeOutStep = current / 10;
    const fadeOutTimer = setInterval(() => {
      current = Math.max(0, current - fadeOutStep);
      audioEl.volume = current;
      if (current <= 0) {
        clearInterval(fadeOutTimer);
        audioEl.pause();
        isPlayingAudio = false;
        updateAudioUI(false, "Paused");
      }
    }, 25);
  } else {
    isPlayingAudio = false;
    stopSynthesizedChimes();
    updateAudioUI(false, "Paused");
  }
}

function updateAudioUI(playing, statusText) {
  const widget = document.getElementById("floating-music-player");
  const badge = document.getElementById("player-status-badge");
  if (widget) {
    if (playing) {
      widget.classList.add("is-playing");
    } else {
      widget.classList.remove("is-playing");
    }
  }
  if (badge) {
    badge.textContent = statusText;
  }
}

/* ============================================================================
   6. AMBIENT PARTICLE CANVAS (HEARTS, STARS, BOKEH)
   ============================================================================ */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // Check reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(50, Math.floor(width / 25));

  class FloatingParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 20;
      this.size = Math.random() * 8 + 4;
      this.speedY = Math.random() * 0.8 + 0.3;
      this.speedX = Math.sin(Math.random() * Math.PI * 2) * 0.5;
      this.type = Math.random() > 0.4 ? "heart" : "star";
      this.opacity = Math.random() * 0.5 + 0.2;
      this.fadeSpeed = Math.random() * 0.005 + 0.002;
      this.swingAngle = Math.random() * Math.PI * 2;
      this.color = Math.random() > 0.5 ? "255, 94, 133" : "248, 203, 104";
    }

    update() {
      this.y -= this.speedY;
      this.swingAngle += 0.02;
      this.x += Math.sin(this.swingAngle) * 0.5;

      if (this.y < -20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(${this.color}, 0.6)`;

      if (this.type === "heart") {
        const s = this.size * 0.6;
        ctx.beginPath();
        ctx.moveTo(0, s / 4);
        ctx.quadraticCurveTo(0, 0, s / 2, 0);
        ctx.quadraticCurveTo(s, 0, s, s / 2);
        ctx.quadraticCurveTo(s, s, 0, s * 1.5);
        ctx.quadraticCurveTo(-s, s, -s, s / 2);
        ctx.quadraticCurveTo(-s, 0, -s / 2, 0);
        ctx.quadraticCurveTo(0, 0, 0, s / 4);
        ctx.fill();
      } else {
        // Glowing star / sparkle
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.25, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new FloatingParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.update();
      p.draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* ============================================================================
   7. CUSTOM CONFETTI & FIREWORKS BURST ENGINE
   ============================================================================ */
function triggerConfetti(originX = window.innerWidth / 2, originY = window.innerHeight / 2, count = 75) {
  const colors = ["#ff5e85", "#f8cb68", "#ffa3b8", "#b39ddb", "#ffffff", "#ffd54f"];
  
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "confetti-particle";
    
    const size = Math.random() * 10 + 6;
    const isHeart = Math.random() > 0.6;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    el.style.position = "fixed";
    el.style.left = `${originX}px`;
    el.style.top = `${originY}px`;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundColor = isHeart ? "transparent" : color;
    el.style.borderRadius = isHeart ? "0" : (Math.random() > 0.5 ? "50%" : "2px");
    el.style.pointerEvents = "none";
    el.style.zIndex = "99999";
    
    if (isHeart) {
      el.textContent = "♡";
      el.style.color = color;
      el.style.fontSize = `${size * 1.4}px`;
      el.style.lineHeight = "1";
    }

    document.body.appendChild(el);

    // Physics vector
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 14 + 6;
    let vx = Math.cos(angle) * velocity;
    let vy = Math.sin(angle) * velocity - 4;
    let posX = originX;
    let posY = originY;
    let rot = Math.random() * 360;
    let rotSpeed = (Math.random() - 0.5) * 20;
    let opacity = 1;

    const gravity = 0.45;

    function drop() {
      posX += vx;
      posY += vy;
      vy += gravity;
      vx *= 0.98;
      rot += rotSpeed;
      opacity -= 0.012;

      el.style.transform = `translate(${posX - originX}px, ${posY - originY}px) rotate(${rot}deg)`;
      el.style.opacity = Math.max(0, opacity);

      if (opacity > 0) {
        requestAnimationFrame(drop);
      } else {
        el.remove();
      }
    }

    requestAnimationFrame(drop);
  }
}

function createMiniBurst(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  triggerConfetti(centerX, centerY, 25);
}

/* ============================================================================
   8. OPENING SCREEN (CURTAIN)
   ============================================================================ */
function initCurtain() {
  const curtain = document.getElementById("surprise-curtain");
  const openBtn = document.getElementById("btn-open-surprise");
  const skipBtn = document.getElementById("btn-skip-intro");

  if (!curtain) return;

  function closeCurtain() {
    curtain.classList.add("curtain-hidden");
    startAudioWithFade();
    triggerConfetti(window.innerWidth / 2, window.innerHeight / 2, 80);
    showToast(`Happy Birthday, ${birthdayConfig.recipientName}! ♡`);
  }

  if (openBtn) {
    openBtn.addEventListener("click", closeCurtain);
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      curtain.classList.add("curtain-hidden");
    });
  }
}

/* ============================================================================
   9. INTERACTIVE CAKE & CANDLE BLOWING
   ============================================================================ */
function initCakeInteractions() {
  const blowBtn = document.getElementById("btn-blow-candles");
  const relightBtn = document.getElementById("btn-relight-candles");
  const candles = document.querySelectorAll(".candle");
  const statusMsg = document.getElementById("cake-status-msg");
  const statusIcon = document.getElementById("cake-status-icon");
  const statusCard = document.getElementById("cake-status-card");

  if (!blowBtn) return;

  blowBtn.addEventListener("click", () => {
    candlesBlown = true;
    candles.forEach(c => c.classList.add("extinguished"));

    if (statusMsg) statusMsg.textContent = "Make a wish! ✨ May all your dreams come true! 🌟";
    if (statusIcon) statusIcon.textContent = "🎉";
    if (statusCard) statusCard.classList.add("wish-made");

    // Confetti explosion
    const cakeRect = document.getElementById("cake-wrapper").getBoundingClientRect();
    triggerConfetti(cakeRect.left + cakeRect.width / 2, cakeRect.top + 30, 90);

    blowBtn.style.display = "none";
    if (relightBtn) relightBtn.style.display = "inline-flex";

    showToast("✨ Make a wish in your heart!");
  });

  if (relightBtn) {
    relightBtn.addEventListener("click", () => {
      candlesBlown = false;
      candles.forEach(c => c.classList.remove("extinguished"));

      if (statusMsg) statusMsg.textContent = "The candles are burning bright. What will you wish for?";
      if (statusIcon) statusIcon.textContent = "🕯️";
      if (statusCard) statusCard.classList.remove("wish-made");

      relightBtn.style.display = "none";
      blowBtn.style.display = "inline-flex";

      showToast("Candles relit with birthday warmth! 🕯️");
    });
  }
}

/* ============================================================================
   10. PHOTO GALLERY LIGHTBOX (KEYBOARD + TOUCH SUPPORT)
   ============================================================================ */
function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const backdrop = document.getElementById("lightbox-backdrop");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (!modal) return;

  closeBtn.addEventListener("click", closeLightbox);
  backdrop.addEventListener("click", closeLightbox);

  prevBtn.addEventListener("click", () => navigateLightbox(-1));
  nextBtn.addEventListener("click", () => navigateLightbox(1));

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (modal.style.display !== "flex") return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });

  // Touch Swipe on mobile
  modal.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) navigateLightbox(1); // Swipe left -> Next
      else navigateLightbox(-1);          // Swipe right -> Prev
    }
  }, { passive: true });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const modal = document.getElementById("lightbox-modal");
  updateLightboxContent();
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  modal.style.display = "none";
  document.body.style.overflow = "";
}

function navigateLightbox(dir) {
  const total = birthdayConfig.gallery.length;
  currentLightboxIndex = (currentLightboxIndex + dir + total) % total;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = birthdayConfig.gallery[currentLightboxIndex];
  const imgEl = document.getElementById("lightbox-image");
  const captionEl = document.getElementById("lightbox-caption");
  const counterEl = document.getElementById("lightbox-counter");
  const fallbackEl = document.getElementById("lightbox-fallback");

  if (imgEl) {
    imgEl.style.display = "block";
    if (fallbackEl) fallbackEl.style.display = "none";
    imgEl.src = item.src;
    imgEl.onerror = () => {
      imgEl.style.display = "none";
      if (fallbackEl) {
        fallbackEl.style.display = "block";
        const filename = item.src.split("/").pop() || "photo.jpg";
        document.getElementById("lightbox-fallback-text").innerHTML = `
          Memory Slot #${currentLightboxIndex + 1}<br>
          <small>Add <code>${filename}</code> to <code>assets/images/</code> to display your photo here.</small>
        `;
      }
    };
  }

  if (captionEl) captionEl.textContent = item.caption;
  if (counterEl) counterEl.textContent = `${currentLightboxIndex + 1} / ${birthdayConfig.gallery.length}`;
}

/* ============================================================================
   11. HEARTFELT BIRTHDAY LETTER (INTERACTIVE ENVELOPE)
   ============================================================================ */
function initLetterEnvelope() {
  const envelope = document.getElementById("envelope-wrapper");
  const waxSeal = document.getElementById("wax-seal");
  const closeLetterBtn = document.getElementById("btn-close-letter");
  const directBtn = document.getElementById("btn-read-letter-direct");

  if (!envelope) return;

  function openEnvelope() {
    envelope.classList.add("is-open");
    const rect = waxSeal ? waxSeal.getBoundingClientRect() : envelope.getBoundingClientRect();
    triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 35);
  }

  function closeEnvelope() {
    envelope.classList.remove("is-open");
  }

  if (waxSeal) waxSeal.addEventListener("click", openEnvelope);
  if (closeLetterBtn) closeLetterBtn.addEventListener("click", closeEnvelope);
  if (directBtn) directBtn.addEventListener("click", openEnvelope);
}

/* ============================================================================
   12. SURPRISE GIFT BOX
   ============================================================================ */
function initGiftBox() {
  const wrapper = document.getElementById("gift-box-wrapper");
  const box = document.getElementById("gift-box");
  const rewardCard = document.getElementById("gift-reward-card");
  const closeGiftBtn = document.getElementById("btn-close-gift");

  if (!box || !wrapper) return;

  function openGift() {
    wrapper.classList.add("is-open");
    if (rewardCard) rewardCard.style.display = "block";
    const rect = box.getBoundingClientRect();
    triggerConfetti(rect.left + rect.width / 2, rect.top, 55);
    showToast("🎁 A special gift unlocked!");
  }

  function closeGift() {
    wrapper.classList.remove("is-open");
    if (rewardCard) rewardCard.style.display = "none";
  }

  box.addEventListener("click", openGift);
  box.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openGift();
    }
  });

  if (closeGiftBtn) closeGiftBtn.addEventListener("click", closeGift);
}

/* ============================================================================
   13. MAGIC BIRTHDAY WISH GENERATOR
   ============================================================================ */
function initMagicWishes() {
  const btn = document.getElementById("btn-magic-wish");
  const wishBox = document.getElementById("dynamic-wish-box");
  const quoteEl = document.getElementById("dynamic-wish-quote");
  const badgeEl = document.getElementById("wish-counter-badge");

  if (!btn || !quoteEl) return;

  let lastIndex = -1;

  btn.addEventListener("click", () => {
    const list = birthdayConfig.birthdayWishes;
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * list.length);
    } while (nextIndex === lastIndex && list.length > 1);

    lastIndex = nextIndex;

    quoteEl.textContent = `“${list[nextIndex]}”`;
    if (badgeEl) badgeEl.textContent = `Wish #${nextIndex + 1}`;
    if (wishBox) wishBox.style.display = "block";

    const rect = btn.getBoundingClientRect();
    triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 45);
    showToast("✨ Birthday magic sent!");
  });
}

/* ============================================================================
   14. GRAND FINALE & "ONE LAST SURPRISE"
   ============================================================================ */
function initGrandFinale() {
  const grandBtn = document.getElementById("btn-grand-surprise");
  const modal = document.getElementById("grand-finale-modal");
  const closeBtn = document.getElementById("grand-modal-close");
  const backdrop = document.getElementById("grand-modal-backdrop");
  const celebrateMoreBtn = document.getElementById("btn-finale-celebrate");
  const backToTopBtn = document.getElementById("btn-back-to-top");
  const heroSurpriseBtn = document.getElementById("btn-surprise-hero");

  if (!grandBtn || !modal) return;

  function openGrandModal() {
    modal.style.display = "flex";
    triggerConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 100);
    setTimeout(() => {
      triggerConfetti(window.innerWidth * 0.3, window.innerHeight * 0.3, 50);
      triggerConfetti(window.innerWidth * 0.7, window.innerHeight * 0.3, 50);
    }, 400);
  }

  function closeGrandModal() {
    modal.style.display = "none";
  }

  grandBtn.addEventListener("click", openGrandModal);
  if (closeBtn) closeBtn.addEventListener("click", closeGrandModal);
  if (backdrop) backdrop.addEventListener("click", closeGrandModal);

  if (celebrateMoreBtn) {
    celebrateMoreBtn.addEventListener("click", () => {
      triggerConfetti(window.innerWidth / 2, window.innerHeight / 2, 120);
      showToast("🎆 Happy Birthday to You! ♡");
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (heroSurpriseBtn) {
    heroSurpriseBtn.addEventListener("click", () => {
      const section = document.getElementById("cake-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
      triggerConfetti(window.innerWidth / 2, window.innerHeight / 2, 40);
    });
  }
}

/* ============================================================================
   14B. HER JOURNEY INTO MOTHERHOOD — A TRIBUTE TO BHEILZZIE
   ============================================================================ */
function initMotherhoodSection() {
  const mConfig = birthdayConfig.motherhood;
  if (!mConfig) return;

  // Hydrate Hero Motherhood Photo
  const heroImg = document.getElementById("motherhood-hero-img");
  if (heroImg && mConfig.heroPhoto) {
    heroImg.src = mConfig.heroPhoto.src;
    heroImg.onerror = () => handleImageError(heroImg, "motherhood-hero-fallback");
  }

  const heroCaption = document.getElementById("motherhood-hero-caption");
  if (heroCaption && mConfig.heroPhoto) {
    heroCaption.textContent = mConfig.heroPhoto.caption;
  }

  // Hydrate Motherhood Letter Content
  const letterSalutation = document.getElementById("motherhood-letter-salutation");
  if (letterSalutation && mConfig.letterSalutation) {
    letterSalutation.textContent = mConfig.letterSalutation;
  }

  const letterContainer = document.getElementById("motherhood-letter-paragraphs");
  if (letterContainer && mConfig.letterParagraphs) {
    letterContainer.innerHTML = "";
    mConfig.letterParagraphs.forEach(para => {
      const p = document.createElement("p");
      p.textContent = para;
      letterContainer.appendChild(p);
    });
  }

  // Interactive Motherhood Envelope
  const envBtn = document.getElementById("motherhood-envelope-btn");
  const letterCard = document.getElementById("motherhood-letter-card");
  const closeLetterBtn = document.getElementById("btn-close-motherhood-letter");

  if (envBtn && letterCard) {
    envBtn.addEventListener("click", () => {
      envBtn.classList.add("is-open");
      letterCard.style.display = "block";
      const rect = envBtn.getBoundingClientRect();
      triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);
      showToast("🌸 For the mother in you ♡");
    });

    if (closeLetterBtn) {
      closeLetterBtn.addEventListener("click", () => {
        letterCard.style.display = "none";
        envBtn.classList.remove("is-open");
      });
    }
  }

  // Hydrate Motherhood 3-Card Mini Gallery ("Little Moments, Big Love")
  const galleryGrid = document.getElementById("motherhood-gallery-grid");
  if (galleryGrid && mConfig.gallery) {
    galleryGrid.innerHTML = "";
    const icons = ["🌸", "🍼", "💖"];

    mConfig.gallery.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "motherhood-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Motherhood memory ${index + 1}: ${item.caption}`);

      card.innerHTML = `
        <div class="scrapbook-tape motherhood-tape" aria-hidden="true"></div>
        <div class="scrapbook-sticker" aria-hidden="true">${icons[index % icons.length]}</div>
        <div class="scrapbook-img-frame">
          <img src="${item.src}" alt="${item.caption}" loading="lazy">
        </div>
        <div class="scrapbook-card-caption">
          <p class="scrapbook-caption-text">${item.caption}</p>
          <span class="scrapbook-meta">${item.date || `Moment #${index + 1}`}</span>
        </div>
      `;

      const img = card.querySelector("img");
      if (img) img.onerror = () => handleImageError(img);

      // Lightbox interaction
      const openCard = () => {
        const modal = document.getElementById("lightbox-modal");
        const lightboxImg = document.getElementById("lightbox-image");
        const lightboxCaption = document.getElementById("lightbox-caption");
        const lightboxCounter = document.getElementById("lightbox-counter");
        const lightboxFallback = document.getElementById("lightbox-fallback");

        if (lightboxImg) {
          lightboxImg.style.display = "block";
          if (lightboxFallback) lightboxFallback.style.display = "none";
          lightboxImg.src = item.src;
          lightboxImg.onerror = () => {
            lightboxImg.style.display = "none";
            if (lightboxFallback) {
              lightboxFallback.style.display = "block";
              const filename = item.src.split("/").pop() || "photo.jpg";
              document.getElementById("lightbox-fallback-text").innerHTML = `
                Motherhood Moment #${index + 1}<br>
                <small>Add <code>${filename}</code> to <code>assets/images/</code> to display your photo here.</small>
              `;
            }
          };
        }
        if (lightboxCaption) lightboxCaption.textContent = item.caption;
        if (lightboxCounter) lightboxCounter.textContent = `Motherhood ${index + 1} / 3`;
        if (modal) {
          modal.style.display = "flex";
          document.body.style.overflow = "hidden";
        }
      };

      card.addEventListener("click", openCard);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openCard();
        }
      });

      galleryGrid.appendChild(card);
    });
  }

  // Gentle Interactive Wish Button
  const wishBtn = document.getElementById("btn-motherhood-wish");
  const wishCard = document.getElementById("motherhood-wish-card");
  const wishQuote = document.getElementById("motherhood-wish-quote");

  if (wishBtn && wishCard) {
    wishBtn.addEventListener("click", () => {
      if (wishQuote && mConfig.babyWish) {
        wishQuote.textContent = `“${mConfig.babyWish}”`;
      }
      wishCard.style.display = "block";
      const rect = wishBtn.getBoundingClientRect();
      triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 50);
      showToast("✨ A gentle blessing for you and your baby!");
    });
  }
}

/* ============================================================================
   15. INITIALIZATION ON DOM READY
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  hydrateDOM();
  runTypewriter();
  initCurtain();
  initAudioEngine();
  initAmbientCanvas();
  initCakeInteractions();
  initLightbox();
  initMotherhoodSection();
  initLetterEnvelope();
  initGiftBox();
  initMagicWishes();
  initGrandFinale();
});
