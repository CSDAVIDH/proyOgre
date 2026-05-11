import type { ProductCategory } from "@/types/product";

export const categoryBadgeClass: Record<ProductCategory, string> = {
  escolares: "bg-blue-600/90 text-white",
  industriales: "bg-orange-500/90 text-white",
  corporativos: "bg-zinc-900 text-white",
  deportivos: "bg-emerald-600/90 text-white",
};

export const categoryLabel: Record<ProductCategory, string> = {
  escolares: "Escolar / Educativo",
  industriales: "Industrial / Trabajo",
  corporativos: "Corporativo / Empresarial",
  deportivos: "Deportivo",
};
