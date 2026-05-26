/* YUEN'S — Hero 3D ink-smoke particles (松烟墨)
   Vanilla Three.js port of the design.md HeroSection particle system.
   Resolves "three" via the importmap in index.html. */

import * as THREE from 'three';

const canvas = document.querySelector('.hero__canvas');
const hero   = canvas?.closest('.hero');
if (!canvas || !hero) {
  console.warn('hero-3d: canvas or hero section missing — skipping init.');
} else {

  const COUNT = 150;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 5;

  const geom = new THREE.CircleGeometry(0.3, 8);
  const mat  = new THREE.MeshBasicMaterial({
    color: 0x2B2B2B,            // pine smoke / 松烟墨
    transparent: true,
    opacity: 0.07,
    blending: THREE.NormalBlending,
    depthWrite: false,
  });
  const mesh = new THREE.InstancedMesh(geom, mat, COUNT);
  scene.add(mesh);

  let viewport = { width: 10, height: 6 };

  function recalcViewport() {
    const fovRad = camera.fov * (Math.PI / 180);
    const height = 2 * Math.tan(fovRad / 2) * camera.position.z;
    const width  = height * camera.aspect;
    viewport = { width, height };
  }

  const positions  = new Float32Array(COUNT * 3);
  const velocities = new Float32Array(COUNT * 3);
  const scales     = new Float32Array(COUNT);

  function seedParticles() {
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * viewport.width  * 1.2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 1.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      velocities[i * 3]     = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = Math.random() * 0.015 + 0.005;   // upward drift
      velocities[i * 3 + 2] = 0;
      scales[i] = Math.random() * 1.5 + 0.5;
    }
  }

  function resize() {
    const w = hero.clientWidth;
    const h = hero.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    recalcViewport();
  }

  const dummy = new THREE.Object3D();
  const clock = new THREE.Clock();

  function animate() {
    const t = clock.getElapsedTime();

    for (let i = 0; i < COUNT; i++) {
      if (!reducedMotion) {
        positions[i * 3]     += velocities[i * 3] + Math.sin(t + i) * 0.002;
        positions[i * 3 + 1] += velocities[i * 3 + 1];

        if (positions[i * 3 + 1] > viewport.height / 2 + 2) {
          positions[i * 3 + 1] = -viewport.height / 2 - 2;
          positions[i * 3]     = (Math.random() - 0.5) * viewport.width;
        }
      }

      dummy.position.set(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      );
      dummy.scale.setScalar(scales[i]);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  resize();
  seedParticles();
  animate();

  // Track hero size (responsive + zoom)
  const ro = new ResizeObserver(resize);
  ro.observe(hero);

  // Pause render when tab hidden — small power win
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clock.stop(); else clock.start();
  });
}
