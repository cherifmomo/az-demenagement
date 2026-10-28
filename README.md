# az-demenagement.be — Site AZ Déménagement

Site vitrine professionnel de **AZ Solutions Belgium / AZ Déménagement** :
déménagement à Bruxelles, en Belgique et à l'international.

Construit avec [Astro](https://astro.build) : site 100 % statique, ultra-rapide,
optimisé SEO (Lighthouse : Performance 98–100, Accessibilité 100, Best Practices 100, SEO 100).

## Démarrage rapide

```bash
npm install     # installer les dépendances
npm run dev     # site en local sur http://localhost:4321
```

## Build de production

```bash
npm run build   # génère le site statique dans dist/
npm run preview # prévisualise le build sur http://localhost:4321
```

Le dossier **`dist/`** contient le site complet prêt à être déployé : il suffit
d'en copier le contenu sur n'importe quel hébergement statique (OVH, Combell,
one.com, Netlify, Vercel, Cloudflare Pages…) pointé sur `az-demenagement.be`.

## Structure du projet

```
├── astro.config.mjs          # Config Astro (domaine, sitemap, trailing slash)
├── public/                   # Fichiers servis tels quels
│   ├── robots.txt            # + référence au sitemap
│   ├── site.webmanifest      # Manifest PWA
│   ├── favicon.svg / icon-*.png / apple-touch-icon.png
│   └── og-image.jpg          # Image Open Graph (1200×630)
├── src/
│   ├── assets/images/        # Photos (optimisées en WebP au build)
│   ├── components/           # Header, Footer, QuoteCta, Faq, Analytics*, CookieConsent, Tracking, ServiceCard,
│   │                         # Breadcrumbs, CtaBanner, StickyMobileBar, Logo, Icon
│   ├── data/
│   │   ├── company.ts        # NAP officiel (adresse, TVA, téléphone, horaires)
│   │   ├── services.ts       # Liste des services (menu, cards, maillage)
│   │   └── faq.ts            # FAQ accueil + FAQ international
│   ├── layouts/
│   │   ├── BaseLayout.astro  # <head> SEO complet + JSON-LD MovingCompany
│   │   └── ServiceLayout.astro
│   ├── pages/                # 1 fichier = 1 URL
│   │   ├── index.astro                      → /
│   │   ├── services/…                       → /services/ + 7 pages service
│   │   ├── demenagement-international.astro → /demenagement-international/
│   │   ├── zones-intervention.astro         → /zones-intervention/
│   │   ├── contact.astro                    → /contact/
│   │   ├── mentions-legales.astro, politique-de-confidentialite.astro,
│   │   │   politique-cookies.astro, 404.astro
│   └── styles/global.css     # Design system (palette, boutons, grilles)
└── CREDITS-IMAGES.md         # Sources des photos (licence Pexels)
```

## Demandes de devis

Les boutons « Recevoir mon devis gratuit » renvoient vers votre formulaire Odoo :
`https://az-solutions.odoo.com/az-demenagement-be`. Cette URL est centralisée dans
[src/data/company.ts](src/data/company.ts) (champ `quoteUrl`) — un seul endroit à
modifier si elle change. Aucune variable d'environnement n'est nécessaire.

## SEO — ce qui est en place

- Title + meta description uniques sur chaque page, canonical, Open Graph, Twitter Cards
- Données structurées Schema.org : `MovingCompany` (NAP complet, horaires, zone desservie),
  `WebSite`, `Service`, `BreadcrumbList`, `FAQPage`, `ContactPage`
- `sitemap-index.xml` généré automatiquement au build + `robots.txt`
- Fil d'Ariane sur toutes les pages intérieures, maillage interne dense
- Images WebP responsive (`srcset`), lazy loading, attributs `alt` descriptifs
- HTML `lang="fr-BE"`, page 404 personnalisée, favicon + manifest
- Un H1 unique par page, hiérarchie H2/H3 propre

## À compléter par vos soins

1. **Logo officiel** : le logo actuel est un SVG créé sur mesure
   ([src/components/Logo.astro](src/components/Logo.astro) + `public/favicon.svg`).
   Si vous disposez d'un logo officiel, remplacez le contenu de ces fichiers.
2. **Google Business Profile** : créez/optimisez la fiche avec exactement le même
   NAP que le site (AZ Solutions Belgium, Boulevard du Midi 125, 1000 Bruxelles,
   0471 / 65 39 47) et le lien vers az-demenagement.be.
3. Après mise en ligne : soumettre `https://az-demenagement.be/sitemap-index.xml`
   dans Google Search Console.

## Tracking — Google Analytics 4 & Google Tag Manager

Identifiants (source unique : [src/data/analytics.ts](src/data/analytics.ts)) :

| Outil | ID | Installation |
| --- | --- | --- |
| Google Analytics 4 | `G-DQHF4S2PLG` | gtag.js directement dans `<head>` (toutes les pages) |
| Google Tag Manager | `GTM-N95KL6CL` | script dans `<head>` + `<noscript>` juste après `<body>` |

Composants : `AnalyticsHead.astro` (Consent Mode → GA4 → GTM), `AnalyticsBody.astro`
(noscript GTM), `CookieConsent.astro` (bannière RGPD), `Tracking.astro` (événements).

### ⚠️ Éviter le double tracking
GA4 est installé **en direct** avec `G-DQHF4S2PLG`. **Ne créez PAS de tag
« Google Analytics : configuration GA4 » avec ce même ID dans GTM** — cela
enverrait deux `page_view` par page. GTM sert aux tags additionnels uniquement
(Google Ads, Conversion Linker, autres outils).

### Événements envoyés dans `dataLayer`
| Événement | Déclencheur | Paramètres |
| --- | --- | --- |
| `phone_click` | clic sur tout lien `tel:` | `cta_location`, `page_path` |
| `email_click` | clic sur tout lien `mailto:` | `cta_location`, `page_path` |
| `quote_cta_click` | clic sur un bouton devis (Demander un devis, Devis gratuit, Recevoir mon devis…) | `cta_text`, `cta_location`, `cta_destination`, `page_path` |
| `quote_request` | **uniquement** sur la page `/contactus-thank-you/` (après envoi réussi du formulaire Odoo) | `form_type: moving_quote`, `page_path` |
| `contact_form_submit` | idem `/contactus-thank-you/` | `page_path` |
| `consent_update` | choix dans la bannière cookies | `consent_analytics`, `consent_ads` |

Aucune donnée personnelle n'est jamais envoyée (pas de nom, e-mail, téléphone,
adresse ni contenu de formulaire).

### À faire côté Odoo (indispensable pour la conversion principale)
Le formulaire de devis est hébergé sur Odoo. Pour que `quote_request` soit
mesuré : Odoo → Site Web → éditer le formulaire → **Action après envoi :
Rediriger vers une URL** → `https://az-demenagement.be/contactus-thank-you`.
La page `/contactus-thank-you/` envoie la conversion une seule fois (anti-doublon 30 min).

### Consentement (RGPD / Google Consent Mode v2)
Défaut : `analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`
= **denied**. Bannière : Tout accepter / Tout refuser / Personnaliser. Choix
mémorisé 6 mois (`localStorage: az_cookie_consent`), réappliqué avant le
chargement des tags. Lien « Gérer les cookies » dans le footer.

### Google Ads (à configurer dans GTM)
1. Ajouter le tag **Conversion Linker** (déclencheur : All Pages).
2. Créer les conversions Google Ads avec les déclencheurs « Événement personnalisé » :
   `quote_request` (conversion principale), `phone_click`, `contact_form_submit`.
3. Ne pas utiliser `quote_cta_click` comme conversion (simple clic, pas une demande).
