import type { CategoryKey } from "@/types/product";

export const categories: { key: CategoryKey; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "escolares", label: "🏫 Escolares / Educacionais" },
  { key: "industriales", label: "🏭 Industriais / Trabalho" },
  { key: "corporativos", label: "🏢 Corporativos / Empresariais" },
  { key: "deportivos", label: "⚽ Esportivos" },
];
