// Creators Touch home — motion + 3D engine (port of the design's logic layer).
// Usage: const cleanup = initHomeFX({ logoSrc }); return cleanup from useEffect.
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function initHomeFX(opts = {}) {
  const logoSrc = opts.logoSrc || "/assets/images/creator_touch.png";
  const cleanups = [];
  const on = (t, ev, fn, o) => { t.addEventListener(ev, fn, o); cleanups.push(() => t.removeEventListener(ev, fn, o)); };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hoverFine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const revealAll = () => document.querySelectorAll("[data-reveal],[data-hl],[data-cl],[data-stagger]>*")
    .forEach(el => { el.style.opacity = ""; el.style.transform = ""; });
  if (reduced) { revealAll(); return () => {}; }

  let raf = 0, mx, my, rx = -100, ry = -100, sy = scrollY, syT = scrollY, vel = 0;
  let gl = null, zones = null, zonesDirty = true;
  let curDot = null, curRing = null, curLab = null, indPrev = null, pre = null;

  /* ---------- videos: React drops `muted`, retry play ---------- */
  const kick = () => document.querySelectorAll("video").forEach(v => {
    v.muted = true; v.defaultMuted = true;
    if (v.paused) v.play().catch(() => {});
  });
  kick();
  on(window, "scroll", kick, { passive: true, once: true });
  on(window, "pointerdown", kick, { once: true });
  on(document, "visibilitychange", kick);

  /* ---------- reveals ---------- */
  document.querySelectorAll("[data-hl],[data-cl]").forEach(el => {
    el.style.transform = "translateY(114%)";
    el.style.transition = "transform 1.05s cubic-bezier(.19,1,.22,1)";
  });
  const items = [];
  document.querySelectorAll("[data-reveal]").forEach(el => {
    el.style.opacity = "0"; el.style.transform = "translateY(34px)";
    el.style.transition = "opacity .9s cubic-bezier(.22,1,.36,1), transform .9s cubic-bezier(.22,1,.36,1)";
    el.style.transitionDelay = parseInt(el.dataset.revealDelay || "0", 10) + "ms";
    items.push(el);
  });
  document.querySelectorAll("[data-stagger]").forEach(grid => {
    [...grid.children].forEach((el, i) => {
      el.style.opacity = "0"; el.style.transform = "translateY(22px)";
      el.style.transition = "opacity .7s ease, transform .7s cubic-bezier(.22,1,.36,1), background .25s ease";
      el.style.transitionDelay = Math.min(i * 28, 600) + "ms";
      items.push(el);
    });
  });
  const io = new IntersectionObserver(ens => ens.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.style.opacity = "1"; en.target.style.transform = "translateY(0)";
    io.unobserve(en.target);
  }), { threshold: 0.12 });
  items.forEach(el => io.observe(el));
  cleanups.push(() => io.disconnect());
  const clParents = [...document.querySelectorAll("[data-cl]")].map(el => el.parentElement);
  const io2 = new IntersectionObserver(ens => ens.forEach(en => {
    if (!en.isIntersecting) return;
    const inner = en.target.querySelector("[data-cl]");
    const i = clParents.indexOf(en.target);
    if (inner) setTimeout(() => { inner.style.transform = "translateY(0)"; }, 60 + Math.max(0, i) * 110);
    io2.unobserve(en.target);
  }), { threshold: 0.3 });
  clParents.forEach(p => p && io2.observe(p));
  cleanups.push(() => io2.disconnect());
  const safetyT = setTimeout(() => revealAll(), 6000);
  cleanups.push(() => clearTimeout(safetyT));

  /* ---------- counters ---------- */
  const runCounters = () => document.querySelectorAll("[data-count]").forEach(el => {
    const target = parseFloat(el.dataset.count), suf = el.dataset.suffix || "", pad = parseInt(el.dataset.pad || "0", 10);
    const t0 = performance.now(), D = 1400;
    const step = now => {
      const p = Math.min(1, (now - t0) / D), v = Math.round((1 - Math.pow(1 - p, 3)) * target);
      el.textContent = (pad ? String(v).padStart(pad, "0") : v) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });

  /* ---------- preloader ---------- */
  const afterPreloader = () => {
    document.querySelectorAll("[data-hl]").forEach((el, i) => {
      setTimeout(() => { el.style.transform = "translateY(0)"; }, 80 + i * 110);
    });
    runCounters();
    // pixelation reveal — fixed canvas pinned over the hero h1
    const h1 = document.querySelector("[data-hero-title]");
    if (h1) {
      const rect = h1.getBoundingClientRect();
      const W = Math.round(rect.width);
      const H = Math.round(rect.height);
      if (W > 0 && H > 0) {
        const cv = document.createElement("canvas");
        cv.setAttribute("aria-hidden", "true");
        cv.width = W;
        cv.height = H;
        cv.style.cssText = "position:fixed;left:" + rect.left + "px;top:" + rect.top + "px;width:" + W + "px;height:" + H + "px;pointer-events:none;z-index:9998";
        document.body.appendChild(cv);
        cleanups.push(() => cv.remove());
        const ctx = cv.getContext("2d");
        const BLOCK = 28;
        const cols = Math.ceil(W / BLOCK) + 1;
        const rows = Math.ceil(H / BLOCK) + 1;
        const blocks = [];
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            blocks.push({ c, r, t: c / cols + r / rows * 0.6 + Math.random() * 0.4 });
          }
        }
        const tMax = blocks.reduce((m, b) => b.t > m ? b.t : m, 0);
        blocks.forEach(b => { b.t /= tMax; });
        ctx.fillStyle = "#08090A";
        ctx.fillRect(0, 0, W, H);
        const DUR = 1050;
        const t0 = performance.now();
        const frame = (now) => {
          const p = Math.min(1, (now - t0) / DUR);
          ctx.clearRect(0, 0, W, H);
          let any = false;
          blocks.forEach(({ c, r, t }) => {
            const bp = Math.max(0, Math.min(1, (p - t * 0.7) / 0.3));
            if (bp >= 1) return;
            any = true;
            const s = BLOCK * (1 - bp * bp);
            const cx = c * BLOCK + BLOCK / 2;
            const cy = r * BLOCK + BLOCK / 2;
            ctx.fillStyle = "#08090A";
            ctx.fillRect(cx - s / 2, cy - s / 2, s, s);
          });
          if (any) requestAnimationFrame(frame);
          else cv.remove();
        };
        requestAnimationFrame(frame);
      }
    }
  };
  const initPreloader = () => {
    document.documentElement.style.overflow = "hidden";
    pre = document.createElement("div");
    pre.setAttribute("aria-hidden", "true");
    pre.style.cssText = "position:fixed;inset:0;z-index:9999;background:#08090A;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;transition:transform .9s cubic-bezier(.76,0,.24,1)";
    const img = document.createElement("img");
    img.src = logoSrc;
    img.style.cssText = "width:52px;height:52px;animation:ct-pulse 1.2s ease-in-out infinite";
    const num = document.createElement("div");
    num.style.cssText = "font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-size:clamp(72px,12vw,130px);line-height:1;color:#F4F3F1;letter-spacing:-0.03em";
    num.textContent = "0";
    const lab = document.createElement("div");
    lab.style.cssText = "font-family:'Geist Mono',monospace;font-size:10px;letter-spacing:.22em;color:rgba(244,243,241,.4);text-transform:uppercase";
    lab.textContent = "Creators Touch Global";
    const bar = document.createElement("div");
    bar.style.cssText = "position:absolute;left:0;bottom:0;height:2px;width:0%;background:linear-gradient(90deg,#cc0066,#0977a8);transition:width .1s linear";
    pre.append(img, num, lab, bar);
    document.body.appendChild(pre);
    const t0 = performance.now(), D = 1250;
    const ease = x => 1 - Math.pow(1 - x, 3);
    let fin = false;
    const finish = () => {
      if (fin) return; fin = true;
      num.textContent = "100"; bar.style.width = "100%";
      setTimeout(() => {
        if (!pre) return;
        pre.style.transform = "translateY(-101%)";
        document.documentElement.style.overflow = "";
        afterPreloader();
        setTimeout(() => { pre && pre.remove(); pre = null; }, 950);
      }, 120);
    };
    const tick = now => {
      if (fin) return;
      const p = Math.min(1, (now - t0) / D), v = Math.round(ease(p) * 100);
      num.textContent = v; bar.style.width = v + "%";
      if (p < 1) requestAnimationFrame(tick);
      else finish();
    };
    requestAnimationFrame(tick);
    const ft = setTimeout(finish, D + 700); // rAF stalls in background tabs
    cleanups.push(() => { clearTimeout(ft); document.documentElement.style.overflow = ""; pre && pre.remove(); pre = null; });
  };
  initPreloader();

  /* ---------- desktop-only pointer FX ---------- */
  if (hoverFine) {
    curDot = document.createElement("div");
    curDot.style.cssText = "position:fixed;left:0;top:0;width:6px;height:6px;border-radius:50%;background:#F4F3F1;z-index:9000;pointer-events:none;mix-blend-mode:difference;transform:translate(-100px,-100px)";
    curRing = document.createElement("div");
    curRing.style.cssText = "position:fixed;left:0;top:0;width:36px;height:36px;border-radius:50%;border:1px solid rgba(244,243,241,.5);z-index:9000;pointer-events:none;mix-blend-mode:difference;transform:translate(-100px,-100px);transition:width .25s ease,height .25s ease,border-color .25s ease,background .25s ease;display:flex;align-items:center;justify-content:center;overflow:hidden";
    curLab = document.createElement("span");
    curLab.style.cssText = "font-family:'Geist Mono',monospace;font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:#F4F3F1;white-space:nowrap;opacity:0;transition:opacity .2s ease;padding:0 8px;text-align:center";
    curRing.appendChild(curLab);
    document.body.append(curDot, curRing);
    cleanups.push(() => { curDot.remove(); curRing.remove(); });
    on(window, "mousemove", e => { mx = e.clientX; my = e.clientY; });
    on(document, "mouseover", e => {
      const labelled = e.target.closest && e.target.closest("[data-cursor-text]");
      const hit = e.target.closest && e.target.closest("a,button,[data-magnetic]");
      if (labelled) {
        curRing.style.mixBlendMode = "normal";
        curRing.style.width = "88px"; curRing.style.height = "88px";
        curRing.style.background = "rgba(8,9,10,.85)"; curRing.style.borderColor = "rgba(255,61,143,.7)";
        curLab.textContent = labelled.getAttribute("data-cursor-text") || "";
        curLab.style.opacity = "1";
        curDot.style.opacity = "0";
      } else {
        curRing.style.mixBlendMode = "difference";
        curLab.style.opacity = "0"; curLab.textContent = "";
        curDot.style.opacity = "1";
        if (hit) { curRing.style.width = "64px"; curRing.style.height = "64px"; curRing.style.background = "rgba(255,61,143,.14)"; curRing.style.borderColor = "rgba(255,61,143,.6)"; }
        else { curRing.style.width = "36px"; curRing.style.height = "36px"; curRing.style.background = "transparent"; curRing.style.borderColor = "rgba(244,243,241,.5)"; }
      }
    });
    document.querySelectorAll("[data-magnetic]").forEach(el => {
      el.style.transition = (el.style.transition ? el.style.transition + "," : "") + "transform .35s cubic-bezier(.22,1,.36,1)";
      on(el, "mousemove", e => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * 0.28}px,${dy * 0.34}px)`;
      });
      on(el, "mouseleave", () => { el.style.transform = "translate(0,0)"; });
    });
    document.querySelectorAll("[data-roll]").forEach(el => {
      const inner = el.querySelector("[data-roll-inner]");
      if (!inner) return;
      on(el, "mouseenter", () => { inner.style.transform = "translateY(-50%)"; });
      on(el, "mouseleave", () => { inner.style.transform = "translateY(0)"; });
    });
    document.querySelectorAll("[data-srow]").forEach(row => {
      const title = row.querySelector("[data-stitle]");
      if (!title) return;
      on(row, "mouseenter", () => { title.style.transform = "translateX(16px)"; title.style.color = "#FF3D8F"; });
      on(row, "mouseleave", () => { title.style.transform = "translateX(0)"; title.style.color = ""; });
    });
    // industries: floating photo preview
    const rows = document.querySelectorAll("[data-irow]");
    if (rows.length) {
      indPrev = document.createElement("div");
      indPrev.setAttribute("aria-hidden", "true");
      indPrev.style.cssText = "position:fixed;left:0;top:0;width:320px;height:220px;border-radius:16px;overflow:hidden;z-index:80;pointer-events:none;opacity:0;transform:translate(-50%,-60%) scale(.88) rotate(-4deg);transition:opacity .3s ease,transform .5s cubic-bezier(.22,1,.36,1);box-shadow:0 30px 80px rgba(0,0,0,.55)";
      const pimg = document.createElement("img");
      pimg.style.cssText = "width:100%;height:100%;object-fit:cover;display:block";
      indPrev.appendChild(pimg);
      document.body.appendChild(indPrev);
      cleanups.push(() => indPrev.remove());
      rows.forEach(row => {
        const title = row.querySelector("[data-ititle]");
        on(row, "mouseenter", () => {
          const src = row.getAttribute("data-img");
          if (src && pimg.getAttribute("src") !== src) pimg.src = src;
          indPrev.style.opacity = "1";
          indPrev.style.transform = "translate(-50%,-60%) scale(1) rotate(0deg)";
          if (title) { title.style.transform = "translateX(14px)"; title.style.color = "#29A8DC"; }
        });
        on(row, "mouseleave", () => {
          indPrev.style.opacity = "0";
          indPrev.style.transform = "translate(-50%,-60%) scale(.88) rotate(-4deg)";
          if (title) { title.style.transform = ""; title.style.color = ""; }
        });
      });
    }
  }

  /* ---------- reviews rail pauses on hover + touch ---------- */
  const track = document.querySelector("[data-rev-track]");
  if (track) {
    on(track, "mouseenter", () => { track.style.animationPlayState = "paused"; });
    on(track, "mouseleave", () => { track.style.animationPlayState = "running"; });
    on(track, "touchstart", () => { track.style.animationPlayState = "paused"; }, { passive: true });
    on(track, "touchend", () => { setTimeout(() => { track.style.animationPlayState = "running"; }, 1800); });
  }

  /* ---------- project card 3D tilt ---------- */
  if (hoverFine) {
    document.querySelectorAll(".ct-proj-card").forEach(card => {
      on(card, "mousemove", e => {
        const r = card.getBoundingClientRect();
        const dx = (e.clientX - r.left) / r.width - 0.5;
        const dy = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateY(${dx * 11}deg) rotateX(${-dy * 7}deg) scale(1.028)`;
        card.style.transition = "transform .12s ease";
      });
      on(card, "mouseleave", () => {
        card.style.transform = "";
        card.style.transition = "transform .55s cubic-bezier(.22,1,.36,1)";
      });
    });
  }

  /* ---------- 3D scene: logo mark + dust + globe ---------- */
  const buildGL = () => {
    try {
      const wrap = document.createElement("div");
      wrap.setAttribute("aria-hidden", "true");
      wrap.style.cssText = "position:fixed;inset:0;z-index:0;pointer-events:none";
      const glowA = document.createElement("div");
      glowA.style.cssText = "position:absolute;right:-18vw;top:-22vh;width:60vw;height:60vw;border-radius:50%;background:radial-gradient(circle,rgba(204,0,102,.14),transparent 62%);filter:blur(10px)";
      const glowB = document.createElement("div");
      glowB.style.cssText = "position:absolute;left:-20vw;bottom:-25vh;width:65vw;height:65vw;border-radius:50%;background:radial-gradient(circle,rgba(9,119,168,.13),transparent 62%);filter:blur(10px)";
      wrap.append(glowA, glowB);
      document.body.insertBefore(wrap, document.body.firstChild.nextSibling);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setClearColor(0x000000, 0);
      const isMob = innerWidth < 761;
      renderer.setPixelRatio(Math.min(devicePixelRatio, isMob ? 1.5 : 2));
      renderer.setSize(innerWidth, innerHeight);
      renderer.domElement.style.cssText = "position:absolute;inset:0;width:100%;height:100%";
      wrap.appendChild(renderer.domElement);
      cleanups.push(() => { renderer.dispose(); wrap.remove(); });
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 50);
      camera.position.z = 5.2;
      // 3D brand mark — GLB model with dual-color glass shader (no lights needed)
      const mkGlass = () => new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
        uniforms: { uColorA: { value: new THREE.Color("#ff2f92") }, uColorB: { value: new THREE.Color("#2fb6ea") }, uOpacity: { value: 0.9 } },
        vertexShader: "varying vec3 vN;varying vec3 vP;varying float vX;void main(){vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.0);vP=mv.xyz;vX=position.x;gl_Position=projectionMatrix*mv;}",
        fragmentShader: "uniform vec3 uColorA;uniform vec3 uColorB;uniform float uOpacity;varying vec3 vN;varying vec3 vP;varying float vX;void main(){vec3 V=normalize(-vP);float fr=pow(1.0-abs(dot(normalize(vN),V)),1.7);vec3 uColor=mix(uColorA,uColorB,clamp(vX*1.5+0.5,0.0,1.0));gl_FragColor=vec4(uColor*(0.2+fr*1.75)+vec3(0.55)*fr*fr*0.5,uOpacity*(0.1+fr*0.95));}"
      });
      const logo = new THREE.Group();
      scene.add(logo);
      const handMats = [];
      const gltfLoader = new GLTFLoader();
      gltfLoader.load("/assets/images/logo2.glb", gltf => {
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        model.position.sub(center);
        if (maxDim > 0) model.scale.setScalar(2.2 / maxDim);
        model.traverse(child => {
          if (child.isMesh) {
            const mat = mkGlass();
            child.material = mat;
            handMats.push(mat);
          }
        });
        logo.add(model);
      }, undefined, err => console.warn("GLB load error:", err));
      // dust
      const pGeo = new THREE.BufferGeometry();
      const N = 900, pos = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 11;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 7;
        pos[i * 3 + 2] = -2.5 + Math.random() * 3.2;
      }
      pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const dustA = new THREE.Points(pGeo, new THREE.PointsMaterial({ color: 0xf4f3f1, size: 0.014, transparent: true, opacity: 0.3, depthWrite: false }));
      const dustB = new THREE.Points(pGeo.clone(), new THREE.PointsMaterial({ color: 0xff2f92, size: 0.02, transparent: true, opacity: 0.22, depthWrite: false }));
      dustB.rotation.z = 2.1;
      scene.add(dustA, dustB);
      // dot globe with Vijayawada marker + arcs
      const globe = new THREE.Group();
      const gN = 800, gPos = new Float32Array(gN * 3);
      for (let i = 0; i < gN; i++) {
        const y = 1 - (i / (gN - 1)) * 2, r = Math.sqrt(1 - y * y), th = i * 2.39996;
        gPos[i * 3] = Math.cos(th) * r; gPos[i * 3 + 1] = y; gPos[i * 3 + 2] = Math.sin(th) * r;
      }
      const gGeo = new THREE.BufferGeometry();
      gGeo.setAttribute("position", new THREE.BufferAttribute(gPos, 3));
      const gPtsMat = new THREE.PointsMaterial({ color: 0x2fb6ea, size: 0.018, transparent: true, opacity: 0.55, depthWrite: false });
      globe.add(new THREE.Points(gGeo, gPtsMat));
      const gWireMat = new THREE.MeshBasicMaterial({ color: 0xf4f3f1, wireframe: true, transparent: true, opacity: 0.05, depthWrite: false });
      globe.add(new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), gWireMat));
      const arcMats = [];
      const surf = (lat, lon) => {
        const la = lat * Math.PI / 180, lo = lon * Math.PI / 180;
        return new THREE.Vector3(Math.cos(la) * Math.cos(lo), Math.sin(la), -Math.cos(la) * Math.sin(lo));
      };
      const vjw = surf(16.5, 80.6);
      [[51.5, -0.1], [25.2, 55.3], [1.35, 103.8], [40.7, -74.0]].forEach(([la, lo], i) => {
        const b = surf(la, lo);
        const mid = vjw.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(1.45);
        const curve = new THREE.QuadraticBezierCurve3(vjw, mid, b);
        const am = new THREE.MeshBasicMaterial({ color: i % 2 ? 0x2fb6ea : 0xff2f92, transparent: true, opacity: 0.6, depthWrite: false });
        arcMats.push(am);
        globe.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.006, 6, false), am));
      });
      const mkMat = new THREE.MeshBasicMaterial({ color: 0x16b016, transparent: true, opacity: 0.95 });
      const marker = new THREE.Mesh(new THREE.SphereGeometry(0.035, 16, 16), mkMat);
      marker.position.copy(vjw);
      globe.add(marker);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x16b016, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false });
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.045, 0.055, 32), ringMat);
      ring.position.copy(vjw);
      ring.lookAt(vjw.clone().multiplyScalar(2));
      globe.add(ring);
      globe.visible = false;
      scene.add(globe);
      const globeMats = [
        { m: gPtsMat, base: 0.55 }, { m: gWireMat, base: 0.05 },
        { m: mkMat, base: 0.95 }, ...arcMats.map(m => ({ m, base: 0.6 }))
      ];
      gl = { renderer, scene, camera, logo, handMats, dustA, dustB, globe, globeMats, ring, ringMat, time: 0 };
      on(window, "resize", () => {
        renderer.setSize(innerWidth, innerHeight);
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
        zonesDirty = true;
      });
    } catch (e) { gl = null; /* WebGL unavailable — glows alone remain */ }
  };
  buildGL();

  /* ---------- scroll zone table: where the 3D layer sits per section ---------- */
  const ZONES = [
    { id: "top", fx: 0.58, fy: 0.04, s: 1.05, op: 0.95, gop: 0, gx: -0.6, gs: 0.7 },
    { id: "studio", fx: 0.55, fy: -0.15, s: 0.4, op: 0.35, gop: 0.9, gx: -0.55, gs: 0.95 },
    { id: "services", fx: 0.6, fy: 0, s: 0.55, op: 0.72, gop: 0, gx: -0.6, gs: 0.8 },
    { id: "work", fx: 0.45, fy: 0.08, s: 0.55, op: 0.45, gop: 0, gx: -0.6, gs: 0.8 },
    { id: "platforms", fx: 0.55, fy: 0.1, s: 0.72, op: 0.75, gop: 0, gx: -0.6, gs: 0.8 },
    { id: "industries", fx: -0.55, fy: 0, s: 0.62, op: 0.6, gop: 0, gx: 0.6, gs: 0.8 },
    { id: "reviews", fx: 0.5, fy: 0, s: 0.78, op: 0.35, gop: 0.55, gx: -0.5, gs: 0.85 },
    { id: "process", fx: -0.55, fy: 0, s: 0.68, op: 0.85, gop: 0, gx: 0.55, gs: 0.8 },
    { id: "contact", fx: 0.08, fy: -0.06, s: 1.32, op: 0.5, gop: 0.4, gx: 0.5, gs: 1.05 }
  ];
  const computeZones = () => {
    zones = ZONES.map(z => {
      const el = document.getElementById(z.id);
      return el ? { ...z, center: el.offsetTop + el.offsetHeight / 2 } : null;
    }).filter(Boolean);
    zonesDirty = false;
  };

  const tickGL = dt => {
    const g = gl;
    if (zonesDirty) computeZones();
    const zs = zones || [];
    if (!zs.length) return;
    g.time += dt;
    const c = sy + innerHeight / 2;
    let a = zs[0], b = zs[0], t = 0;
    if (c >= zs[zs.length - 1].center) { a = b = zs[zs.length - 1]; }
    else if (c > zs[0].center) for (let i = 0; i < zs.length - 1; i++) {
      if (c >= zs[i].center && c <= zs[i + 1].center) {
        a = zs[i]; b = zs[i + 1];
        t = (c - a.center) / (b.center - a.center);
        t = t * t * (3 - 2 * t);
        break;
      }
    }
    const L = (x, y) => x + (y - x) * t;
    const halfH = Math.tan((42 * Math.PI) / 360) * 5.2;
    const halfW = halfH * g.camera.aspect;
    const mxn = mx !== undefined ? (mx / innerWidth - 0.5) : 0;
    const myn = my !== undefined ? (my / innerHeight - 0.5) : 0;
    const nar = g.camera.aspect < 0.8 ? 0.62 : (g.camera.aspect < 1.1 ? 0.8 : 1);
    const tm = g.time;
    const op = L(a.op, b.op) * (nar < 1 ? 0.8 : 1);
    const s = L(a.s, b.s) * nar * 0.52;
    g.logo.position.x = L(a.fx, b.fx) * halfW + mxn * 0.3;
    g.logo.position.y = L(a.fy, b.fy) * halfH - myn * 0.25;
    g.logo.scale.setScalar(s);
    g.logo.rotation.set(
      0.18 + Math.sin(tm * 0.26) * 0.1 - myn * 0.2,
      Math.sin(tm * 0.35) * 0.3 + mxn * 0.35,
      Math.sin(tm * 0.15) * 0.1
    );
    g.handMats.forEach(m => { m.uniforms.uOpacity.value = op; });
    g.dustA.rotation.y = tm * 0.008 + mxn * 0.05;
    g.dustA.position.y = -sy * 0.00035;
    g.dustB.rotation.y = -tm * 0.006 + mxn * 0.03;
    g.dustB.position.y = -sy * 0.00055;
    const gop = L(a.gop, b.gop);
    g.globe.visible = gop > 0.02;
    if (g.globe.visible) {
      g.globe.position.x = L(a.gx, b.gx) * halfW - mxn * 0.2;
      g.globe.position.y = -myn * 0.15;
      g.globe.scale.setScalar(L(a.gs, b.gs) * nar);
      g.globe.rotation.y = tm * 0.14 + sy * 0.0004;
      g.globe.rotation.x = 0.35;
      g.globeMats.forEach(o => { o.m.opacity = o.base * gop; });
      const pu = (tm % 2) / 2;
      g.ring.scale.setScalar(1 + pu * 2.4);
      g.ringMat.opacity = (1 - pu) * 0.8 * gop;
    }
    g.renderer.render(g.scene, g.camera);
  };

  /* ---------- master frame loop ---------- */
  on(window, "scroll", () => { syT = scrollY; }, { passive: true });
  const ro = new ResizeObserver(() => { zonesDirty = true; });
  ro.observe(document.body);
  cleanups.push(() => ro.disconnect());
  const heroTitle = document.querySelector("[data-hero-title]");
  const skew = document.querySelector("[data-skew]");
  const plxEls = [...document.querySelectorAll("[data-plx]")];
  let t0 = performance.now();
  const loop = now => {
    raf = requestAnimationFrame(loop);
    const dt = Math.min(0.05, (now - t0) / 1000); t0 = now;
    const prevY = sy;
    sy += (syT - sy) * 0.09;
    vel = vel * 0.9 + (sy - prevY) * 0.1;
    if (curDot && mx !== undefined) {
      rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
      curDot.style.transform = `translate(${mx - 3}px,${my - 3}px)`;
      const rw = curRing.offsetWidth / 2;
      curRing.style.transform = `translate(${rx - rw}px,${ry - rw}px)`;
      if (indPrev) { indPrev.style.left = rx + "px"; indPrev.style.top = (ry - 24) + "px"; }
    }
    if (heroTitle) heroTitle.style.transform = `translateY(${sy * 0.16}px)`;
    if (skew) skew.style.transform = `skewX(${Math.max(-7, Math.min(7, vel * 0.35))}deg)`;
    const vh = innerHeight;
    plxEls.forEach(el => {
      const r = el.getBoundingClientRect();
      const cur = el._plxY || 0;
      const off = (r.top - cur) + r.height / 2 - vh / 2;
      if (Math.abs(off) > vh * 1.6) return;
      const y = Math.max(-14, Math.min(14, -off * parseFloat(el.dataset.plx)));
      el._plxY = y;
      el.style.transform = `translateY(${y}px)`;
    });
    if (gl) tickGL(dt);
  };
  raf = requestAnimationFrame(loop);
  cleanups.push(() => cancelAnimationFrame(raf));

  return () => cleanups.forEach(fn => { try { fn(); } catch (e) {} });
}
