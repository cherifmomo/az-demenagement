// Informations officielles de l'entreprise (NAP — Name, Address, Phone).
// ÉDITABLE VIA L'ADMIN (/admin/ → Réglages) : src/content/settings.json
// Ce fichier ne contient que la structure ; les valeurs vivent dans le JSON.

import settings from '../content/settings.json';

/** tel: normalisé à partir du numéro international (ex. +32 471 65 39 47 → tel:+32471653947) */
const phoneHref = 'tel:' + settings.phoneInternational.replace(/[^+0-9]/g, '');

export const company = {
  brand: settings.brand,
  legalName: settings.legalName,
  domain: 'https://az-demenagement.be',
  phoneDisplay: settings.phoneDisplay,
  phoneHref,
  phoneInternational: settings.phoneInternational,
  email: settings.email,
  /** Formulaire de demande de devis externe (Odoo) */
  quoteUrl: settings.quoteUrl,
  address: {
    street: settings.street,
    postalCode: settings.postalCode,
    city: settings.city,
    country: 'Belgique',
    countryCode: 'BE',
  },
  vat: settings.vat,
  openingHours: [
    { days: 'Du lundi au vendredi', hours: settings.hoursWeek },
    { days: 'Samedi', hours: settings.hoursSaturday },
  ],
  // Format Schema.org
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  geo: { latitude: 50.8365, longitude: 4.3406 },
} as const;

export const communes = [
  'Bruxelles-Ville',
  'Anderlecht',
  'Schaerbeek',
  'Ixelles',
  'Uccle',
  'Saint-Gilles',
  'Etterbeek',
  'Molenbeek-Saint-Jean',
  'Forest',
  'Jette',
  'Evere',
  'Woluwe-Saint-Pierre',
  'Woluwe-Saint-Lambert',
  'Auderghem',
  'Watermael-Boitsfort',
  'Koekelberg',
  'Ganshoren',
  'Berchem-Sainte-Agathe',
  'Saint-Josse-ten-Noode',
] as const;
