"use client";

// ─── CONSTELLATION BACKGROUND ─────────────────────────────────────────────────
//
// Repeating SVG tile (960x960px) containing real constellation patterns:
// Orion, Virgo, Scorpius, Gemini, Cancer, Leo, Taurus, and Southern Cross.
// Star positions are proportional to real sky coordinates.
// Cool blue-white tones to match the real night sky.

export default function ConstellationBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(SVG_TILE)}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "960px 960px",
        opacity: 0.55,
      }}
    />
  );
}

// ─── SVG TILE ─────────────────────────────────────────────────────────────────

const SVG_TILE = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="960">

  <!-- ── SCATTERED BACKGROUND STARS ──────────────────────────────────────── -->
  <circle cx="18"  cy="42"  r="0.7" fill="#a8c4e8" opacity="0.45"/>
  <circle cx="75"  cy="18"  r="0.9" fill="#c8ddf5" opacity="0.5"/>
  <circle cx="140" cy="55"  r="0.7" fill="#8ab0d8" opacity="0.4"/>
  <circle cx="210" cy="28"  r="0.8" fill="#b0ccec" opacity="0.45"/>
  <circle cx="290" cy="60"  r="0.7" fill="#a8c4e8" opacity="0.4"/>
  <circle cx="490" cy="22"  r="0.9" fill="#c8ddf5" opacity="0.5"/>
  <circle cx="560" cy="50"  r="0.7" fill="#8ab0d8" opacity="0.4"/>
  <circle cx="640" cy="18"  r="0.8" fill="#b0ccec" opacity="0.45"/>
  <circle cx="730" cy="44"  r="0.7" fill="#a8c4e8" opacity="0.4"/>
  <circle cx="820" cy="25"  r="1"   fill="#d8eaff" opacity="0.55"/>
  <circle cx="900" cy="55"  r="0.7" fill="#8ab0d8" opacity="0.4"/>
  <circle cx="32"  cy="140" r="0.8" fill="#b0ccec" opacity="0.45"/>
  <circle cx="110" cy="160" r="0.7" fill="#a8c4e8" opacity="0.4"/>
  <circle cx="480" cy="130" r="0.8" fill="#b0ccec" opacity="0.45"/>
  <circle cx="600" cy="155" r="0.7" fill="#a8c4e8" opacity="0.4"/>
  <circle cx="700" cy="130" r="0.9" fill="#c8ddf5" opacity="0.5"/>
  <circle cx="800" cy="160" r="0.7" fill="#8ab0d8" opacity="0.4"/>
  <circle cx="880" cy="140" r="0.8" fill="#b0ccec" opacity="0.45"/>
  <circle cx="940" cy="120" r="0.7" fill="#a8c4e8" opacity="0.4"/>
  <circle cx="55"  cy="500" r="0.8" fill="#b0ccec" opacity="0.45"/>
  <circle cx="130" cy="520" r="0.7" fill="#a8c4e8" opacity="0.4"/>
  <circle cx="440" cy="490" r="0.9" fill="#c8ddf5" opacity="0.5"/>
  <circle cx="530" cy="510" r="0.7" fill="#8ab0d8" opacity="0.4"/>
  <circle cx="900" cy="480" r="0.8" fill="#b0ccec" opacity="0.45"/>
  <circle cx="950" cy="510" r="0.7" fill="#a8c4e8" opacity="0.4"/>
  <circle cx="20"  cy="700" r="0.9" fill="#c8ddf5" opacity="0.5"/>
  <circle cx="100" cy="720" r="0.7" fill="#8ab0d8" opacity="0.4"/>
  <circle cx="460" cy="680" r="0.8" fill="#b0ccec" opacity="0.45"/>
  <circle cx="540" cy="710" r="0.7" fill="#a8c4e8" opacity="0.4"/>
  <circle cx="910" cy="700" r="0.9" fill="#c8ddf5" opacity="0.5"/>
  <circle cx="960" cy="730" r="0.7" fill="#8ab0d8" opacity="0.4"/>
  <circle cx="40"  cy="870" r="0.8" fill="#b0ccec" opacity="0.45"/>
  <circle cx="120" cy="890" r="0.7" fill="#a8c4e8" opacity="0.4"/>
  <circle cx="460" cy="860" r="0.9" fill="#c8ddf5" opacity="0.5"/>
  <circle cx="550" cy="880" r="0.7" fill="#8ab0d8" opacity="0.4"/>
  <circle cx="870" cy="870" r="0.8" fill="#b0ccec" opacity="0.45"/>
  <circle cx="940" cy="900" r="0.7" fill="#a8c4e8" opacity="0.4"/>

  <!-- ── ORION (top-left) ──────────────────────────────────────────────────── -->
  <!-- Lines -->
  <g stroke="#6a94c8" stroke-width="0.5" fill="none" opacity="0.4">
    <line x1="82"  y1="220" x2="148" y2="268"/>
    <line x1="148" y1="268" x2="185" y2="258"/>
    <line x1="82"  y1="220" x2="185" y2="258"/>
    <line x1="100" y1="310" x2="148" y2="268"/>
    <line x1="185" y1="258" x2="210" y2="318"/>
    <line x1="100" y1="310" x2="118" y2="350"/>
    <line x1="118" y1="350" x2="130" y2="388"/>
    <line x1="210" y1="318" x2="198" y2="358"/>
    <line x1="198" y1="358" x2="202" y2="395"/>
    <line x1="130" y1="388" x2="198" y2="358"/>
  </g>
  <!-- Betelgeuse (warm, slightly larger) -->
  <circle cx="82"  cy="220" r="2.8" fill="#e8c49a" opacity="0.75"/>
  <!-- Rigel (blue-white, bright) -->
  <circle cx="202" cy="395" r="2.6" fill="#d8eaff" opacity="0.8"/>
  <!-- Bellatrix -->
  <circle cx="185" cy="258" r="1.8" fill="#c8ddf5" opacity="0.7"/>
  <!-- Belt: Alnitak, Alnilam, Mintaka -->
  <circle cx="100" cy="310" r="1.8" fill="#d0e4ff" opacity="0.7"/>
  <circle cx="148" cy="268" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="210" cy="318" r="1.8" fill="#d0e4ff" opacity="0.7"/>
  <!-- Saiph -->
  <circle cx="130" cy="388" r="2"   fill="#c0d8f0" opacity="0.7"/>
  <!-- Sword / Orion Nebula area -->
  <circle cx="118" cy="350" r="1.2" fill="#d8eaff" opacity="0.55"/>
  <circle cx="198" cy="358" r="1.2" fill="#c8ddf5" opacity="0.55"/>

  <!-- ── TAURUS (top-center, near Orion) ──────────────────────────────────── -->
  <g stroke="#6a94c8" stroke-width="0.5" fill="none" opacity="0.35">
    <line x1="310" y1="200" x2="355" y2="230"/>
    <line x1="355" y1="230" x2="390" y2="215"/>
    <line x1="355" y1="230" x2="370" y2="270"/>
    <line x1="370" y1="270" x2="340" y2="305"/>
    <line x1="370" y1="270" x2="405" y2="295"/>
    <line x1="310" y1="200" x2="290" y2="240"/>
    <line x1="290" y1="240" x2="265" y2="260"/>
  </g>
  <!-- Aldebaran (orange giant) -->
  <circle cx="310" cy="200" r="2.4" fill="#f0b87a" opacity="0.75"/>
  <circle cx="355" cy="230" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="390" cy="215" r="1.4" fill="#b8d0f0" opacity="0.6"/>
  <circle cx="370" cy="270" r="1.8" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="340" cy="305" r="1.4" fill="#b8d0f0" opacity="0.6"/>
  <circle cx="405" cy="295" r="1.4" fill="#b8d0f0" opacity="0.6"/>
  <!-- Pleiades cluster -->
  <circle cx="265" cy="260" r="1.2" fill="#d8eaff" opacity="0.6"/>
  <circle cx="290" cy="240" r="1.0" fill="#d8eaff" opacity="0.55"/>
  <circle cx="258" cy="245" r="0.9" fill="#c8ddf5" opacity="0.5"/>
  <circle cx="272" cy="252" r="0.8" fill="#c8ddf5" opacity="0.5"/>
  <circle cx="280" cy="258" r="0.8" fill="#d8eaff" opacity="0.5"/>

  <!-- ── GEMINI (top-center-right) ─────────────────────────────────────────── -->
  <g stroke="#6a94c8" stroke-width="0.5" fill="none" opacity="0.38">
    <line x1="510" y1="100" x2="495" y2="155"/>
    <line x1="495" y1="155" x2="480" y2="210"/>
    <line x1="480" y1="210" x2="468" y2="265"/>
    <line x1="468" y1="265" x2="458" y2="305"/>
    <line x1="560" y1="95"  x2="548" y2="150"/>
    <line x1="548" y1="150" x2="535" y2="205"/>
    <line x1="535" y1="205" x2="522" y2="258"/>
    <line x1="522" y1="258" x2="512" y2="298"/>
    <line x1="510" y1="100" x2="560" y2="95"/>
    <line x1="495" y1="155" x2="548" y2="150"/>
    <line x1="480" y1="210" x2="535" y2="205"/>
  </g>
  <!-- Castor -->
  <circle cx="510" cy="100" r="2.2" fill="#d8eaff" opacity="0.75"/>
  <!-- Pollux (slightly orange) -->
  <circle cx="560" cy="95"  r="2.4" fill="#f0d0a0" opacity="0.75"/>
  <circle cx="495" cy="155" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="548" cy="150" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="480" cy="210" r="1.4" fill="#b8d0f0" opacity="0.6"/>
  <circle cx="535" cy="205" r="1.4" fill="#b8d0f0" opacity="0.6"/>
  <circle cx="468" cy="265" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="522" cy="258" r="1.4" fill="#b8d0f0" opacity="0.6"/>
  <circle cx="458" cy="305" r="1.8" fill="#d0e4ff" opacity="0.7"/>
  <circle cx="512" cy="298" r="1.6" fill="#c8ddf5" opacity="0.65"/>

  <!-- ── CANCER (center) ────────────────────────────────────────────────────── -->
  <g stroke="#6a94c8" stroke-width="0.5" fill="none" opacity="0.32">
    <line x1="640" y1="200" x2="668" y2="245"/>
    <line x1="700" y1="195" x2="668" y2="245"/>
    <line x1="668" y1="245" x2="650" y2="295"/>
    <line x1="668" y1="245" x2="688" y2="292"/>
    <line x1="650" y1="295" x2="688" y2="292"/>
  </g>
  <circle cx="640" cy="200" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="700" cy="195" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="668" cy="245" r="2"   fill="#d8eaff" opacity="0.7"/>
  <circle cx="650" cy="295" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="688" cy="292" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <!-- Beehive Cluster (Praesepe) -->
  <circle cx="668" cy="248" r="0.8" fill="#e8f4ff" opacity="0.45"/>
  <circle cx="672" cy="242" r="0.7" fill="#e8f4ff" opacity="0.4"/>
  <circle cx="664" cy="252" r="0.7" fill="#e8f4ff" opacity="0.4"/>

  <!-- ── LEO (center-right) ─────────────────────────────────────────────────── -->
  <g stroke="#6a94c8" stroke-width="0.5" fill="none" opacity="0.38">
    <line x1="780" y1="200" x2="810" y2="235"/>
    <line x1="810" y1="235" x2="835" y2="220"/>
    <line x1="835" y1="220" x2="855" y2="248"/>
    <line x1="855" y1="248" x2="840" y2="278"/>
    <line x1="840" y1="278" x2="810" y2="235"/>
    <line x1="840" y1="278" x2="820" y2="320"/>
    <line x1="820" y1="320" x2="780" y2="340"/>
    <line x1="780" y1="340" x2="748" y2="318"/>
  </g>
  <!-- Regulus (bright, blue-white) -->
  <circle cx="780" cy="200" r="2.4" fill="#e0eeff" opacity="0.8"/>
  <circle cx="810" cy="235" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="835" cy="220" r="1.4" fill="#b8d0f0" opacity="0.6"/>
  <circle cx="855" cy="248" r="1.8" fill="#c8ddf5" opacity="0.68"/>
  <circle cx="840" cy="278" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="820" cy="320" r="1.4" fill="#b8d0f0" opacity="0.6"/>
  <!-- Denebola -->
  <circle cx="780" cy="340" r="2"   fill="#d0e8ff" opacity="0.72"/>
  <circle cx="748" cy="318" r="1.4" fill="#b8d0f0" opacity="0.6"/>

  <!-- ── VIRGO (center, mid-height) ────────────────────────────────────────── -->
  <g stroke="#6a94c8" stroke-width="0.5" fill="none" opacity="0.36">
    <line x1="200" y1="500" x2="240" y2="530"/>
    <line x1="240" y1="530" x2="278" y2="518"/>
    <line x1="240" y1="530" x2="248" y2="575"/>
    <line x1="248" y1="575" x2="230" y2="618"/>
    <line x1="248" y1="575" x2="270" y2="620"/>
    <line x1="270" y1="620" x2="310" y2="648"/>
    <line x1="230" y1="618" x2="180" y2="640"/>
    <line x1="278" y1="518" x2="308" y2="502"/>
  </g>
  <circle cx="200" cy="500" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="240" cy="530" r="2"   fill="#d0e4ff" opacity="0.7"/>
  <circle cx="278" cy="518" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="308" cy="502" r="1.4" fill="#b8d0f0" opacity="0.6"/>
  <circle cx="248" cy="575" r="1.8" fill="#c8ddf5" opacity="0.68"/>
  <circle cx="230" cy="618" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <!-- Spica (bright, blue-white) -->
  <circle cx="310" cy="648" r="2.6" fill="#e8f0ff" opacity="0.82"/>
  <circle cx="180" cy="640" r="1.4" fill="#b8d0f0" opacity="0.6"/>

  <!-- ── SCORPIUS (right side) ──────────────────────────────────────────────── -->
  <g stroke="#6a94c8" stroke-width="0.5" fill="none" opacity="0.38">
    <line x1="760" y1="460" x2="788" y2="488"/>
    <line x1="788" y1="488" x2="810" y2="475"/>
    <line x1="788" y1="488" x2="792" y2="530"/>
    <line x1="792" y1="530" x2="780" y2="572"/>
    <line x1="780" y1="572" x2="778" y2="615"/>
    <line x1="778" y1="615" x2="790" y2="655"/>
    <line x1="790" y1="655" x2="815" y2="688"/>
    <line x1="815" y1="688" x2="845" y2="705"/>
    <line x1="845" y1="705" x2="870" y2="695"/>
    <line x1="845" y1="705" x2="858" y2="722"/>
  </g>
  <circle cx="760" cy="460" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="810" cy="475" r="1.4" fill="#b8d0f0" opacity="0.6"/>
  <circle cx="788" cy="488" r="1.8" fill="#c8ddf5" opacity="0.68"/>
  <circle cx="792" cy="530" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <!-- Antares (red supergiant) -->
  <circle cx="780" cy="572" r="3"   fill="#f08060" opacity="0.78"/>
  <circle cx="778" cy="615" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="790" cy="655" r="1.8" fill="#d0e4ff" opacity="0.7"/>
  <circle cx="815" cy="688" r="1.8" fill="#d0e4ff" opacity="0.7"/>
  <circle cx="845" cy="705" r="2"   fill="#c8ddf5" opacity="0.72"/>
  <!-- Stinger -->
  <circle cx="870" cy="695" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="858" cy="722" r="1.6" fill="#c8ddf5" opacity="0.65"/>

  <!-- ── SOUTHERN CROSS / CRUX (bottom-left) ────────────────────────────────── -->
  <g stroke="#6a94c8" stroke-width="0.5" fill="none" opacity="0.38">
    <line x1="130" y1="750" x2="130" y2="860"/>
    <line x1="72"  y1="805" x2="192" y2="805"/>
    <line x1="192" y1="805" x2="168" y2="848"/>
  </g>
  <!-- Gacrux (top, red) -->
  <circle cx="130" cy="750" r="2.2" fill="#f0a880" opacity="0.72"/>
  <!-- Acrux (bottom, blue-white, brightest) -->
  <circle cx="130" cy="860" r="2.6" fill="#e0eeff" opacity="0.8"/>
  <!-- Left -->
  <circle cx="72"  cy="805" r="1.8" fill="#c8ddf5" opacity="0.7"/>
  <!-- Right / Mimosa -->
  <circle cx="192" cy="805" r="2.2" fill="#d0e8ff" opacity="0.75"/>
  <!-- Epsilon (off-axis) -->
  <circle cx="168" cy="848" r="1.4" fill="#b8d0f0" opacity="0.6"/>

  <!-- ── LIBRA (bottom-center) ──────────────────────────────────────────────── -->
  <g stroke="#6a94c8" stroke-width="0.5" fill="none" opacity="0.32">
    <line x1="390" y1="760" x2="428" y2="798"/>
    <line x1="428" y1="798" x2="465" y2="762"/>
    <line x1="428" y1="798" x2="420" y2="845"/>
    <line x1="390" y1="760" x2="465" y2="762"/>
  </g>
  <circle cx="390" cy="760" r="1.8" fill="#c8ddf5" opacity="0.68"/>
  <circle cx="465" cy="762" r="1.6" fill="#c8ddf5" opacity="0.65"/>
  <circle cx="428" cy="798" r="2"   fill="#d0e4ff" opacity="0.7"/>
  <circle cx="420" cy="845" r="1.6" fill="#c8ddf5" opacity="0.65"/>

  <!-- ── URSA MAJOR fragment (top-right) ────────────────────────────────────── -->
  <g stroke="#6a94c8" stroke-width="0.5" fill="none" opacity="0.36">
    <line x1="830" y1="80"  x2="875" y2="72"/>
    <line x1="875" y1="72"  x2="912" y2="88"/>
    <line x1="912" y1="88"  x2="888" y2="118"/>
    <line x1="888" y1="118" x2="830" y2="80"/>
    <line x1="888" y1="118" x2="920" y2="148"/>
    <line x1="920" y1="148" x2="952" y2="162"/>
  </g>
  <circle cx="830" cy="80"  r="2"   fill="#d0e4ff" opacity="0.72"/>
  <circle cx="875" cy="72"  r="2"   fill="#d0e4ff" opacity="0.72"/>
  <circle cx="912" cy="88"  r="2"   fill="#d0e4ff" opacity="0.72"/>
  <circle cx="888" cy="118" r="2"   fill="#d0e4ff" opacity="0.72"/>
  <!-- Mizar (double) -->
  <circle cx="920" cy="148" r="2.2" fill="#e0eeff" opacity="0.75"/>
  <circle cx="925" cy="144" r="1"   fill="#c8ddf5" opacity="0.55"/>
  <!-- Alkaid -->
  <circle cx="952" cy="162" r="2"   fill="#d8eeff" opacity="0.72"/>


  <!-- ── CONSTELLATION LABELS ─────────────────────────────────────────────── -->
  <!-- Small, spaced, low-opacity — antique star map style -->
  <text x="110"  y="420"  font-family="serif" font-size="8" fill="#a8c4e8" opacity="0.35" letter-spacing="3" text-anchor="middle">ORION</text>
  <text x="348"  y="185"  font-family="serif" font-size="8" fill="#a8c4e8" opacity="0.35" letter-spacing="3" text-anchor="middle">TAURUS</text>
  <text x="512"  y="85"   font-family="serif" font-size="8" fill="#a8c4e8" opacity="0.35" letter-spacing="3" text-anchor="middle">GEMINI</text>
  <text x="668"  y="185"  font-family="serif" font-size="8" fill="#a8c4e8" opacity="0.35" letter-spacing="3" text-anchor="middle">CANCER</text>
  <text x="808"  y="185"  font-family="serif" font-size="8" fill="#a8c4e8" opacity="0.35" letter-spacing="3" text-anchor="middle">LEO</text>
  <text x="248"  y="488"  font-family="serif" font-size="8" fill="#a8c4e8" opacity="0.35" letter-spacing="3" text-anchor="middle">VIRGO</text>
  <text x="808"  y="448"  font-family="serif" font-size="8" fill="#a8c4e8" opacity="0.35" letter-spacing="3" text-anchor="middle">SCORPIUS</text>
  <text x="428"  y="748"  font-family="serif" font-size="8" fill="#a8c4e8" opacity="0.35" letter-spacing="3" text-anchor="middle">LIBRA</text>
  <text x="130"  y="738"  font-family="serif" font-size="8" fill="#a8c4e8" opacity="0.35" letter-spacing="3" text-anchor="middle">CRUX</text>
  <text x="888"  y="65"   font-family="serif" font-size="8" fill="#a8c4e8" opacity="0.35" letter-spacing="3" text-anchor="middle">URSA MAJOR</text>

</svg>`;