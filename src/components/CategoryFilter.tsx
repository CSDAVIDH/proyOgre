import type { CategoryKey } from "@/types/product";

interface CategoryFilterProps {
  categories: { key: CategoryKey; label: string }[];
  activeCategory: CategoryKey;
  onChange: (category: CategoryKey) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex min-w-max gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category.key;

          return (
            <button
              key={category.key}
              type="button"
              onClick={() => onChange(category.key)}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "border-[#cc0000] bg-[#cc0000] text-white shadow-[0_8px_18px_rgba(204,0,0,0.35)]"
                  : "border-white/20 bg-[#1a1a1a] text-zinc-200 hover:border-[#f97316] hover:text-white"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
