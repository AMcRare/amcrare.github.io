/* ========================================
  COLOR THEORY PROJECT
======================================== */

/* ========================================
  COLOR PALETTES
  Students should replace these colors
  with their own colors.
======================================== */

const palettes = {
  palette1: {
    name: "Complementary",
    primary: "#D72D5A",
    secondary: "#96455B",
    accent: "#1EA12F",
    background: "#DAE6DC",
    surface: "#F0F5F1",
    text: "#573E44"
  },
  palette2: {
    name: "Analogous",
    primary: "#003D20",
    secondary: "#003D34",
    accent: "#00323D",
    background: "#CCD8CE",
    surface: "#EBEFEB",
    text: "#0C3D00"
  },
  palette3: {
    name: "Triadic",
    primary: "#C2AC1D",
    secondary: "#C21D7F",
    accent: "#1DB6C2",
    background: "#E2E0D7",
    surface: "#F3F3EF",
    text: "#422B39"
  }
};

/* ========================================
  APPLY SELECTED PALETTE
======================================== */

function applyPalette(palette) {
  const root = document.documentElement;
/* Apply palette colors */
  root.style.setProperty("--primary", palette.primary);
  root.style.setProperty("--secondary", palette.secondary);
  root.style.setProperty("--accent", palette.accent);
  root.style.setProperty("--background", palette.background);
  root.style.setProperty("--surface", palette.surface);
  root.style.setProperty("--text", palette.text);

/* Update HEX values */
  document.getElementById("primaryHex").textContent = palette.primary;
  document.getElementById("secondaryHex").textContent = palette.secondary;
  document.getElementById("accentHex").textContent = palette.accent;
  document.getElementById("backgroundHex").textContent = palette.background;
  document.getElementById("textHex").textContent = palette.text;
}


/* ========================================
  PALETTE BUTTONS
======================================== */

const paletteButtons = document.querySelectorAll("[data-palette]");

paletteButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const paletteName = button.dataset.palette;
    const selectedPalette = palettes[paletteName];
    applyPalette(selectedPalette);
  });
});

/* ========================================
  INITIAL PALETTE
======================================== */

applyPalette(palettes.palette1);