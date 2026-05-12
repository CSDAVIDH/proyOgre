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
      value: 7,
      density: { enable: true, width: 900 },
    },
    color: {
      value: ["#7c1d3a", "#3b1a7a", "#7a3010", "#6b1535"],
    },
    shape: {
      type: "polygon",
      options: {
        polygon: { sides: 6 },
      },
    },
    opacity: {
      value: { min: 0.35, max: 0.70 },
    },
    size: {
      value: { min: 50, max: 160 },
      animation: {
        enable: true,
        speed: 6,
        sync: false,
        startValue: "random",
        destroy: "none",
      },
    },
    links: { enable: false },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: false },
      onClick: { enable: false },
      resize: { enable: true },
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
