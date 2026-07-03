import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.185.1/build/three.module.js";

// =============================
// PERSONALIZA AQUÍ
// =============================
const CONFIG = {
  sobrina: "Marianita",
  firma: "Con todo mi cariño, tu tío",
  soundtrackFile: "soundtrack.mp3",
  gemSoundFiles: ["gema1.mp3", "gema2.mp3", "gema3.mp3", "gema4.mp3"],
  tituloFinal: "Feliz cumpleaños número 11, Marianita",
  mensajeFinal: [
    "Marianita, el secreto final no estaba dentro de una gema ni debajo de una piedra antigua.",
    "El secreto era que cada gema estaba formando un espejo: la imaginación, la curiosidad, la valentía, la risa, la calma, la gratitud, la bondad, los sueños, la inteligencia, la perseverancia y el amor ya viven en ti.",
    "Hoy el reino del bosque no te entregó poderes. Solo te recordó algo que tu tío ya sabía: tú eres una aventura completa, una historia brillante y una persona capaz de iluminar lugares que todavía no conoces.",
    "Que tus 11 años sean el comienzo de una etapa donde preguntes mucho, sueñes fuerte, cuides tu corazón y nunca olvides que ser tú misma es una magia enorme.",
    "Feliz cumpleaños, Marianita. El mapa más importante no estaba en la pantalla: está en la forma hermosa en la que vas creciendo."
  ].join("\n\n")
};

const GEMAS = [
  {
    nombre: "Gema 1 — El primer paso",
    pos: [-21, 0, -18],
    acertijo: {
      pregunta: "Marianita, cada paso te acerca 2 metros a un cofre que está a 20 metros. Si ya diste 6 pasos, ¿cuántos pasos más te faltan para llegar?",
      visual: "👣×6  →  🧭  →  ?",
      opciones: ["3", "4", "5", "8"],
      correcta: 1,
      pista: "Primero calcula cuántos metros ya avanzaste (6×2), luego cuántos faltan hasta 20, y por último divide eso entre 2."
    },
    texto: `Hoy cumples 11 años, ${CONFIG.sobrina}. Que nunca te dé miedo comenzar despacio: los pasos pequeños también llevan a lugares maravillosos.`
  },
  {
    nombre: "Gema 2 — La imaginación",
    pos: [-7, 0, -27],
    acertijo: {
      pregunta: "Cuento historias sin usar palabras, cambio de forma cada vez que tú lo permites y puedo convertir tu cuarto en un castillo sin mover un solo mueble. ¿Qué soy?",
      visual: "🛏️  →  ✨  →  🏰",
      respuestas: ["la imaginacion", "imaginacion", "tu imaginacion", "mi imaginacion"],
      pista: "Vivo en tu mente antes de existir en el mundo."
    },
    texto: `Tu imaginación es una llave secreta, ${CONFIG.sobrina}. Con ella puedes convertir una tarde normal en un castillo, una pregunta en un invento y una idea en un mundo entero.`
  },
  {
    nombre: "Gema 3 — El número mágico",
    pos: [15, 0, -24],
    acertijo: {
      pregunta: "El bosque tiene 11 gemas. Si duplicas ese número y luego le restas la edad que cumples hoy, ¿qué número queda?",
      visual: "11 ✦ × 2 − 11 = ?",
      opciones: ["0", "11", "22"],
      correcta: 1,
      pista: "El resultado es un número que ya conoces muy bien hoy."
    },
    texto: `Cumplir 11 años es como abrir una puerta nueva, ${CONFIG.sobrina}: ya sabes muchas cosas, pero todavía tienes un montón de misterios hermosos esperando por ti.`
  },
  {
    nombre: "Gema 4 — La valentía",
    pos: [28, 0, -8],
    acertijo: {
      pregunta: "Tienes miedo de intentar algo nuevo, pero de verdad quieres lograrlo. ¿Cuál es la opción valiente: esperar a que el miedo desaparezca por completo, o dar el primer paso mientras el miedo todavía está ahí?",
      visual: "😟  +  ❤️  =  ?",
      opciones: ["Esperar a que el miedo desaparezca", "Dar el primer paso con el miedo presente"],
      correcta: 1,
      pista: "La valentía no espera a que el miedo se vaya; camina junto a él."
    },
    texto: "Ser valiente no significa no tener miedo. Significa escuchar tu corazón, respirar profundo y avanzar con cuidado cuando algo importante te llama."
  },
  {
    nombre: "Gema 5 — La gratitud",
    pos: [29, 0, 4],
    acertijo: {
      pregunta: "Cuando digo 'gracias' de corazón, algo invisible crece entre nosotros y nos hace sentir más cerca. Aparezco cuando notas lo bueno que ya tienes, no lo que falta. ¿Qué soy?",
      visual: "🙏  →  💛  →  ?",
      opciones: ["La gratitud", "El silencio", "La prisa"],
      correcta: 0,
      pista: "No se trata de tener más, sino de notar lo que ya tienes."
    },
    texto: `La gratitud es un tesoro silencioso, ${CONFIG.sobrina}. Cuando aprendes a valorar lo que ya tienes, hasta los días comunes empiezan a brillar.`
  },
  {
    nombre: "Gema 6 — La risa escondida",
    pos: [24, 0, 14],
    acertijo: {
      pregunta: "Aparezco en una cosquilla, en una broma bien pensada y en una tarde entre amigos, pero desaparezco si finges sentirme. ¿Qué soy?",
      visual: "😂  🌈  🎈",
      opciones: ["La risa verdadera", "El aburrimiento", "El silencio", "Una sombra"],
      correcta: 0,
      pista: "No se puede fingir del todo; se nota en los ojos."
    },
    texto: `Ojalá nunca te falten risas de esas que hacen que todo se sienta más ligero, ${CONFIG.sobrina}. Tu alegría también puede ser un regalo para quienes caminan contigo.`
  },
  {
    nombre: "Gema 7 — Las preguntas",
    pos: [6, 0, 29],
    acertijo: {
      pregunta: "Empiezo casi siempre con '¿' y termino con '?'. Te ayudo a entender el mundo cuando la curiosidad te da un empujón. ¿Qué soy?",
      visual: "¿ ...  ?",
      respuestas: ["una pregunta", "pregunta", "las preguntas"],
      pista: "Es lo que haces cuando quieres entender más."
    },
    texto: `Tus preguntas son tesoros, ${CONFIG.sobrina}. No dejes que nadie apague tu curiosidad: preguntar es una forma inteligente de hacer crecer la luz por dentro.`
  },
  {
    nombre: "Gema 8 — La bondad",
    pos: [-17, 0, 25],
    acertijo: {
      pregunta: "Regalo una parte de mí a un amigo triste y, en vez de tener menos, de repente tenemos más los dos. ¿Qué soy?",
      visual: "💛  →  💛💛",
      opciones: ["La bondad", "El dinero", "El tiempo"],
      correcta: 0,
      pista: "No se gasta: se multiplica."
    },
    texto: `La bondad parece suave, pero es una fuerza gigante, ${CONFIG.sobrina}. Puede cambiar un día triste, cuidar una amistad y convertir cualquier lugar en un sitio más bonito.`
  },
  {
    nombre: "Gema 9 — El patrón secreto",
    pos: [-31, 0, 5],
    acertijo: {
      pregunta: "Observa con atención: ✦, 🌙🌙, ✦✦✦, 🌙🌙🌙🌙 ... ¿qué sigue?",
      visual: "✦ · 🌙🌙 · ✦✦✦ · 🌙🌙🌙🌙 · ?",
      opciones: ["✦✦✦✦✦", "🌙🌙🌙🌙🌙", "✦✦✦✦", "🌙✦🌙✦🌙"],
      correcta: 0,
      pista: "Cuenta cuántos símbolos hay en cada grupo: 1, 2, 3, 4... ¿qué sigue después de 4, y de qué símbolo?"
    },
    texto: `Aprender a mirar con atención es una magia especial, ${CONFIG.sobrina}. Muchas respuestas aparecen cuando observas despacio, confías en tu mente y te das tiempo.`
  },
  {
    nombre: "Gema 10 — La perseverancia",
    pos: [-31, 0, -5],
    acertijo: {
      pregunta: "Si practicas una habilidad 3 minutos cada día durante 11 días, ¿cuántos minutos habrás practicado en total?",
      visual: "3 × 11 = ?",
      opciones: ["22", "33", "44", "31"],
      correcta: 1,
      pista: "Multiplica los minutos diarios por la cantidad de días."
    },
    texto: `La perseverancia es seguir intentando aunque el camino sea largo, ${CONFIG.sobrina}. Practicar un poquito cada día te lleva más lejos de lo que imaginas.`
  },
  {
    nombre: "Gema 11 — Tu propia luz",
    pos: [0, 0, 0],
    acertijo: {
      pregunta: "No se compra, no se copia, no necesita parecerse a nadie más, y sigue ahí incluso en los días donde te sientes pequeña. ¿Qué es: una corona prestada o tu propia luz?",
      visual: "🫶  +  ✨  +  tú",
      opciones: ["Una corona prestada", "Tu propia luz"],
      correcta: 1,
      pista: "Lo prestado se devuelve; lo tuyo se queda para siempre."
    },
    texto: `Nunca escondas tu forma de brillar, ${CONFIG.sobrina}. El mundo no necesita que seas igual a nadie: necesita exactamente esa luz que solo tú puedes traer.`
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
scene.fog = new THREE.FogExp2(0x0b1b17, 0.0135);

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

// =============================
// ESTRELLA 3D DE INICIO
// =============================
let starGateRAF = null;
const starCanvas = document.querySelector("#starCanvas");
if (starCanvas) {
  const starScene = new THREE.Scene();
  const starCamera = new THREE.PerspectiveCamera(38, 1, 0.1, 10);
  starCamera.position.set(0, 0, 2.5);

  const starRenderer = new THREE.WebGLRenderer({ canvas: starCanvas, alpha: true, antialias: true });
  starRenderer.setSize(220, 220, false);
  starRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  starRenderer.outputColorSpace = THREE.SRGBColorSpace;

  starScene.add(new THREE.HemisphereLight(0xfff6d8, 0x241407, 1.3));
  const starKey = new THREE.PointLight(0xffe9b0, 2.4, 8, 2);
  starKey.position.set(1.2, 1.4, 1.6);
  starScene.add(starKey);
  const starRim = new THREE.PointLight(0x8fd6ff, 0.9, 8, 2);
  starRim.position.set(-1.3, -0.8, 1.0);
  starScene.add(starRim);

  const starShape = new THREE.Shape();
  const starTips = [[0, 0.5], [0.5, 0], [0, -0.5], [-0.5, 0]];
  const starCtrls = [[0.17, 0.17], [0.17, -0.17], [-0.17, -0.17], [-0.17, 0.17]];
  starShape.moveTo(starTips[0][0], starTips[0][1]);
  for (let i = 0; i < 4; i++) {
    const c = starCtrls[i];
    const next = starTips[(i + 1) % 4];
    starShape.quadraticCurveTo(c[0], c[1], next[0], next[1]);
  }

  const starGeo = new THREE.ExtrudeGeometry(starShape, {
    depth: 0.16,
    bevelEnabled: true,
    bevelThickness: 0.035,
    bevelSize: 0.03,
    bevelSegments: 3,
    curveSegments: 14
  });
  starGeo.center();
  const starMat = new THREE.MeshStandardMaterial({
    color: 0xffd86b,
    emissive: 0xffb648,
    emissiveIntensity: 0.55,
    metalness: 0.55,
    roughness: 0.28
  });
  const starMesh = new THREE.Mesh(starGeo, starMat);
  starScene.add(starMesh);

  const starHaloInner = new THREE.Mesh(
    new THREE.CircleGeometry(0.75, 32),
    new THREE.MeshBasicMaterial({ color: 0xffd96a, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  starHaloInner.position.z = -0.2;
  starScene.add(starHaloInner);

  const starHaloOuter = new THREE.Mesh(
    new THREE.CircleGeometry(1.15, 32),
    new THREE.MeshBasicMaterial({ color: 0xffe9ad, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  starHaloOuter.position.z = -0.3;
  starScene.add(starHaloOuter);

  const starSparkles = [];
  for (let i = 0; i < 12; i++) {
    const sparkle = new THREE.Mesh(
      new THREE.SphereGeometry(0.02 + Math.random() * 0.022, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xfff6da, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    sparkle.userData = {
      angle: Math.random() * Math.PI * 2,
      radius: 0.55 + Math.random() * 0.4,
      speed: 0.35 + Math.random() * 0.55,
      tilt: (Math.random() - 0.5) * 0.6,
      phase: Math.random() * 10
    };
    starScene.add(sparkle);
    starSparkles.push(sparkle);
  }

  const animateStarGate = (time) => {
    starGateRAF = requestAnimationFrame(animateStarGate);
    const t = time * 0.001;
    starMesh.rotation.y = t * 0.55;
    starMesh.rotation.x = Math.sin(t * 0.7) * 0.2;
    starMesh.rotation.z = Math.sin(t * 0.45) * 0.09;

    const pulse = 0.5 + Math.sin(t * 2.3) * 0.5;
    starMat.emissiveIntensity = 0.4 + pulse * 0.55;
    starHaloInner.material.opacity = 0.24 + pulse * 0.24;
    starHaloInner.scale.setScalar(1 + pulse * 0.14);
    starHaloOuter.material.opacity = 0.1 + pulse * 0.14;
    starHaloOuter.scale.setScalar(1 + pulse * 0.22);

    starSparkles.forEach(sparkle => {
      const u = sparkle.userData;
      const a = u.angle + t * u.speed;
      sparkle.position.set(
        Math.cos(a) * u.radius,
        Math.sin(a) * u.radius * 0.65 + Math.sin(t + u.phase) * u.tilt * 0.2,
        Math.sin(a * 1.3) * 0.3
      );
      sparkle.material.opacity = 0.3 + (0.5 + Math.sin(t * 3 + u.phase) * 0.5) * 0.65;
    });

    starRenderer.render(starScene, starCamera);
  };
  starGateRAF = requestAnimationFrame(animateStarGate);
}

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
const matHillNear = new THREE.MeshStandardMaterial({ color: 0x123f2c, roughness: 1, fog: true });
const matHillFar = new THREE.MeshStandardMaterial({ color: 0x274a49, roughness: 1, fog: true });
const matCastleStone = new THREE.MeshStandardMaterial({ color: 0x8892a0, roughness: 0.85, fog: true });
const matCastleStoneDark = new THREE.MeshStandardMaterial({ color: 0x525c6c, roughness: 0.9, fog: true });
const matCastleRoof = new THREE.MeshStandardMaterial({ color: 0x6a3f52, roughness: 0.75, fog: true });
const matCastleWindow = new THREE.MeshStandardMaterial({ color: 0xffd98a, emissive: 0xffb648, emissiveIntensity: 1.1, roughness: 0.6, fog: true });

const sparkObjects = [];
const animalObjects = [];
const cloudObjects = [];
const templeGateRocks = [];
let templeGateOpen = false;
const TEMPLE_GATE_RADIUS = 4.6;

// =============================
// MAPA
// =============================
const ground = new THREE.Mesh(new THREE.CircleGeometry(52, 128), matGrass);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const underGround = new THREE.Mesh(new THREE.CircleGeometry(160, 128), matGrassDark);
underGround.rotation.x = -Math.PI / 2;
underGround.position.y = -0.07;
scene.add(underGround);

createPath();
createTempleCenter();
createTempleGate();
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
createHorizonScenery();

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

// El portón de piedras bloquea los huecos entre columnas hasta que se
// encuentran las otras 10 gemas; ver openTempleGate() / TEMPLE_GATE_RADIUS.
function createTempleGate() {
  const gapCount = 8;
  for (let i = 0; i < gapCount; i++) {
    const gapAngle = (i / gapCount) * Math.PI * 2 + Math.PI / gapCount;
    for (let j = 0; j < 2; j++) {
      const seed = i * 7 + j;
      const angle = gapAngle + (j - 0.5) * 0.32;
      const radius = 4.55 + rand(seed + 8100) * 0.45;
      const rock = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.48 + rand(seed + 8200) * 0.26, 0),
        (i + j) % 2 ? matStoneDark : matStone
      );
      rock.position.set(Math.cos(angle) * radius, 0.4, Math.sin(angle) * radius);
      rock.rotation.set(rand(seed + 8300) * Math.PI, rand(seed + 8400) * Math.PI, rand(seed + 8500) * Math.PI);
      rock.scale.y = 0.75 + rand(seed + 8600) * 0.55;
      rock.castShadow = true;
      rock.userData = { kind: "gateRock", restY: rock.position.y, sinking: false };
      scene.add(rock);
      templeGateRocks.push(rock);
    }
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

function createCat(furColor, darkColor, hasPatch, seed) {
  const group = new THREE.Group();
  const mat = new THREE.MeshToonMaterial({ color: furColor });
  const matDark = new THREE.MeshToonMaterial({ color: darkColor });
  const matPatch = new THREE.MeshToonMaterial({ color: 0xfaf6ee });
  const matEye = new THREE.MeshToonMaterial({ color: 0x1c1a1a });
  const matNose = new THREE.MeshToonMaterial({ color: 0xff9db0 });

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.32, 4, 8), mat);
  body.rotation.z = Math.PI / 2;
  body.position.y = 0.22;
  body.castShadow = true;
  group.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), mat);
  head.position.set(0.28, 0.3, 0);
  head.castShadow = true;
  group.add(head);

  const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), mat);
  muzzle.position.set(0.4, 0.26, 0);
  group.add(muzzle);

  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 6), matNose);
  nose.position.set(0.46, 0.27, 0);
  group.add(nose);

  [-1, 1].forEach(side => {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.1, 4), mat);
    ear.position.set(0.31, 0.41, side * 0.075);
    ear.rotation.x = side * 0.2;
    ear.rotation.z = -0.15;
    ear.castShadow = true;
    group.add(ear);

    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 6), matEye);
    eye.position.set(0.37, 0.32, side * 0.07);
    group.add(eye);
  });

  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.05, 0.42, 6), mat);
  tail.position.set(-0.28, 0.32, 0);
  tail.rotation.z = 1.0;
  tail.castShadow = true;
  group.add(tail);

  const legs = [];
  [[-0.15, -0.09], [-0.15, 0.09], [0.15, -0.09], [0.15, 0.09]].forEach(([x, z]) => {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 0.2, 6), matDark);
    leg.position.set(x, 0.1, z);
    leg.castShadow = true;
    group.add(leg);
    legs.push(leg);
  });

  if (hasPatch) {
    const headPatch = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), matPatch);
    headPatch.position.set(0.33, 0.36, 0.04);
    headPatch.scale.set(1, 0.8, 0.7);
    group.add(headPatch);

    const chestPatch = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), matPatch);
    chestPatch.position.set(0.16, 0.16, 0);
    chestPatch.scale.set(0.8, 1.1, 0.75);
    group.add(chestPatch);
  }

  group.userData = {
    tail,
    legs,
    seed,
    state: "follow",
    stateT: 0,
    nextIdleAt: 2 + rand(seed) * 3
  };
  return group;
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

function createHorizonScenery() {
  // Anillo de colinas onduladas que rellenan el horizonte alrededor de todo el bosque.
  for (let i = 0; i < 46; i++) {
    const a = (i / 46) * Math.PI * 2 + rand(i + 6100) * 0.12;
    const r = 58 + rand(i + 6200) * 34;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const scale = 5 + rand(i + 6300) * 8;
    const hill = new THREE.Mesh(
      new THREE.SphereGeometry(scale, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2.1),
      r > 78 ? matHillFar : matHillNear
    );
    hill.position.set(x, -scale * 0.42, z);
    hill.scale.y = 0.6 + rand(i + 6400) * 0.35;
    hill.rotation.y = rand(i + 6500) * Math.PI;
    scene.add(hill);
  }

  // Castillos lejanos repartidos en los 360 grados del reino.
  const castleCount = 11;
  for (let i = 0; i < castleCount; i++) {
    const a = (i / castleCount) * Math.PI * 2 + rand(i + 7100) * 0.5;
    const r = 62 + rand(i + 7200) * 26;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    createCastleAt(x, z, 0.75 + rand(i + 7300) * 0.7, a + Math.PI, i);
  }
}

function createCastleAt(x, z, s, facing, seed) {
  const castle = new THREE.Group();

  const wall = new THREE.Mesh(new THREE.BoxGeometry(3.2 * s, 2.1 * s, 1.6 * s), matCastleStone);
  wall.position.y = 1.05 * s;
  castle.add(wall);

  const towerPositions = [[-1.5, -1.5], [1.5, -1.5], [-1.5, 1.5], [1.5, 1.5]];
  towerPositions.forEach(([tx, tz], idx) => {
    const height = (idx < 2 ? 3.6 : 2.6) * s;
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.55 * s, 0.62 * s, height, 8), matCastleStoneDark);
    tower.position.set(tx * s, height / 2, tz * s);
    castle.add(tower);

    const roof = new THREE.Mesh(new THREE.ConeGeometry(0.72 * s, 1.1 * s, 8), matCastleRoof);
    roof.position.set(tx * s, height + 0.55 * s, tz * s);
    castle.add(roof);

    if (idx % 2 === 0) {
      const windowPane = new THREE.Mesh(new THREE.PlaneGeometry(0.16 * s, 0.22 * s), matCastleWindow);
      windowPane.position.set(tx * s, height * 0.62, tz * s + (tz < 0 ? -0.63 * s : 0.63 * s));
      windowPane.rotation.y = tz < 0 ? Math.PI : 0;
      castle.add(windowPane);
    }
  });

  const keep = new THREE.Mesh(new THREE.CylinderGeometry(0.9 * s, 1.0 * s, 3.0 * s, 8), matCastleStone);
  keep.position.set(0, 1.5 * s, 0);
  castle.add(keep);

  const keepRoof = new THREE.Mesh(new THREE.ConeGeometry(1.15 * s, 1.7 * s, 8), matCastleRoof);
  keepRoof.position.set(0, 3.85 * s, 0);
  castle.add(keepRoof);

  castle.position.set(x, 0, z);
  castle.rotation.y = facing + rand(seed + 7400) * 0.6 - 0.3;
  castle.traverse(obj => { if (obj.isMesh) { obj.castShadow = false; obj.receiveShadow = false; } });
  scene.add(castle);
}

// =============================
// PERSONAJE Y ESTRELLITA
// =============================
const player = new THREE.Group();
const playerModel = createPlayer();
player.add(playerModel);
player.position.set(-27, 0, -23);
scene.add(player);

const fairyStar = createFairyStar();
scene.add(fairyStar);

const catOrange = createCat(0xd97a34, 0x5c3417, false, 401);
const catBlack = createCat(0x1c1a1c, 0x100f10, true, 402);
catOrange.position.set(player.position.x - 1, 0, player.position.z - 1);
catBlack.position.set(player.position.x + 1, 0, player.position.z - 1);
scene.add(catOrange, catBlack);

function createPlayer() {
  const group = new THREE.Group();
  const matSkin = new THREE.MeshToonMaterial({ color: 0xffd7a1 });
  const matDress = new THREE.MeshToonMaterial({ color: 0x7a4fa0 });
  const matDressTrim = new THREE.MeshToonMaterial({ color: 0xffd86b });
  const matHair = new THREE.MeshToonMaterial({ color: 0x14110f });
  const matCape = new THREE.MeshToonMaterial({ color: 0x1b6f45 });
  const matEyes = new THREE.MeshToonMaterial({ color: 0x2a1c12 });
  const matTiara = new THREE.MeshStandardMaterial({ color: 0xffe38a, metalness: 0.65, roughness: 0.25, emissive: 0x553600, emissiveIntensity: 0.4 });
  const matGem = new THREE.MeshStandardMaterial({ color: 0xff6fa8, emissive: 0xff2f7d, emissiveIntensity: 1.1, roughness: 0.2 });
  const matBow = new THREE.MeshToonMaterial({ color: 0xfff9e8 });

  function add(mesh, shadow = true) {
    if (shadow) mesh.castShadow = true;
    group.add(mesh);
    return mesh;
  }

  const parts = { armPivots: {} };

  // Zapatillas doradas con pequeño tacón y moño
  [-1, 1].forEach(side => {
    const shoe = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), matDressTrim);
    shoe.scale.set(1, 0.55, 1.3);
    shoe.position.set(side * 0.16, 0.09, 0.04);
    add(shoe);

    const heel = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.07), matDressTrim);
    heel.position.set(side * 0.16, 0.035, -0.1);
    add(heel);

    const bow = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), matBow);
    bow.scale.set(1.7, 0.6, 0.9);
    bow.position.set(side * 0.16, 0.15, 0.17);
    add(bow, false);
  });

  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.6, 0.75, 10), matDress);
  skirt.position.y = 0.58;
  add(skirt);

  const hemTrim = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.045, 6, 20), matDressTrim);
  hemTrim.rotation.x = Math.PI / 2;
  hemTrim.position.y = 0.21;
  add(hemTrim);

  const sash = new THREE.Mesh(new THREE.TorusGeometry(0.245, 0.04, 6, 16), matDressTrim);
  sash.rotation.x = Math.PI / 2;
  sash.position.y = 0.95;
  add(sash);

  const bodice = new THREE.Mesh(new THREE.CapsuleGeometry(0.19, 0.12, 4, 8), matDress);
  bodice.position.y = 1.22;
  add(bodice);

  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.025, 6, 16), matDressTrim);
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 1.46;
  add(collar);

  [-1, 1].forEach(side => {
    const sleeve = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), matDress);
    sleeve.scale.set(1, 1.15, 1);
    sleeve.position.set(side * 0.27, 1.4, 0.02);
    add(sleeve);

    const shoulderPivot = new THREE.Group();
    shoulderPivot.position.set(side * 0.29, 1.37, 0.03);
    group.add(shoulderPivot);

    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.28, 4, 6), matSkin);
    arm.rotation.z = side * 0.18;
    arm.position.set(side * 0.03, -0.23, 0.04);
    arm.castShadow = true;
    shoulderPivot.add(arm);

    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), matSkin);
    hand.position.set(side * 0.05, -0.43, 0.08);
    hand.castShadow = true;
    shoulderPivot.add(hand);

    parts.armPivots[side] = shoulderPivot;
  });

  const cape = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.8, 0.04), matCape);
  cape.position.set(0, 1.05, -0.22);
  cape.rotation.x = 0.12;
  add(cape);

  const clasp = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), matDressTrim);
  clasp.position.set(0, 1.46, -0.14);
  add(clasp, false);

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.1, 8), matSkin);
  neck.position.y = 1.52;
  add(neck);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.26, 14, 12), matSkin);
  head.position.y = 1.82;
  add(head);
  parts.head = head;

  [-1, 1].forEach(side => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.032, 8, 8), matEyes);
    eye.position.set(side * 0.1, 1.83, 0.235);
    add(eye, false);
  });

  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), matHair);
  hairCap.scale.set(1.05, 0.95, 1.05);
  hairCap.position.set(0, 1.85, -0.07);
  add(hairCap);

  const bangs = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.09, 0.1), matHair);
  bangs.position.set(0, 1.98, 0.2);
  bangs.rotation.x = -0.25;
  add(bangs);

  [-1, 1].forEach(side => {
    const bun = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), matHair);
    bun.position.set(side * 0.31, 1.8, 0.03);
    add(bun);

    const strand = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.03, 0.42, 6), matHair);
    strand.position.set(side * 0.35, 1.56, 0.02);
    strand.rotation.z = side * 0.12;
    add(strand);
  });

  const braid = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.03, 0.9, 6), matHair);
  braid.position.set(0, 1.28, -0.34);
  braid.rotation.x = 0.55;
  add(braid);
  parts.braid = braid;
  parts.braidBaseRotationZ = braid.rotation.z;

  const tiaraBand = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.022, 6, 20, Math.PI), matTiara);
  tiaraBand.rotation.x = Math.PI / 2;
  tiaraBand.rotation.z = Math.PI;
  tiaraBand.position.set(0, 2.02, 0.03);
  add(tiaraBand);

  [-0.14, 0, 0.14].forEach((tx, idx) => {
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.085, 5), matTiara);
    spike.position.set(tx, idx === 1 ? 2.11 : 2.09, 0.1 + (idx === 1 ? 0.04 : 0));
    add(spike);
  });

  const tiaraGem = new THREE.Mesh(new THREE.OctahedronGeometry(0.045, 0), matGem);
  tiaraGem.position.set(0, 2.09, 0.15);
  add(tiaraGem, false);

  const tinyLight = new THREE.PointLight(0xffd86b, 0.65, 5, 2);
  tinyLight.position.set(0, 1.2, 0);
  group.add(tinyLight);

  group.userData.parts = parts;
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
  } catch (error) {
    // La aventura continúa igual aunque el navegador bloquee el autoplay.
  }
  if (starGateRAF !== null) {
    cancelAnimationFrame(starGateRAF);
    starGateRAF = null;
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
  if (data.acertijo.opciones) {
    data.acertijo.opciones.forEach((opcion, index) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = opcion;
      btn.addEventListener("click", () => checkRiddleAnswer(index));
      riddleOptions.appendChild(btn);
    });
  } else {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "riddle-input";
    input.placeholder = "Escribe tu respuesta";
    input.autocomplete = "off";
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") checkOpenAnswer(input.value);
    });

    const submit = document.createElement("button");
    submit.type = "button";
    submit.textContent = "Responder";
    submit.addEventListener("click", () => checkOpenAnswer(input.value));

    riddleOptions.appendChild(input);
    riddleOptions.appendChild(submit);
    setTimeout(() => input.focus(), 50);
  }

  riddlePanel.classList.remove("hidden");
}

function normalizeAnswer(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[¿?¡!.,]/g, "")
    .trim();
}

function onRiddleSuccess() {
  riddleFeedback.textContent = "¡Respuesta correcta! La gema abrió su secreto.";
  setTimeout(() => {
    riddlePanel.classList.add("hidden");
    riddleOpen = false;
    revealGema(activeGema);
    activeGema = null;
    resetMovementState();
  }, 520);
}

function resetMovementState() {
  keys.up = false;
  keys.down = false;
  keys.left = false;
  keys.right = false;
  playerVelocity.set(0, 0, 0);
}

function checkRiddleAnswer(index) {
  if (!activeGema) return;
  const data = activeGema.userData;
  if (index === data.acertijo.correcta) {
    onRiddleSuccess();
  } else {
    riddleFeedback.textContent = `Casi. Pista: ${data.acertijo.pista}`;
  }
}

function checkOpenAnswer(value) {
  if (!activeGema) return;
  const data = activeGema.userData;
  const normalized = normalizeAnswer(value || "");
  const accepted = data.acertijo.respuestas.map(normalizeAnswer);
  if (normalized && accepted.includes(normalized)) {
    onRiddleSuccess();
  } else {
    riddleFeedback.textContent = `Casi. Pista: ${data.acertijo.pista}`;
  }
}

function closeRiddle() {
  riddlePanel.classList.add("hidden");
  riddleOpen = false;
  activeGema = null;
  riddleCooldownUntil = performance.now() + 1200;
  resetMovementState();
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
    if (child.userData.kind === "crystal") child.visible = false;
    if (child.userData.kind === "marker" && child.material?.opacity !== undefined) child.material.opacity = 0.82;
    if (child.userData.kind === "glow" && child.material?.opacity !== undefined) child.material.opacity = 0.24;
  });

  createShardCluster(group, data.color);
  fireworkBurst(group.position, data.color);
  playGemSound();

  if (discoveredCount === GEMAS.length - 1) {
    openTempleGate();
    setTimeout(() => {
      zoneName.textContent = "El templo se abre";
      zoneText.textContent = `Las piedras que bloqueaban el centro del bosque se hunden en la tierra. La última gema te espera, ${CONFIG.sobrina}.`;
    }, 2600);
  }

  if (discoveredCount === GEMAS.length && !finalShown) {
    finalShown = true;
    setTimeout(() => finalCard.classList.remove("hidden"), 900);
  }
}

function openTempleGate() {
  if (templeGateOpen) return;
  templeGateOpen = true;
  templeGateRocks.forEach((rock, i) => {
    setTimeout(() => {
      rock.userData.sinking = true;
      burstParticles(rock.position, 0xffd86b, 6, 0.7);
    }, i * 90);
  });
}

function animateTempleGate(dt) {
  templeGateRocks.forEach(rock => {
    if (rock.userData.sinking && rock.visible) {
      rock.position.y -= dt * 1.6;
      rock.rotation.x += dt * 2.4;
      rock.rotation.z += dt * 1.6;
      if (rock.position.y < rock.userData.restY - 2.4) {
        rock.visible = false;
      }
    }
  });
}

function playGemSound() {
  const file = CONFIG.gemSoundFiles[Math.floor(Math.random() * CONFIG.gemSoundFiles.length)];
  const sfx = new Audio(file);
  sfx.volume = 0.85;
  sfx.play().catch(() => {});
}

function createShardCluster(group, color) {
  const shardMat = new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: 1.7,
    roughness: 0.15,
    metalness: 0.05,
    transparent: true,
    opacity: 0.95
  });
  const baseSeed = group.userData.index * 97;
  for (let i = 0; i < 7; i++) {
    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(0.12 + rand(baseSeed + i) * 0.13, 0), shardMat);
    const a = (i / 7) * Math.PI * 2 + rand(baseSeed + i + 40) * 0.7;
    const r = 0.4 + rand(baseSeed + i + 50) * 0.6;
    shard.position.set(Math.cos(a) * r, 0.75 + rand(baseSeed + i + 60) * 0.9, Math.sin(a) * r);
    shard.rotation.set(rand(baseSeed + i), rand(baseSeed + i + 1), rand(baseSeed + i + 2));
    shard.userData.kind = "shard";
    shard.userData.spin = 0.3 + rand(baseSeed + i + 70) * 0.6;
    shard.castShadow = true;
    group.add(shard);
  }
}

function spawnTrailSpark() {
  const seed = performance.now();
  const x = player.position.x + (rand(seed + 1) - 0.5) * 0.3;
  const z = player.position.z + (rand(seed + 3) - 0.5) * 0.3;
  const y = 0.08 + rand(seed + 2) * 0.12;

  const spark = new THREE.Mesh(
    new THREE.SphereGeometry(0.075 + rand(seed) * 0.045, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xfff3c4, transparent: true, opacity: 1, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  spark.position.set(x, y, z);
  spark.userData.velocity = new THREE.Vector3(0, 0.45, 0);
  spark.userData.life = 0.9;
  sparkObjects.push(spark);
  scene.add(spark);

  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(0.16 + rand(seed + 5) * 0.05, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xffd96a, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  halo.position.set(x, y, z);
  halo.userData.velocity = new THREE.Vector3(0, 0.3, 0);
  halo.userData.life = 0.7;
  sparkObjects.push(halo);
  scene.add(halo);
}

function fireworkBurst(origin, color) {
  burstParticles(origin, color, 30, 1.3);
  setTimeout(() => burstParticles(origin, 0xfff4d6, 20, 1.0), 150);
  setTimeout(() => burstParticles(origin, color, 24, 1.15), 320);
}

function burstParticles(origin, color, count = 24, life = 1.15) {
  for (let i = 0; i < count; i++) {
    const spark = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 8, 8),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, blending: THREE.AdditiveBlending })
    );
    spark.position.copy(origin).add(new THREE.Vector3(0, 1.3, 0));
    spark.userData.velocity = new THREE.Vector3((rand(i + performance.now()) - 0.5) * 4.2, 1.4 + rand(i + 3) * 2.8, (rand(i + 4) - 0.5) * 4.2);
    spark.userData.life = life;
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
const touchInput = { active: false, pointerId: null, lastX: 0, lastY: 0 };

// Un dedo orbita la cámara alrededor del personaje para explorar el bosque
// sin moverlo, y dos dedos hacen un zoom aéreo (pellizcar para ver el bosque
// desde más arriba). En cuanto se usa un control de movimiento, la cámara
// vuelve a su posición de seguimiento normal y el personaje camina con ese control.
const activeTouches = new Map();
let pinchDistance = null;
let exploring = false;
let orbitYaw = 0;
let orbitPitch = 0;
let orbitYawTarget = 0;
let orbitPitchTarget = 0;
let aerialZoom = 0;
let aerialZoomTarget = 0;
const ORBIT_SENSITIVITY = 0.0062;
const ORBIT_PITCH_MIN = -0.32;
const ORBIT_PITCH_MAX = 0.55;
const PINCH_SENSITIVITY = 0.0035;
const AERIAL_ZOOM_MAX = 1;

function resumeFollowCamera() {
  exploring = false;
  orbitYawTarget = 0;
  orbitPitchTarget = 0;
  aerialZoomTarget = 0;
}

function touchPointDistance() {
  const points = [...activeTouches.values()];
  if (points.length < 2) return null;
  return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
}

window.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  if (keyMap[e.code]) {
    keys[keyMap[e.code]] = true;
    resumeFollowCamera();
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
  const press = (e) => { e.preventDefault(); keys[dir] = true; resumeFollowCamera(); };
  const release = (e) => { e.preventDefault(); keys[dir] = false; };
  btn.addEventListener("pointerdown", press);
  btn.addEventListener("pointerup", release);
  btn.addEventListener("pointercancel", release);
  btn.addEventListener("pointerleave", release);
});

renderer.domElement.addEventListener("pointerdown", (e) => {
  if (!started || riddleOpen) return;
  if (e.pointerType !== "touch" && !window.matchMedia("(pointer: coarse)").matches) return;
  activeTouches.set(e.pointerId, { x: e.clientX, y: e.clientY });
  renderer.domElement.setPointerCapture(e.pointerId);
  exploring = true;

  if (activeTouches.size >= 2) {
    touchInput.active = false;
    pinchDistance = touchPointDistance();
  } else {
    touchInput.active = true;
    touchInput.pointerId = e.pointerId;
    touchInput.lastX = e.clientX;
    touchInput.lastY = e.clientY;
  }
  e.preventDefault();
});

renderer.domElement.addEventListener("pointermove", (e) => {
  if (!activeTouches.has(e.pointerId)) return;
  activeTouches.set(e.pointerId, { x: e.clientX, y: e.clientY });

  if (activeTouches.size >= 2) {
    const distance = touchPointDistance();
    if (pinchDistance !== null && distance !== null) {
      const delta = distance - pinchDistance;
      aerialZoomTarget = clamp(aerialZoomTarget - delta * PINCH_SENSITIVITY, 0, AERIAL_ZOOM_MAX);
    }
    pinchDistance = distance;
  } else if (touchInput.active && e.pointerId === touchInput.pointerId) {
    const dx = e.clientX - touchInput.lastX;
    const dy = e.clientY - touchInput.lastY;
    touchInput.lastX = e.clientX;
    touchInput.lastY = e.clientY;
    orbitYawTarget -= dx * ORBIT_SENSITIVITY;
    orbitPitchTarget = clamp(orbitPitchTarget - dy * ORBIT_SENSITIVITY, ORBIT_PITCH_MIN, ORBIT_PITCH_MAX);
  }
  e.preventDefault();
});

function endTouchMove(e) {
  activeTouches.delete(e.pointerId);
  if (touchInput.pointerId === e.pointerId) {
    touchInput.active = false;
    touchInput.pointerId = null;
  }
  if (activeTouches.size < 2) pinchDistance = null;
  if (activeTouches.size === 1) {
    const [[id, pos]] = activeTouches;
    touchInput.active = true;
    touchInput.pointerId = id;
    touchInput.lastX = pos.x;
    touchInput.lastY = pos.y;
  }
}
renderer.domElement.addEventListener("pointerup", endTouchMove);
renderer.domElement.addEventListener("pointercancel", endTouchMove);

// =============================
// LOOP
// =============================
const playerVelocity = new THREE.Vector3();
let trailTimer = 0;
let walkCycle = 0;
const idleGesture = { active: null, t: 0, timer: 0, nextAt: 4 + Math.random() * 3 };
const BASE_CAMERA_ANGLE = Math.atan2(16, 11);
const BASE_CAMERA_RADIUS = Math.hypot(11, 16);
const BASE_CAMERA_HEIGHT = 17.5;

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
  animatePlayerModel(t, dt);
  animateCats(t, dt);
  animateTempleGate(dt);
  updateCamera(dt);

  renderer.render(scene, camera);
}
animate();

function updatePlayer(dt) {
  const input = new THREE.Vector3(
    (keys.right ? 1 : 0) - (keys.left ? 1 : 0),
    0,
    (keys.down ? 1 : 0) - (keys.up ? 1 : 0)
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
  if (!templeGateOpen && player.position.length() < TEMPLE_GATE_RADIUS) {
    player.position.setLength(TEMPLE_GATE_RADIUS);
  }
  player.position.y = 0;

  trailTimer -= dt;
  if (playerVelocity.lengthSq() > 1 && trailTimer <= 0) {
    spawnTrailSpark();
    trailTimer = 0.04;
  }

  gemaObjects.forEach(group => {
    if (group.userData.discovered) return;
    const distance = tmp.copy(group.position).sub(player.position).length();
    if (distance < 2.45) openRiddle(group);
  });
}

function animatePlayerModel(t, dt) {
  const parts = playerModel.userData.parts;
  const speed = playerVelocity.length();
  const moving = started && !riddleOpen && speed > 0.6;

  if (moving) {
    walkCycle += dt * (5 + speed * 0.9);
    const speedRatio = Math.min(speed / 9.3, 1);
    playerModel.position.y = Math.abs(Math.sin(walkCycle)) * 0.085;
    playerModel.rotation.x = speedRatio * 0.05;
    playerModel.rotation.z = Math.sin(walkCycle * 0.5) * 0.035;

    const swing = speedRatio * 0.55;
    parts.armPivots[-1].rotation.x = Math.sin(walkCycle) * swing;
    parts.armPivots[1].rotation.x = -Math.sin(walkCycle) * swing;
    if (parts.braid) parts.braid.rotation.z = parts.braidBaseRotationZ + Math.sin(walkCycle * 0.5) * 0.12;
    if (parts.head) parts.head.rotation.z = Math.sin(walkCycle * 0.5) * 0.03;

    idleGesture.active = null;
    idleGesture.timer = 0;
  } else {
    walkCycle = 0;
    const breathe = Math.sin(t * 1.4) * 0.014;
    playerModel.rotation.x += (0 - playerModel.rotation.x) * 0.1;

    idleGesture.timer += dt;
    if (!idleGesture.active && idleGesture.timer > idleGesture.nextAt) {
      idleGesture.active = Math.random() < 0.5 ? "wipe" : "dance";
      idleGesture.t = 0;
    }

    if (idleGesture.active === "wipe") {
      idleGesture.t += dt;
      const dur = 1.7;
      const p = clamp(idleGesture.t / dur, 0, 1);
      const raise = Math.sin(p * Math.PI);
      playerModel.position.y = breathe;
      playerModel.rotation.z += (0 - playerModel.rotation.z) * 0.1;
      parts.armPivots[1].rotation.x = -raise * 2.05;
      parts.armPivots[1].rotation.z = -0.15 - raise * 0.55;
      parts.armPivots[-1].rotation.x += (0 - parts.armPivots[-1].rotation.x) * 0.1;
      if (parts.head) parts.head.rotation.x = -raise * 0.12;
      if (p >= 1) {
        idleGesture.active = null;
        idleGesture.timer = 0;
        idleGesture.nextAt = 5 + Math.random() * 5;
      }
    } else if (idleGesture.active === "dance") {
      idleGesture.t += dt;
      const dur = 1.8;
      playerModel.position.y = breathe + Math.abs(Math.sin(idleGesture.t * 6)) * 0.04;
      playerModel.rotation.z = Math.sin(idleGesture.t * 6) * 0.09;
      parts.armPivots[-1].rotation.x = Math.sin(idleGesture.t * 6) * 0.5;
      parts.armPivots[1].rotation.x = -Math.sin(idleGesture.t * 6) * 0.5;
      parts.armPivots[1].rotation.z += (0 - parts.armPivots[1].rotation.z) * 0.15;
      if (idleGesture.t >= dur) {
        idleGesture.active = null;
        idleGesture.timer = 0;
        idleGesture.nextAt = 5 + Math.random() * 5;
      }
    } else {
      playerModel.position.y = breathe;
      playerModel.rotation.z += (Math.sin(t * 0.6) * 0.02 - playerModel.rotation.z) * 0.06;
      parts.armPivots[-1].rotation.x += (0 - parts.armPivots[-1].rotation.x) * 0.08;
      parts.armPivots[1].rotation.x += (0 - parts.armPivots[1].rotation.x) * 0.08;
      parts.armPivots[1].rotation.z += (0 - parts.armPivots[1].rotation.z) * 0.08;
      if (parts.head) parts.head.rotation.x += (0 - parts.head.rotation.x) * 0.05;
    }
    if (parts.head) parts.head.rotation.z += (0 - parts.head.rotation.z) * 0.05;
    if (parts.braid) parts.braid.rotation.z += (parts.braidBaseRotationZ - parts.braid.rotation.z) * 0.05;
  }
}

function animateGemas(t, dt) {
  gemaObjects.forEach((group, i) => {
    const crystal = group.children.find(child => child.userData.kind === "crystal");
    const marker = group.children.find(child => child.userData.kind === "marker");
    const glow = group.children.find(child => child.userData.kind === "glow");
    const light = group.children.find(child => child.userData.kind === "gemLight");
    const pulse = 0.5 + Math.sin(t * 1.65 + i * 0.83) * 0.5;
    const discovered = group.userData.discovered;

    if (crystal && crystal.visible) {
      crystal.rotation.y += dt * (1.05 + i * 0.045);
      crystal.rotation.x = Math.sin(t * 0.8 + i) * 0.08;
      crystal.position.y = crystal.userData.originalY + Math.sin(t * 1.7 + i) * 0.16;
      crystal.material.emissiveIntensity = 1.05 + pulse * 0.95;
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
    if (discovered) {
      group.children.forEach(child => {
        if (child.userData.kind === "shard") child.rotation.y += dt * child.userData.spin;
      });
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

function animateCats(t, dt) {
  const playerMoving = started && !riddleOpen && playerVelocity.length() > 0.6;
  updateCat(catOrange, t, dt, playerMoving, -1, 0.6);
  updateCat(catBlack, t, dt, playerMoving, 1, 2.1);
}

function updateCat(cat, t, dt, playerMoving, side, phase) {
  const ud = cat.userData;
  const facing = player.rotation.y;
  const behindX = -Math.sin(facing);
  const behindZ = -Math.cos(facing);
  const sideX = Math.cos(facing);
  const sideZ = -Math.sin(facing);

  const desired = new THREE.Vector3(
    player.position.x + behindX * 1.4 + sideX * side * 0.85 + Math.sin(t * 0.4 + phase) * 0.35,
    0,
    player.position.z + behindZ * 1.4 + sideZ * side * 0.85 + Math.cos(t * 0.33 + phase) * 0.35
  );
  const toDesired = desired.clone().sub(cat.position);
  const distance = toDesired.length();

  ud.stateT += dt;
  if (playerMoving || distance > 2.2) {
    ud.state = "follow";
    ud.stateT = 0;
  } else if (ud.state === "follow" && ud.stateT > ud.nextIdleAt) {
    ud.state = Math.random() < 0.5 ? "sit" : "explore";
    ud.stateT = 0;
    ud.nextIdleAt = 2.5 + Math.random() * 3;
  } else if (ud.state !== "follow" && ud.stateT > 2.6) {
    ud.state = "follow";
    ud.stateT = 0;
  }

  if (ud.state === "follow" && distance > 0.12) {
    cat.position.lerp(desired, playerMoving ? 0.05 : 0.03);
    if (toDesired.lengthSq() > 0.0001) {
      const targetAngle = Math.atan2(toDesired.x, toDesired.z);
      const delta = Math.atan2(Math.sin(targetAngle - cat.rotation.y), Math.cos(targetAngle - cat.rotation.y));
      cat.rotation.y += delta * 0.12;
    }
    const gait = t * 9 + phase;
    cat.position.y = Math.abs(Math.sin(gait)) * 0.045;
    ud.legs.forEach((leg, i) => {
      leg.rotation.x = Math.sin(gait + (i % 2 === 0 ? 0 : Math.PI)) * 0.5;
    });
    ud.tail.rotation.y = Math.sin(t * 3 + phase) * 0.25;
  } else if (ud.state === "sit") {
    cat.position.y += (-0.05 - cat.position.y) * 0.08;
    ud.legs.forEach(leg => { leg.rotation.x += (0 - leg.rotation.x) * 0.1; });
    ud.tail.rotation.y = Math.sin(t * 1.2 + phase) * 0.35;
  } else {
    const sniff = new THREE.Vector3(
      cat.position.x + Math.sin(t * 0.9 + phase) * 0.5,
      0,
      cat.position.z + Math.cos(t * 0.7 + phase) * 0.5
    );
    cat.position.lerp(sniff, 0.01);
    cat.position.y = Math.abs(Math.sin(t * 6 + phase)) * 0.03;
    ud.legs.forEach((leg, i) => {
      leg.rotation.x = Math.sin(t * 6 + phase + (i % 2 === 0 ? 0 : Math.PI)) * 0.25;
    });
    ud.tail.rotation.y = Math.sin(t * 4 + phase) * 0.4;
  }
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
  const orbitEase = 1 - Math.pow(0.0001, dt);
  orbitYaw += (orbitYawTarget - orbitYaw) * orbitEase;
  orbitPitch += (orbitPitchTarget - orbitPitch) * orbitEase;
  aerialZoom += (aerialZoomTarget - aerialZoom) * orbitEase;

  cameraTarget.set(player.position.x, player.position.y + 1.25, player.position.z);

  const angle = BASE_CAMERA_ANGLE + orbitYaw;
  const radius = BASE_CAMERA_RADIUS * (1 + aerialZoom * 1.6);
  const height = BASE_CAMERA_HEIGHT + orbitPitch * 14 + aerialZoom * 42;
  const desired = new THREE.Vector3(
    player.position.x + Math.cos(angle) * radius,
    height,
    player.position.z + Math.sin(angle) * radius
  );
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
