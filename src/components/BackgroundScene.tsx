import Image from "next/image";
import ParticlesLayer from "./ParticlesLayer";

export default function BackgroundScene() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      style={{ isolation: "isolate" }}
    >
      {/* ── 1. Base: dark warm ─────────────────────────────── */}
      <div className="absolute inset-0 bg-[#0a0809]" />

      {/* ── 2. Particles ─────────────────────────────────────── */}
      <ParticlesLayer />

      {/* ── 3. Mesh gradient (4 nós) ────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at -5%   5%,  rgba(192,38,211,0.13) 0%, transparent 55%),
            radial-gradient(ellipse 75% 65% at 108%  85%, rgba(234,88,12,0.14)  0%, transparent 52%),
            radial-gradient(ellipse 65% 55% at 85%   5%,  rgba(249,115,22,0.09) 0%, transparent 50%),
            radial-gradient(ellipse 80% 45% at 15%  95%,  rgba(190,18,60,0.08)  0%, transparent 55%)
          `,
        }}
      />

      {/* ── 4. Orbs animados ─────────────────────────────────── */}

      {/* Orb magenta — topo esquerdo */}
      <div
        className="bg-scene-orb-1 absolute -left-48 -top-48 h-[700px] w-[700px] rounded-full"
        style={{
          background: "rgba(192,38,211,0.11)",
          filter: "blur(150px)",
        }}
      />

      {/* Orb laranja — baixo direito */}
      <div
        className="bg-scene-orb-2 absolute -bottom-48 -right-48 h-[650px] w-[650px] rounded-full"
        style={{
          background: "rgba(234,88,12,0.13)",
          filter: "blur(140px)",
        }}
      />

      {/* Orb vermelho — centro */}
      <div
        className="bg-scene-orb-3 absolute left-[15%] top-[35%] h-[450px] w-[900px] rounded-full"
        style={{
          background: "rgba(190,18,60,0.07)",
          filter: "blur(110px)",
        }}
      />

      {/* Orb dourado — centro-direito */}
      <div
        className="bg-scene-orb-4 absolute right-[5%] top-[20%] h-[400px] w-[400px] rounded-full"
        style={{
          background: "rgba(217,119,6,0.08)",
          filter: "blur(120px)",
        }}
      />

      {/* ── 5. Wave image — pantalla completa ───────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.55,
          mixBlendMode: "screen",
        }}
      >
        <Image
          src="/img/waves2.png"
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          priority
          className="object-cover"
        />
      </div>

      {/* ── 6. Noise grain ───────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          opacity: 0.028,
        }}
      />

      {/* ── 7. Vignette radial ───────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 130% 130% at 50% 50%, transparent 38%, rgba(8,6,5,0.65) 100%)",
        }}
      />
    </div>
  );
}
