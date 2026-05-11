import { company } from "@/data/company";

const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111111]">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">

        {/* Fila principal */}
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:text-left">
          <span className="text-sm font-black uppercase tracking-widest text-[#f97316]">
            {company.shortName}
          </span>
          <p className="text-xs text-zinc-500">
            © {COPYRIGHT_YEAR} {company.legalName}.{" "}
            <span className="block sm:inline">Todos os direitos reservados.</span>
          </p>
          <span className="hidden text-xs italic text-zinc-600 md:block">
            {company.tagline}
          </span>
        </div>

        {/* Crédito de desarrollo */}
        <div className="mt-5 text-center">
          <p className="text-[11px] tracking-widest text-zinc-600">
            {" "}
            <span className="font-bold text-zinc-400 transition-colors hover:text-[#f97316]">
              @DHCS<span className="text-[#f97316]">.dev</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
