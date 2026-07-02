import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.185.1/build/three.module.js";

// =============================
// PERSONALIZA AQUÍ
// =============================
const CONFIG = {
  sobrina: "mi pequeña aventurera",
  firma: "Con todo mi cariño",
  tituloFinal: "Feliz cumpleaños número 9",
  mensajeFinal: [
    "Hoy cumples 9 años, y eso significa que tu historia ya tiene nueve capítulos llenos de risa, preguntas, juegos, aprendizajes y magia propia.",
    "Que nunca se te olvide esto: dentro de ti vive una luz que no necesita parecerse a la de nadie más. Esa luz es tuya, única, valiente y hermosa.",
    "Ojalá este nuevo año te traiga aventuras pequeñas y grandes: días para imaginar mundos, momentos para aprender cosas difíciles, abrazos que te hagan sentir segura y sueños que te hagan mirar hacia arriba.",
    "Sigue siendo curiosa. Sigue haciendo preguntas. Sigue creyendo que lo imposible solo está esperando a que alguien creativo lo intente primero.",
    "Feliz cumpleaños, exploradora de 9 años. Que tu corazón sea siempre tu brújula y que cada paso te acerque a una versión más feliz, fuerte y luminosa de ti."
  ].join("\n\n")
};

const FAROLES = [
  {
    nombre: "Farol del primer paso",
    pos: [-10, 0, -8],
    color: 0xffd86b,
    texto: `Hoy comienza una aventura especial para ${CONFIG.sobrina}: la aventura de cumplir 9 años.`
  },
  {
    nombre: "Farol de la imaginación",
    pos: [-4, 0, -13],
    color: 0x7ee4ff,
    texto: "Que tu imaginación siga abriendo puertas donde otros solo ven paredes."
  },
  {
    nombre: "Farol del valor",
    pos: [4, 0, -11],
    color: 0xff8fb3,
    texto: "Ser valiente no significa no tener miedo; significa avanzar con tu luz aunque el bosque parezca grande."
  },
  {
    nombre: "Farol de la risa",
    pos: [10, 0, -5],
    color: 0xb6ff7e,
    texto: "Que nunca te falten carcajadas de esas que hacen que el mundo se sienta más ligero."
  },
  {
    nombre: "Farol de las preguntas",
    pos: [8, 0, 4],
    color: 0xd8a6ff,
    texto: "Tus preguntas son pequeñas llaves mágicas: con ellas puedes descubrir cómo funciona todo."
  },
  {
    nombre: "Farol de los sueños",
    pos: [2, 0, 11],
    color: 0xfff0a3,
    texto: "Cuida tus sueños como si fueran semillas. Algunos tardan, pero los más hermosos crecen en silencio."
  },
  {
    nombre: "Farol de la bondad",
    pos: [-7, 0, 9],
    color: 0x8affc1,
    texto: "La bondad es una fuerza enorme: puede cambiar un día, una amistad y hasta un pequeño reino."
  },
  {
    nombre: "Farol de tu propia luz",
    pos: [-12, 0, 2],
    color: 0xffffff,
    texto: "Nunca escondas tu forma de brillar. El mundo necesita exactamente esa luz que solo tú tienes."
  },
  {
    nombre: "Farol del cumpleaños 9",
    pos: [0, 0, 0],
    color: 0xffd1f4,
    texto: "Feliz cumpleaños. Que este año sea un mapa lleno de tesoros, abrazos y aventuras nuevas."
  }
];

// =============================
// ESCENA BASE
// =============================
const container = document.querySelector("#scene-container");
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1b17);
scene.fog = new THREE.FogExp2(0x0b1b17, 0.035);

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 180);
camera.position.set(0, 18, 18);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.appendChild(renderer.domElement);

const clock = new THREE.Clock();
const raycaster = new THREE.Raycaster();
const down = new THREE.Vector3(0, -1, 0);

const ambient = new THREE.HemisphereLight(0xb6ffe6, 0x1c1309, 1.6);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffe0a3, 3.1);
sun.position.set(-12, 24, 10);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -30;
sun.shadow.camera.right = 30;
sun.shadow.camera.top = 30;
sun.shadow.camera.bottom = -30;
scene.add(sun);

const moon = new THREE.PointLight(0x7ddcff, 1.8, 60, 2);
moon.position.set(10, 10, -18);
scene.add(moon);

// =============================
// MATERIALES
// =============================
const matGrass = new THREE.MeshStandardMaterial({ color: 0x184f39, roughness: 0.95, metalness: 0.02 });
const matGrassDark = new THREE.MeshStandardMaterial({ color: 0x0f3028, roughness: 1 });
const matPath = new THREE.MeshStandardMaterial({ color: 0xb48d5a, roughness: 0.9 });
const matStone = new THREE.MeshStandardMaterial({ color: 0x6a7068, roughness: 0.85 });
const matStoneDark = new THREE.MeshStandardMaterial({ color: 0x3a4340, roughness: 0.95 });
const matWood = new THREE.MeshStandardMaterial({ color: 0x6e4325, roughness: 0.9 });
const matLeaves = new THREE.MeshStandardMaterial({ color: 0x1d6c42, roughness: 0.85 });
const matLeaves2 = new THREE.MeshStandardMaterial({ color: 0x2b8a56, roughness: 0.85 });
const matWater = new THREE.MeshStandardMaterial({ color: 0x174e5c, emissive: 0x0a2633, roughness: 0.3, metalness: 0.05 });

// =============================
// MAPA
// =============================
const ground = new THREE.Mesh(new THREE.CircleGeometry(30, 96), matGrass);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

const underGround = new THREE.Mesh(new THREE.CircleGeometry(45, 96), matGrassDark);
underGround.rotation.x = -Math.PI / 2;
underGround.position.y = -0.05;
scene.add(underGround);

createPath();
createTempleCenter();
createPond();
createBridge();
createTrees();
createRocksAndRuins();
createBoundaryRunes();
createStars();

function createPath() {
  const points = [
    [-10, -8], [-4, -13], [4, -11], [10, -5], [8, 4], [2, 11], [-7, 9], [-12, 2], [0, 0]
  ];
  for (let i = 0; i < points.length - 1; i++) {
    const [x1, z1] = points[i];
    const [x2, z2] = points[i + 1];
    const dx = x2 - x1;
    const dz = z2 - z1;
    const length = Math.hypot(dx, dz);
    const tile = new THREE.Mesh(new THREE.PlaneGeometry(2.2, length + 1.4), matPath);
    tile.rotation.x = -Math.PI / 2;
    tile.rotation.z = -Math.atan2(dx, dz);
    tile.position.set((x1 + x2) / 2, 0.012, (z1 + z2) / 2);
    tile.receiveShadow = true;
    scene.add(tile);
  }
  points.forEach(([x, z]) => {
    const circle = new THREE.Mesh(new THREE.CircleGeometry(1.35, 24), matPath);
    circle.rotation.x = -Math.PI / 2;
    circle.position.set(x, 0.018, z);
    circle.receiveShadow = true;
    scene.add(circle);
  });
}

function createTempleCenter() {
  const base = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.6, 0.6, 8), matStoneDark);
  base.position.set(0, 0.3, 0);
  base.castShadow = true;
  base.receiveShadow = true;
  scene.add(base);

  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 3.6, 8), matStone);
    pillar.position.set(Math.cos(a) * 3.8, 1.8, Math.sin(a) * 3.8);
    pillar.castShadow = true;
    scene.add(pillar);

    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.28, 0.82), matStoneDark);
    cap.position.set(pillar.position.x, 3.7, pillar.position.z);
    cap.rotation.y = a;
    cap.castShadow = true;
    scene.add(cap);
  }
}

function createPond() {
  const pond = new THREE.Mesh(new THREE.CircleGeometry(4, 48), matWater);
  pond.rotation.x = -Math.PI / 2;
  pond.position.set(10.5, 0.03, 6.5);
  pond.receiveShadow = true;
  scene.add(pond);

  for (let i = 0; i < 10; i++) {
    const a = i * 0.63;
    const r = 3.8 + rand(i) * 0.9;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.28 + rand(i + 10) * 0.35, 0), matStone);
    rock.position.set(10.5 + Math.cos(a) * r, 0.22, 6.5 + Math.sin(a) * r);
    rock.scale.y = 0.45;
    rock.rotation.set(rand(i + 20), rand(i + 30), rand(i + 40));
    rock.castShadow = true;
    scene.add(rock);
  }
}

function createBridge() {
  const bridge = new THREE.Group();
  bridge.position.set(8.5, 0.16, 5.2);
  bridge.rotation.y = -0.45;
  for (let i = -2; i <= 2; i++) {
    const plank = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.18, 2.8), matWood);
    plank.position.x = i * 0.65;
    plank.castShadow = true;
    bridge.add(plank);
  }
  for (let side of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.14, 0.18), matWood);
    rail.position.set(0, 0.55, side * 1.46);
    rail.castShadow = true;
    bridge.add(rail);
  }
  scene.add(bridge);
}

function createTrees() {
  const positions = [];
  for (let i = 0; i < 95; i++) {
    const a = rand(i) * Math.PI * 2;
    const r = 15 + rand(i + 101) * 13;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    if (Math.abs(x) < 13 && Math.abs(z) < 13) continue;
    positions.push([x, z, 0.8 + rand(i + 222) * 0.8]);
  }
  positions.forEach(([x, z, s], index) => {
    const tree = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16 * s, 0.24 * s, 1.4 * s, 6), matWood);
    trunk.position.y = 0.7 * s;
    trunk.castShadow = true;
    tree.add(trunk);

    const leavesMat = index % 3 === 0 ? matLeaves2 : matLeaves;
    for (let level = 0; level < 3; level++) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry((0.9 - level * 0.16) * s, 1.25 * s, 7), leavesMat);
      cone.position.y = (1.5 + level * 0.62) * s;
      cone.castShadow = true;
      tree.add(cone);
    }
    tree.position.set(x, 0, z);
    tree.rotation.y = rand(index + 88) * Math.PI;
    scene.add(tree);
  });
}

function createRocksAndRuins() {
  for (let i = 0; i < 42; i++) {
    const a = rand(i + 700) * Math.PI * 2;
    const r = 6 + rand(i + 800) * 20;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.25 + rand(i + 900) * 0.65, 0), i % 4 === 0 ? matStoneDark : matStone);
    rock.position.set(x, 0.25, z);
    rock.scale.y = 0.4 + rand(i + 1000) * 0.6;
    rock.rotation.set(rand(i) * Math.PI, rand(i + 1) * Math.PI, rand(i + 2) * Math.PI);
    rock.castShadow = true;
    scene.add(rock);
  }

  const ruins = [
    [-14, -4, 0.3, 1.2, 1.4], [-13.2, -3.2, 0.7, 0.6, 2.6], [12.8, -9, 0.3, 1.0, 1.0],
    [12.2, -8.2, 0.3, 1.5, 0.6], [-2, 14, 0.3, 1.2, 1.1], [-1.1, 14.7, 0.8, 0.5, 2.4]
  ];
  ruins.forEach(([x, z, y, w, h], idx) => {
    const block = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.6), idx % 2 ? matStone : matStoneDark);
    block.position.set(x, y + h / 2, z);
    block.rotation.y = rand(idx + 77) * 1.8;
    block.castShadow = true;
    block.receiveShadow = true;
    scene.add(block);
  });
}

function createBoundaryRunes() {
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * Math.PI * 2;
    const ob = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.58, 2.1, 5), matStoneDark);
    ob.position.set(Math.cos(a) * 28, 1.05, Math.sin(a) * 28);
    ob.rotation.y = -a;
    ob.castShadow = true;
    scene.add(ob);
  }
}

function createStars() {
  const geo = new THREE.BufferGeometry();
  const vertices = [];
  for (let i = 0; i < 280; i++) {
    const a = rand(i + 3000) * Math.PI * 2;
    const r = 8 + rand(i + 3100) * 42;
    vertices.push(Math.cos(a) * r, 9 + rand(i + 3200) * 12, Math.sin(a) * r);
  }
  geo.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  const stars = new THREE.Points(
    geo,
    new THREE.PointsMaterial({ color: 0xfff1b8, size: 0.055, transparent: true, opacity: 0.9 })
  );
  scene.add(stars);
}

// =============================
// PLAYER
// =============================
const player = createPlayer();
player.position.set(-14, 0, -11);
scene.add(player);

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

  const tinyLight = new THREE.PointLight(0xffd86b, 0.8, 5, 2);
  tinyLight.position.set(0, 1.2, 0);
  group.add(tinyLight);

  return group;
}

// =============================
// FAROLES / MENSAJE
// =============================
const farolObjects = FAROLES.map((farol, index) => createFarol(farol, index));

function createFarol(farol, index) {
  const group = new THREE.Group();
  group.position.set(farol.pos[0], farol.pos[1], farol.pos[2]);
  group.userData = { ...farol, index, discovered: false };

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.75, 0.35, 8), matStoneDark);
  base.position.y = 0.18;
  base.castShadow = true;
  group.add(base);

  const crystalMat = new THREE.MeshStandardMaterial({
    color: farol.color,
    emissive: farol.color,
    emissiveIntensity: 1.1,
    roughness: 0.26,
    metalness: 0.05
  });
  const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.62, 0), crystalMat);
  crystal.position.y = 1.25;
  crystal.castShadow = true;
  crystal.userData.originalY = crystal.position.y;
  group.add(crystal);

  const ringMat = new THREE.MeshBasicMaterial({ color: farol.color, transparent: true, opacity: 0.42 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.025, 8, 60), ringMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.08;
  group.add(ring);

  const light = new THREE.PointLight(farol.color, 2.1, 7, 2);
  light.position.y = 1.45;
  group.add(light);

  const marker = new THREE.Mesh(new THREE.TorusGeometry(1.38, 0.04, 8, 72), ringMat.clone());
  marker.rotation.x = Math.PI / 2;
  marker.position.y = 0.06;
  marker.userData.spin = index % 2 ? 1 : -1;
  group.add(marker);

  scene.add(group);
  return group;
}

// =============================
// UI
// =============================
const intro = document.querySelector("#intro");
const hud = document.querySelector("#hud");
const counter = document.querySelector("#counter");
const zoneName = document.querySelector("#zoneName");
const zoneText = document.querySelector("#zoneText");
const finalCard = document.querySelector("#finalCard");
const fullMessage = document.querySelector("#fullMessage");
const helpPanel = document.querySelector("#helpPanel");

let started = false;
let discoveredCount = 0;
let finalShown = false;

fullMessage.innerText = `${CONFIG.tituloFinal}\n\n${CONFIG.mensajeFinal}\n\n${CONFIG.firma}`;

document.querySelector("#startBtn").addEventListener("click", () => {
  started = true;
  intro.classList.add("hidden");
  hud.classList.remove("hidden");
});
document.querySelector("#helpBtn").addEventListener("click", () => helpPanel.classList.remove("hidden"));
document.querySelector("#hideHelp").addEventListener("click", () => helpPanel.classList.add("hidden"));
document.querySelector("#closeFinal").addEventListener("click", () => finalCard.classList.add("hidden"));

function revealFarol(group) {
  const data = group.userData;
  if (data.discovered) return;
  data.discovered = true;
  discoveredCount++;
  counter.textContent = `${discoveredCount} / ${FAROLES.length}`;
  zoneName.textContent = data.nombre;
  zoneText.textContent = data.texto;

  group.children.forEach(child => {
    if (child.material?.emissiveIntensity !== undefined) child.material.emissiveIntensity = 2.4;
    if (child.material?.opacity !== undefined) child.material.opacity = 0.78;
  });

  burstParticles(group.position, data.color);

  if (discoveredCount === FAROLES.length && !finalShown) {
    finalShown = true;
    setTimeout(() => finalCard.classList.remove("hidden"), 900);
  }
}

function burstParticles(origin, color) {
  for (let i = 0; i < 18; i++) {
    const spark = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 8, 8),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1 })
    );
    spark.position.copy(origin).add(new THREE.Vector3(0, 1.3, 0));
    spark.userData.velocity = new THREE.Vector3((rand(i + performance.now()) - 0.5) * 3, 1 + rand(i + 3) * 2, (rand(i + 4) - 0.5) * 3);
    spark.userData.life = 1.1;
    spark.userData.spark = true;
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

// =============================
// LOOP
// =============================
const playerVelocity = new THREE.Vector3();
const tmp = new THREE.Vector3();
const cameraTarget = new THREE.Vector3();

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.033);
  const t = clock.elapsedTime;

  animateFaroles(t, dt);
  animateSparks(dt);
  if (started) updatePlayer(dt);
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
    playerVelocity.lerp(input.multiplyScalar(8.2), 0.18);
    const angle = Math.atan2(playerVelocity.x, playerVelocity.z);
    player.rotation.y = angle;
  } else {
    playerVelocity.lerp(new THREE.Vector3(0, 0, 0), 0.22);
  }

  player.position.addScaledVector(playerVelocity, dt);
  const maxRadius = 25.7;
  if (player.position.length() > maxRadius) player.position.setLength(maxRadius);
  player.position.y = 0;

  farolObjects.forEach(group => {
    const distance = tmp.copy(group.position).sub(player.position).length();
    if (distance < 2.2) revealFarol(group);
  });
}

function animateFaroles(t, dt) {
  farolObjects.forEach((group, i) => {
    const crystal = group.children.find(child => child.geometry?.type === "OctahedronGeometry");
    const marker = group.children[group.children.length - 1];
    if (crystal) {
      crystal.rotation.y += dt * (1.2 + i * 0.04);
      crystal.position.y = crystal.userData.originalY + Math.sin(t * 1.6 + i) * 0.16;
    }
    if (marker) {
      marker.rotation.z += dt * 0.7 * marker.userData.spin;
      marker.scale.setScalar(1 + Math.sin(t * 2 + i) * 0.05);
    }
  });
}

function animateSparks(dt) {
  const toRemove = [];
  scene.traverse(obj => {
    if (!obj.userData.spark) return;
    obj.userData.life -= dt;
    obj.position.addScaledVector(obj.userData.velocity, dt);
    obj.userData.velocity.y -= dt * 2.6;
    obj.material.opacity = Math.max(obj.userData.life, 0);
    obj.scale.setScalar(Math.max(obj.userData.life, 0.05));
    if (obj.userData.life <= 0) toRemove.push(obj);
  });
  toRemove.forEach(obj => {
    obj.geometry.dispose();
    obj.material.dispose();
    scene.remove(obj);
  });
}

function updateCamera(dt) {
  cameraTarget.set(player.position.x, player.position.y + 1.2, player.position.z);
  const desired = new THREE.Vector3(player.position.x + 9, 15, player.position.z + 13);
  camera.position.lerp(desired, 1 - Math.pow(0.001, dt));
  camera.lookAt(cameraTarget);
}

function rand(seed) {
  const x = Math.sin(seed * 999.131) * 43758.5453123;
  return x - Math.floor(x);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
