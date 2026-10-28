// Catalogue de la boutique — tarif fournisseur du 04/04/2026, prix TVAC.
// ÉDITABLE VIA L'ADMIN (/admin/ → Boutique) : src/content/products.json

import data from '../content/products.json';

export interface Product {
  id: string;
  cat: string;
  name: string;
  price: number;
  img: string;
  alt: string;
  dims: string;
  desc: string;
  specs: string[];
  page?: string;
  badge?: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  sub: string;
}

export const productCategories: ProductCategory[] = data.categories;
export const products: Product[] = data.products;
