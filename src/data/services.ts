// Liste des services : alimente le menu, la page Services, les cards et le maillage interne.

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

export const services: ServiceEntry[] = [
  {
    slug: 'demenagement-bruxelles',
    href: '/services/demenagement-bruxelles/',
    title: 'Déménagement à Bruxelles',
    shortTitle: 'Déménagement Bruxelles',
    description:
      "Déménagement complet dans les 19 communes de Bruxelles : appartements, maisons, studios, avec une équipe qui connaît parfaitement la ville.",
    icon: 'city',
  },
  {
    slug: 'demenagement-belgique',
    href: '/services/demenagement-belgique/',
    title: 'Déménagement en Belgique',
    shortTitle: 'Déménagement Belgique',
    description:
      "Déménagements entre Bruxelles et toutes les villes belges : Anvers, Gand, Liège, Namur, Charleroi, la côte et partout ailleurs.",
    icon: 'map',
  },
  {
    slug: 'demenagement-international',
    href: '/demenagement-international/',
    title: 'Déménagement international',
    shortTitle: 'International',
    description:
      "Déménagement depuis Bruxelles vers la France, les Pays-Bas, l'Allemagne, l'Espagne et le reste de l'Europe, organisé de porte à porte.",
    icon: 'globe',
  },
  {
    slug: 'demenagement-particuliers',
    href: '/services/demenagement-particuliers/',
    title: 'Déménagement particuliers',
    shortTitle: 'Particuliers',
    description:
      "Un accompagnement personnalisé pour votre déménagement : studio, appartement ou maison, avec ou sans emballage.",
    icon: 'home',
  },
  {
    slug: 'demenagement-entreprises',
    href: '/services/demenagement-entreprises/',
    title: 'Déménagement entreprises et bureaux',
    shortTitle: 'Entreprises & bureaux',
    description:
      "Transfert de bureaux, de commerces et de locaux professionnels avec un minimum d'interruption pour votre activité.",
    icon: 'office',
  },
  {
    slug: 'transport-manutention',
    href: '/services/transport-manutention/',
    title: 'Transport et manutention',
    shortTitle: 'Transport & manutention',
    description:
      "Transport de meubles, chargement et déchargement de camion, aide au déménagement : des bras et un camion quand vous en avez besoin.",
    icon: 'truck',
  },
  {
    slug: 'emballage-protection',
    href: '/services/emballage-protection/',
    title: 'Emballage et protection du mobilier',
    shortTitle: 'Emballage & protection',
    description:
      "Cartons, papier bulle, couvertures de déménagement : nous emballons et protégeons vos biens comme s'ils étaient les nôtres.",
    icon: 'box',
  },
  {
    slug: 'cartons-materiel',
    href: '/boutique/',
    title: "Vente de cartons et matériel d'emballage",
    shortTitle: 'Boutique — cartons & matériel',
    description:
      "Cartons double cannelure, kits de déménagement complets, papier bulle, housses, sangles, chariot et diable : tout le matériel au prix juste, en vente directe.",
    icon: 'box',
  },
  {
    slug: 'montage-demontage-meubles',
    href: '/services/montage-demontage-meubles/',
    title: 'Montage et démontage de meubles',
    shortTitle: 'Montage de meubles',
    description:
      "Démontage soigné avant le départ, remontage complet à l'arrivée : armoires, lits, dressings et meubles en kit.",
    icon: 'tools',
  },
];

export const navServices = services.filter((s) => s.slug !== 'demenagement-international');
