// Liste des services : alimente le menu, la page Services, les cards et le maillage interne.
// ÉDITABLE VIA L'ADMIN (/admin/ → Services) : src/content/services.json

import data from '../content/services.json';

export interface ServiceEntry {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  /** Lien externe (ouvre dans un nouvel onglet) */
  external?: boolean;
}

export const services: ServiceEntry[] = data.services;

export const navServices = services.filter((s) => s.slug !== 'demenagement-international');
