"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Product } from "@/types/product";
import { categoryBadgeClass, categoryLabel } from "@/config/theme";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const slides = product.images?.length ? product.images : [product.image];
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const count = slides.length;

  function prev() { setCurrent((c) => (c - 1 + count) % count); }
  function next() { setCurrent((c) => (c + 1) % count); }

  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     setLightbox(false);
      if (e.key === "ArrowLeft")  setCurrent((c) => (c - 1 + count) % count);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, count]);

  return (
    <>
      {/* ── Card ── */}
      <article className="group relative h-80 w-full cursor-default overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:ring-[#f97316]/40 hover:shadow-[0_28px_60px_rgba(249,115,22,0.2)] md:h-72">

        {/* Slides — cross-fade */}
        {slides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-white transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`${product.name} — ${i + 1}`}
              fill
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Click to open lightbox */}
        <button
          type="button"
          aria-label="Ver imagem ampliada"
          onClick={() => setLightbox(true)}
          className="absolute inset-0 z-10 cursor-zoom-in"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Text — bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-5">
          <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm ${categoryBadgeClass[product.category]}`}>
            {categoryLabel[product.category]}
          </span>
          <h3 className="mt-2 text-base font-black leading-tight tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] md:text-lg">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            {product.description}
          </p>
        </div>

        {/* Slider controls */}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/70 group-hover:opacity-100"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Próximo"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/70 group-hover:opacity-100"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                  aria-label={`Imagem ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "h-1.5 w-5 bg-white" : "h-1.5 w-1.5 bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </article>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          {/* Image */}
          <div
            className="relative mx-4 h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={slides[current]}
              alt={`${product.name} — ${current + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={() => setLightbox(false)}
            aria-label="Fechar"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Name + dots */}
          <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3">
            <p className="text-sm font-bold tracking-wide text-white/90">{product.name}</p>
            {count > 1 && (
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Imagem ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current ? "h-2 w-6 bg-[#f97316]" : "h-2 w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Prev / Next */}
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Próximo"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
