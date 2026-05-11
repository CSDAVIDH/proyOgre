"use client";

import { useMemo, useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import type { CategoryKey } from "@/types/product";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("todos");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "todos") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portafolio">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-black uppercase md:text-4xl">
            Portfólio de Uniformes
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Filtre por categoria para visualizar soluções desenvolvidas para cada necessidade.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="transition-all duration-300">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
