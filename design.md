# Design System & Code Blueprint: Modern Eastern Heritage (新中式)
# Specification Version: 2.0 (Integrated Code Bundle)

## 1. Visual Identity & Design Principles
*   **Balance & Symmetry (中正):** Layouts must feel grounded and stable. Use centered elements or balanced grids inspired by classical architecture.
*   **Negative Space (留白 - Liu Bai):** Prioritize generous padding and large empty spaces. Space is an active design element, simulating an ink-wash painting canvas.
*   **Subtle Contrast:** Soft, warm rice-paper tones paired with deep ink grays. Avoid harsh pure blacks or neon gradients.

## 2. Color Palette (中国传统色)
### Primary & Backgrounds
*   `bg-primary`: `#FCF9F2` (Warm Rice Paper / 宣纸白) - Soft, organic cream background.
*   `text-primary`: `#2B2B2B` (Pine Smoke / 松烟墨) - Highly readable, low-contrast dark charcoal ink.
*   `text-secondary`: `#7A7A7A` (Misty Rain / 暮云灰) - Mid-tone gray for metadata and subtitles.

### Accent Colors
*   `accent-red`: `#B22222` (Vermilion / 朱砂红) - Traditional lacquer red for primary actions and stamps.
*   `accent-jade`: `#437C6E` (Imperial Jade / 翡翠绿) - Muted deep green for auxiliary visual hints.

## 3. Typography & Hierarchy
### Fonts
*   **Display & Headings (English):** "Playfair Display", "Cormorant Garamond", serif.
*   **Display & Headings (Chinese):** "Noto Serif SC", "STSong", "Songti SC", serif.
*   **Body Text (Universal):** "Inter", "Noto Sans SC", sans-serif (clean, lightweight 1.5px strokes).

### Hierarchy Scale
*   `h1`: `font-serif`, size `2.5rem` to `4rem`, tracking `0.05em` (Elegant, widely spaced).
*   `body`: `font-sans`, size `1rem`, line-height `1.75` (Extra room for the "Liu Bai" layout strategy).

## 4. UI Layout, Borders & Spacing
*   **Container Width:** Max-width `1200px` for desktop layouts.
*   **Borders:** `1px solid rgba(43, 43, 43, 0.1)` (Ultra-thin ink line effect).
*   **Border Radius:** Strict `0px` or a tight `2px` maximum. Round bubble elements (`rounded-lg`) are forbidden.
*   **Dividers:** Use thin lines with a center-aligned decorative diamond symbol (`◆`).

## 5. 3D Animation & Motion System
*   **The Flow of Qi:** UI animations must feel calm and deliberate. Use the easing curve `cubic-bezier(0.25, 1, 0.5, 1)`.
*   **3D Hero Element:** An interactive WebGL particle system simulating floating, dissipating ink smoke (松烟墨).

---

## 6. Implementation Code (`HeroSection.jsx`)

```jsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Particle System mimicking floating, dissipating ink smoke (松烟墨)
function InkSmokeParticles({ count = 120 }) {
  const meshRef = useRef();
  const { viewport } = useThree();

  const [positions, velocities, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const scl = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * viewport.width * 1.2;
      pos[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 1.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
      vel[i * 3] = (Math.random() - 0.5) * 0.01;
      vel[i * 3 + 1] = Math.random() * 0.015 + 0.005;
      vel[i * 3 + 2] = 0;
      scl[i] = Math.random() * 1.5 + 0.5;
    }
    return [pos, vel, scl];
  }, [count, viewport]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      positions[i * 3] += velocities[i * 3] + Math.sin(time + i) * 0.002;
      positions[i * 3 + 1] += velocities[i * 3 + 1];

      if (positions[i * 3 + 1] > viewport.height / 2 + 2) {
        positions[i * 3 + 1] = -viewport.height / 2 - 2;
        positions[i * 3] = (Math.random() - 0.5) * viewport.width;
      }

      dummy.position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
      dummy.scale.setScalar(scales[i]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <circleGeometry args={[0.3, 8]} />
      <meshBasicMaterial
        color="#2B2B2B"
        transparent
        opacity={0.07}
        blending={THREE.NormalBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
}

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-[#FCF9F2] overflow-hidden flex flex-col justify-between font-serif text-[#2B2B2B]">

      {/* Background 3D Canvas Context */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <InkSmokeParticles count={150} />
        </Canvas>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 w-full max-w-[1200px] mx-auto px-8 py-6 flex justify-between items-center border-b border-[#2B2B2B]/10">
        <div className="text-xl font-semibold tracking-[0.2em] flex items-center gap-2">
          <span>東方美學</span>
          <span className="text-xs text-[#B22222] border border-[#B22222] px-1 py-0.5 font-sans tracking-normal">STUDIO</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-sans tracking-widest text-[#7A7A7A]">
          <a href="#heritage" className="hover:text-[#2B2B2B] transition-colors duration-300">HERITAGE</a>
          <a href="#collection" className="hover:text-[#2B2B2B] transition-colors duration-300">COLLECTION</a>
          <a href="#philosophy" className="hover:text-[#2B2B2B] transition-colors duration-300">PHILOSOPHY</a>
        </div>
        <div>
          <button className="px-5 py-2 text-xs font-sans tracking-widest border border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-[#FCF9F2] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
            ENTER
          </button>
        </div>
      </nav>

      {/* Hero Layout Content */}
      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-8 flex-1 flex flex-col md:flex-row justify-center items-start md:items-center py-20 gap-12">
        <div className="flex flex-col max-w-xl animate-fade-in-up">
          <span className="text-[#B22222] font-sans font-medium tracking-[0.4em] text-xs mb-4">NEW EASTERN MINIMALISM</span>
          <h1 className="text-4xl md:text-6xl font-normal leading-[1.3] tracking-[0.05em] text-[#2B2B2B] mb-6">
            Where Poetry <br />Meets Digital Space.
          </h1>
          <p className="font-sans text-sm text-[#7A7A7A] leading-[1.8] max-w-md mb-8">
            Honoring clean geometries, rich lacquer textures, and infinite negative space. Structured layout templates crafted for seamless execution inside AI-driven IDE workspaces.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-[#B22222] text-[#FCF9F2] font-sans text-xs tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#911B1B]">
              EXPLORE REPOS
            </button>
            <button className="px-8 py-4 border border-[#2B2B2B]/20 font-sans text-xs tracking-[0.2em] text-[#2B2B2B] transition-all duration-300 hover:border-[#2B2B2B] hover:bg-[#2B2B2B]/5">
              DOCUMENTATION
            </button>
          </div>
        </div>

        {/* Traditional Geometric Motif Accent */}
        <div className="md:ml-auto flex flex-row md:flex-col items-end gap-6 text-[#2B2B2B]/40 select-none">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-sans tracking-[0.5em] uppercase text-center transform rotate-90 md:rotate-0 mb-2">SEQUENCE</span>
            <div className="w-[1px] h-24 bg-[#2B2B2B]/10"></div>
          </div>
          <div className="border border-[#2B2B2B]/20 p-4 text-xs font-normal tracking-[0.3em] backdrop-blur-sm">
            <div className="text-[#B22222] font-semibold text-center mb-1">◆</div>
            <div>始于东方</div>
            <div className="mt-1 text-[9px] font-sans tracking-normal opacity-60 text-center">01 // 26</div>
          </div>
        </div>
      </main>

      {/* Footer Meta */}
      <footer className="relative z-10 w-full max-w-[1200px] mx-auto px-8 py-6 flex justify-between items-center border-t border-[#2B2B2B]/10 text-[10px] font-sans tracking-[0.2em] text-[#7A7A7A]">
        <div>© 2026 HERITAGE DESIGN SYSTEM</div>
        <div className="flex gap-6">
          <span>SHANSHUI SHADER V1.0</span>
          <span>LIU BAI LAYOUT</span>
        </div>
      </footer>
    </div>
  );
}
```
