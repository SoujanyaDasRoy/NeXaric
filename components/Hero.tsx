"use client";

import Link from "next/link";
import { type CSSProperties, type PointerEvent, useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import * as THREE from "three";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const highlights = ["SEO-ready websites", "Product UI design", "Conversion-focused growth"];

function AmbientScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.05, 5.8);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    scene.add(group);

    const particleCount = 920;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i += 1) {
      const index = i * 3;
      particlePositions[index] = (Math.random() - 0.5) * 12.5;
      particlePositions[index + 1] = (Math.random() - 0.5) * 6.2;
      particlePositions[index + 2] = -0.4 - Math.random() * 8.4;
      particleSpeeds[i] = 0.0025 + Math.random() * 0.008;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3),
    );

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.023,
        transparent: true,
        opacity: 0.86,
        depthWrite: false,
      }),
    );
    group.add(particles);

    const galaxyGeometry = new THREE.BufferGeometry();
    const galaxyCount = 320;
    const galaxyPositions = new Float32Array(galaxyCount * 3);
    for (let i = 0; i < galaxyCount; i += 1) {
      const index = i * 3;
      const spread = Math.random();
      galaxyPositions[index] = (Math.random() - 0.5) * 10.8;
      galaxyPositions[index + 1] =
        (Math.random() - 0.5) * (0.42 + spread * 0.7) + 0.42;
      galaxyPositions[index + 2] = -2.2 - Math.random() * 4.8;
    }
    galaxyGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(galaxyPositions, 3),
    );
    const galaxy = new THREE.Points(
      galaxyGeometry,
      new THREE.PointsMaterial({
        color: 0x9ec5ff,
        size: 0.034,
        transparent: true,
        opacity: 0.34,
        depthWrite: false,
      }),
    );
    galaxy.rotation.z = -0.17;
    group.add(galaxy);

    const blueParticleGeometry = new THREE.BufferGeometry();
    const blueParticleCount = 120;
    const blueParticlePositions = new Float32Array(blueParticleCount * 3);
    for (let i = 0; i < blueParticleCount; i += 1) {
      const index = i * 3;
      blueParticlePositions[index] = (Math.random() - 0.5) * 10;
      blueParticlePositions[index + 1] = (Math.random() - 0.5) * 4.8;
      blueParticlePositions[index + 2] = -0.6 - Math.random() * 6.2;
    }
    blueParticleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(blueParticlePositions, 3),
    );
    const blueParticles = new THREE.Points(
      blueParticleGeometry,
      new THREE.PointsMaterial({
        color: 0x5795fe,
        size: 0.044,
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
      }),
    );
    group.add(blueParticles);

    const material = new THREE.LineBasicMaterial({
      color: 0x5795fe,
      transparent: true,
      opacity: 0.18,
    });

    const constellationMaterial = new THREE.LineBasicMaterial({
      color: 0xd8e7ff,
      transparent: true,
      opacity: 0.18,
    });

    const constellationGeometry = new THREE.BufferGeometry();
    const constellationPositions: number[] = [];
    for (let i = 0; i < 24; i += 1) {
      const baseX = -5 + Math.random() * 10;
      const baseY = -1.8 + Math.random() * 4.2;
      const baseZ = -2.2 - Math.random() * 3.8;
      constellationPositions.push(
        baseX,
        baseY,
        baseZ,
        baseX + 0.24 + Math.random() * 0.72,
        baseY + (Math.random() - 0.5) * 0.45,
        baseZ + (Math.random() - 0.5) * 0.35,
      );
    }
    constellationGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(constellationPositions, 3),
    );
    const constellations = new THREE.LineSegments(
      constellationGeometry,
      constellationMaterial,
    );
    group.add(constellations);

    const waves: THREE.Line[] = [];
    for (let row = 0; row < 14; row += 1) {
      const points: THREE.Vector3[] = [];
      for (let i = 0; i < 90; i += 1) {
        const x = -5.6 + i * 0.13;
        const y = -1.6 + row * 0.18;
        const z = -1.2 + Math.sin(i * 0.16 + row * 0.7) * 0.18;
        points.push(new THREE.Vector3(x, y, z));
      }

      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        material,
      );
      line.rotation.x = -0.5;
      line.position.y = -0.35;
      waves.push(line);
      group.add(line);
    }

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / Math.max(rect.height, 1);
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(canvas);
    setSize();

    let frameId = 0;
    const clock = new THREE.Clock();

    const render = () => {
      const elapsed = clock.getElapsedTime();
      const positionAttribute = particleGeometry.getAttribute(
        "position",
      ) as THREE.BufferAttribute;

      for (let i = 0; i < particleCount; i += 1) {
        const z = positionAttribute.getZ(i) + particleSpeeds[i];
        positionAttribute.setZ(i, z > 0.6 ? -6.5 : z);
      }
      positionAttribute.needsUpdate = true;

      blueParticles.rotation.y = elapsed * 0.018;
      blueParticles.rotation.x = Math.sin(elapsed * 0.12) * 0.04;
      galaxy.rotation.y = Math.sin(elapsed * 0.08) * 0.08;
      galaxy.rotation.z = -0.17 + Math.sin(elapsed * 0.1) * 0.015;
      constellations.rotation.y = Math.sin(elapsed * 0.09) * 0.045;
      waves.forEach((wave, row) => {
        wave.position.x = Math.sin(elapsed * 0.25 + row) * 0.04;
        wave.position.z = Math.cos(elapsed * 0.18 + row) * 0.08;
      });
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    gsap.fromTo(group.position, { y: -0.08 }, { y: 0, duration: 1.4, ease: "power3.out" });
    render();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      material.dispose();
      constellationMaterial.dispose();
      particleGeometry.dispose();
      galaxyGeometry.dispose();
      blueParticleGeometry.dispose();
      constellationGeometry.dispose();
      group.traverse((child) => {
        if (
          child instanceof THREE.Line ||
          child instanceof THREE.LineSegments ||
          child instanceof THREE.Points
        ) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((item) => item.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const cursorGlowStyle = {
    "--cursor-x": "50%",
    "--cursor-y": "24%",
  } as CSSProperties & Record<"--cursor-x" | "--cursor-y", string>;

  const handleHeroPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--cursor-x", `${x.toFixed(2)}%`);
    event.currentTarget.style.setProperty("--cursor-y", `${y.toFixed(2)}%`);
  };

  const handleHeroPointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--cursor-x", "50%");
    event.currentTarget.style.setProperty("--cursor-y", "24%");
  };

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from("[data-hero-item]", {
        autoAlpha: 0,
        y: 18,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.07,
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)] px-3 pb-4 pt-3 text-white sm:px-6 sm:pb-5 sm:pt-4 lg:px-8"
    >
      <div
        className="relative mx-auto min-h-[620px] max-w-7xl overflow-hidden rounded-[1.25rem] bg-[#02040b] shadow-[0_24px_90px_rgba(0,0,0,0.22)] sm:min-h-[560px] sm:rounded-[1.5rem]"
        onPointerLeave={handleHeroPointerLeave}
        onPointerMove={handleHeroPointerMove}
        style={cursorGlowStyle}
      >
        <AmbientScene />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_4%,rgba(111,171,255,0.34),transparent_35%),radial-gradient(ellipse_at_18%_20%,rgba(64,121,254,0.28),transparent_30%),radial-gradient(ellipse_at_84%_28%,rgba(45,212,191,0.16),transparent_28%),linear-gradient(180deg,rgba(2,4,11,0.06),rgba(2,4,11,0.42)_48%,rgba(0,0,0,0.9))]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-90 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle 330px at var(--cursor-x) var(--cursor-y), rgba(125, 183, 255, 0.38), rgba(64, 121, 254, 0.2) 28%, rgba(45, 212, 191, 0.08) 48%, transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.13),transparent)]" />
        <div className="absolute bottom-0 left-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7bb0ff]/70 to-transparent shadow-[0_0_32px_rgba(87,149,254,0.8)]" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-5xl flex-col items-center justify-center px-4 py-12 text-center sm:min-h-[560px] sm:px-6 sm:py-14">
          <div
            data-hero-item
            className="inline-flex max-w-full items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-xs font-semibold text-black shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:text-sm"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-[#4079fe]">
              <Sparkles className="size-3.5 fill-white text-white" strokeWidth={2.2} />
            </span>
            Trusted web design and growth studio
          </div>

          <h1
            data-hero-item
            className="mt-7 max-w-4xl text-[2.55rem] font-semibold leading-[1.08] text-white sm:text-6xl sm:leading-[1.04] lg:text-[4.65rem] lg:leading-[1.03]"
          >
            Premium websites for brands ready to earn trust online.
          </h1>

          <p
            data-hero-item
            className="mt-6 max-w-2xl text-sm leading-7 text-white/66 sm:text-base sm:leading-8"
          >
            NeXaric designs and builds fast, SEO-friendly websites, product
            interfaces, and conversion-focused digital systems for new-age
            founders, growing businesses, and established teams.
          </p>

          <div
            data-hero-item
            className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="h-11 w-full rounded-full bg-white px-5 text-sm font-medium text-black hover:bg-[#5795fe] hover:text-white sm:w-auto"
            >
              <Link href="/contact">
                Start a project
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 w-full rounded-full border-white/18 bg-white/5 px-5 text-sm font-medium text-white hover:border-[#5795fe] hover:bg-[#4079fe]/20 hover:text-white sm:w-auto"
            >
              <Link href="/work">See selected work</Link>
            </Button>
          </div>

          <motion.div
            data-hero-item
            initial={false}
            className="mt-10 grid w-full max-w-3xl gap-3 sm:grid-cols-3"
          >
            {highlights.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className="rounded-2xl border border-white/12 bg-white/[0.08] px-4 py-3 text-sm font-medium text-white/82 backdrop-blur hover:border-[#5795fe]/70"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
