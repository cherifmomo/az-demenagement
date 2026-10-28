// Informations officielles de l'entreprise (NAP — Name, Address, Phone).
// Source unique de vérité : toute coordonnée affichée sur le site vient d'ici.

export const company = {
  brand: 'AZ Déménagement',
  legalName: 'AZ Solutions Belgium',
  domain: 'https://az-demenagement.be',
  phoneDisplay: '0471 / 65 39 47',
  phoneHref: 'tel:+32471653947',
  phoneInternational: '+32 471 65 39 47',
  email: 'info@az-vide-express.be',
  /** Formulaire de demande de devis externe (Odoo) */
  quoteUrl: 'https://az-solutions.odoo.com/az-demenagement-be',
  address: {
    street: 'Boulevard du Midi 125',
    postalCode: '1000',
    city: 'Bruxelles',
    country: 'Belgique',
    countryCode: 'BE',
  },
  vat: 'BE 0823 848 714',
  openingHours: [
    { days: 'Du lundi au vendredi', hours: '9h00 – 17h00' },
    { days: 'Samedi', hours: 'Sur rendez-vous' },
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
