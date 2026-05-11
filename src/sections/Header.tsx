import Image from "next/image";
import { company } from "@/data/company";

const navLinks = [
  { href: "#portafolio", label: "Portfólio" },
  { href: "#empresa", label: "Empresa" },
  { href: "#contacto", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-[#cc0000] bg-[#111111]/95 backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        {/* Logo + desktop nav */}
        <div className="flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md bg-transparent md:h-11 md:w-11">
              <Image
                src="/img/logo.png"
                alt="Logo Ogre Uniformes"
                fill
                className="object-contain"
                sizes="44px"
                priority
              />
            </div>
            <div>
              <p className="text-base font-black tracking-wider md:text-lg">
                {company.shortName}
              </p>
              <p className="hidden text-xs text-zinc-400 sm:block">
                Indústria e Comércio de Confecções
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="transition-colors hover:text-[#f97316]">
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile nav row */}
        <nav className="flex items-center justify-center gap-6 border-t border-white/10 py-2 text-xs font-semibold text-zinc-300 md:hidden">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="transition-colors hover:text-[#f97316]">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
