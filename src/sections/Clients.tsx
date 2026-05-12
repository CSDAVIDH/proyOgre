import Image from "next/image";
import { clients, type Client } from "@/data/clients";

export default function Clients() {
  const track = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] py-16 md:py-20">
      <div className="mb-10 px-4 text-center">
        <h2 className="text-3xl font-black uppercase tracking-wide md:text-4xl">
          <span className="text-white">Nossos</span>{" "}
          <span className="bg-gradient-to-b from-[#fdba74] to-[#c2410c] bg-clip-text text-transparent">Clientes</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-zinc-500">
          Empresas que confiam na qualidade e no profissionalismo da Ogre Uniformes.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0d0d0d] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0d0d0d] to-transparent" />

        <div className="overflow-hidden">
          <div className="clients-track">
            {track.map((client, i) => (
              <ClientLogo key={`${client.id}-${i}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientLogo({ client }: { client: Client }) {
  return (
    <div className="group relative flex-shrink-0" title={client.name}>
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-50"
        style={{ background: client.color }}
      />

      {/* Circle */}
      <div
        className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-white/30"
        style={{
          boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {client.logo ? (
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain p-3"
            sizes="80px"
          />
        ) : (
          <>
            {/* Colored radial accent */}
            <div
              className="absolute inset-[3px] rounded-full opacity-10 transition-opacity duration-300 group-hover:opacity-25"
              style={{
                background: `radial-gradient(circle at 40% 30%, ${client.color}, transparent 70%)`,
              }}
            />
            {/* Initials fallback */}
            <span
              className="relative z-10 text-sm font-black tracking-wider"
              style={{ color: client.color, textShadow: `0 0 12px ${client.color}80` }}
            >
              {client.initials}
            </span>
          </>
        )}
      </div>

      {/* Tooltip */}
      <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-2 py-0.5 text-[10px] text-zinc-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {client.name}
      </div>
    </div>
  );
}
