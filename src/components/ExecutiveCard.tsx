import Image from "next/image";

interface ExecutiveCardProps {
  src: string;
  name: string;
  role: string;
}

export default function ExecutiveCard({ src, name, role }: ExecutiveCardProps) {
  const uid = name.replace(/\s+/g, "-").toLowerCase();

  /*
    SVG bubble geometry (134 × 158 px) — tail rotated 30° to the left:
    - Circle: center (67, 67), radius 67
    - Tail center axis: 120° clockwise from east (straight down = 90°)
    - Right junction @ 110°: (44, 130)
    - Left  junction @ 130°: (24, 118)
    - Tail tip @ r=84:        (25, 140)

    Arc 1: top (67,0) → right junction (44,130)  — 200° clockwise → large-arc=1 sweep=1
    Arc 2: left junction (24,118) → top (67,0)   — 140° clockwise → large-arc=0 sweep=1
  */
  const bubblePath =
    "M 67 0 " +
    "A 67 67 0 1 1 44 130 " +        // major clockwise arc → right tail junction
    "C 43 138 29 143 25 140 " +       // smooth curve → tail tip
    "C 21 138 21 127 24 118 " +       // smooth curve → left tail junction
    "A 67 67 0 0 1 67 0 Z";           // minor clockwise arc up the left side → top

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative" style={{ width: 134, height: 158 }}>

        {/* Ambient glow — only behind the circle area */}
        <div
          className="absolute rounded-full"
          style={{
            top: 0, left: 0, width: 134, height: 134,
            background: "rgba(249,115,22,0.28)",
            filter: "blur(22px)",
            transform: "scale(1.12)",
          }}
        />

        {/* SVG: orange gradient bubble + dark inner circle */}
        <svg
          width={134}
          height={158}
          viewBox="0 0 134 158"
          className="absolute inset-0"
          style={{
            filter:
              "drop-shadow(0 0 8px rgba(249,115,22,0.65)) " +
              "drop-shadow(0 0 22px rgba(204,0,0,0.35))",
          }}
        >
          <defs>
            <linearGradient id={`grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#f97316" />
              <stop offset="48%"  stopColor="#cc0000" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>

          {/* Bubble shape — circle + integrated rounded tail */}
          <path d={bubblePath} fill={`url(#grad-${uid})`} />

          {/* Dark inner fill — creates the border ring */}
          <circle cx="67" cy="67" r="62" fill="#0d0d0d" />
        </svg>

        {/* Photo — aligned to the inner circle (offset 5 = 67 - 62) */}
        <div
          className="absolute overflow-hidden rounded-full"
          style={{ top: 5, left: 5, width: 124, height: 124 }}
        >
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover"
            sizes="124px"
          />
        </div>
      </div>

      <p className="mt-3 text-sm font-bold tracking-wide text-white">{name}</p>
      <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-widest text-[#f97316]">
        {role}
      </p>
    </div>
  );
}
