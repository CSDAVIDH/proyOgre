"use client";

import * as React from "react";
import Image from "next/image";
import type { Product } from "@/types/product";
import { categoryBadgeClass, categoryLabel } from "@/config/theme";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const slides = product.images?.length ? product.images : [product.image];
  const [current, setCurrent] = React.useState(0);
  const count = slides.length;

  function prev() {
    setCurrent((c) => (c - 1 + count) % count);
  }

  function next() {
    setCurrent((c) => (c + 1) % count);
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-[0_14px_28px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cc0000] hover:shadow-[0_18px_35px_rgba(204,0,0,0.35)]">
      {/* Carousel */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={slides[current]}
          alt={`${product.name} - ${current + 1}`}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white backdrop-blur-sm transition hover:bg-black/80"
              aria-label="Anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white backdrop-blur-sm transition hover:bg-black/80"
              aria-label="Siguiente"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-4 bg-white" : "w-1.5 bg-white/40"}`}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute right-2 bottom-2 rounded bg-black/50 px-1.5 py-0.5 text-xs text-white/80 backdrop-blur-sm">
              {current + 1} / {count}
            </div>
          </>
        )}
      </div>

      {/* Info */}
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
      </div>
    </article>
  );
}
