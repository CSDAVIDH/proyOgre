import { company } from "@/data/company";

export default function Hero() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <p className="mb-4 inline-block rounded-full border border-[#cc0000]/60 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">
          {company.tagline}
        </p>
        <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
          Uniformes Profissionais com Identidade, Força e Qualidade
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
          Desenvolvemos uniformes escolares, industriais, corporativos e esportivos
          com acabamento premium, conforto e alta durabilidade para valorizar sua
          marca em cada detalhe.
        </p>
      </div>
    </section>
  );
}
