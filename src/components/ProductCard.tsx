import Image from "next/image";
import type { Product } from "@/types/product";
import { categoryBadgeClass, categoryLabel } from "@/config/theme";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-[0_14px_28px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cc0000] hover:shadow-[0_18px_35px_rgba(204,0,0,0.35)]">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${categoryBadgeClass[product.category]}`}
        >
          {categoryLabel[product.category]}
        </span>

        <h3 className="text-lg font-extrabold tracking-wide text-white">
          {product.name}
        </h3>

        <p className="text-sm leading-relaxed text-zinc-300">
          {product.description}
        </p>

        <button
          className="mt-auto rounded-md bg-[#cc0000] px-4 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-[#f97316]"
          type="button"
        >
          Solicitar orçamento
        </button>
      </div>
    </article>
  );
}
