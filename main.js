import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.185.1/build/three.module.js";

// =============================
// PERSONALIZA AQUÍ
// =============================
const CONFIG = {
  sobrina: "mi pequeña aventurera",
  firma: "Con todo mi cariño, tu tío",
  soundtrackFile: "soundtrack.mp3",
  tituloFinal: "Feliz cumpleaños número 9",
  mensajeFinal: [
    "El secreto final no estaba dentro de una gema ni debajo de una piedra antigua.",
    "El secreto era que cada gema estaba formando un espejo: la imaginación, la curiosidad, la valentía, la risa, la calma, la bondad, los sueños, la inteligencia y el amor ya viven en ti.",
    "Hoy el reino del bosque no te entregó poderes. Solo te recordó algo que tu tío ya sabía: tú eres una aventura completa, una historia brillante y una persona capaz de iluminar lugares que todavía no conoces.",
    "Que tus 9 años sean el comienzo de una etapa donde preguntes mucho, sueñes fuerte, cuides tu corazón y nunca olvides que ser tú misma es una magia enorme.",
    "Feliz cumpleaños. El mapa más importante no estaba en la pantalla: está en la forma hermosa en la que vas creciendo."
  ].join("\n\n")
};

const GEMAS = [
  {
    nombre: "Gema 1 — El primer paso",
    pos: [-21, 0, -18],
    acertijo: {
      pregunta: "Para comenzar una aventura no necesitas correr. ¿Qué necesitas hacer primero?",
      visual: "👣  →  ?  →  🌟",
      opciones: ["Dar un paso", "Cerrar los ojos", "Guardar el mapa"],
      correcta: 0,
      pista: "Toda aventura enorme empieza con algo pequeñito."
    },
    texto: `Hoy cumples 9 años, ${CONFIG.sobrina}. Que nunca te dé miedo comenzar despacio: los pasos pequeños también llevan a lugares maravillosos.`
  },
  {
    nombre: "Gema 2 — La imaginación",
    pos: [-7, 0, -27],
    acertijo: {
      pregunta: "Si una semilla sueña con tocar el cielo, ¿en qué puede convertirse con tiempo y cuidado?",
      visual: "🌱  →  🌿  →  ?",
      opciones: ["En una estrella", "En un árbol", "En una nube"],
      correcta: 1,
      pista: "Crece desde la tierra, pero quiere saludar al sol."
    },
    texto: "Tu imaginación es una llave secreta. Con ella puedes convertir una tarde normal en un castillo, una pregunta en un invento y una idea en un mundo entero."
  },
  {
    nombre: "Gema 3 — El número mágico",
    pos: [15, 0, -24],
    acertijo: {
      pregunta: "El bosque tiene 4 luciérnagas doradas y 5 luciérnagas azules. ¿Cuántas luces bailan en total?",
      visual: "4 ✦ + 5 ✦ = ?",
      opciones: ["8", "9", "10"],
      correcta: 1,
      pista: "Es el mismo número que celebramos hoy."
    },
    texto: "Cumplir 9 años es como abrir una puerta nueva: ya sabes muchas cosas, pero todavía tienes un montón de misterios hermosos esperando por ti."
  },
  {
    nombre: "Gema 4 — La valentía",
    pos: [28, 0, -8],
    acertijo: {
      pregunta: "¿Qué hace una persona valiente cuando algo le da nervios, pero sabe que vale la pena intentarlo?",
      visual: "😟  +  ❤️  =  ?",
      opciones: ["Se burla del miedo", "Avanza con cuidado", "Nunca pide ayuda"],
      correcta: 1,
      pista: "La valentía no borra el miedo; lo toma de la mano."
    },
    texto: "Ser valiente no significa no tener miedo. Significa escuchar tu corazón, respirar profundo y avanzar con cuidado cuando algo importante te llama."
  },
  {
    nombre: "Gema 5 — La risa escondida",
    pos: [24, 0, 14],
    acertijo: {
      pregunta: "Estoy en una broma, en una cosquilla y en una tarde feliz. Hago que el mundo pese menos. ¿Qué soy?",
      visual: "😂  🌈  🎈",
      opciones: ["La risa", "La lluvia", "Una llave"],
      correcta: 0,
      pista: "A veces aparece tan fuerte que hasta duele la pancita."
    },
    texto: "Ojalá nunca te falten risas de esas que hacen que todo se sienta más ligero. Tu alegría también puede ser un regalo para quienes caminan contigo."
  },
  {
    nombre: "Gema 6 — Las preguntas",
    pos: [6, 0, 29],
    acertijo: {
      pregunta: "¿Qué palabra abre puertas invisibles cuando quieres entender el mundo?",
      visual: "¿ ?  ¿ ?  ¿ ?",
      opciones: ["Porque", "Quizás", "¿Por qué?"],
      correcta: 2,
      pista: "Es la frase favorita de quienes descubren cosas nuevas."
    },
    texto: "Tus preguntas son tesoros. No dejes que nadie apague tu curiosidad: preguntar es una forma inteligente de hacer crecer la luz por dentro."
  },
  {
    nombre: "Gema 7 — La bondad",
    pos: [-17, 0, 25],
    acertijo: {
      pregunta: "¿Qué tesoro se hace más grande cuando lo compartes con alguien más?",
      visual: "💛  →  💛💛  →  💛💛💛",
      opciones: ["La bondad", "Una piedra", "Un candado"],
      correcta: 0,
      pista: "No se guarda en bolsillos; se nota en los actos."
    },
    texto: "La bondad parece suave, pero es una fuerza gigante. Puede cambiar un día triste, cuidar una amistad y convertir cualquier lugar en un sitio más bonito."
  },
  {
    nombre: "Gema 8 — El patrón secreto",
    pos: [-31, 0, 5],
    acertijo: {
      pregunta: "Completa la secuencia del bosque: luna, estrella, luna, estrella... ¿qué sigue?",
      visual: "🌙  ✦  🌙  ✦  ?",
      opciones: ["🌙", "🌳", "🔥"],
      correcta: 0,
      pista: "El patrón repite su propio baile."
    },
    texto: "Aprender a mirar con atención es una magia especial. Muchas respuestas aparecen cuando observas despacio, confías en tu mente y te das tiempo."
  },
  {
    nombre: "Gema 9 — Tu propia luz",
    pos: [0, 0, 0],
    acertijo: {
      pregunta: "No se compra, no se copia y no necesita parecerse a nadie más. Cuando eres tú misma, brilla. ¿Qué es?",
      visual: "🫶  +  ✨  +  tú",
      opciones: ["Tu propia luz", "Una corona", "Un espejo mágico"],
      correcta: 0,
      pista: "Es lo que te hace única, incluso cuando estás en silencio."
    },
    texto: "Nunca escondas tu forma de brillar. El mundo no necesita que seas igual a nadie: necesita exactamente esa luz que solo tú puedes traer."
  }
];

// Colores aleatorios y estables para cada carga.
GEMAS.forEach((gema, index) => {
  const color = new THREE.Color().setHSL((rand(index + 512) + index * 0.11) % 1, 0.88, 0.67);
  gema.color = color.getHex();
});

// =============================
// ESCENA BASE
// =============================
const container = document.querySelector("#scene-container");
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1b17);
scene.fog = new THREE.FogExp2(0x0b1b17, 0.023);

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 260);
camera.position.set(0, 22, 25);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.04;
container.appendChild(renderer.domElement);

const clock = new THREE.Clock();
const tmp = new THREE.Vector3();
const cameraTarget = new THREE.Vector3();

const ambient = new THREE.HemisphereLight(0xb6ffe6, 0x1c1309, 1.45);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffe0a3, 3.15);
sun.position.set(-18, 30, 18);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -58;
sun.shadow.camera.right = 58;
sun.shadow.camera.top = 58;
sun.shadow.camera.bottom = -58;
scene.add(sun);

const moon = new THREE.PointLight(0x7ddcff, 2.1, 90, 2);
moon.position.set(18, 15, -34);
scene.add(moon);

// =============================
// MATERIALES
// =============================
const matGrass = new THREE.MeshStandardMaterial({ color: 0x184f39, roughness: 0.96, metalness: 0.02 });
const matGrassDark = new THREE.MeshStandardMaterial({ color: 0x0f3028, roughness: 1 });
const matPath = new THREE.MeshStandardMaterial({ color: 0xb48d5a, roughness: 0.9 });
const matStone = new THREE.MeshStandardMaterial({ color: 0x6a7068, roughness: 0.85 });
const matStoneDark = new THREE.MeshStandardMaterial({ color: 0x3a4340, roughness: 0.95 });
const matWood = new THREE.MeshStandardMaterial({ color: 0x6e4325, roughness: 0.9 });
const matLeaves = new THREE.MeshStandardMaterial({ color: 0x1d6c42, roughness: 0.88 });
const matLeaves2 = new THREE.MeshStandardMaterial({ color: 0x2b8a56, roughness: 0.86 });
const matLeavesDark = new THREE.MeshStandardMaterial({ color: 0x0d4c34, roughness: 0.9 });
const matWater = new THREE.MeshStandardMaterial({ color: 0x174e5c, emissive: 0x0a2633, roughness: 0.3, metalness: 0.05 });
const matFlower = new THREE.MeshStandardMaterial({ color: 0xffd86b, emissive: 0x422800, roughness: 0.7 });
const matMushroom = new THREE.MeshStandardMaterial({ color: 0xe45757, roughness: 0.72 });
const matMushroomStem = new THREE.MeshStandardMaterial({ color: 0xf4ddb8, roughness: 0.8 });
const matCloud = new THREE.MeshStandardMaterial({ color: 0xf7fff6, roughness: 0.95, transparent: true, opacity: 0.72 });

const sparkObjects = [];
const animalObjects = [];
const cloudObjects = [];

// =============================
// MAPA
// =============================
const ground = new THREE.Mesh(new THREE.CircleGeometry(52, 128), matGrass);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const underGround = new THREE.Mesh(new THREE.CircleGeometry(76, 128), matGrassDark);
underGround.rotation.x = -Math.PI / 2;
underGround.position.y = -0.07;
scene.add(underGround);

createPath();
createTempleCenter();
createPond();
createBridge();
createTrees();
createGemHidingTrees();
createRocksAndRuins();
createBoundaryRunes();
createFlowersAndMushrooms();
createAnimals();
createClouds();
createStars();

function createPath() {
  const points = GEMAS.map(g => [g.pos[0], g.pos[2]]);
  for (let i = 0; i < points.length - 1; i++) {
    const [x1, z1] = points[i];
    const [x2, z2] = points[i + 1];
    const dx = x2 - x1;
    const dz = z2 - z1;
    const length = Math.hypot(dx, dz);
    const tile = new THREE.Mesh(new THREE.PlaneGeometry(2.05, length + 1.2), matPath);
    tile.rotation.x = -Math.PI / 2;
    tile.rotation.z = -Math.atan2(dx, dz);
    tile.position.set((x1 + x2) / 2, 0.012, (z1 + z2) / 2);
    tile.receiveShadow = true;
    scene.add(tile);
  }
  points.forEach(([x, z]) => {
    const circle = new THREE.Mesh(new THREE.CircleGeometry(1.4, 28), matPath);
    circle.rotation.x = -Math.PI / 2;
    circle.position.set(x, 0.018, z);
    circle.receiveShadow = true;
    scene.add(circle);
  });
}

function createTempleCenter() {
  const base = new THREE.Mesh(new THREE.CylinderGeometry(4.0, 4.45, 0.72, 9), matStoneDark);
  base.position.set(0, 0.36, 0);
  base.castShadow = true;
  base.receiveShadow = true;
  scene.add(base);

  const inner = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.6, 0.25, 9), matStone);
  inner.position.set(0, 0.87, 0);
  inner.castShadow = true;
  scene.add(inner);

  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.36, 3.5 + rand(i) * 0.8, 8), i % 2 ? matStone : matStoneDark);
    pillar.position.set(Math.cos(a) * 4.9, pillar.geometry.parameters.height / 2, Math.sin(a) * 4.9);
    pillar.castShadow = true;
    scene.add(pillar);

    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.28, 0.88), matStoneDark);
    cap.position.set(pillar.position.x, pillar.geometry.parameters.height + 0.14, pillar.position.z);
    cap.rotation.y = a;
    cap.castShadow = true;
    scene.add(cap);
  }
}

function createPond() {
  const pond = new THREE.Mesh(new THREE.CircleGeometry(5.2, 56), matWater);
  pond.rotation.x = -Math.PI / 2;
  pond.position.set(18.5, 0.03, 18.5);
  pond.receiveShadow = true;
  scene.add(pond);

  for (let i = 0; i < 16; i++) {
    const a = i * 0.42;
    const r = 4.85 + rand(i) * 1.05;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.26 + rand(i + 10) * 0.4, 0), matStone);
    rock.position.set(18.5 + Math.cos(a) * r, 0.22, 18.5 + Math.sin(a) * r);
    rock.scale.y = 0.45;
    rock.rotation.set(rand(i + 20), rand(i + 30), rand(i + 40));
    rock.castShadow = true;
    scene.add(rock);
  }
}

function createBridge() {
  const bridge = new THREE.Group();
  bridge.position.set(15.8, 0.18, 17.0);
  bridge.rotation.y = -0.62;
  for (let i = -3; i <= 3; i++) {
    const plank = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.18, 3.35), matWood);
    plank.position.x = i * 0.6;
    plank.castShadow = true;
    bridge.add(plank);
  }
  for (let side of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.14, 0.18), matWood);
    rail.position.set(0, 0.58, side * 1.75);
    rail.castShadow = true;
    bridge.add(rail);
  }
  scene.add(bridge);
}

function createTrees() {
  for (let i = 0; i < 175; i++) {
    const a = rand(i) * Math.PI * 2;
    const r = 12 + rand(i + 101) * 39;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (Math.abs(x) < 5.5 && Math.abs(z) < 5.5) continue;
    if (distanceToAnyGem(x, z) < 2.4) continue;
    createTreeAt(x, z, 0.75 + rand(i + 222) * 0.95, i);
  }
}

function createGemHidingTrees() {
  GEMAS.forEach((gema, index) => {
    if (index === GEMAS.length - 1) return;
    const x = gema.pos[0];
    const z = gema.pos[2];
    const angle = rand(index + 9000) * Math.PI * 2;
    createTreeAt(x + Math.cos(angle) * 1.35, z + Math.sin(angle) * 1.35, 0.82 + rand(index + 2) * 0.35, index + 600);
    createTreeAt(x + Math.cos(angle + 2.25) * 1.75, z + Math.sin(angle + 2.25) * 1.75, 0.72 + rand(index + 4) * 0.42, index + 700);
    if (index % 2 === 0) {
      createTreeAt(x + Math.cos(angle - 2.05) * 1.55, z + Math.sin(angle - 2.05) * 1.55, 0.68 + rand(index + 6) * 0.28, index + 800);
    }
  });
}

function createTreeAt(x, z, s, seed) {
  const tree = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16 * s, 0.25 * s, 1.45 * s, 6), matWood);
  trunk.position.y = 0.72 * s;
  trunk.castShadow = true;
  tree.add(trunk);

  const leavesMat = seed % 4 === 0 ? matLeaves2 : seed % 5 === 0 ? matLeavesDark : matLeaves;
  for (let level = 0; level < 3; level++) {
    const cone = new THREE.Mesh(new THREE.ConeGeometry((0.94 - level * 0.16) * s, 1.28 * s, 7), leavesMat);
    cone.position.y = (1.52 + level * 0.62) * s;
    cone.rotation.y = rand(seed + level) * Math.PI;
    cone.castShadow = true;
    tree.add(cone);
  }
  tree.position.set(x, 0, z);
  tree.rotation.y = rand(seed + 88) * Math.PI;
  scene.add(tree);
}

function createRocksAndRuins() {
  for (let i = 0; i < 80; i++) {
    const a = rand(i + 700) * Math.PI * 2;
    const r = 6 + rand(i + 800) * 39;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (distanceToAnyGem(x, z) < 2.1) continue;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.22 + rand(i + 900) * 0.7, 0), i % 4 === 0 ? matStoneDark : matStone);
    rock.position.set(x, 0.25, z);
    rock.scale.y = 0.35 + rand(i + 1000) * 0.7;
    rock.rotation.set(rand(i) * Math.PI, rand(i + 1) * Math.PI, rand(i + 2) * Math.PI);
    rock.castShadow = true;
    scene.add(rock);
  }

  const ruins = [
    [-28, -10, 0.3, 1.2, 1.6], [-27.2, -9.2, 0.7, 0.7, 2.8], [-24, 20, 0.3, 1.0, 1.2],
    [30, -16, 0.3, 1.5, 0.7], [29, -15.2, 0.7, 0.5, 2.4], [-2, 36, 0.3, 1.2, 1.1],
    [1.2, 35.2, 0.8, 0.5, 2.4], [34, 7, 0.3, 1.6, 0.8], [35, 8.4, 0.5, 0.5, 2.0]
  ];
  ruins.forEach(([x, z, y, w, h], idx) => {
    const block = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.66), idx % 2 ? matStone : matStoneDark);
    block.position.set(x, y + h / 2, z);
    block.rotation.y = rand(idx + 77) * 1.8;
    block.castShadow = true;
    block.receiveShadow = true;
    scene.add(block);
  });

  createArch(-12, -34, 0.3);
  createArch(33, 25, -0.8);
}

function createArch(x, z, rot) {
  const group = new THREE.Group();
  const left = new THREE.Mesh(new THREE.BoxGeometry(0.8, 3.2, 0.8), matStoneDark);
  left.position.set(-1.3, 1.6, 0);
  const right = left.clone();
  right.position.x = 1.3;
  const top = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.7, 0.8), matStone);
  top.position.set(0, 3.2, 0);
  group.add(left, right, top);
  group.position.set(x, 0, z);
  group.rotation.y = rot;
  group.traverse(obj => { if (obj.isMesh) obj.castShadow = true; });
  scene.add(group);
}

function createBoundaryRunes() {
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    const ob = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.58, 2.1 + rand(i) * 0.6, 5), matStoneDark);
    ob.position.set(Math.cos(a) * 50, 1.05, Math.sin(a) * 50);
    ob.rotation.y = -a;
    ob.castShadow = true;
    scene.add(ob);
  }
}

function createFlowersAndMushrooms() {
  for (let i = 0; i < 115; i++) {
    const a = rand(i + 4100) * Math.PI * 2;
    const r = 5 + rand(i + 4200) * 41;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const flowerColor = new THREE.Color().setHSL(rand(i + 4300), 0.82, 0.68);
    const material = matFlower.clone();
    material.color = flowerColor;
    material.emissive = flowerColor.clone().multiplyScalar(0.15);

    const flower = new THREE.Mesh(new THREE.SphereGeometry(0.08 + rand(i) * 0.05, 8, 8), material);
    flower.position.set(x, 0.09, z);
    flower.castShadow = false;
    scene.add(flower);
  }

  for (let i = 0; i < 32; i++) {
    const a = rand(i + 5200) * Math.PI * 2;
    const r = 9 + rand(i + 5300) * 35;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.34, 8), matMushroomStem);
    stem.position.set(x, 0.17, z);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), matMushroom);
    cap.position.set(x, 0.38, z);
    cap.castShadow = true;
    scene.add(stem, cap);
  }
}

function createAnimals() {
  createRabbit(-12, -5, 0.6, 0);
  createRabbit(13, 8, 0.55, 1);
  createFox(2, -17, 0.7, 2);
  createDeer(-25, 15, 0.82, 3);
}

function createRabbit(x, z, s, seed) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0xded5c5, roughness: 0.9 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.35 * s, 12, 10), mat);
  body.scale.set(1.2, 0.8, 0.8);
  body.position.y = 0.35 * s;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22 * s, 12, 10), mat);
  head.position.set(0.36 * s, 0.55 * s, 0);
  const ear1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.045 * s, 0.32 * s, 4, 6), mat);
  ear1.position.set(0.45 * s, 0.93 * s, -0.08 * s);
  const ear2 = ear1.clone();
  ear2.position.z = 0.08 * s;
  group.add(body, head, ear1, ear2);
  group.position.set(x, 0, z);
  group.rotation.y = rand(seed + 1) * Math.PI * 2;
  group.userData = { animal: true, baseX: x, baseZ: z, phase: rand(seed + 10) * 10, range: 0.55 };
  group.traverse(obj => { if (obj.isMesh) obj.castShadow = true; });
  animalObjects.push(group);
  scene.add(group);
}

function createFox(x, z, s, seed) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0xc8642a, roughness: 0.8 });
  const matTail = new THREE.MeshStandardMaterial({ color: 0xffd6a0, roughness: 0.8 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28 * s, 0.65 * s, 4, 8), mat);
  body.rotation.z = Math.PI / 2;
  body.position.y = 0.42 * s;
  const head = new THREE.Mesh(new THREE.ConeGeometry(0.24 * s, 0.42 * s, 5), mat);
  head.position.set(0.58 * s, 0.47 * s, 0);
  head.rotation.z = -Math.PI / 2;
  const tail = new THREE.Mesh(new THREE.ConeGeometry(0.16 * s, 0.7 * s, 8), matTail);
  tail.position.set(-0.62 * s, 0.48 * s, 0);
  tail.rotation.z = Math.PI / 2.5;
  group.add(body, head, tail);
  group.position.set(x, 0, z);
  group.rotation.y = rand(seed + 1) * Math.PI * 2;
  group.userData = { animal: true, baseX: x, baseZ: z, phase: rand(seed + 20) * 10, range: 0.9 };
  group.traverse(obj => { if (obj.isMesh) obj.castShadow = true; });
  animalObjects.push(group);
  scene.add(group);
}

function createDeer(x, z, s, seed) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x9a6a3b, roughness: 0.86 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.32 * s, 0.85 * s, 4, 8), mat);
  body.rotation.z = Math.PI / 2;
  body.position.y = 0.75 * s;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.18 * s, 10, 8), mat);
  head.position.set(0.6 * s, 1.05 * s, 0);
  for (const px of [-0.25, 0.25]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.045 * s, 0.055 * s, 0.72 * s, 6), mat);
    leg.position.set(px * s, 0.36 * s, -0.15 * s);
    group.add(leg);
    const leg2 = leg.clone();
    leg2.position.z = 0.15 * s;
    group.add(leg2);
  }
  group.add(body, head);
  group.position.set(x, 0, z);
  group.rotation.y = rand(seed + 1) * Math.PI * 2;
  group.userData = { animal: true, baseX: x, baseZ: z, phase: rand(seed + 30) * 10, range: 0.42 };
  group.traverse(obj => { if (obj.isMesh) obj.castShadow = true; });
  animalObjects.push(group);
  scene.add(group);
}

function createClouds() {
  for (let i = 0; i < 7; i++) {
    const cloud = new THREE.Group();
    const parts = 3 + Math.floor(rand(i + 70) * 3);
    for (let j = 0; j < parts; j++) {
      const puff = new THREE.Mesh(new THREE.SphereGeometry(0.9 + rand(j + i) * 0.55, 12, 8), matCloud);
      puff.position.set(j * 1.05, rand(j + 3) * 0.32, (rand(j + 4) - 0.5) * 0.75);
      puff.scale.y = 0.55;
      cloud.add(puff);
    }
    cloud.position.set(-50 + rand(i + 20) * 100, 18 + rand(i + 30) * 7, -42 + rand(i + 40) * 34);
    cloud.scale.setScalar(1.5 + rand(i + 50) * 1.5);
    cloud.userData = { cloud: true, speed: 0.45 + rand(i + 90) * 0.65 };
    cloudObjects.push(cloud);
    scene.add(cloud);
  }
}

function createStars() {
  const geo = new THREE.BufferGeometry();
  const vertices = [];
  for (let i = 0; i < 420; i++) {
    const a = rand(i + 3000) * Math.PI * 2;
    const r = 8 + rand(i + 3100) * 70;
    vertices.push(Math.cos(a) * r, 11 + rand(i + 3200) * 16, Math.sin(a) * r);
  }
  geo.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  const stars = new THREE.Points(
    geo,
    new THREE.PointsMaterial({ color: 0xfff1b8, size: 0.06, transparent: true, opacity: 0.9 })
  );
  scene.add(stars);
}

// =============================
// PERSONAJE Y ESTRELLITA
// =============================
const player = createPlayer();
player.position.set(-27, 0, -23);
scene.add(player);

const fairyStar = createFairyStar();
scene.add(fairyStar);

function createPlayer() {
  const group = new THREE.Group();
  const matCloak = new THREE.MeshToonMaterial({ color: 0x2aa061 });
  const matHood = new THREE.MeshToonMaterial({ color: 0x1b6f45 });
  const matSkin = new THREE.MeshToonMaterial({ color: 0xffd7a1 });
  const matBoots = new THREE.MeshToonMaterial({ color: 0x5e3b24 });

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.38, 0.78, 4, 8), matCloak);
  body.position.y = 0.95;
  body.castShadow = true;
  group.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 14, 12), matSkin);
  head.position.y = 1.65;
  head.castShadow = true;
  group.add(head);

  const hood = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.68, 5), matHood);
  hood.position.set(0, 1.96, -0.03);
  hood.rotation.x = -0.12;
  hood.castShadow = true;
  group.add(hood);

  const bootL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.22, 0.34), matBoots);
  bootL.position.set(-0.18, 0.15, 0.06);
  bootL.castShadow = true;
  group.add(bootL);
  const bootR = bootL.clone();
  bootR.position.x = 0.18;
  group.add(bootR);

  const tinyLight = new THREE.PointLight(0xffd86b, 0.65, 5, 2);
  tinyLight.position.set(0, 1.2, 0);
  group.add(tinyLight);

  return group;
}

function createFairyStar() {
  const group = new THREE.Group();
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.19, 0),
    new THREE.MeshBasicMaterial({ color: 0xffe38a, transparent: true, opacity: 0.95 })
  );
  core.userData.kind = "fairyCore";
  group.add(core);

  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(0.6, 16, 12),
    new THREE.MeshBasicMaterial({ color: 0xffd96a, transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending })
  );
  halo.userData.kind = "fairyHalo";
  group.add(halo);

  const light = new THREE.PointLight(0xffd96a, 1.6, 9, 2);
  light.userData.kind = "fairyLight";
  group.add(light);
  return group;
}

// =============================
// GEMAS / MENSAJE
// =============================
const gemaObjects = GEMAS.map((gema, index) => createGema(gema, index));

function createGema(gema, index) {
  const group = new THREE.Group();
  group.position.set(gema.pos[0], gema.pos[1], gema.pos[2]);
  group.userData = { ...gema, index, discovered: false };

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.68, 0.28, 8), matStoneDark);
  base.position.y = 0.14;
  base.castShadow = true;
  group.add(base);

  const crystalMat = new THREE.MeshStandardMaterial({
    color: gema.color,
    emissive: gema.color,
    emissiveIntensity: 1.25,
    roughness: 0.2,
    metalness: 0.02,
    transparent: true,
    opacity: 0.92
  });
  const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.62, 0), crystalMat);
  crystal.position.y = 1.15;
  crystal.castShadow = true;
  crystal.userData.kind = "crystal";
  crystal.userData.originalY = crystal.position.y;
  group.add(crystal);

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(1.35, 18, 12),
    new THREE.MeshBasicMaterial({ color: gema.color, transparent: true, opacity: 0.1, depthWrite: false, blending: THREE.AdditiveBlending })
  );
  glow.position.y = 1.12;
  glow.userData.kind = "glow";
  group.add(glow);

  const ringMat = new THREE.MeshBasicMaterial({ color: gema.color, transparent: true, opacity: 0.34, depthWrite: false, blending: THREE.AdditiveBlending });
  const marker = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.035, 8, 64), ringMat);
  marker.rotation.x = Math.PI / 2;
  marker.position.y = 0.05;
  marker.userData.kind = "marker";
  marker.userData.spin = index % 2 ? 1 : -1;
  group.add(marker);

  const light = new THREE.PointLight(gema.color, 1.7, 9, 2);
  light.position.y = 1.35;
  light.userData.kind = "gemLight";
  group.add(light);

  scene.add(group);
  return group;
}

// =============================
// UI
// =============================
const soundGate = document.querySelector("#soundGate");
const intro = document.querySelector("#intro");
const hud = document.querySelector("#hud");
const soundtrack = document.querySelector("#soundtrack");
const audioHint = document.querySelector("#audioHint");
const counter = document.querySelector("#counter");
const zoneName = document.querySelector("#zoneName");
const zoneText = document.querySelector("#zoneText");
const finalCard = document.querySelector("#finalCard");
const fullMessage = document.querySelector("#fullMessage");
const helpPanel = document.querySelector("#helpPanel");
const riddlePanel = document.querySelector("#riddlePanel");
const riddleTitle = document.querySelector("#riddleTitle");
const riddleQuestion = document.querySelector("#riddleQuestion");
const riddleVisual = document.querySelector("#riddleVisual");
const riddleOptions = document.querySelector("#riddleOptions");
const riddleFeedback = document.querySelector("#riddleFeedback");

soundtrack.src = CONFIG.soundtrackFile;
fullMessage.innerText = `${CONFIG.tituloFinal}\n\n${CONFIG.mensajeFinal}\n\n${CONFIG.firma}`;

let started = false;
let discoveredCount = 0;
let finalShown = false;
let activeGema = null;
let riddleOpen = false;
let riddleCooldownUntil = 0;

counter.textContent = `0 / ${GEMAS.length}`;

document.querySelector("#soundStartBtn").addEventListener("click", async () => {
  try {
    soundtrack.volume = 0.72;
    await soundtrack.play();
    audioHint.textContent = "La música despertó el bosque.";
  } catch (error) {
    audioHint.textContent = "La aventura puede continuar. Cuando agregues soundtrack.mp3 en la raíz, la música sonará desde esta estrella.";
  }
  soundGate.classList.add("hidden");
  intro.classList.remove("hidden");
});

document.querySelector("#startBtn").addEventListener("click", () => {
  started = true;
  intro.classList.add("hidden");
  hud.classList.remove("hidden");
});
document.querySelector("#helpBtn").addEventListener("click", () => helpPanel.classList.remove("hidden"));
document.querySelector("#hideHelp").addEventListener("click", () => helpPanel.classList.add("hidden"));
document.querySelector("#closeFinal").addEventListener("click", () => finalCard.classList.add("hidden"));
document.querySelector("#leaveRiddle").addEventListener("click", closeRiddle);

function openRiddle(group) {
  if (riddleOpen || performance.now() < riddleCooldownUntil) return;
  activeGema = group;
  riddleOpen = true;
  const data = group.userData;
  riddleTitle.textContent = data.nombre;
  riddleQuestion.textContent = data.acertijo.pregunta;
  riddleFeedback.textContent = "";

  if (data.acertijo.visual) {
    riddleVisual.textContent = data.acertijo.visual;
    riddleVisual.classList.remove("hidden");
  } else {
    riddleVisual.classList.add("hidden");
  }

  riddleOptions.innerHTML = "";
  data.acertijo.opciones.forEach((opcion, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = opcion;
    btn.addEventListener("click", () => checkRiddleAnswer(index));
    riddleOptions.appendChild(btn);
  });

  riddlePanel.classList.remove("hidden");
}

function checkRiddleAnswer(index) {
  if (!activeGema) return;
  const data = activeGema.userData;
  if (index === data.acertijo.correcta) {
    riddleFeedback.textContent = "¡Respuesta correcta! La gema abrió su secreto.";
    setTimeout(() => {
      riddlePanel.classList.add("hidden");
      riddleOpen = false;
      revealGema(activeGema);
      activeGema = null;
    }, 520);
  } else {
    riddleFeedback.textContent = `Casi. Pista: ${data.acertijo.pista}`;
  }
}

function closeRiddle() {
  riddlePanel.classList.add("hidden");
  riddleOpen = false;
  activeGema = null;
  riddleCooldownUntil = performance.now() + 1200;
}

function revealGema(group) {
  const data = group.userData;
  if (data.discovered) return;
  data.discovered = true;
  discoveredCount++;
  counter.textContent = `${discoveredCount} / ${GEMAS.length}`;
  zoneName.textContent = data.nombre;
  zoneText.textContent = data.texto;

  group.children.forEach(child => {
    if (child.userData.kind === "crystal" && child.material?.emissiveIntensity !== undefined) child.material.emissiveIntensity = 2.8;
    if (child.userData.kind === "marker" && child.material?.opacity !== undefined) child.material.opacity = 0.82;
    if (child.userData.kind === "glow" && child.material?.opacity !== undefined) child.material.opacity = 0.24;
  });

  burstParticles(group.position, data.color);

  if (discoveredCount === GEMAS.length && !finalShown) {
    finalShown = true;
    setTimeout(() => finalCard.classList.remove("hidden"), 900);
  }
}

function burstParticles(origin, color) {
  for (let i = 0; i < 24; i++) {
    const spark = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 8, 8),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, blending: THREE.AdditiveBlending })
    );
    spark.position.copy(origin).add(new THREE.Vector3(0, 1.3, 0));
    spark.userData.velocity = new THREE.Vector3((rand(i + performance.now()) - 0.5) * 3.4, 1 + rand(i + 3) * 2.2, (rand(i + 4) - 0.5) * 3.4);
    spark.userData.life = 1.15;
    sparkObjects.push(spark);
    scene.add(spark);
  }
}

// =============================
// CONTROLES
// =============================
const keys = { up: false, down: false, left: false, right: false };
const keyMap = {
  ArrowUp: "up", KeyW: "up",
  ArrowDown: "down", KeyS: "down",
  ArrowLeft: "left", KeyA: "left",
  ArrowRight: "right", KeyD: "right"
};
const touchInput = { active: false, pointerId: null, startX: 0, startY: 0, x: 0, z: 0 };

window.addEventListener("keydown", (e) => {
  if (keyMap[e.code]) {
    keys[keyMap[e.code]] = true;
    e.preventDefault();
  }
});
window.addEventListener("keyup", (e) => {
  if (keyMap[e.code]) {
    keys[keyMap[e.code]] = false;
    e.preventDefault();
  }
});

document.querySelectorAll("[data-move]").forEach(btn => {
  const dir = btn.dataset.move;
  const press = (e) => { e.preventDefault(); keys[dir] = true; };
  const release = (e) => { e.preventDefault(); keys[dir] = false; };
  btn.addEventListener("pointerdown", press);
  btn.addEventListener("pointerup", release);
  btn.addEventListener("pointercancel", release);
  btn.addEventListener("pointerleave", release);
});

renderer.domElement.addEventListener("pointerdown", (e) => {
  if (!started || riddleOpen) return;
  if (e.pointerType !== "touch" && !window.matchMedia("(pointer: coarse)").matches) return;
  touchInput.active = true;
  touchInput.pointerId = e.pointerId;
  touchInput.startX = e.clientX;
  touchInput.startY = e.clientY;
  touchInput.x = 0;
  touchInput.z = 0;
  renderer.domElement.setPointerCapture(e.pointerId);
  e.preventDefault();
});

renderer.domElement.addEventListener("pointermove", (e) => {
  if (!touchInput.active || e.pointerId !== touchInput.pointerId) return;
  const dx = e.clientX - touchInput.startX;
  const dy = e.clientY - touchInput.startY;
  touchInput.x = clamp(dx / 70, -1, 1);
  touchInput.z = clamp(dy / 70, -1, 1);
  e.preventDefault();
});

function endTouchMove(e) {
  if (e.pointerId !== touchInput.pointerId) return;
  touchInput.active = false;
  touchInput.pointerId = null;
  touchInput.x = 0;
  touchInput.z = 0;
}
renderer.domElement.addEventListener("pointerup", endTouchMove);
renderer.domElement.addEventListener("pointercancel", endTouchMove);

// =============================
// LOOP
// =============================
const playerVelocity = new THREE.Vector3();

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.033);
  const t = clock.elapsedTime;

  animateGemas(t, dt);
  animateSparks(dt);
  animateAnimals(t, dt);
  animateClouds(dt);
  animateFairy(t, dt);
  if (started && !riddleOpen) updatePlayer(dt);
  updateCamera(dt);

  renderer.render(scene, camera);
}
animate();

function updatePlayer(dt) {
  const input = new THREE.Vector3(
    (keys.right ? 1 : 0) - (keys.left ? 1 : 0) + touchInput.x,
    0,
    (keys.down ? 1 : 0) - (keys.up ? 1 : 0) + touchInput.z
  );

  if (input.lengthSq() > 0) {
    input.normalize();
    playerVelocity.lerp(input.multiplyScalar(9.3), 0.18);
    const angle = Math.atan2(playerVelocity.x, playerVelocity.z);
    player.rotation.y = angle;
  } else {
    playerVelocity.lerp(new THREE.Vector3(0, 0, 0), 0.22);
  }

  player.position.addScaledVector(playerVelocity, dt);
  const maxRadius = 46.2;
  if (player.position.length() > maxRadius) player.position.setLength(maxRadius);
  player.position.y = 0;

  gemaObjects.forEach(group => {
    if (group.userData.discovered) return;
    const distance = tmp.copy(group.position).sub(player.position).length();
    if (distance < 2.45) openRiddle(group);
  });
}

function animateGemas(t, dt) {
  gemaObjects.forEach((group, i) => {
    const crystal = group.children.find(child => child.userData.kind === "crystal");
    const marker = group.children.find(child => child.userData.kind === "marker");
    const glow = group.children.find(child => child.userData.kind === "glow");
    const light = group.children.find(child => child.userData.kind === "gemLight");
    const pulse = 0.5 + Math.sin(t * 1.65 + i * 0.83) * 0.5;
    const discovered = group.userData.discovered;

    if (crystal) {
      crystal.rotation.y += dt * (1.05 + i * 0.045);
      crystal.rotation.x = Math.sin(t * 0.8 + i) * 0.08;
      crystal.position.y = crystal.userData.originalY + Math.sin(t * 1.7 + i) * 0.16;
      crystal.material.emissiveIntensity = discovered ? 2.8 + pulse * 0.35 : 1.05 + pulse * 0.95;
    }
    if (marker) {
      marker.rotation.z += dt * 0.72 * marker.userData.spin;
      marker.scale.setScalar(1 + Math.sin(t * 2 + i) * 0.06);
      marker.material.opacity = discovered ? 0.74 : 0.22 + pulse * 0.28;
    }
    if (glow) {
      glow.scale.setScalar(discovered ? 1.18 + pulse * 0.16 : 0.92 + pulse * 0.32);
      glow.material.opacity = discovered ? 0.18 + pulse * 0.08 : 0.06 + pulse * 0.13;
    }
    if (light) {
      light.intensity = discovered ? 3.3 + pulse * 0.8 : 1.0 + pulse * 2.1;
      light.distance = discovered ? 11.5 : 8.5 + pulse * 3;
    }
  });
}

function animateSparks(dt) {
  for (let i = sparkObjects.length - 1; i >= 0; i--) {
    const obj = sparkObjects[i];
    obj.userData.life -= dt;
    obj.position.addScaledVector(obj.userData.velocity, dt);
    obj.userData.velocity.y -= dt * 2.8;
    obj.material.opacity = Math.max(obj.userData.life, 0);
    obj.scale.setScalar(Math.max(obj.userData.life, 0.05));
    if (obj.userData.life <= 0) {
      obj.geometry.dispose();
      obj.material.dispose();
      scene.remove(obj);
      sparkObjects.splice(i, 1);
    }
  }
}

function animateAnimals(t) {
  animalObjects.forEach((animal, i) => {
    const phase = animal.userData.phase;
    const range = animal.userData.range;
    animal.position.x = animal.userData.baseX + Math.sin(t * 0.35 + phase) * range;
    animal.position.z = animal.userData.baseZ + Math.cos(t * 0.28 + phase) * range;
    animal.position.y = Math.max(0, Math.sin(t * 2.5 + phase) * 0.025);
    animal.rotation.y += Math.sin(t * 0.8 + i) * 0.0018;
  });
}

function animateClouds(dt) {
  cloudObjects.forEach(cloud => {
    cloud.position.x += cloud.userData.speed * dt;
    if (cloud.position.x > 58) cloud.position.x = -58;
  });
}

function animateFairy(t) {
  const pulse = 0.5 + Math.sin(t * 2.2) * 0.5;
  fairyStar.position.lerp(
    tmp.set(
      player.position.x + Math.sin(t * 1.25) * 0.9,
      player.position.y + 2.35 + Math.sin(t * 2.0) * 0.2,
      player.position.z + Math.cos(t * 1.1) * 0.9
    ),
    0.08
  );
  fairyStar.rotation.y += 0.04;
  fairyStar.children.forEach(child => {
    if (child.userData.kind === "fairyCore") child.material.opacity = 0.62 + pulse * 0.38;
    if (child.userData.kind === "fairyHalo") {
      child.material.opacity = 0.06 + pulse * 0.15;
      child.scale.setScalar(0.82 + pulse * 0.45);
    }
    if (child.userData.kind === "fairyLight") child.intensity = 0.9 + pulse * 2.1;
  });
}

function updateCamera(dt) {
  cameraTarget.set(player.position.x, player.position.y + 1.25, player.position.z);
  const desired = new THREE.Vector3(player.position.x + 11, 17.5, player.position.z + 16);
  camera.position.lerp(desired, 1 - Math.pow(0.001, dt));
  camera.lookAt(cameraTarget);
}

function distanceToAnyGem(x, z) {
  let min = Infinity;
  GEMAS.forEach(gema => {
    const dx = x - gema.pos[0];
    const dz = z - gema.pos[2];
    min = Math.min(min, Math.hypot(dx, dz));
  });
  return min;
}

function rand(seed) {
  const x = Math.sin(seed * 999.131) * 43758.5453123;
  return x - Math.floor(x);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
