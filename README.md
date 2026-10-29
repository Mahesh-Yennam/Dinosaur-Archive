# 🦖 Prehistoric Dinosaur Archive — Mesozoic Paleontology & Scale Comparator

An interactive, deep-time educational web application and paleontology encyclopedia exploring **32 iconic dinosaurs** across 186 million years of the Mesozoic Era (Triassic, Jurassic, and Cretaceous periods).

Built as part of the **Gamility Explorers Collection**, this application operates **100% client-side** with zero external frameworks, zero trackers, and zero build steps.

---

## 🌟 Key Features

### 1. Master Archive Catalog & Multi-Factor Filters
- **32 Curated Species**: Complete with binomial nomenclature, phonetic pronunciations, etymological roots, and clade categorization (Theropoda, Sauropoda, Ceratopsia, Thyreophora, Ornithopoda, Pterosauria, Marine Reptiles).
- **Multi-Factor Filtering**: Instant client-side search by name, anatomical feature, or discovery site, combined with period filter pills (Triassic, Jurassic, Cretaceous), diet filters (Carnivore, Herbivore, Piscivore, Omnivore), clade selectors, and multi-mode sorting (length, weight, chronological antiquity, alphabetical).
- **Comprehensive Scientific Dossiers**: Detailed modal popups containing anatomical dimensions (length, height, mass), top sprint speed, estimated bite forces in Newtons, holotype specimen data, discovery records, and paleobiological evolutionary superpowers.

### 2. Interactive Anatomical Scale Comparator
- **Real-Time Visual Proportions**: Compare selected dinosaurs side-by-side on a grounded metric elevation stage.
- **Reference Objects**: Direct visual and mathematical comparisons against:
  - 🧍 Human Explorer (1.8 meters • 80 kg)
  - 🚌 City Transit Bus (12.0 meters • 12 tonnes)
  - 🐘 African Bush Elephant (3.3 meters • 6.0 tonnes)
  - 🐋 Blue Whale (30.0 meters • 150 tonnes)
- **Unit Toggle**: Live switching between Metric (`m` / `t`) and Imperial (`ft` / `lbs`) units.

### 3. Mesozoic Geologic Epoch Ruler (252 – 66 Ma)
- **Deep-Time Slider**: Drag across 186 million years of geological history from the Permian-Triassic extinction boundary (252 Ma) through the Jurassic peak to the Chicxulub K-Pg asteroid impact event (66 Ma).
- **Epoch Stratum Visualization**: Visual strata representations depicting Triassic sandstones, Jurassic conifer forests, and Cretaceous flowering ecosystems.
- **Living Species Feed**: Dynamically filters which dinosaurs were active during the chosen geological slice with one-click links into full anatomical dossiers.

### 4. Global Fossil Discovery Map
- **World Paleontology Beds**: Interactive vector map plotting renowned excavation horizons, including:
  - Hell Creek Formation (Montana, USA)
  - Morrison Formation (Colorado/Utah, USA)
  - Yixian & Jiufotang Formations (Liaoning, China)
  - Bahariya & Kem Kem Beds (Egypt/Morocco)
  - Ischigualasto Formation (San Juan, Argentina)
  - Solnhofen Limestone (Bavaria, Germany)
  - Flaming Cliffs (Gobi Desert, Mongolia)
  - Dinosaur Cove (Victoria, Australia)
- **Pin Interactions**: Glowing discovery markers detailing geological age, sedimentology, and unearthed holotypes.

### 5. The Paleo Quiz Master
- **10-Question Certification Challenge**: Randomized paleontology examination covering bite forces, cladistics, dental mechanics, and geological chronology.
- **Interactive Scoring & Rank Badges**: Instant feedback with scientific explanations, culminating in official archeological titles ranging from *Field Fossil Hunter* to *Grand Master Paleontologist*.

### 6. Synthesized Prehistoric Soundscape (Web Audio API)
- Pure mathematical procedural audio synthesis:
  - Subsonic theropod chest rumbles (45–120 Hz FM modulated waveforms)
  - Acoustic resonant crest calls simulating the hollow cranial chambers of hadrosaurs like *Parasaurolophus*
  - Tactile UI haptic clicks and chime harmonics

---

## 🛠️ Architecture & Technology Stack

- **HTML5**: Semantic document structure with high-contrast accessibility (`role="banner"`, `role="dialog"`, ARIA attributes) and Schema.org `WebApplication` JSON-LD metadata.
- **Vanilla CSS3**: Tailored Mesozoic design system utilizing dark basalt backgrounds (`#070b09`), fossil amber (`#f59e0b`), lush Jurassic emerald (`#10b981`), and Cretaceous magma crimson (`#ef4444`). Features hardware-accelerated transforms, glassmorphic backdrops, and strict responsive overflow containment.
- **Vanilla ES6 JavaScript**: Pure modular IIFE architecture containing complete datasets, sound generation engines, and state management without any third-party dependencies or runtime compilers.
- **PWA & Search Ready**: Includes `site.webmanifest`, `favicon.svg`, `robots.txt`, and dedicated `sitemap.xml`.

---

## 📂 File Structure

```
explorer/dinosaur-archive/
├── app.js             # 32-species dataset, audio synthesizer, view controllers & quiz engine
├── favicon.svg        # Scalable T-Rex fossil skull icon
├── index.html         # Semantic HTML5 stage with module tabs & modal dialog
├── preview.png        # 1200x630 social preview card
├── README.md          # Comprehensive technical documentation
├── robots.txt         # Search indexing directives
├── site.webmanifest   # PWA manifest
├── sitemap.xml        # XML sitemap entry
└── style.css          # Mesozoic design system & responsive layout
```
