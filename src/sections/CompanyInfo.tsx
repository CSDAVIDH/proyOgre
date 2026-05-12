import ExecutiveCard from "@/components/ExecutiveCard";
import SocialLinks from "@/components/SocialLinks";
import { company } from "@/data/company";

export default function CompanyInfo() {
  return (
    <section id="empresa" className="border-y border-white/10 bg-[#111111]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">

          {/* Empresa */}
          <div>
            <h3 className="text-xl font-black uppercase leading-snug md:text-2xl">
              <span className="text-white">Ogre —</span>{" "}
              <span className="bg-gradient-to-b from-[#fdba74] to-[#c2410c] bg-clip-text text-transparent">Indústria de Uniformes</span>
            </h3>
            <p className="mt-4 leading-relaxed text-zinc-300 text-justify">
              Na Ogre Uniformes, a uniformização fortalece a primeira impressão,
              valoriza a marca e transmite profissionalismo em cada atendimento.
              Trabalhamos com tecidos de primeira linha, equipe qualificada,
              maquinário próprio e tecnologia para entregar conforto, durabilidade e
              identidade visual. Atendemos indústria, comércio, construção civil,
              setor público e serviços terceirizados, com soluções para limpeza,
              manutenção, segurança, vigilância e área hospitalar.
            </p>

            <div className="mt-10">
              <h4 className="text-lg font-black uppercase md:text-xl">
                <span className="text-white">Nossos</span>{" "}
                <span className="bg-gradient-to-b from-[#fdba74] to-[#c2410c] bg-clip-text text-transparent">Responsáveis</span>
              </h4>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <ExecutiveCard src="/img/nadia.png"    name="Nadia Enriques"    role="Chefe de Operações Administrativas" />
                <ExecutiveCard src="/img/clidivan.png" name="Clidivan da Silva" role="Diretor Geral" />
              </div>

              <SocialLinks />
            </div>
          </div>

          {/* Contato */}
          <div id="contato" className="space-y-6 text-zinc-200">
            <div>
              <h4 className="text-2xl font-black uppercase">
                <span className="text-white">Fale</span>{" "}
                <span className="bg-gradient-to-b from-[#fdba74] to-[#c2410c] bg-clip-text text-transparent">Conosco</span>
              </h4>
              <p className="mt-2 leading-relaxed text-zinc-400">
                Fale com a nossa equipe e solicite um orçamento para uniformes
                escolares, industriais, corporativos e esportivos.
              </p>
            </div>

            <div className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm">
                <span className="font-bold text-white">Telefone:</span>{" "}
                <a
                  href={`tel:${company.phone.replace(/\D/g, "")}`}
                  className="transition-colors hover:text-[#f97316]"
                >
                  {company.phone}
                </a>
              </p>
              <p className="text-sm">
                <span className="font-bold text-white">Endereço:</span>{" "}
                <a
                  href={company.locationCode}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex flex-col rounded px-1 transition-all duration-200 hover:bg-[#f97316]/15 hover:text-[#f97316]"
                >
                  {company.address}
                  <span className="text-[10px] font-semibold tracking-wide text-[#f97316] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    → Ir para o Google Maps
                  </span>
                </a>
              </p>
              <p className="text-xs text-zinc-500">
                Horário de referência: {company.schedule}
              </p>
            </div>

            <form className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-semibold text-white">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-md border border-white/15 bg-[#111111] px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#f97316]"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-white">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seuemail@empresa.com"
                  className="w-full rounded-md border border-white/15 bg-[#111111] px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#f97316]"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="mb-1.5 block text-sm font-semibold text-white">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  placeholder="Conte brevemente o que você precisa..."
                  className="w-full rounded-md border border-white/15 bg-[#111111] px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-[#f97316]"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-md bg-[#f97316] px-4 py-2.5 text-sm font-black uppercase text-black transition-opacity hover:opacity-90 sm:w-auto sm:px-6"
              >
                Enviar
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
