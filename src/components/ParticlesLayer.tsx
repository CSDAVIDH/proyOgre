"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const config: ISourceOptions = {
  detectRetina: true,
  background: { color: { value: "transparent" } },
  particles: {
    number: {
      value: 160,
      density: { enable: true, width: 800 },
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0, max: 1 },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    size: {
      value: { min: 0.3, max: 3 },
    },
    links: { enable: false },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: { enable: true, mode: "bubble" },
      onClick: { enable: true, mode: "repulse" },
      resize: { enable: true },
    },
    modes: {
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
    },
  },
};

export default function ParticlesLayer() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={config}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}
