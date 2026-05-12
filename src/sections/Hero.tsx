import { company } from "@/data/company";

export default function Hero() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-24">
        <p className="mb-4 inline-block rounded-full border border-[#cc0000]/60 bg-black/30 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#f97316] backdrop-blur-sm">
          {company.tagline}
        </p>
        <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
          <span className="text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.9)]">Uniformes Profissionais</span>{" "}
          <span className="bg-gradient-to-b from-[#fdba74] to-[#c2410c] bg-clip-text text-transparent">
            com Identidade, Força e Qualidade
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] md:text-lg">
          Desenvolvemos uniformes escolares, industriais, corporativos e esportivos
          com acabamento premium, conforto e alta durabilidade para valorizar sua
          marca em cada detalhe.
        </p>
      </div>
    </section>
  );
}
