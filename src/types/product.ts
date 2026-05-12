export type CategoryKey =
  | "todos"
  | "escolares"
  | "industriales"
  | "corporativos"
  | "deportivos";

export type ProductCategory = Exclude<CategoryKey, "todos">;

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  images?: string[];
}
