/**
 * Prehistoric Dinosaur Archive — Core Application & Dataset
 * 100% Client-Side Modular ES6 Engine
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. MASTER PALEONTOLOGICAL DATASET (32 SPECIES ACROSS MESOZOIC ERA)
  // =========================================================================
  const DINOSAURS = [
    // -----------------------------------------------------------------------
    // TRIASSIC PERIOD (252 – 201 Ma) — DAWN OF THE ARCHOSAURS
    // -----------------------------------------------------------------------
    {
      id: 'coelophysis',
      name: 'Coelophysis',
      pronunciation: 'SEE-lo-FIE-sis',
      meaning: 'Hollow Form',
      period: 'Triassic',
      epoch: 'Late Triassic (Norian to Rhaetian)',
      mya: '216 – 196 Ma',
      clade: 'Theropod',
      diet: 'Carnivore',
      lengthM: 3.0,
      heightM: 1.0,
      weightTonnes: 0.025, // 25 kg
      topSpeedKmh: 40,
      biteForceN: 450,
      fossilSite: 'Ghost Ranch, Chinle Formation, New Mexico, USA',
      discoveredBy: 'David Baldwin',
      discoveryYear: 1881,
      namedBy: 'Edward Drinker Cope, 1889',
      definingFeature: 'Slender, hollow bone structure adapted for agile pack pursuit',
      overview: 'One of the earliest and most successful predatory theropods. Possessed stereoscopic vision, curved clawed hands, and blade-like serrated teeth suited for small reptiles.',
      funFact: 'Over 1,000 complete Coelophysis skeletons were discovered in a single quarry at Ghost Ranch, indicating catastrophic flash-flood preservation.',
      fossilCoords: { lat: 36.33, lng: -106.47, formation: 'Chinle Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M8 38 Q25 36 45 32 Q58 26 72 20 Q84 15 92 12 Q90 18 82 22 Q70 27 60 30 Q50 34 42 42 L38 56 L34 56 L37 44 Q30 46 22 47 L18 56 L14 56 L16 46 Q10 44 8 38 Z"/></svg>`
    },
    {
      id: 'herrerasaurus',
      name: 'Herrerasaurus',
      pronunciation: 'huh-RARE-uh-SORE-us',
      meaning: 'Herrera’s Lizard',
      period: 'Triassic',
      epoch: 'Late Triassic (Carnian)',
      mya: '231 – 228 Ma',
      clade: 'Theropod',
      diet: 'Carnivore',
      lengthM: 4.5,
      heightM: 1.4,
      weightTonnes: 0.35,
      topSpeedKmh: 35,
      biteForceN: 1800,
      fossilSite: 'Ischigualasto Formation, San Juan, Argentina',
      discoveredBy: 'Victorino Herrera',
      discoveryYear: 1958,
      namedBy: 'Osvaldo Reig, 1963',
      definingFeature: 'Flexible lower jaw joint allowing a vice-like grasp on struggling prey',
      overview: 'A foundational apex predator of the early Mesozoic. Herrerasaurus walked on two long hind legs with inward-curving claws and a deeply sliding lower jaw.',
      funFact: 'Herrerasaurus is so primitive that paleontologists debated for decades whether it was a true theropod or a basal saurischian.',
      fossilCoords: { lat: -30.15, lng: -67.85, formation: 'Ischigualasto Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M6 35 Q22 34 42 30 Q60 22 75 16 Q88 12 94 10 Q92 18 80 23 Q68 28 58 32 Q48 38 42 45 L38 57 L33 57 L37 46 Q28 48 18 47 L14 56 L10 56 L12 45 Q7 42 6 35 Z"/></svg>`
    },
    {
      id: 'plateosaurus',
      name: 'Plateosaurus',
      pronunciation: 'PLAT-ee-oh-SORE-us',
      meaning: 'Broad Lizard',
      period: 'Triassic',
      epoch: 'Late Triassic (Norian)',
      mya: '214 – 204 Ma',
      clade: 'Sauropod',
      diet: 'Herbivore',
      lengthM: 8.0,
      heightM: 3.2,
      weightTonnes: 4.0,
      topSpeedKmh: 16,
      biteForceN: 1200,
      fossilSite: 'Löwenstein & Trossingen Formations, Baden-Württemberg, Germany',
      discoveredBy: 'Johann Friedrich Engelhardt',
      discoveryYear: 1834,
      namedBy: 'Christian Erich Hermann von Meyer, 1837',
      definingFeature: 'Massive thumb spike and ability to rear up onto hind legs to browse high canopy',
      overview: 'One of the earliest giant herbivores. A prosauropod with a long flexible neck, small leaf-shaped teeth, and barrel-like gut for fermenting tough prehistoric foliage.',
      funFact: 'Plateosaurus is nicknamed "the German dinosaur" because hundreds of well-preserved specimens have been found across Central Europe.',
      fossilCoords: { lat: 48.78, lng: 9.18, formation: 'Trossingen Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M5 42 Q20 40 40 38 Q55 35 62 25 Q70 14 78 8 Q82 6 86 6 Q84 12 76 18 Q68 26 62 36 Q52 42 46 48 L44 58 L39 58 L41 48 Q32 49 20 48 L16 57 L12 57 L14 47 Q8 46 5 42 Z"/></svg>`
    },
    {
      id: 'eoraptor',
      name: 'Eoraptor',
      pronunciation: 'EE-oh-RAP-tor',
      meaning: 'Dawn Plunderer',
      period: 'Triassic',
      epoch: 'Late Triassic (Carnian)',
      mya: '231 – 228 Ma',
      clade: 'Sauropod',
      diet: 'Omnivore',
      lengthM: 1.0,
      heightM: 0.35,
      weightTonnes: 0.01, // 10 kg
      topSpeedKmh: 30,
      biteForceN: 200,
      fossilSite: 'Ischigualasto Basin, San Juan, Argentina',
      discoveredBy: 'Ricardo Martínez',
      discoveryYear: 1991,
      namedBy: 'Paul Sereno, 1993',
      definingFeature: 'Heterodont teeth with both meat-slicing serrations and plant-grinding crowns',
      overview: 'One of the earliest verified dinosaurs. Lightly built and bipedal, Eoraptor represents the dawn of the lineage that would eventually evolve into 40-meter sauropods.',
      funFact: 'Despite its fierce name, Eoraptor possessed plant-eating dental adaptations and was reclassified from a theropod to a basal sauropodomorph.',
      fossilCoords: { lat: -30.18, lng: -67.80, formation: 'Ischigualasto Basin' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M12 36 Q30 35 48 30 Q62 24 74 18 Q84 14 90 12 Q88 16 80 20 Q68 24 58 28 Q48 34 42 40 L39 52 L35 52 L37 42 Q28 44 20 44 L16 52 L12 52 L14 42 Q11 40 12 36 Z"/></svg>`
    },
    {
      id: 'postosuchus',
      name: 'Postosuchus',
      pronunciation: 'POST-oh-SOO-kus',
      meaning: 'Crocodile from Post',
      period: 'Triassic',
      epoch: 'Late Triassic (Carnian to Norian)',
      mya: '228 – 208 Ma',
      clade: 'Theropod', // Pseudosuchian Archosaur honorary predator
      diet: 'Carnivore',
      lengthM: 4.0,
      heightM: 1.2,
      weightTonnes: 0.3,
      topSpeedKmh: 24,
      biteForceN: 4200,
      fossilSite: 'Post Quarry, Dockum Group, Texas, USA',
      discoveredBy: 'Sankar Chatterjee',
      discoveryYear: 1980,
      namedBy: 'Sankar Chatterjee, 1985',
      definingFeature: 'Heavy armored scutes along the spine and massive crushing skull',
      overview: 'The apex rauisuchian predator of Late Triassic North America. Though not a true dinosaur, Postosuchus was the dominant land carnivore that hunted early dinosaurs.',
      funFact: 'Postosuchus possessed upright pillar-erect limbs, allowing it to walk with high ground clearance unlike sprawling modern crocodilians.',
      fossilCoords: { lat: 33.19, lng: -101.38, formation: 'Dockum Group' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M6 34 Q24 33 46 32 Q64 30 78 26 Q90 22 96 20 Q92 27 82 32 Q68 36 56 38 Q48 42 44 54 L38 54 L40 44 Q30 45 20 44 L16 54 L11 54 L13 42 Q7 39 6 34 Z"/></svg>`
    },

    // -----------------------------------------------------------------------
    // JURASSIC PERIOD (201 – 145 Ma) — GOLDEN AGE OF GIANTS
    // -----------------------------------------------------------------------
    {
      id: 'allosaurus',
      name: 'Allosaurus',
      pronunciation: 'AL-oh-SORE-us',
      meaning: 'Different Lizard',
      period: 'Jurassic',
      epoch: 'Late Jurassic (Kimmeridgian to Tithonian)',
      mya: '155 – 145 Ma',
      clade: 'Theropod',
      diet: 'Carnivore',
      lengthM: 9.5,
      heightM: 3.2,
      weightTonnes: 2.3,
      topSpeedKmh: 34,
      biteForceN: 8700,
      fossilSite: 'Cleveland-Lloyd Dinosaur Quarry, Morrison Formation, Utah, USA',
      discoveredBy: 'Ferdinand Vandiveer Hayden',
      discoveryYear: 1869,
      namedBy: 'Othniel Charles Marsh, 1877',
      definingFeature: 'Hatchet-like skull action used to slash flesh with repeated vertical strikes',
      overview: 'The apex predator of the Jurassic Morrison Formation. Equipped with prominent brow horns, three sharp hand claws, and an elastic jaw capable of slicing through stegosaurs.',
      funFact: 'A fossil Stegosaurus tail plate was found with an Allosaurus tooth puncture, proving violent predator-prey confrontations.',
      fossilCoords: { lat: 39.32, lng: -110.69, formation: 'Morrison Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M5 32 Q22 30 44 28 Q62 22 76 16 Q88 12 95 10 Q92 18 80 23 Q68 28 58 32 Q48 40 42 48 L38 58 L32 58 L36 46 Q28 48 18 47 L14 57 L9 57 L11 44 Q6 39 5 32 Z"/></svg>`
    },
    {
      id: 'stegosaurus',
      name: 'Stegosaurus',
      pronunciation: 'STEG-oh-SORE-us',
      meaning: 'Roofed Lizard',
      period: 'Jurassic',
      epoch: 'Late Jurassic (Kimmeridgian to Tithonian)',
      mya: '155 – 150 Ma',
      clade: 'Thyreophora',
      diet: 'Herbivore',
      lengthM: 9.0,
      heightM: 4.0,
      weightTonnes: 5.5,
      topSpeedKmh: 12,
      biteForceN: 400,
      fossilSite: 'Morrison Formation, Colorado & Wyoming, USA',
      discoveredBy: 'M.P. Felch',
      discoveryYear: 1876,
      namedBy: 'Othniel Charles Marsh, 1877',
      definingFeature: '17 alternating dermal plates along spine and 4 deadly tail spikes (Thagomizer)',
      overview: 'An iconic armored herbivore featuring large kite-shaped bony plates embedded in skin rather than bone, and a flexible tail armed with four 60cm defensive spikes.',
      funFact: 'Stegosaurus had a brain roughly the size of a walnut (~80 grams), leading early scientists to mistakenly believe it had a "second brain" in its hip.',
      fossilCoords: { lat: 39.73, lng: -105.22, formation: 'Morrison Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M5 45 Q20 44 38 42 L42 30 L46 42 Q55 38 62 26 L66 40 Q74 38 82 34 L88 42 Q94 40 96 36 L92 46 Q80 48 68 50 L64 58 L58 58 L60 50 Q48 51 36 50 L32 58 L26 58 L28 48 Q15 47 5 45 Z"/></svg>`
    },
    {
      id: 'brachiosaurus',
      name: 'Brachiosaurus',
      pronunciation: 'BRAK-ee-oh-SORE-us',
      meaning: 'Arm Lizard',
      period: 'Jurassic',
      epoch: 'Late Jurassic (Kimmeridgian to Tithonian)',
      mya: '154 – 153 Ma',
      clade: 'Sauropod',
      diet: 'Herbivore',
      lengthM: 22.0,
      heightM: 13.0,
      weightTonnes: 45.0,
      topSpeedKmh: 14,
      biteForceN: 2200,
      fossilSite: 'Grand River Valley, Morrison Formation, Colorado, USA',
      discoveredBy: 'Elmer S. Riggs',
      discoveryYear: 1900,
      namedBy: 'Elmer S. Riggs, 1903',
      definingFeature: 'Front limbs longer than hind legs, creating a giraffe-like 4-story high browsing posture',
      overview: 'A towering sauropod uniquely adapted for high-canopy browsing. Its elevated shoulders and 9-meter neck allowed it to feed on conifer needles 13 meters above ground.',
      funFact: 'To pump blood up its 9-meter vertical neck to its brain, Brachiosaurus had an estimated heart weight of over 200 kilograms (440 lbs).',
      fossilCoords: { lat: 39.06, lng: -108.55, formation: 'Morrison Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M6 46 Q20 44 36 42 Q50 38 56 26 Q64 12 70 4 Q74 2 78 4 Q76 10 70 20 Q62 34 56 44 L54 58 L48 58 L50 48 Q38 49 26 48 L22 58 L16 58 L18 47 Q10 47 6 46 Z"/></svg>`
    },
    {
      id: 'diplodocus',
      name: 'Diplodocus',
      pronunciation: 'dih-PLOD-uh-kus',
      meaning: 'Double Beam',
      period: 'Jurassic',
      epoch: 'Late Jurassic (Kimmeridgian to Tithonian)',
      mya: '154 – 152 Ma',
      clade: 'Sauropod',
      diet: 'Herbivore',
      lengthM: 27.0,
      heightM: 4.5,
      weightTonnes: 15.0,
      topSpeedKmh: 18,
      biteForceN: 900,
      fossilSite: 'Sheep Creek, Morrison Formation, Wyoming, USA',
      discoveredBy: 'Samuel Wendell Williston',
      discoveryYear: 1877,
      namedBy: 'Othniel Charles Marsh, 1878',
      definingFeature: '14-meter whip-like tail capable of supersonic sonic-boom cracking defense',
      overview: 'One of the longest known animals. Diplodocus maintained a horizontal suspension-bridge posture, sweeping ground ferns and soft aquatic vegetation with pencil-like raking teeth.',
      funFact: 'Computer simulations suggest the tip of Diplodocus’s tail could exceed the speed of sound (>1,200 km/h), generating a deafening crack to deter predators.',
      fossilCoords: { lat: 41.76, lng: -106.28, formation: 'Morrison Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M4 42 Q24 40 50 38 Q68 34 82 28 Q92 24 98 22 Q94 28 80 34 Q66 40 56 46 L54 58 L48 58 L50 48 Q36 49 24 48 L20 58 L14 58 L16 45 Q8 44 4 42 Z"/></svg>`
    },
    {
      id: 'dilophosaurus',
      name: 'Dilophosaurus',
      pronunciation: 'die-LOF-oh-SORE-us',
      meaning: 'Two-Crested Lizard',
      period: 'Jurassic',
      epoch: 'Early Jurassic (Sinemurian to Pliensbachian)',
      mya: '193 – 186 Ma',
      clade: 'Theropod',
      diet: 'Carnivore',
      lengthM: 7.0,
      heightM: 2.2,
      weightTonnes: 0.45,
      topSpeedKmh: 38,
      biteForceN: 2400,
      fossilSite: 'Kayenta Formation, Navajo Nation, Arizona, USA',
      discoveredBy: 'Jesse Williams',
      discoveryYear: 1942,
      namedBy: 'Samuel P. Welles, 1970',
      definingFeature: 'Pair of delicate, semi-circular skull crests used for sexual display and recognition',
      overview: 'The largest known land predator of the Early Jurassic. Contrary to pop-culture depictions, Dilophosaurus was large (7m), did not spit venom, and had no neck frill.',
      funFact: 'Recent fossil restudies in 2020 revealed Dilophosaurus had powerful jaw muscles and bird-like air sacs inside its skeleton.',
      fossilCoords: { lat: 36.05, lng: -110.82, formation: 'Kayenta Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M6 34 Q24 32 46 29 Q62 24 76 18 L78 10 L82 18 Q90 14 96 12 Q92 20 82 25 Q70 30 60 34 Q48 40 42 48 L38 58 L32 58 L36 46 Q28 48 18 47 L14 57 L9 57 L11 44 Q6 40 6 34 Z"/></svg>`
    },
    {
      id: 'ceratosaurus',
      name: 'Ceratosaurus',
      pronunciation: 'seh-RAT-oh-SORE-us',
      meaning: 'Horned Lizard',
      period: 'Jurassic',
      epoch: 'Late Jurassic (Kimmeridgian to Tithonian)',
      mya: '153 – 148 Ma',
      clade: 'Theropod',
      diet: 'Carnivore',
      lengthM: 6.5,
      heightM: 2.3,
      weightTonnes: 1.0,
      topSpeedKmh: 32,
      biteForceN: 4500,
      fossilSite: 'Garden Park, Morrison Formation, Colorado, USA',
      discoveredBy: 'Marshall Parker Felch',
      discoveryYear: 1883,
      namedBy: 'Othniel Charles Marsh, 1884',
      definingFeature: 'Prominent nasal horn blade and row of small dermal armor plates down its spine',
      overview: 'A distinctive mid-sized Jurassic predator. Ceratosaurus had disproportionately long blade teeth, a flexible crocodile-like tail, and lived alongside Allosaurus.',
      funFact: 'Its deep, paddle-shaped tail has led some paleontologists to propose that Ceratosaurus was a semi-aquatic predator that hunted fish and turtles.',
      fossilCoords: { lat: 38.53, lng: -105.23, formation: 'Garden Park Quarry' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M6 34 Q22 32 44 29 Q60 23 74 18 L76 12 Q84 14 94 13 Q90 20 80 25 Q68 29 58 33 Q48 41 42 48 L38 58 L32 58 L36 46 Q28 48 18 47 L14 57 L9 57 L11 44 Q6 40 6 34 Z"/></svg>`
    },
    {
      id: 'archaeopteryx',
      name: 'Archaeopteryx',
      pronunciation: 'AR-kee-OP-ter-iks',
      meaning: 'Ancient Wing',
      period: 'Jurassic',
      epoch: 'Late Jurassic (Tithonian)',
      mya: '150 – 148 Ma',
      clade: 'Theropod',
      diet: 'Carnivore',
      lengthM: 0.5,
      heightM: 0.25,
      weightTonnes: 0.0008, // 800 grams
      topSpeedKmh: 20,
      biteForceN: 50,
      fossilSite: 'Solnhofen Limestone, Bavaria, Germany',
      discoveredBy: 'Quarry workers in Langenaltheim',
      discoveryYear: 1861,
      namedBy: 'Christian Erich Hermann von Meyer, 1861',
      definingFeature: 'Transitional mix of avian flight feathers and reptilian jaws with sharp teeth',
      overview: 'The seminal fossil linking dinosaurs to birds. Archaeopteryx possessed flight-capable asymmetric feathers, clawed three-fingered wings, a bony tail, and toothed jaws.',
      funFact: 'Found just two years after Darwin published "On the Origin of Species", Archaeopteryx provided immediate evidence of evolutionary transition.',
      fossilCoords: { lat: 48.91, lng: 11.02, formation: 'Solnhofen Limestone' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M10 35 Q30 32 48 28 Q64 22 76 16 Q86 12 92 10 Q86 18 76 24 Q62 30 52 35 Q44 42 38 48 L35 56 L30 56 L33 46 Q24 47 16 46 L12 55 L8 55 L10 44 Q6 40 10 35 Z"/></svg>`
    },
    {
      id: 'plesiosaurus',
      name: 'Plesiosaurus',
      pronunciation: 'PLEE-zee-oh-SORE-us',
      meaning: 'Near Lizard',
      period: 'Jurassic',
      epoch: 'Early Jurassic (Sinemurian)',
      mya: '199 – 190 Ma',
      clade: 'Marine Reptile',
      diet: 'Piscivore',
      lengthM: 3.5,
      heightM: 1.0,
      weightTonnes: 0.5,
      topSpeedKmh: 15,
      biteForceN: 1400,
      fossilSite: 'Lyme Regis, Jurassic Coast, Dorset, England',
      discoveredBy: 'Mary Anning',
      discoveryYear: 1823,
      namedBy: 'William Conybeare, 1824',
      definingFeature: 'Four hydrodynamic flippers acting like underwater wings with a 40-vertebra neck',
      overview: 'The definitive marine reptile of the Jurassic seas. With four large paddle-like flippers, Plesiosaurus "flew" underwater, snaring fish with interlocking needle teeth.',
      funFact: 'Discovered by pioneering 24-year-old female paleontologist Mary Anning, who faced skepticism until leading London scientists confirmed its authenticity.',
      fossilCoords: { lat: 50.72, lng: -2.93, formation: 'Lias Group' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M5 28 Q20 26 40 25 Q58 24 72 20 Q84 14 94 8 Q90 16 80 22 Q66 28 50 30 Q38 34 26 36 L24 48 L18 48 L22 36 Q14 36 8 34 L6 46 L2 46 L4 34 Q3 30 5 28 Z"/></svg>`
    },
    {
      id: 'pterodactylus',
      name: 'Pterodactylus',
      pronunciation: 'TAIR-oh-DAK-tih-lus',
      meaning: 'Winged Finger',
      period: 'Jurassic',
      epoch: 'Late Jurassic (Tithonian)',
      mya: '150 – 148 Ma',
      clade: 'Pterosaur',
      diet: 'Carnivore',
      lengthM: 1.0, // wingspan
      heightM: 0.3,
      weightTonnes: 0.002, // 2 kg
      topSpeedKmh: 45,
      biteForceN: 150,
      fossilSite: 'Solnhofen Limestone, Eichstätt, Bavaria, Germany',
      discoveredBy: 'Cosimo Alessandro Collini',
      discoveryYear: 1784,
      namedBy: 'Georges Cuvier, 1809',
      definingFeature: 'Elongated fourth finger supporting a membranous collagen flight wing',
      overview: 'The first pterosaur ever discovered and scientifically described. Pterodactylus hunted along Jurassic lagoons, dipping its straight beak to catch insects and small fish.',
      funFact: 'When first discovered in 1784, Collini believed it was an unknown marine animal with flippers before Georges Cuvier recognized it was a flying reptile in 1801.',
      fossilCoords: { lat: 48.89, lng: 11.18, formation: 'Solnhofen Limestone' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M12 28 Q32 18 52 14 Q70 12 88 8 Q82 18 70 24 Q56 28 44 32 L40 44 L36 44 L38 34 Q26 36 16 34 L12 44 L8 44 L10 32 Q9 30 12 28 Z"/></svg>`
    },
    {
      id: 'kentrosaurus',
      name: 'Kentrosaurus',
      pronunciation: 'KEN-troh-SORE-us',
      meaning: 'Spike Lizard',
      period: 'Jurassic',
      epoch: 'Late Jurassic (Kimmeridgian)',
      mya: '155 – 150 Ma',
      clade: 'Thyreophora',
      diet: 'Herbivore',
      lengthM: 4.5,
      heightM: 1.8,
      weightTonnes: 1.0,
      topSpeedKmh: 14,
      biteForceN: 350,
      fossilSite: 'Tendaguru Formation, Lindi Region, Tanzania',
      discoveredBy: 'German Tendaguru Expedition',
      discoveryYear: 1909,
      namedBy: 'Edwin Hennig, 1915',
      definingFeature: 'Pairs of dermal plates on neck transitioning into pairs of long lethal spikes on hips and tail',
      overview: 'A formidable African relative of Stegosaurus. While its anterior back bore small flat plates, its lower back and tail bristled with wicked spines up to 70cm long.',
      funFact: 'Between 1909 and 1912, German expeditions in Tanzania unearthed over 1,200 bones of Kentrosaurus, making it one of the best-represented African dinosaurs.',
      fossilCoords: { lat: -9.83, lng: 39.33, formation: 'Tendaguru Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M6 44 Q20 42 38 40 L44 28 L48 40 Q58 36 64 24 L68 38 Q76 36 84 30 L90 40 Q94 38 96 34 L92 46 Q80 48 68 50 L64 58 L58 58 L60 50 Q48 51 36 50 L32 58 L26 58 L28 48 Q15 47 6 44 Z"/></svg>`
    },

    // -----------------------------------------------------------------------
    // CRETACEOUS PERIOD (145 – 66 Ma) — PINNACLE OF EVOLUTION
    // -----------------------------------------------------------------------
    {
      id: 'tyrannosaurus-rex',
      name: 'Tyrannosaurus Rex',
      pronunciation: 'tie-RAN-oh-SORE-us RECKS',
      meaning: 'King of the Tyrant Lizards',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Maastrichtian)',
      mya: '68 – 66 Ma',
      clade: 'Theropod',
      diet: 'Carnivore',
      lengthM: 12.3,
      heightM: 3.9,
      weightTonnes: 8.4,
      topSpeedKmh: 27,
      biteForceN: 35000, // 35 kN
      fossilSite: 'Hell Creek Formation, Montana & South Dakota, USA',
      discoveredBy: 'Barnum Brown',
      discoveryYear: 1902,
      namedBy: 'Henry Fairfield Osborn, 1905',
      definingFeature: 'Crushing bite force of 35,000 Newtons capable of pulverizing solid bone with 30cm serrated teeth',
      overview: 'The undisputed apex predator of Cretaceous North America. Possessed forward-facing binocular vision superior to a hawk, acute olfactory bulbs, and bone-cracking jaws.',
      funFact: 'The most complete T-Rex skeleton ever discovered, "Sue" (FMNH PR 2081, 90% complete), was auctioned for $8.3 million in 1997.',
      fossilCoords: { lat: 47.53, lng: -106.67, formation: 'Hell Creek Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M4 30 Q22 28 44 26 Q64 20 78 14 Q90 10 97 8 Q94 18 82 24 Q68 28 58 32 Q48 41 42 50 L38 60 L32 60 L36 47 Q28 49 18 48 L14 59 L8 59 L10 45 Q5 39 4 30 Z"/></svg>`
    },
    {
      id: 'triceratops',
      name: 'Triceratops',
      pronunciation: 'try-SER-uh-tops',
      meaning: 'Three-Horned Face',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Maastrichtian)',
      mya: '68 – 66 Ma',
      clade: 'Ceratopsian',
      diet: 'Herbivore',
      lengthM: 9.0,
      heightM: 3.0,
      weightTonnes: 9.0,
      topSpeedKmh: 24,
      biteForceN: 18000,
      fossilSite: 'Lance Formation, Niobrara County, Wyoming, USA',
      discoveredBy: 'John Bell Hatcher',
      discoveryYear: 1887,
      namedBy: 'Othniel Charles Marsh, 1889',
      definingFeature: '1-meter solid bone brow horns and massive protective cranial frill',
      overview: 'A massive ceratopsian built like a living battle tank. Its 2-meter skull bore two massive brow horns and a parrot-like beak designed for shearing palm fronds and cycads.',
      funFact: 'Numerous Triceratops frills and horns bear healed bite wounds from T-Rex, demonstrating that Triceratops actively fought off apex predators.',
      fossilCoords: { lat: 43.12, lng: -104.53, formation: 'Lance Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M6 46 Q22 44 42 42 Q56 40 66 32 L72 20 L76 30 Q84 28 92 24 L96 30 Q92 36 84 40 Q76 46 64 50 L60 58 L54 58 L56 50 Q44 51 32 50 L28 58 L22 58 L24 48 Q14 47 6 46 Z"/></svg>`
    },
    {
      id: 'velociraptor',
      name: 'Velociraptor',
      pronunciation: 'veh-LOSS-ih-RAP-tor',
      meaning: 'Swift Seizer',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Campanian)',
      mya: '75 – 71 Ma',
      clade: 'Theropod',
      diet: 'Carnivore',
      lengthM: 2.0,
      heightM: 0.5,
      weightTonnes: 0.015, // 15 kg
      topSpeedKmh: 45,
      biteForceN: 350,
      fossilSite: 'Djadokhta Formation, Flaming Cliffs, Gobi Desert, Mongolia',
      discoveredBy: 'Peter Kaisen (AMNH Expedition)',
      discoveryYear: 1923,
      namedBy: 'Henry Fairfield Osborn, 1924',
      definingFeature: '9cm retractable sickle-shaped killing claw on second toe and plumage of genuine feathers',
      overview: 'A turkey-sized dromaeosaurid predator of the Gobi desert. Covered in modern pennaceous feathers with quill knobs on its forearms, it hunted small ceratopsians and lizards.',
      funFact: 'The famous "Fighting Dinosaurs" specimen fossilized a Velociraptor locked in mortal combat with a Protoceratops, both buried alive by a collapsing sand dune.',
      fossilCoords: { lat: 44.15, lng: 103.73, formation: 'Djadokhta Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M8 36 Q26 34 46 30 Q60 24 74 18 Q86 14 94 11 Q91 16 82 22 Q70 26 58 30 Q48 37 42 44 L39 56 L34 56 L37 44 Q28 46 18 45 L14 55 L9 55 L12 43 Q7 40 8 36 Z"/></svg>`
    },
    {
      id: 'spinosaurus',
      name: 'Spinosaurus',
      pronunciation: 'SPINE-oh-SORE-us',
      meaning: 'Spine Lizard',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Cenomanian)',
      mya: '99 – 93.5 Ma',
      clade: 'Theropod',
      diet: 'Piscivore',
      lengthM: 15.0,
      heightM: 4.3,
      weightTonnes: 7.5,
      topSpeedKmh: 20,
      biteForceN: 11500,
      fossilSite: 'Bahariya Formation, Egypt & Kem Kem Beds, Morocco',
      discoveredBy: 'Richard Markgraf',
      discoveryYear: 1912,
      namedBy: 'Ernst Stromer, 1915',
      definingFeature: '1.8-meter dorsal neural spine sail and fin-like paddle tail for river swimming',
      overview: 'The longest predatory dinosaur known to science. Highly specialized for riverine ecosystems with conical unserrated teeth, pressure-sensitive snout pits, and webbed feet.',
      funFact: 'The original holotype fossils in Munich were completely destroyed in a 1944 Allied bombing raid, leaving paleontologists with only drawings for 70 years.',
      fossilCoords: { lat: 31.02, lng: -4.01, formation: 'Kem Kem Beds' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M4 36 Q18 34 38 32 L44 14 L50 6 L56 16 L62 28 Q72 24 84 18 Q92 14 97 12 Q93 20 82 26 Q70 30 58 34 Q48 42 42 50 L38 60 L32 60 L36 47 Q28 48 18 47 L14 58 L8 58 L10 44 Q5 41 4 36 Z"/></svg>`
    },
    {
      id: 'ankylosaurus',
      name: 'Ankylosaurus',
      pronunciation: 'an-KIE-loh-SORE-us',
      meaning: 'Fused Lizard',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Maastrichtian)',
      mya: '68 – 66 Ma',
      clade: 'Thyreophora',
      diet: 'Herbivore',
      lengthM: 8.0,
      heightM: 1.7,
      weightTonnes: 6.0,
      topSpeedKmh: 10,
      biteForceN: 1100,
      fossilSite: 'Hell Creek Formation, Montana, USA & Scollard Formation, Canada',
      discoveredBy: 'Peter Kaisen',
      discoveryYear: 1906,
      namedBy: 'Barnum Brown, 1908',
      definingFeature: 'Fused bony osteoderm armor plates across back and a heavy 30kg tail club',
      overview: 'The quintessential living fortress. Ankylosaurus possessed fused skull bones, armored eyelids, and a modified tail capable of generating enough kinetic energy to shatter T-Rex shins.',
      funFact: 'Even its eyelids were reinforced with small armored plates called palpebral bones, leaving virtually no vulnerable soft spots.',
      fossilCoords: { lat: 47.62, lng: -106.50, formation: 'Hell Creek Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M5 44 Q22 42 44 40 Q62 38 74 34 L82 32 Q88 30 92 34 L96 32 L94 38 Q88 40 82 42 Q70 46 62 48 L60 56 L54 56 L56 48 Q44 49 32 49 L28 56 L22 56 L24 47 Q14 46 5 44 Z"/></svg>`
    },
    {
      id: 'carnotaurus',
      name: 'Carnotaurus',
      pronunciation: 'KAR-noh-TORE-us',
      meaning: 'Meat-Eating Bull',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Campanian to Maastrichtian)',
      mya: '72 – 69 Ma',
      clade: 'Theropod',
      diet: 'Carnivore',
      lengthM: 7.8,
      heightM: 2.9,
      weightTonnes: 1.5,
      topSpeedKmh: 50, // one of fastest large theropods
      biteForceN: 3300,
      fossilSite: 'La Colonia Formation, Chubut Province, Patagonia, Argentina',
      discoveredBy: 'Guillermo Rougier',
      discoveryYear: 1984,
      namedBy: 'José Bonaparte, 1985',
      definingFeature: 'Prominent bull-like brow horns and vestigial 4-fingered arms smaller than T-Rex',
      overview: 'A hyper-cursorial South American predator built for blinding sprint speed. Possessed massive caudofemoralis tail-leg muscles, tiny non-functional arms, and scaled skin with conical studs.',
      funFact: 'Fossil skin impressions of Carnotaurus were so impeccably preserved that scientists mapped its exact scaly hide from snout to tail tip.',
      fossilCoords: { lat: -42.85, lng: -67.88, formation: 'La Colonia Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M6 34 Q24 32 46 29 Q62 24 76 18 L78 10 L82 18 Q90 14 96 12 Q92 20 82 25 Q70 30 60 34 Q48 40 42 48 L38 58 L32 58 L36 46 Q28 48 18 47 L14 57 L9 57 L11 44 Q6 40 6 34 Z"/></svg>`
    },
    {
      id: 'parasaurolophus',
      name: 'Parasaurolophus',
      pronunciation: 'PAIR-uh-sore-AHL-uh-fus',
      meaning: 'Near Crested Lizard',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Campanian)',
      mya: '76.5 – 73 Ma',
      clade: 'Ornithopod',
      diet: 'Herbivore',
      lengthM: 9.5,
      heightM: 3.5,
      weightTonnes: 2.5,
      topSpeedKmh: 25,
      biteForceN: 900,
      fossilSite: 'Dinosaur Park Formation, Alberta, Canada & Kaiparowits, Utah, USA',
      discoveredBy: 'University of Toronto Field Party',
      discoveryYear: 1920,
      namedBy: 'William Parks, 1922',
      definingFeature: '1.8-meter hollow curved cranial crest used as an acoustic resonating chamber',
      overview: 'A famous duck-billed hadrosaur. Its backwards-sweeping cranial crest housed looped nasal passages that functioned like a brass trombone, broadcasting deep infrasonic calls.',
      funFact: 'In 1997, computer scientists and paleontologists used CT scans of a Parasaurolophus skull to synthesize its actual resonant call frequency (~30 Hz).',
      fossilCoords: { lat: 50.76, lng: -111.49, formation: 'Dinosaur Park Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M6 40 Q22 38 42 36 Q56 32 64 22 L54 10 L68 18 Q78 14 88 12 Q84 20 76 26 Q68 32 58 38 Q48 43 42 50 L38 58 L32 58 L36 47 Q26 48 16 47 L12 56 L7 56 L9 44 Q6 42 6 40 Z"/></svg>`
    },
    {
      id: 'pachycephalosaurus',
      name: 'Pachycephalosaurus',
      pronunciation: 'PAK-ee-SEF-uh-loh-SORE-us',
      meaning: 'Thick-Headed Lizard',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Maastrichtian)',
      mya: '70 – 66 Ma',
      clade: 'Ornithopod',
      diet: 'Herbivore',
      lengthM: 4.5,
      heightM: 1.5,
      weightTonnes: 0.45,
      topSpeedKmh: 30,
      biteForceN: 700,
      fossilSite: 'Hell Creek Formation, Montana & Lance Formation, Wyoming, USA',
      discoveredBy: 'Ferdinand Vandiveer Hayden',
      discoveryYear: 1859,
      namedBy: 'Charles W. Gilmore, 1931',
      definingFeature: '25-centimeter thick solid bone skull dome surrounded by bony knobs and spikes',
      overview: 'The definitive dome-headed dinosaur. Supported by heavy shock-absorbing neck vertebrae, Pachycephalosaurus used its thickened skull roof for intra-species head-butting duels.',
      funFact: 'Recent fossil histology suggests that Dracorex and Stygimoloch were likely juvenile and adolescent growth stages of Pachycephalosaurus.',
      fossilCoords: { lat: 47.45, lng: -106.55, formation: 'Hell Creek Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M6 36 Q22 35 44 32 Q60 28 72 22 L76 14 Q82 12 88 18 Q86 24 78 28 Q68 33 58 36 Q48 42 42 50 L38 58 L32 58 L36 46 Q28 48 18 47 L14 57 L9 57 L11 44 Q6 40 6 36 Z"/></svg>`
    },
    {
      id: 'giganotosaurus',
      name: 'Giganotosaurus',
      pronunciation: 'JIG-uh-noh-toe-SORE-us',
      meaning: 'Giant Southern Lizard',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Cenomanian)',
      mya: '98 – 97 Ma',
      clade: 'Theropod',
      diet: 'Carnivore',
      lengthM: 12.5,
      heightM: 3.8,
      weightTonnes: 7.8,
      topSpeedKmh: 32,
      biteForceN: 13000,
      fossilSite: 'Candeleros Formation, Neuquén Province, Patagonia, Argentina',
      discoveredBy: 'Rubén D. Carolini',
      discoveryYear: 1993,
      namedBy: 'Rodolfo Coria & Leonardo Salgado, 1995',
      definingFeature: 'Massive 1.6-meter skull with serrated 20cm blades adapted to carve flesh from giant titanosaurs',
      overview: 'One of the largest terrestrial carnivores in Earth history, rivaling T-Rex in size. As an apex carcharodontosaurid, it hunted juvenile and adult titanosaurs in prehistoric Patagonia.',
      funFact: 'Discovered by car mechanic and amateur fossil hunter Rubén Carolini, who spotted a tibia protruding from badland sediment while driving his dune buggy.',
      fossilCoords: { lat: -39.28, lng: -68.89, formation: 'Candeleros Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M4 32 Q22 30 44 28 Q64 22 78 16 Q90 12 97 10 Q94 20 82 25 Q68 29 58 33 Q48 42 42 50 L38 60 L32 60 L36 47 Q28 49 18 48 L14 59 L8 59 L10 45 Q5 40 4 32 Z"/></svg>`
    },
    {
      id: 'mosasaurus',
      name: 'Mosasaurus',
      pronunciation: 'MOZE-uh-SORE-us',
      meaning: 'Lizard of the Meuse River',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Maastrichtian)',
      mya: '70 – 66 Ma',
      clade: 'Marine Reptile',
      diet: 'Carnivore',
      lengthM: 14.0,
      heightM: 2.2,
      weightTonnes: 14.0,
      topSpeedKmh: 48,
      biteForceN: 16000,
      fossilSite: 'Maastricht Chalk Quarry, Netherlands & Pierre Shale, USA',
      discoveredBy: 'Quarrymen near Maastricht',
      discoveryYear: 1764,
      namedBy: 'William Daniel Conybeare, 1822',
      definingFeature: 'Double-hinged jaw with secondary pterygoid teeth to trap struggling marine prey',
      overview: 'The apex marine leviathan of the Western Interior Seaway. A giant squamate related to monitor lizards and snakes, Mosasaurus hunted plesiosaurs, giant sharks, and ammonites.',
      funFact: 'The discovery of the first Mosasaurus skull in 1764 helped pioneer the revolutionary concept of extinction before Georges Cuvier.',
      fossilCoords: { lat: 50.85, lng: 5.69, formation: 'Maastricht Chalk' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M4 32 Q24 30 48 29 Q68 27 82 22 Q92 16 98 12 Q93 20 82 26 Q68 32 50 34 Q36 38 24 40 L20 52 L15 52 L18 40 Q12 40 6 37 L3 48 L0 48 L2 36 Q3 33 4 32 Z"/></svg>`
    },
    {
      id: 'quetzalcoatlus',
      name: 'Quetzalcoatlus',
      pronunciation: 'KET-sahl-koh-AHT-lus',
      meaning: 'Feathered Serpent God',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Maastrichtian)',
      mya: '68 – 66 Ma',
      clade: 'Pterosaur',
      diet: 'Carnivore',
      lengthM: 11.0, // wingspan
      heightM: 5.2, // standing height
      weightTonnes: 0.25, // 250 kg
      topSpeedKmh: 105, // flight cruising
      biteForceN: 1200,
      fossilSite: 'Javelina Formation, Big Bend National Park, Texas, USA',
      discoveredBy: 'Douglas A. Lawson',
      discoveryYear: 1971,
      namedBy: 'Douglas A. Lawson, 1975',
      definingFeature: 'Wingspan of a fighter jet (11 meters) standing as tall as a giraffe on ground',
      overview: 'The largest flying creature ever known to exist. Quetzalcoatlus was an azhdarchid pterosaur that stalked inland Cretaceous plains like a giant stork, gulping down baby dinosaurs.',
      funFact: 'Biomechanists calculated that Quetzalcoatlus launched into flight through a powerful four-limbed pole-vaulting leap off the ground.',
      fossilCoords: { lat: 29.25, lng: -103.25, formation: 'Javelina Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M10 26 Q30 16 52 12 Q72 10 90 6 Q84 18 70 24 Q56 28 42 34 L38 46 L34 46 L36 36 Q24 38 14 36 L10 46 L6 46 L8 34 Q7 30 10 26 Z"/></svg>`
    },
    {
      id: 'therizinosaurus',
      name: 'Therizinosaurus',
      pronunciation: 'THER-ih-ZIN-oh-SORE-us',
      meaning: 'Scythe Lizard',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Maastrichtian)',
      mya: '70 – 66 Ma',
      clade: 'Theropod',
      diet: 'Herbivore',
      lengthM: 10.0,
      heightM: 4.8,
      weightTonnes: 5.0,
      topSpeedKmh: 18,
      biteForceN: 800,
      fossilSite: 'Nemegt Formation, Gobi Desert, Mongolia',
      discoveredBy: 'Soviet-Mongolian Paleontological Expedition',
      discoveryYear: 1948,
      namedBy: 'Evgeny Maleev, 1954',
      definingFeature: '1-meter long scythe claws on each hand, the longest claws in animal kingdom history',
      overview: 'A bizarre, feathered herbivorous theropod. Therizinosaurus possessed massive pot-bellied intestines, a small beaked head on an upright neck, and terrifying 1-meter claws used to rake tree branches.',
      funFact: 'When its 1-meter claws were first unearthed in 1948, scientists mistakenly believed they belonged to an extinct giant sea turtle.',
      fossilCoords: { lat: 43.50, lng: 100.50, formation: 'Nemegt Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M8 44 Q22 42 40 38 Q52 30 58 18 Q62 10 68 8 Q72 16 66 26 L80 18 L76 28 L86 26 L76 36 Q66 42 56 46 L54 58 L48 58 L50 48 Q36 49 24 48 L20 58 L14 58 L16 47 Q10 46 8 44 Z"/></svg>`
    },
    {
      id: 'argentinosaurus',
      name: 'Argentinosaurus',
      pronunciation: 'ar-JEN-tee-noh-SORE-us',
      meaning: 'Argentine Lizard',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Cenomanian to Turonian)',
      mya: '96 – 92 Ma',
      clade: 'Sauropod',
      diet: 'Herbivore',
      lengthM: 35.0,
      heightM: 8.5,
      weightTonnes: 75.0, // 75+ tonnes
      topSpeedKmh: 8,
      biteForceN: 3500,
      fossilSite: 'Huincul Formation, Neuquén Province, Patagonia, Argentina',
      discoveredBy: 'Guillermo Heredia',
      discoveryYear: 1987,
      namedBy: 'José Bonaparte & Rodolfo Coria, 1993',
      definingFeature: 'Weight of 75 metric tonnes (equal to 12 African elephants) and vertebrae over 1.6m tall',
      overview: 'Among the most colossal land animals to ever walk the Earth. A titanosaur sauropod of titanic proportions whose single backbone was taller than an adult human.',
      funFact: 'Despite growing to 75 tonnes, Argentinosaurus hatched from eggs no larger than a football or volleyball.',
      fossilCoords: { lat: -38.93, lng: -69.23, formation: 'Huincul Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M4 44 Q24 42 50 38 Q68 32 82 24 Q92 18 98 16 Q94 24 80 30 Q66 38 56 44 L54 58 L48 58 L50 48 Q36 49 24 48 L20 58 L14 58 L16 46 Q8 45 4 44 Z"/></svg>`
    },
    {
      id: 'baryonyx',
      name: 'Baryonyx',
      pronunciation: 'BAIR-ee-ON-iks',
      meaning: 'Heavy Claw',
      period: 'Cretaceous',
      epoch: 'Early Cretaceous (Barremian)',
      mya: '130 – 125 Ma',
      clade: 'Theropod',
      diet: 'Piscivore',
      lengthM: 8.5,
      heightM: 2.5,
      weightTonnes: 1.7,
      topSpeedKmh: 30,
      biteForceN: 4800,
      fossilSite: 'Smokejacks Pit, Weald Clay Formation, Surrey, England',
      discoveredBy: 'William J. Walker',
      discoveryYear: 1983,
      namedBy: 'Alan J. Charig & Angela C. Milner, 1986',
      definingFeature: '31cm curved thumb claw and narrow crocodile-like snout with 96 finely serrated teeth',
      overview: 'A specialized spinosaurid predator discovered in England. With long rosettes of interlocking teeth and giant thumb hooks, Baryonyx plucked large armored fish like Lepidotes from rivers.',
      funFact: 'Fossilized fish scales and the bones of a young Iguanodon were found preserved inside the rib cage of the holotype Baryonyx specimen.',
      fossilCoords: { lat: 51.13, lng: -0.42, formation: 'Weald Clay Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M5 34 Q22 32 44 28 Q62 23 76 18 Q88 14 96 11 Q92 19 80 24 Q68 28 58 32 Q48 40 42 48 L38 58 L32 58 L36 46 Q28 48 18 47 L14 57 L9 57 L11 44 Q6 40 5 34 Z"/></svg>`
    },
    {
      id: 'oviraptor',
      name: 'Oviraptor',
      pronunciation: 'OH-vee-RAP-tor',
      meaning: 'Egg Seizer',
      period: 'Cretaceous',
      epoch: 'Late Cretaceous (Campanian)',
      mya: '75 – 71 Ma',
      clade: 'Theropod',
      diet: 'Omnivore',
      lengthM: 1.6,
      heightM: 0.8,
      weightTonnes: 0.035, // 35 kg
      topSpeedKmh: 36,
      biteForceN: 850,
      fossilSite: 'Djadokhta Formation, Flaming Cliffs, Gobi Desert, Mongolia',
      discoveredBy: 'Roy Chapman Andrews Expedition',
      discoveryYear: 1923,
      namedBy: 'Henry Fairfield Osborn, 1924',
      definingFeature: 'Powerful toothless beak with crushing palate and skull crest resembling a cassowary',
      overview: 'A feathered maniraptoran dinosaur wrongly accused of egg theft. While Osborn named it "egg thief" when found near a nest, subsequent discoveries revealed it was a devoted mother brooding its own eggs.',
      funFact: 'In 1993, American museum expeditions found an Oviraptor relative brooding directly on top of its eggs in an avian nest-warming pose.',
      fossilCoords: { lat: 44.18, lng: 103.70, formation: 'Djadokhta Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M10 36 Q28 34 46 30 Q60 24 72 16 Q82 10 88 12 Q84 18 76 24 Q64 28 54 32 Q46 38 42 44 L38 54 L34 54 L36 44 Q26 46 18 45 L14 54 L10 54 L12 42 Q8 40 10 36 Z"/></svg>`
    },
    {
      id: 'deinonychus',
      name: 'Deinonychus',
      pronunciation: 'die-NON-ih-kus',
      meaning: 'Terrible Claw',
      period: 'Cretaceous',
      epoch: 'Early Cretaceous (Aptian to Albian)',
      mya: '115 – 108 Ma',
      clade: 'Theropod',
      diet: 'Carnivore',
      lengthM: 3.4,
      heightM: 1.0,
      weightTonnes: 0.073, // 73 kg
      topSpeedKmh: 42,
      biteForceN: 4100,
      fossilSite: 'Cloverly Formation, Montana & Wyoming, USA',
      discoveredBy: 'John Ostrom',
      discoveryYear: 1964,
      namedBy: 'John Ostrom, 1969',
      definingFeature: '13cm retractable sickle claw on second toe and stiffened ossified rod tail for high-speed counterbalancing',
      overview: 'The dinosaur that sparked the Dinosaur Renaissance. John Ostrom’s 1969 description proved dinosaurs were warm-blooded, active, agile predators directly related to modern birds.',
      funFact: 'The "raptors" in the movie Jurassic Park were based on Deinonychus anatomy, but named Velociraptor because the director preferred the name.',
      fossilCoords: { lat: 45.15, lng: -108.82, formation: 'Cloverly Formation' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M6 35 Q24 33 46 29 Q62 23 76 17 Q88 13 96 10 Q92 18 80 23 Q68 28 58 32 Q48 40 42 48 L38 58 L32 58 L36 46 Q28 48 18 47 L14 57 L9 57 L11 44 Q6 40 6 35 Z"/></svg>`
    },
    {
      id: 'iguanodon',
      name: 'Iguanodon',
      pronunciation: 'ig-WAH-noh-don',
      meaning: 'Iguana Tooth',
      period: 'Cretaceous',
      epoch: 'Early Cretaceous (Barremian to Aptian)',
      mya: '126 – 122 Ma',
      clade: 'Ornithopod',
      diet: 'Herbivore',
      lengthM: 10.0,
      heightM: 3.0,
      weightTonnes: 4.5,
      topSpeedKmh: 24,
      biteForceN: 1400,
      fossilSite: 'Bernissart Coal Mine, Wallonia, Belgium',
      discoveredBy: 'Mary Ann Mantell',
      discoveryYear: 1822,
      namedBy: 'Gideon Mantell, 1825',
      definingFeature: 'Conical thumb spike used for defense and flexible prehensile fifth finger for grasping plants',
      overview: 'The second dinosaur ever scientifically named. A large, facultative bipedal herbivore with dental batteries of grinding teeth and a sharp conical thumb spike.',
      funFact: 'In early 19th-century reconstructions, Gideon Mantell mistakenly placed Iguanodon’s thumb spike on its nose like a rhinoceros horn.',
      fossilCoords: { lat: 50.48, lng: 3.65, formation: 'Sainte-Barbe Clays' },
      svgIcon: `<svg viewBox="0 0 100 60" fill="currentColor"><path d="M6 42 Q22 40 42 38 Q58 35 66 26 Q74 16 82 12 Q80 18 72 24 Q64 30 56 38 Q48 44 42 50 L38 58 L32 58 L36 48 Q28 49 18 48 L14 58 L8 58 L10 46 Q6 44 6 42 Z"/></svg>`
    }
  ];

  // =========================================================================
  // 1B. VERIFIED FREE ONLINE IMAGES (WIKIMEDIA COMMONS PUBLIC DOMAIN / CC-BY)
  // =========================================================================
  const DINO_IMAGES = {
    "coelophysis": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Coelophysis_fossilized_position_038.JPG",
    "herrerasaurus": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Herrerasaurus_DB.jpg",
    "plateosaurus": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Plateosaurus_picture4.png",
    "eoraptor": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Eoraptor_0573.JPG",
    "postosuchus": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Rauisuchia_Postosuchus_kirkpatricki.png",
    "allosaurus": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Allosaurus_Jaws_Steveoc86.jpg",
    "stegosaurus": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Stegosaurus_stenops_Life_Reconstruction_%28flipped%29.png",
    "brachiosaurus": "https://upload.wikimedia.org/wikipedia/commons/1/14/Brachiosaurus_altithorax.jpg",
    "diplodocus": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Diplodocus_%28Marsh%29_-_its_osteology%2C_taxonomy%2C_and_probable_habits%2C_with_a_restoration_of_the_skeleton_%281901%29_%2820768985940%29.jpg",
    "dilophosaurus": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Dilophosaurus%2C_Expo_Dinosaurios_2023_-_A740930.jpg",
    "ceratosaurus": "https://upload.wikimedia.org/wikipedia/commons/5/59/Ceratosaurus_sketch1.jpg",
    "archaeopteryx": "https://upload.wikimedia.org/wikipedia/commons/4/45/Archaeopteryx_lithographica_paris.JPG",
    "plesiosaurus": "https://upload.wikimedia.org/wikipedia/commons/3/30/Plesiosaurus_3DB.jpg",
    "pterodactylus": "https://upload.wikimedia.org/wikipedia/commons/8/84/Pterodactylus_antiquus_AMNH.jpg",
    "kentrosaurus": "https://upload.wikimedia.org/wikipedia/commons/1/13/Kentrosaurus_02.JPG",
    "tyrannosaurus-rex": "https://upload.wikimedia.org/wikipedia/commons/0/09/Tyrannosaurus-rex-Profile-steveoc86.png",
    "triceratops": "https://upload.wikimedia.org/wikipedia/commons/9/97/Triceratops-prorsus-YPM1822.jpg",
    "velociraptor": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Velociraptor_mongoliensis_type_skull_and_jaws.jpg",
    "spinosaurus": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Spinosaurus_Crane.jpg",
    "ankylosaurus": "https://upload.wikimedia.org/wikipedia/commons/3/36/Ankylosaurus_magniventris_reconstruction.png",
    "carnotaurus": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Carnotaurus%2C_Chlup%C3%A1%C4%8D_Museum%2C_Prague-2.jpg",
    "parasaurolophus": "https://upload.wikimedia.org/wikipedia/commons/5/58/Parasaurolophus_walkeri.jpg",
    "pachycephalosaurus": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Pachycephalosaurus_Reconstruction.jpg",
    "giganotosaurus": "https://upload.wikimedia.org/wikipedia/commons/6/66/Giganotosaurus_carolinii_DSC_2950.jpg",
    "mosasaurus": "https://upload.wikimedia.org/wikipedia/commons/2/22/Mosasaurus_ichthyosaurus.jpg",
    "quetzalcoatlus": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Life_restoration_of_a_group_of_giant_azhdarchids%2C_Quetzalcoatlus_northropi%2C_foraging_on_a_Cretaceous_fern_prairie.png",
    "therizinosaurus": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Therizinosaurus_cheloniformis_restoration.jpg",
    "argentinosaurus": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Argentinosaurus_DSC_2943.jpg",
    "baryonyx": "https://upload.wikimedia.org/wikipedia/commons/9/92/Baryonyx_walkeri_restoration.jpg",
    "oviraptor": "https://upload.wikimedia.org/wikipedia/commons/2/24/Oviraptor_digital1.jpg",
    "deinonychus": "https://upload.wikimedia.org/wikipedia/commons/4/42/DeinonychusGris.jpg",
    "iguanodon": "https://upload.wikimedia.org/wikipedia/commons/9/90/Iguanodon_bernissartensis_skull.JPG"
  };

  DINOSAURS.forEach(d => {
    d.imageUrl = DINO_IMAGES[d.id] || '';
  });

  // =========================================================================
  // 2. FOSSIL FORMATIONS CATALOG FOR LEAFLET MAP
  // =========================================================================
  const FOSSIL_FORMATIONS = [
    {
      id: 'hell-creek',
      name: 'Hell Creek Formation',
      country: 'USA (Montana, ND, SD, WY)',
      lat: 47.5,
      lng: -106.8,
      age: '68 – 66 Ma (Late Cretaceous)',
      description: 'The premier badland formation preserving the final millennia of non-avian dinosaurs right up to the iridium asteroid layer.',
      specimens: ['tyrannosaurus-rex', 'triceratops', 'ankylosaurus', 'pachycephalosaurus', 'quetzalcoatlus']
    },
    {
      id: 'morrison',
      name: 'Morrison Formation',
      country: 'USA (Western States)',
      lat: 39.5,
      lng: -108.5,
      age: '156 – 146 Ma (Late Jurassic)',
      description: 'The most fertile source of giant sauropod and predator fossils in the Western Hemisphere, heart of the Bone Wars.',
      specimens: ['allosaurus', 'stegosaurus', 'brachiosaurus', 'diplodocus', 'ceratosaurus']
    },
    {
      id: 'dinosaur-park',
      name: 'Dinosaur Provincial Park',
      country: 'Canada (Alberta)',
      lat: 50.76,
      lng: -111.5,
      age: '76.5 – 74.8 Ma (Late Cretaceous)',
      description: 'A UNESCO World Heritage badland renowned for dense hadrosaur, ceratopsian, and tyrannosaur bonebeds.',
      specimens: ['parasaurolophus', 'carnotaurus', 'ankylosaurus']
    },
    {
      id: 'kem-kem',
      name: 'Kem Kem Beds',
      country: 'Morocco (Sahara Margin)',
      lat: 31.0,
      lng: -4.0,
      age: '100 – 94 Ma (Late Cretaceous)',
      description: 'A perilous Cretaceous river delta described by paleontologists as "the most dangerous place in the history of planet Earth".',
      specimens: ['spinosaurus', 'baryonyx']
    },
    {
      id: 'flaming-cliffs',
      name: 'Flaming Cliffs (Djadokhta)',
      country: 'Mongolia (Gobi Desert)',
      lat: 44.15,
      lng: 103.73,
      age: '75 – 71 Ma (Late Cretaceous)',
      description: 'Red sandstone cliffs where Roy Chapman Andrews first proved that dinosaurs laid hard-shelled eggs.',
      specimens: ['velociraptor', 'oviraptor', 'therizinosaurus']
    },
    {
      id: 'solnhofen',
      name: 'Solnhofen Limestone',
      country: 'Germany (Bavaria)',
      lat: 48.9,
      lng: 11.0,
      age: '151 – 148 Ma (Late Jurassic)',
      description: 'Fine lithographic limestone renowned for lagoonal Konservat-Lagerstätten preserving delicate feathers and soft tissues.',
      specimens: ['archaeopteryx', 'pterodactylus']
    },
    {
      id: 'ischigualasto',
      name: 'Ischigualasto Basin (Valley of the Moon)',
      country: 'Argentina (San Juan)',
      lat: -30.15,
      lng: -67.85,
      age: '231 – 225 Ma (Late Triassic)',
      description: 'Rugged desert badlands containing the continuous geological sequence documenting the very first true dinosaurs.',
      specimens: ['herrerasaurus', 'eoraptor', 'coelophysis']
    },
    {
      id: 'tendaguru',
      name: 'Tendaguru Formation',
      country: 'Tanzania (Lindi)',
      lat: -9.5,
      lng: 39.3,
      age: '155 – 150 Ma (Late Jurassic)',
      description: 'Africa’s most celebrated Jurassic fossil site, yielding complete skeletons of giant sauropods and armored kentrosaurs.',
      specimens: ['kentrosaurus', 'allosaurus']
    }
  ];

  // =========================================================================
  // 3. SCALE COMPARATOR TARGETS
  // =========================================================================
  const SCALE_TARGETS = {
    human: { name: 'Human Explorer', lengthM: 1.8, heightM: 1.8, weightTonnes: 0.08, color: '#38bdf8' },
    bus: { name: 'City Bus', lengthM: 12.0, heightM: 3.2, weightTonnes: 15.0, color: '#f59e0b' },
    elephant: { name: 'African Elephant', lengthM: 6.5, heightM: 3.3, weightTonnes: 6.0, color: '#a855f7' },
    whale: { name: 'Blue Whale', lengthM: 30.0, heightM: 5.0, weightTonnes: 150.0, color: '#06b6d4' }
  };

  // =========================================================================
  // 4. PALEO QUIZ QUESTIONS POOL
  // =========================================================================
  const QUIZ_QUESTIONS = [
    {
      q: 'Which dinosaur possessed the strongest estimated bite force, capable of bone-crushing pressure exceeding 35,000 Newtons?',
      options: ['Tyrannosaurus Rex', 'Spinosaurus', 'Allosaurus', 'Carnotaurus'],
      correct: 0,
      fact: 'T-Rex had thick banana-shaped teeth with deep roots that could exert 35 kN, enough to pulverize bone.'
    },
    {
      q: 'What was the specialized function of Parasaurolophus’s 1.8-meter hollow curved cranial crest?',
      options: ['Snorkeling underwater', 'Acoustic horn for deep resonant calls', 'A weapon for head-butting', 'Storing excess food'],
      correct: 1,
      fact: 'CT scans show internal nasal airway loops that resonated sound like a brass trombone at ~30 Hz.'
    },
    {
      q: 'In which geological period did the colossal Brachiosaurus and Stegosaurus inhabit North America?',
      options: ['Triassic Period', 'Jurassic Period', 'Cretaceous Period', 'Permian Period'],
      correct: 1,
      fact: 'Both inhabited the lush conifer floodplains of the Late Jurassic Morrison Formation (~155-150 Ma).'
    },
    {
      q: 'Why was Oviraptor originally named "Egg Seizer" or "Egg Thief"?',
      options: ['Its teeth were designed to pierce shells', 'It was discovered on top of a nest mistaken for another dinosaur', 'It only hunted pterosaur eggs', 'Early fossils had eggshells in its stomach'],
      correct: 1,
      fact: 'Roy Chapman Andrews thought it was stealing Protoceratops eggs; later fossils proved Oviraptor was brooding its own nest!'
    },
    {
      q: 'Which dinosaur holds the record for the longest claws of any animal in Earth’s history (over 1 meter long)?',
      options: ['Velociraptor', 'Deinonychus', 'Therizinosaurus', 'Spinosaurus'],
      correct: 2,
      fact: 'Therizinosaurus had giant 1-meter scythe claws on its hands used to pull down tall tree branches.'
    },
    {
      q: 'True or False: The famous marine leviathan Mosasaurus was a dinosaur.',
      options: ['False (It was an aquatic squamate related to monitor lizards)', 'True (It was an ocean theropod)', 'True (It was a sauropod swimmer)', 'False (It was an ancient mammal)'],
      correct: 0,
      fact: 'Dinosaurs are defined by upright pillar limbs on land. Mosasaurus was a marine squamate related to monitor lizards.'
    },
    {
      q: 'Which predator was discovered at Flaming Cliffs, Mongolia with genuine preserved plumage of feathers?',
      options: ['Allosaurus', 'Velociraptor', 'Ceratosaurus', 'Carnotaurus'],
      correct: 1,
      fact: 'In 2007, paleontologists identified quill knobs on a Velociraptor forearm bone, proving it had modern flight-like feathers.'
    },
    {
      q: 'What is the four-spiked defensive weapon on the end of a Stegosaurus tail called?',
      options: ['Mace bulb', 'Thagomizer', 'Osteoderm spike', 'Spur anchor'],
      correct: 1,
      fact: 'Coined informally in a 1982 "Far Side" cartoon by Gary Larson, paleontologists adopted "Thagomizer" into scientific literature.'
    },
    {
      q: 'Which dinosaur is estimated to be among the heaviest land animals ever, weighing upwards of 75 metric tonnes?',
      options: ['Diplodocus', 'Argentinosaurus', 'Iguanodon', 'Plateosaurus'],
      correct: 1,
      fact: 'Argentinosaurus was a titanosaur whose single vertebra was over 1.6 meters tall.'
    },
    {
      q: 'Which transition fossil discovered in 1861 proved the evolutionary link between non-avian dinosaurs and modern birds?',
      options: ['Archaeopteryx', 'Coelophysis', 'Pterodactylus', 'Herrerasaurus'],
      correct: 0,
      fact: 'Archaeopteryx had flight feathers like a bird, but claws, teeth, and a long bony tail like a reptile.'
    }
  ];

  // =========================================================================
  // 5. PROCEDURAL WEB AUDIO ENGINE
  // =========================================================================
  class PaleoAudioEngine {
    constructor() {
      this.ctx = null;
      this.isMuted = false;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    // Subsonic dinosaur rumble
    playRumble() {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(65, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.35);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.45);
    }

    // Parasaurolophus acoustic horn call simulation (~30-80 Hz)
    playHorn() {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      filter.type = 'bandpass';
      filter.frequency.value = 85;
      filter.Q.value = 4.0;

      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(55, now);
      osc.frequency.linearRampToValueAtTime(75, now + 0.3);
      osc.frequency.linearRampToValueAtTime(45, now + 0.7);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.8);
    }

    // Pleasant UI tap tick
    playTick() {
      if (this.isMuted) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(700, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    }
  }

  // =========================================================================
  // 6. MAIN CONTROLLER
  // =========================================================================
  class PrehistoricDinosaurArchive {
    constructor() {
      this.audio = new PaleoAudioEngine();
      this.currentView = 'catalog'; // 'catalog' | 'comparator' | 'timeline' | 'map' | 'quiz'
      this.filterPeriod = 'all';
      this.filterDiet = 'all';
      this.filterClade = 'all';
      this.searchQuery = '';
      this.selectedDino = DINOSAURS[10]; // Default: T-Rex
      this.scaleComparisonTarget = 'human';
      this.unitSystem = 'metric'; // 'metric' | 'imperial'
      
      // Quiz State
      this.quizIndex = 0;
      this.quizScore = 0;
      this.quizActive = false;
      this.selectedQuestions = [];

      this.cacheDom();
      this.bindEvents();
      this.render();
    }

    cacheDom() {
      this.dom = {
        // Nav & Tabs
        viewTabs: document.querySelectorAll('.view-nav-btn'),
        viewSections: document.querySelectorAll('.view-section'),
        btnSoundToggle: document.getElementById('btnSoundToggle'),
        soundIcon: document.getElementById('soundIcon'),
        soundText: document.getElementById('soundText'),

        // Metrics Banner
        totalSpeciesCount: document.getElementById('totalSpeciesCount'),
        visibleSpeciesCount: document.getElementById('visibleSpeciesCount'),

        // Filters & Search
        searchInput: document.getElementById('dinoSearchInput'),
        periodFilterBtns: document.querySelectorAll('.period-filter-btn'),
        dietFilterBtns: document.querySelectorAll('.diet-filter-btn'),
        cladeFilterSelect: document.getElementById('cladeFilterSelect'),
        sortSelect: document.getElementById('dinoSortSelect'),
        cardsGrid: document.getElementById('dinoCardsGrid'),
        noResultsCard: document.getElementById('noResultsCard'),

        // Dossier Modal
        dossierModal: document.getElementById('dossierModal'),
        modalBackdrop: document.getElementById('modalBackdrop'),
        btnCloseDossier: document.getElementById('btnCloseDossier'),
        modalDinoTitle: document.getElementById('modalDinoTitle'),
        modalDinoEtymology: document.getElementById('modalDinoEtymology'),
        modalPeriodBadge: document.getElementById('modalPeriodBadge'),
        modalDietBadge: document.getElementById('modalDietBadge'),
        modalCladeBadge: document.getElementById('modalCladeBadge'),
        modalLengthVal: document.getElementById('modalLengthVal'),
        modalHeightVal: document.getElementById('modalHeightVal'),
        modalWeightVal: document.getElementById('modalWeightVal'),
        modalSpeedVal: document.getElementById('modalSpeedVal'),
        modalBiteVal: document.getElementById('modalBiteVal'),
        modalFossilSiteVal: document.getElementById('modalFossilSiteVal'),
        modalDiscovererVal: document.getElementById('modalDiscovererVal'),
        modalSuperPowerVal: document.getElementById('modalSuperPowerVal'),
        modalOverviewDesc: document.getElementById('modalOverviewDesc'),
        modalFunFactDesc: document.getElementById('modalFunFactDesc'),
        modalGraphicBox: document.getElementById('modalGraphicBox'),
        btnModalInspectScale: document.getElementById('btnModalInspectScale'),

        // Scale Comparator
        comparatorDinoSelect: document.getElementById('comparatorDinoSelect'),
        comparatorTargetBtns: document.querySelectorAll('.comparator-target-btn'),
        unitSystemToggle: document.getElementById('unitSystemToggle'),
        dinoScaleSilhouette: document.getElementById('dinoScaleSilhouette'),
        targetScaleSilhouette: document.getElementById('targetScaleSilhouette'),
        dinoScaleLabel: document.getElementById('dinoScaleLabel'),
        targetScaleLabel: document.getElementById('targetScaleLabel'),
        comparatorLengthDiff: document.getElementById('comparatorLengthDiff'),
        comparatorWeightDiff: document.getElementById('comparatorWeightDiff'),

        // Timeline
        timelineSlider: document.getElementById('timelineSlider'),
        timelinePeriodLabel: document.getElementById('timelinePeriodLabel'),
        timelineEpochDesc: document.getElementById('timelineEpochDesc'),
        timelineDinosaursList: document.getElementById('timelineDinosaursList'),

        // Fossil Map
        mapPinsContainer: document.getElementById('mapPinsContainer'),
        mapSiteName: document.getElementById('mapSiteName'),
        mapSiteCountry: document.getElementById('mapSiteCountry'),
        mapSiteAge: document.getElementById('mapSiteAge'),
        mapSiteDesc: document.getElementById('mapSiteDesc'),
        mapSiteDinosaurs: document.getElementById('mapSiteDinosaurs'),

        // Quiz
        quizWelcomeCard: document.getElementById('quizWelcomeCard'),
        quizPlayCard: document.getElementById('quizPlayCard'),
        quizResultsCard: document.getElementById('quizResultsCard'),
        btnStartQuiz: document.getElementById('btnStartQuiz'),
        btnRestartQuiz: document.getElementById('btnRestartQuiz'),
        quizProgressLabel: document.getElementById('quizProgressLabel'),
        quizScoreLabel: document.getElementById('quizScoreLabel'),
        quizQuestionText: document.getElementById('quizQuestionText'),
        quizOptionsContainer: document.getElementById('quizOptionsContainer'),
        quizFeedbackAlert: document.getElementById('quizFeedbackAlert'),
        btnNextQuestion: document.getElementById('btnNextQuestion'),
        finalScoreNumber: document.getElementById('finalScoreNumber'),
        finalScoreBadge: document.getElementById('finalScoreBadge')
      };
    }

    bindEvents() {
      // Sound Toggle
      this.dom.btnSoundToggle?.addEventListener('click', () => {
        this.audio.isMuted = !this.audio.isMuted;
        if (this.dom.soundIcon) this.dom.soundIcon.textContent = this.audio.isMuted ? '🔇' : '🔊';
        if (this.dom.soundText) this.dom.soundText.textContent = this.audio.isMuted ? 'Sound: OFF' : 'Sound: ON';
      });

      // View Tabs Navigation
      this.dom.viewTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          this.audio.playTick();
          const targetView = tab.dataset.view;
          this.switchView(targetView);
        });
      });

      // Filter: Search
      this.dom.searchInput?.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        this.renderCatalog();
      });

      // Filter: Period Pills
      this.dom.periodFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.audio.playTick();
          this.dom.periodFilterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.filterPeriod = btn.dataset.period;
          this.renderCatalog();
        });
      });

      // Filter: Diet Pills
      this.dom.dietFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.audio.playTick();
          this.dom.dietFilterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.filterDiet = btn.dataset.diet;
          this.renderCatalog();
        });
      });

      // Filter: Clade Select
      this.dom.cladeFilterSelect?.addEventListener('change', (e) => {
        this.filterClade = e.target.value;
        this.renderCatalog();
      });

      // Sort Select
      this.dom.sortSelect?.addEventListener('change', () => {
        this.renderCatalog();
      });

      // Dossier Modal Close
      this.dom.btnCloseDossier?.addEventListener('click', () => this.closeDossier());
      this.dom.modalBackdrop?.addEventListener('click', () => this.closeDossier());
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.closeDossier();
      });

      // Modal -> Go to Scale Comparator
      this.dom.btnModalInspectScale?.addEventListener('click', () => {
        this.closeDossier();
        this.switchView('comparator');
        if (this.dom.comparatorDinoSelect) {
          this.dom.comparatorDinoSelect.value = this.selectedDino.id;
          this.updateComparator();
        }
      });

      // Comparator Select & Target Toggle
      this.dom.comparatorDinoSelect?.addEventListener('change', (e) => {
        const found = DINOSAURS.find(d => d.id === e.target.value);
        if (found) {
          this.selectedDino = found;
          this.updateComparator();
        }
      });

      this.dom.comparatorTargetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.audio.playTick();
          this.dom.comparatorTargetBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.scaleComparisonTarget = btn.dataset.target;
          this.updateComparator();
        });
      });

      this.dom.unitSystemToggle?.addEventListener('change', (e) => {
        this.unitSystem = e.target.checked ? 'imperial' : 'metric';
        this.updateComparator();
      });

      // Timeline Slider
      this.dom.timelineSlider?.addEventListener('input', (e) => {
        this.updateTimeline(parseInt(e.target.value, 10));
      });

      // Quiz Buttons
      this.dom.btnStartQuiz?.addEventListener('click', () => this.startQuiz());
      this.dom.btnRestartQuiz?.addEventListener('click', () => this.startQuiz());
      this.dom.btnNextQuestion?.addEventListener('click', () => this.nextQuizQuestion());
    }

    switchView(viewName) {
      this.currentView = viewName;
      this.dom.viewTabs.forEach(t => t.classList.toggle('active', t.dataset.view === viewName));
      this.dom.viewSections.forEach(s => s.classList.toggle('active', s.id === `section-${viewName}`));

      if (viewName === 'comparator') {
        this.updateComparator();
      } else if (viewName === 'timeline') {
        this.updateTimeline(parseInt(this.dom.timelineSlider?.value || '66', 10));
      } else if (viewName === 'map') {
        this.renderMap();
        setTimeout(() => {
          if (this.leafletMap) this.leafletMap.invalidateSize();
        }, 200);
      }
    }

    // =======================================================================
    // CATALOG RENDERING
    // =======================================================================
    renderCatalog() {
      let filtered = DINOSAURS.filter(d => {
        // Period filter
        if (this.filterPeriod !== 'all' && d.period.toLowerCase() !== this.filterPeriod) return false;
        // Diet filter
        if (this.filterDiet !== 'all' && d.diet.toLowerCase() !== this.filterDiet) return false;
        // Clade filter
        if (this.filterClade !== 'all' && d.clade.toLowerCase() !== this.filterClade) return false;
        // Search query
        if (this.searchQuery) {
          const haystack = `${d.name} ${d.meaning} ${d.clade} ${d.fossilSite} ${d.definingFeature}`.toLowerCase();
          if (!haystack.includes(this.searchQuery)) return false;
        }
        return true;
      });

      // Sorting
      const sortVal = this.dom.sortSelect?.value || 'featured';
      if (sortVal === 'name-asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortVal === 'name-desc') {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
      } else if (sortVal === 'size-desc') {
        filtered.sort((a, b) => b.lengthM - a.lengthM);
      } else if (sortVal === 'weight-desc') {
        filtered.sort((a, b) => b.weightTonnes - a.weightTonnes);
      } else if (sortVal === 'age-asc') {
        filtered.sort((a, b) => {
          const ageA = parseInt(a.mya.split(' ')[0], 10);
          const ageB = parseInt(b.mya.split(' ')[0], 10);
          return ageB - ageA; // oldest first
        });
      }

      // Update counters
      if (this.dom.visibleSpeciesCount) this.dom.visibleSpeciesCount.textContent = filtered.length;
      if (this.dom.totalSpeciesCount) this.dom.totalSpeciesCount.textContent = DINOSAURS.length;

      // Render cards
      if (!this.dom.cardsGrid) return;
      this.dom.cardsGrid.innerHTML = '';

      if (filtered.length === 0) {
        if (this.dom.noResultsCard) this.dom.noResultsCard.classList.remove('hidden');
        return;
      }

      if (this.dom.noResultsCard) this.dom.noResultsCard.classList.add('hidden');

      filtered.forEach(dino => {
        const card = document.createElement('article');
        card.className = `dino-card period-${dino.period.toLowerCase()}`;
        card.setAttribute('data-id', dino.id);

        const dietIcon = dino.diet === 'Carnivore' ? '🥩' : (dino.diet === 'Herbivore' ? '🌿' : (dino.diet === 'Piscivore' ? '🐟' : '🌾'));
        const periodColor = dino.period === 'Triassic' ? 'badge-triassic' : (dino.period === 'Jurassic' ? 'badge-jurassic' : 'badge-cretaceous');

        card.innerHTML = `
          <div class="card-hero-media">
            <img src="${dino.imageUrl}" alt="${dino.name} specimen" class="card-dino-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="card-fallback-silhouette" style="display: none;">${dino.svgIcon}</div>
            <span class="diet-badge-floating">${dietIcon} ${dino.diet}</span>
          </div>
          <div class="card-body">
            <div class="card-meta-row">
              <span class="period-pill-tag ${periodColor}">${dino.period}</span>
              <span class="mya-tag">${dino.mya}</span>
            </div>
            <h3 class="card-title">${dino.name}</h3>
            <p class="card-meaning">"${dino.meaning}"</p>
            <p class="card-feature">${dino.definingFeature}</p>

            <div class="card-stats-matrix">
              <div class="stat-box">
                <span class="stat-box-lbl">Length</span>
                <span class="stat-box-val">${dino.lengthM}m</span>
              </div>
              <div class="stat-box">
                <span class="stat-box-lbl">Height</span>
                <span class="stat-box-val">${dino.heightM}m</span>
              </div>
              <div class="stat-box">
                <span class="stat-box-lbl">Weight</span>
                <span class="stat-box-val">${dino.weightTonnes >= 1 ? dino.weightTonnes + 't' : Math.round(dino.weightTonnes * 1000) + 'kg'}</span>
              </div>
            </div>

            <div class="card-actions">
              <button type="button" class="btn-inspect-dossier" data-id="${dino.id}">
                <span>Inspect Dossier</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        `;

        card.querySelector('.btn-inspect-dossier')?.addEventListener('click', (e) => {
          e.stopPropagation();
          this.audio.playRumble();
          this.openDossier(dino.id);
        });

        card.addEventListener('click', () => {
          this.audio.playRumble();
          this.openDossier(dino.id);
        });

        this.dom.cardsGrid.appendChild(card);
      });
    }

    // =======================================================================
    // DOSSIER MODAL
    // =======================================================================
    openDossier(dinoId) {
      const dino = DINOSAURS.find(d => d.id === dinoId);
      if (!dino) return;
      this.selectedDino = dino;

      if (this.dom.modalDinoTitle) this.dom.modalDinoTitle.textContent = dino.name;
      if (this.dom.modalDinoEtymology) this.dom.modalDinoEtymology.textContent = `"${dino.meaning}" • ${dino.pronunciation}`;
      if (this.dom.modalPeriodBadge) {
        this.dom.modalPeriodBadge.textContent = `${dino.period} (${dino.mya})`;
        this.dom.modalPeriodBadge.className = `modal-pill badge-${dino.period.toLowerCase()}`;
      }
      if (this.dom.modalDietBadge) this.dom.modalDietBadge.textContent = dino.diet;
      if (this.dom.modalCladeBadge) this.dom.modalCladeBadge.textContent = dino.clade;

      if (this.dom.modalLengthVal) this.dom.modalLengthVal.textContent = `${dino.lengthM} meters (${Math.round(dino.lengthM * 3.28084)} ft)`;
      if (this.dom.modalHeightVal) this.dom.modalHeightVal.textContent = `${dino.heightM} meters (${Math.round(dino.heightM * 3.28084)} ft)`;
      if (this.dom.modalWeightVal) {
        const tonnesStr = dino.weightTonnes >= 1 ? `${dino.weightTonnes} tonnes` : `${Math.round(dino.weightTonnes * 1000)} kg`;
        const lbsStr = Math.round(dino.weightTonnes * 2204.62).toLocaleString();
        this.dom.modalWeightVal.textContent = `${tonnesStr} (${lbsStr} lbs)`;
      }
      if (this.dom.modalSpeedVal) this.dom.modalSpeedVal.textContent = `${dino.topSpeedKmh} km/h (${Math.round(dino.topSpeedKmh * 0.621371)} mph)`;
      if (this.dom.modalBiteVal) this.dom.modalBiteVal.textContent = `${dino.biteForceN.toLocaleString()} N (~${Math.round(dino.biteForceN / 4.448)} lbf)`;
      if (this.dom.modalFossilSiteVal) this.dom.modalFossilSiteVal.textContent = dino.fossilSite;
      if (this.dom.modalDiscovererVal) this.dom.modalDiscovererVal.textContent = `${dino.discoveredBy} (${dino.discoveryYear})`;
      if (this.dom.modalSuperPowerVal) this.dom.modalSuperPowerVal.textContent = dino.definingFeature;
      if (this.dom.modalOverviewDesc) this.dom.modalOverviewDesc.textContent = dino.overview;
      if (this.dom.modalFunFactDesc) this.dom.modalFunFactDesc.textContent = dino.funFact;

      if (this.dom.modalGraphicBox) {
        this.dom.modalGraphicBox.innerHTML = `
          <img src="${dino.imageUrl}" alt="${dino.name} specimen" class="modal-dino-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="modal-dino-vector" style="display: none;">
            ${dino.svgIcon}
          </div>
        `;
      }

      this.dom.dossierModal?.classList.remove('hidden');
      this.dom.modalBackdrop?.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    closeDossier() {
      this.dom.dossierModal?.classList.add('hidden');
      this.dom.modalBackdrop?.classList.add('hidden');
      document.body.style.overflow = '';
    }

    // =======================================================================
    // SCALE COMPARATOR
    // =======================================================================
    updateComparator() {
      const dino = this.selectedDino;
      const target = SCALE_TARGETS[this.scaleComparisonTarget] || SCALE_TARGETS.human;

      // Populate dino dropdown if empty
      if (this.dom.comparatorDinoSelect && this.dom.comparatorDinoSelect.options.length === 0) {
        DINOSAURS.forEach(d => {
          const opt = document.createElement('option');
          opt.value = d.id;
          opt.textContent = `${d.name} (${d.lengthM}m)`;
          this.dom.comparatorDinoSelect.appendChild(opt);
        });
        this.dom.comparatorDinoSelect.value = dino.id;
      }

      // Proportional visual scaling
      // Max length in set is ~35m (Argentinosaurus). We map 35m to 85% width.
      const maxLen = 35.0;
      const dinoPct = Math.max(12, Math.min(95, (dino.lengthM / maxLen) * 90));
      const targetPct = Math.max(8, Math.min(95, (target.lengthM / maxLen) * 90));

      if (this.dom.dinoScaleSilhouette) {
        this.dom.dinoScaleSilhouette.style.width = `${dinoPct}%`;
        this.dom.dinoScaleSilhouette.innerHTML = dino.svgIcon;
      }

      if (this.dom.targetScaleSilhouette) {
        this.dom.targetScaleSilhouette.style.width = `${targetPct}%`;
        // Target silhouette SVGs
        let targetSvg = '';
        if (this.scaleComparisonTarget === 'human') {
          targetSvg = `<svg viewBox="0 0 40 80" fill="${target.color}"><circle cx="20" cy="12" r="8"/><path d="M12 24 L28 24 L26 50 L28 78 L22 78 L20 54 L18 78 L12 78 L14 50 Z"/></svg>`;
        } else if (this.scaleComparisonTarget === 'bus') {
          targetSvg = `<svg viewBox="0 0 160 60" fill="${target.color}"><rect x="10" y="10" width="140" height="38" rx="6"/><circle cx="35" cy="48" r="8" fill="#18181b"/><circle cx="125" cy="48" r="8" fill="#18181b"/><rect x="20" y="16" width="22" height="14" fill="#0f172a"/><rect x="50" y="16" width="22" height="14" fill="#0f172a"/><rect x="80" y="16" width="22" height="14" fill="#0f172a"/><rect x="110" y="16" width="22" height="14" fill="#0f172a"/></svg>`;
        } else if (this.scaleComparisonTarget === 'elephant') {
          targetSvg = `<svg viewBox="0 0 100 70" fill="${target.color}"><path d="M10 38 Q25 30 45 28 Q65 24 80 18 Q86 16 90 20 L86 45 Q78 48 68 50 L64 68 L56 68 L58 50 L42 50 L38 68 L30 68 L34 46 Q20 48 10 38 Z"/></svg>`;
        } else {
          // whale
          targetSvg = `<svg viewBox="0 0 200 60" fill="${target.color}"><path d="M10 30 Q50 20 100 18 Q150 15 185 24 L195 18 L192 30 L195 42 L185 36 Q150 45 100 42 Q50 40 10 30 Z"/></svg>`;
        }
        this.dom.targetScaleSilhouette.innerHTML = targetSvg;
      }

      // Format Labels
      const isImp = this.unitSystem === 'imperial';
      const dinoLen = isImp ? `${Math.round(dino.lengthM * 3.28)} ft` : `${dino.lengthM}m`;
      const dinoWt = isImp ? `${Math.round(dino.weightTonnes * 2204.6).toLocaleString()} lbs` : (dino.weightTonnes >= 1 ? `${dino.weightTonnes}t` : `${Math.round(dino.weightTonnes * 1000)}kg`);
      
      const targetLen = isImp ? `${Math.round(target.lengthM * 3.28)} ft` : `${target.lengthM}m`;
      const targetWt = isImp ? `${Math.round(target.weightTonnes * 2204.6).toLocaleString()} lbs` : (target.weightTonnes >= 1 ? `${target.weightTonnes}t` : `${Math.round(target.weightTonnes * 1000)}kg`);

      if (this.dom.dinoScaleLabel) {
        this.dom.dinoScaleLabel.textContent = `${dino.name} (${dinoLen} • ${dinoWt})`;
      }
      if (this.dom.targetScaleLabel) {
        this.dom.targetScaleLabel.textContent = `${target.name} (${targetLen} • ${targetWt})`;
      }

      // Comparison differences
      if (this.dom.comparatorLengthDiff) {
        const ratio = (dino.lengthM / target.lengthM).toFixed(1);
        this.dom.comparatorLengthDiff.textContent = `${dino.name} is ${ratio}× as long as ${target.name}`;
      }
      if (this.dom.comparatorWeightDiff) {
        const ratioW = (dino.weightTonnes / target.weightTonnes).toFixed(1);
        this.dom.comparatorWeightDiff.textContent = ratioW >= 1 ? 
          `${ratioW}× heavier than ${target.name}` : 
          `${(target.weightTonnes / dino.weightTonnes).toFixed(1)}× lighter than ${target.name}`;
      }
    }

    // =======================================================================
    // GEOLOGIC TIMELINE
    // =======================================================================
    updateTimeline(mya) {
      if (this.dom.timelineSlider) this.dom.timelineSlider.value = mya;

      let periodName = 'Late Cretaceous';
      let epochDesc = 'T-Rex, Triceratops, Ankylosaurus rule until the 66 Ma Chicxulub asteroid impact.';
      let filterFn = d => d.period === 'Cretaceous';

      if (mya > 201) {
        periodName = 'Late Triassic Period';
        epochDesc = 'Pangea supercontinent. Dawn of the earliest bipedal theropods and prosauropods.';
        filterFn = d => d.period === 'Triassic';
      } else if (mya > 145) {
        periodName = 'Jurassic Period';
        epochDesc = 'Golden Age of Giant Sauropods (Brachiosaurus, Diplodocus) and predator Allosaurus.';
        filterFn = d => d.period === 'Jurassic';
      }

      if (this.dom.timelinePeriodLabel) {
        this.dom.timelinePeriodLabel.textContent = `${periodName} (~${mya} Million Years Ago)`;
      }
      if (this.dom.timelineEpochDesc) {
        this.dom.timelineEpochDesc.textContent = epochDesc;
      }

      const activeDinos = DINOSAURS.filter(filterFn);
      if (this.dom.timelineDinosaursList) {
        this.dom.timelineDinosaursList.innerHTML = activeDinos.map(d => `
          <div class="timeline-dino-chip" data-id="${d.id}">
            <span class="chip-dot"></span>
            <span class="chip-name">${d.name}</span>
            <span class="chip-mya">${d.mya}</span>
          </div>
        `).join('');

        this.dom.timelineDinosaursList.querySelectorAll('.timeline-dino-chip').forEach(chip => {
          chip.addEventListener('click', () => {
            this.openDossier(chip.dataset.id);
          });
        });
      }
    }

    // =======================================================================
    // FOSSIL DIG SITES MAP
    // =======================================================================
    renderMap() {
      const container = document.getElementById('fossilLeafletMap');
      if (!container || typeof L === 'undefined') return;

      if (!this.leafletMap) {
        this.leafletMap = L.map('fossilLeafletMap', {
          center: [25, 10],
          zoom: 2,
          minZoom: 1,
          maxZoom: 9,
          zoomControl: true,
          attributionControl: false
        });

        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 16,
          attribution: 'Esri, HERE, Garmin, OpenStreetMap'
        }).addTo(this.leafletMap);

        this.markersGroup = L.layerGroup().addTo(this.leafletMap);

        FOSSIL_FORMATIONS.forEach(site => {
          const customIcon = L.divIcon({
            className: 'custom-fossil-pin',
            html: `
              <div class="pin-marker-pulse">
                <span class="pulse-beacon"></span>
                <div class="pin-badge">
                  <span class="pin-emoji">🦴</span>
                  <span class="pin-site-name">${site.name.split(' ')[0]}</span>
                </div>
              </div>
            `,
            iconSize: [44, 44],
            iconAnchor: [22, 22]
          });

          const marker = L.marker([site.lat, site.lng], { icon: customIcon }).addTo(this.markersGroup);
          marker.on('click', () => {
            this.audio.playRumble();
            this.selectFossilSite(site);
            this.leafletMap.flyTo([site.lat, site.lng], 4, { duration: 1.2 });
          });
        });
      }

      setTimeout(() => {
        if (this.leafletMap) this.leafletMap.invalidateSize();
      }, 250);

      // Default to Hell Creek
      this.selectFossilSite(FOSSIL_FORMATIONS[0]);
    }

    selectFossilSite(site) {
      if (this.dom.mapSiteName) this.dom.mapSiteName.textContent = site.name;
      if (this.dom.mapSiteCountry) this.dom.mapSiteCountry.textContent = `📍 ${site.country}`;
      if (this.dom.mapSiteAge) this.dom.mapSiteAge.textContent = `⏳ ${site.age}`;
      if (this.dom.mapSiteDesc) this.dom.mapSiteDesc.textContent = site.description;

      const foundDinos = DINOSAURS.filter(d => site.specimens.includes(d.id));
      if (this.dom.mapSiteDinosaurs) {
        this.dom.mapSiteDinosaurs.innerHTML = foundDinos.map(d => `
          <button type="button" class="site-dino-btn" data-id="${d.id}">
            <span>${d.name}</span>
            <span class="btn-arrow">→</span>
          </button>
        `).join('');

        this.dom.mapSiteDinosaurs.querySelectorAll('.site-dino-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            this.openDossier(btn.dataset.id);
          });
        });
      }
    }

    // =======================================================================
    // PALEO QUIZ MASTER
    // =======================================================================
    startQuiz() {
      // Shuffle & pick 10 questions
      this.selectedQuestions = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 10);
      this.quizIndex = 0;
      this.quizScore = 0;
      this.quizActive = true;

      this.dom.quizWelcomeCard?.classList.add('hidden');
      this.dom.quizResultsCard?.classList.add('hidden');
      this.dom.quizPlayCard?.classList.remove('hidden');

      this.renderQuizQuestion();
    }

    renderQuizQuestion() {
      const q = this.selectedQuestions[this.quizIndex];
      if (!q) return;

      if (this.dom.quizProgressLabel) this.dom.quizProgressLabel.textContent = `Question ${this.quizIndex + 1} of 10`;
      if (this.dom.quizScoreLabel) this.dom.quizScoreLabel.textContent = `Score: ${this.quizScore} / ${this.quizIndex}`;
      if (this.dom.quizQuestionText) this.dom.quizQuestionText.textContent = q.q;

      if (this.dom.quizFeedbackAlert) {
        this.dom.quizFeedbackAlert.className = 'quiz-feedback hidden';
        this.dom.quizFeedbackAlert.innerHTML = '';
      }
      if (this.dom.btnNextQuestion) this.dom.btnNextQuestion.classList.add('hidden');

      if (!this.dom.quizOptionsContainer) return;
      this.dom.quizOptionsContainer.innerHTML = '';

      q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-option-btn';
        btn.textContent = optText;

        btn.addEventListener('click', () => {
          if (!this.quizActive) return;
          this.handleQuizAnswer(optIdx, btn);
        });

        this.dom.quizOptionsContainer.appendChild(btn);
      });
    }

    handleQuizAnswer(selectedIdx, clickedBtn) {
      const q = this.selectedQuestions[this.quizIndex];
      this.quizActive = false; // lock options
      const allBtns = this.dom.quizOptionsContainer?.querySelectorAll('.quiz-option-btn');

      const isCorrect = selectedIdx === q.correct;
      if (isCorrect) {
        this.quizScore++;
        this.audio.playHorn();
        clickedBtn.classList.add('correct');
      } else {
        clickedBtn.classList.add('incorrect');
        // highlight correct
        if (allBtns && allBtns[q.correct]) {
          allBtns[q.correct].classList.add('correct');
        }
      }

      if (this.dom.quizFeedbackAlert) {
        this.dom.quizFeedbackAlert.className = `quiz-feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;
        this.dom.quizFeedbackAlert.innerHTML = `
          <strong>${isCorrect ? '✅ Spot on!' : '❌ Incorrect!'}</strong> ${q.fact}
        `;
      }

      if (this.dom.btnNextQuestion) {
        this.dom.btnNextQuestion.textContent = this.quizIndex < 9 ? 'Next Question ➔' : 'View Final Certification ➔';
        this.dom.btnNextQuestion.classList.remove('hidden');
      }
    }

    nextQuizQuestion() {
      this.quizIndex++;
      if (this.quizIndex < 10) {
        this.quizActive = true;
        this.renderQuizQuestion();
      } else {
        this.finishQuiz();
      }
    }

    finishQuiz() {
      this.dom.quizPlayCard?.classList.add('hidden');
      this.dom.quizResultsCard?.classList.remove('hidden');

      if (this.dom.finalScoreNumber) {
        this.dom.finalScoreNumber.textContent = `${this.quizScore} / 10`;
      }

      let rank = 'Junior Fossil Hunter 🦴';
      if (this.quizScore >= 9) {
        rank = 'Grand Master Paleontologist 🦖👑';
      } else if (this.quizScore >= 7) {
        rank = 'Senior Mesozoic Curator 🏛️';
      } else if (this.quizScore >= 5) {
        rank = 'Field Excavation Scout 🔍';
      }

      if (this.dom.finalScoreBadge) {
        this.dom.finalScoreBadge.textContent = rank;
      }
    }

    render() {
      this.renderCatalog();
      this.updateComparator();
      this.updateTimeline(66);
    }
  }

  // =========================================================================
  // BOOTSTRAP
  // =========================================================================
  window.addEventListener('DOMContentLoaded', () => {
    window.dinoApp = new PrehistoricDinosaurArchive();
  });

})();
