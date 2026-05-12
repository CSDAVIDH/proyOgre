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

  function prev() { setCurrent((c) => (c - 1 + count) % count); }
  function next() { setCurrent((c) => (c + 1) % count); }

  return (
    <article className="group relative h-80 w-full cursor-default overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:ring-[#f97316]/40 hover:shadow-[0_28px_60px_rgba(249,115,22,0.2)] md:h-72">

      {/* ── Slides — cross-fade ── */}
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={src}
            alt={`${product.name} — ${i + 1}`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={i === 0}
          />
        </div>
      ))}

      {/* ── Cinematic overlay — bottom fade for text readability ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* ── Text block — bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm ${categoryBadgeClass[product.category]}`}
        >
          {categoryLabel[product.category]}
        </span>

        <h3 className="mt-2 text-base font-black leading-tight tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-lg">
          {product.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          {product.description}
        </p>
      </div>

      {/* ── Slider controls ── */}
      {count > 1 && (
        <>
          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/70 group-hover:opacity-100"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Próximo"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/70 group-hover:opacity-100"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Imagem ${i + 1}`}
                className={`rounded-full transition-all duration-400 ${
                  i === current
                    ? "w-5 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </article>
  );
}
