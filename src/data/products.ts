// Catalogue de la boutique — tarif fournisseur du 04/04/2026.
// Les prix sont à confirmer (HTVA ou TVAC) avant toute campagne.
// `page` = fiche produit détaillée sur az-carton-express.be (maillage).

export interface Product {
  id: string;
  cat: 'kits' | 'cartons' | 'emballage' | 'manutention';
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

export const productCategories = [
  {
    id: 'kits',
    title: 'Kits de déménagement',
    sub: "Des packs complets et économiques, composés selon la taille de votre logement — le plus simple pour ne rien oublier.",
  },
  {
    id: 'cartons',
    title: 'Cartons',
    sub: "Des cartons renforcés, vendus à l'unité, pour prendre exactement la quantité nécessaire.",
  },
  {
    id: 'emballage',
    title: 'Emballage & protection',
    sub: 'Tout pour emballer, caler et protéger vos biens pendant le transport.',
  },
  {
    id: 'manutention',
    title: 'Manutention & fixation',
    sub: 'Le matériel qui soulage le dos et sécurise le chargement.',
  },
] as const;

export const products: Product[] = [
  {
    id: 'kit-petit', cat: 'kits', badge: 'Kit complet',
    name: 'Kit Petit — Studio', price: 34.99,
    img: '/boutique/kit-demenagement.webp',
    alt: "Kit de déménagement complet avec cartons, adhésif et papier bulle (image d'illustration)",
    dims: '10 cartons · 2 rubans adhésifs · papier bulle 10 m × 50 cm',
    desc: "L'essentiel pour déménager un studio ou un kot sans rien oublier. Ce kit économique regroupe dix cartons solides, deux rouleaux de ruban adhésif et dix mètres de papier bulle pour protéger vaisselle et objets fragiles. Une solution simple et prête à l'emploi : vous emballez dès aujourd'hui, au juste prix.",
    specs: ['10 cartons de déménagement', '2 rubans adhésifs', 'Papier bulle 10 m × 50 cm', 'Adapté à un studio ou un kot'],
    page: 'https://az-carton-express.be/kit-petit/',
  },
  {
    id: 'kit-grand', cat: 'kits', badge: 'Kit complet',
    name: 'Kit Grand — 2 pièces', price: 64.99,
    img: '/boutique/kit-demenagement.webp',
    alt: "Kit de déménagement complet pour appartement 2 pièces (image d'illustration)",
    dims: '20 cartons · 4 rubans adhésifs · papier bulle 20 m × 50 cm',
    desc: "Le format le plus demandé pour un appartement d'une à deux chambres. Vingt cartons robustes, quatre rouleaux d'adhésif et vingt mètres de papier bulle : de quoi emballer méthodiquement toutes les pièces, de la cuisine au salon. Un seul achat, zéro aller-retour au magasin, et des affaires bien protégées le jour J.",
    specs: ['20 cartons de déménagement', '4 rubans adhésifs', 'Papier bulle 20 m × 50 cm', 'Adapté à un appartement 2 pièces'],
    page: 'https://az-carton-express.be/kit-grand/',
  },
  {
    id: 'kit-xl', cat: 'kits', badge: 'Kit complet',
    name: 'Kit Extra Grand — 4 pièces', price: 139.99,
    img: '/boutique/kit-demenagement.webp',
    alt: "Kit de déménagement extra grand pour maison 4 pièces (image d'illustration)",
    dims: '40 cartons · 8 rubans · bulle 50 m × 50 cm · dévidoir',
    desc: "Pensé pour une maison ou un grand appartement familial : quarante cartons, huit rouleaux d'adhésif, cinquante mètres de papier bulle et un dévidoir professionnel pour fermer les cartons deux fois plus vite. Le kit le plus complet du catalogue, au tarif dégressif — idéal aussi pour les déménagements d'entreprise.",
    specs: ['40 cartons de déménagement', '8 rubans adhésifs', 'Papier bulle 50 m × 50 cm', 'Dévidoir inclus', 'Adapté à une maison 4 pièces'],
    page: 'https://az-carton-express.be/kit-extra-grand/',
  },
  {
    id: 'carton', cat: 'cartons', badge: 'Double cannelure',
    name: 'Carton de déménagement avec poignées', price: 2.49,
    img: '/boutique/carton-poignees.webp',
    alt: 'Carton de déménagement brun avec poignées découpées',
    dims: '55 × 33,5 × 35 cm · double cannelure',
    desc: "Le carton de déménagement classique en version renforcée : double cannelure pour supporter les charges lourdes, et poignées découpées pour un portage confortable dans les escaliers. Son format 55 × 33,5 × 35 cm convient aussi bien aux livres qu'à la vaisselle ou au linge. Vendu à l'unité — prenez exactement la quantité qu'il vous faut.",
    specs: ['Dimensions : 55 × 33,5 × 35 cm', 'Carton double cannelure', 'Poignées de portage découpées', "Vendu à l'unité"],
    page: 'https://az-carton-express.be/carton-demenagement/',
  },
  {
    id: 'ruban', cat: 'emballage',
    name: "Ruban adhésif d'emballage", price: 1.99,
    img: '/boutique/ruban-adhesif.webp',
    alt: 'Rouleau de ruban adhésif transparent pour emballage',
    dims: '66 m × 5 cm',
    desc: "Un rouleau généreux de 66 mètres pour fermer vos cartons sans compter. Sa largeur de 5 cm assure une fermeture solide en un seul passage, même sur les cartons bien remplis. Transparent et discret, il se combine parfaitement avec notre dévidoir pistolet pour un emballage rapide et régulier.",
    specs: ['Longueur : 66 m', 'Largeur : 5 cm', 'Adhésif transparent', 'Compatible avec le dévidoir pistolet'],
    page: 'https://az-carton-express.be/ruban-demballage/',
  },
  {
    id: 'devidoir', cat: 'emballage',
    name: 'Dévidoir pistolet pour ruban adhésif', price: 9.99,
    img: '/boutique/devidoir-pistolet.webp',
    alt: 'Dévidoir pistolet avec rouleau de ruban adhésif',
    dims: 'Poignée ergonomique · lame de coupe intégrée',
    desc: "L'outil qui change tout quand on a des dizaines de cartons à fermer : déroulez, appliquez, coupez, d'un seul geste. Sa poignée ergonomique et sa lame de coupe intégrée évitent de chercher le début du rouleau à chaque carton. Un investissement modeste pour un gain de temps considérable le jour de l'emballage.",
    specs: ['Poignée ergonomique antidérapante', 'Lame de coupe intégrée', 'Compatible rubans 5 cm de large', 'Tension du rouleau réglable'],
    page: 'https://az-carton-express.be/devidoir/',
  },
  {
    id: 'bulle', cat: 'emballage',
    name: 'Papier bulle', price: 5.99,
    img: '/boutique/papier-bulle.webp',
    alt: 'Rouleau de papier bulle transparent pour protection',
    dims: '5 m × 50 cm',
    desc: "La protection de référence pour la vaisselle, les verres, les cadres et tous les objets fragiles. Ce rouleau de cinq mètres sur cinquante centimètres s'adapte à toutes les formes : enveloppez, scotchez, c'est protégé. Léger et sans poussière, il amortit les chocs pendant le transport et se découpe facilement aux dimensions voulues.",
    specs: ['Longueur : 5 m', 'Largeur : 50 cm', "Bulles d'air amortissantes", 'Découpe facile sans outil'],
    page: 'https://az-carton-express.be/film-a-bulles/',
  },
  {
    id: 'housse1', cat: 'emballage',
    name: 'Housse matelas 1 personne', price: 7.99,
    img: '/boutique/housse-matelas.webp',
    alt: "Matelas protégé par une housse plastique de déménagement (image d'illustration)",
    dims: '230 × 90 cm · coloris vert',
    desc: "Votre matelas une personne mérite d'arriver propre dans votre nouveau logement. Cette housse de 230 × 90 cm l'enveloppe entièrement et le protège de la poussière, des frottements et des salissures pendant le transport et le stockage. Elle s'enfile en quelques secondes et se referme simplement avec un ruban adhésif.",
    specs: ['Dimensions : 230 × 90 cm', 'Pour matelas 1 personne', 'Coloris : vert', 'Protection poussière et salissures'],
    page: 'https://az-carton-express.be/housse-matelas/',
  },
  {
    id: 'housse2', cat: 'emballage',
    name: 'Housse matelas 2 personnes', price: 9.99,
    img: '/boutique/housse-matelas.webp',
    alt: "Matelas deux personnes sous housse de protection plastique (image d'illustration)",
    dims: '225 × 180 cm · coloris bleu',
    desc: "La version grand format pour les matelas doubles : 225 × 180 cm de protection intégrale contre la poussière, l'humidité de surface et les taches de manutention. Indispensable quand le matelas voyage dans un camion ou passe par la cage d'escalier, et tout aussi utile pour un stockage prolongé en cave ou au garde-meuble.",
    specs: ['Dimensions : 225 × 180 cm', 'Pour matelas 2 personnes', 'Coloris : bleu', 'Transport et stockage'],
    page: 'https://az-carton-express.be/housse-matelas-2-places/',
  },
  {
    id: 'couverture', cat: 'emballage',
    name: 'Couverture de déménagement', price: 5.99,
    img: '/boutique/couverture-demenagement.webp',
    alt: 'Couverture de déménagement matelassée pliée',
    dims: '200 × 150 cm',
    desc: "L'alliée des meubles et de l'électroménager : cette couverture matelassée de 200 × 150 cm s'enroule autour des armoires, tables, frigos et écrans pour absorber les chocs et éviter les rayures dans le camion. Réutilisable déménagement après déménagement, elle sert aussi de protection de sol pendant les travaux.",
    specs: ['Dimensions : 200 × 150 cm', 'Matelassée, absorbe les chocs', 'Protège meubles et électroménager', 'Réutilisable'],
    page: 'https://az-carton-express.be/couverture-demenagement/',
  },
  {
    id: 'film', cat: 'emballage',
    name: 'Film étirable', price: 13.99,
    img: '/boutique/film-etirable.webp',
    alt: 'Rouleau de film étirable transparent',
    dims: '270 m × 50 cm',
    desc: "Un rouleau professionnel de 270 mètres pour sécuriser tout ce qui bouge : tiroirs qui s'ouvrent, portes d'armoires, coussins de canapé, cartons sur un chariot. Le film adhère sur lui-même sans coller aux surfaces, ne laisse aucune trace et maintient vos couvertures de protection bien en place pendant le transport.",
    specs: ['Longueur : 270 m', 'Largeur : 50 cm', 'Adhère sur lui-même, sans résidu', 'Usage meubles, cartons et palettes'],
    page: 'https://az-carton-express.be/film-etirable/',
  },
  {
    id: 'sangles', cat: 'manutention',
    name: 'Sangles de fixation — lot de 2', price: 6.99,
    img: '/boutique/sangles.webp',
    alt: 'Lot de deux sangles de fixation orange avec boucle métallique',
    dims: '350 cm · boucle métallique',
    desc: "Deux sangles de 3,5 mètres avec boucle métallique à serrage rapide, pour arrimer meubles et électroménager dans la camionnette ou maintenir un matelas sur une galerie. La boucle métallique verrouille la tension d'un geste et se relâche tout aussi vite. Un indispensable de sécurité pour tout transport de charges.",
    specs: ['Lot de 2 sangles', 'Longueur : 350 cm chacune', 'Boucle métallique à serrage rapide', 'Arrimage de meubles et charges'],
    page: 'https://az-carton-express.be/sangles/',
  },
  {
    id: 'chariot', cat: 'manutention',
    name: 'Chariot à roulettes', price: 39.0,
    img: '/boutique/chariot-plateau.webp',
    alt: 'Chariot plateau bleu à quatre roues avec poignée',
    dims: 'Capacité annoncée : 400 kg',
    desc: "Le chariot plateau qui épargne votre dos : chargez plusieurs cartons ou un meuble entier et roulez jusqu'au camion en un seul trajet. Sa capacité annoncée de 400 kg et son plateau antidérapant en font l'outil parfait pour les déménagements, les livraisons et l'atelier. Poignée robuste et roues pivotantes pour manœuvrer dans les couloirs.",
    specs: ['Capacité annoncée : 400 kg', 'Plateau antidérapant', '4 roues dont roues pivotantes', 'Poignée de poussée robuste'],
    page: 'https://az-carton-express.be/chariot-plateau-2/',
  },
  {
    id: 'diable', cat: 'manutention',
    name: 'Diable pliant en aluminium', price: 35.0,
    img: '/boutique/diable-pliant.webp',
    alt: 'Diable pliant en aluminium avec poignée télescopique, plié et déplié',
    dims: 'Aluminium · pliable et télescopique',
    desc: "Léger à porter, costaud à l'usage : ce diable en aluminium se déplie en quelques secondes pour transporter cartons, caisses et petit électroménager, puis se replie à plat pour se glisser dans le coffre d'une voiture. Sa poignée télescopique s'ajuste à votre taille et son tendeur élastique maintient la charge pendant le trajet.",
    specs: ['Structure aluminium légère', 'Pliable à plat, format compact', 'Poignée télescopique réglable', 'Tendeur élastique de maintien inclus'],
  },
  {
    id: 'corde15', cat: 'manutention',
    name: 'Corde 15 m', price: 3.99,
    img: '/boutique/corde.webp',
    alt: 'Corde bleue enroulée de 15 mètres',
    dims: '15 m × 6 mm',
    desc: "Quinze mètres de corde polyvalente de 6 mm : attacher un fauteuil sur une remorque, sécuriser un chargement, descendre un sac par la fenêtre ou improviser une poignée de portage. La corde fait partie de ces petits équipements qu'on oublie toujours — et qui sauvent un déménagement au bon moment.",
    specs: ['Longueur : 15 m', 'Diamètre : 6 mm', 'Usage courant : arrimage léger', 'Compacte et réutilisable'],
    page: 'https://az-carton-express.be/cord/',
  },
  {
    id: 'corde20', cat: 'manutention',
    name: 'Corde renforcée 20 m', price: 9.99,
    img: '/boutique/corde.webp',
    alt: 'Corde renforcée bleue enroulée de 20 mètres',
    dims: '20 m × 9 mm · résistance annoncée 135 kg',
    desc: "La version costaud pour les charges sérieuses : vingt mètres de corde de 9 mm avec une résistance annoncée de 135 kg. De quoi arrimer solidement des meubles dans une camionnette, hisser des charges ou sécuriser un chargement sur galerie. Son diamètre généreux offre une bonne prise en main, même avec des gants.",
    specs: ['Longueur : 20 m', 'Diamètre : 9 mm', 'Résistance annoncée : 135 kg', 'Arrimage de charges lourdes'],
    page: 'https://az-carton-express.be/cord/',
  },
];
