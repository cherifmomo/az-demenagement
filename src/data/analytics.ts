// Identifiants Google officiels du site — source unique de vérité.
// GA4 est installé directement (gtag.js). GTM est installé en parallèle pour
// les tags additionnels (Google Ads, Conversion Linker…).
// ⚠️ Ne PAS créer de tag GA4 « Configuration » dans GTM avec le même ID :
//    cela provoquerait un double page_view. Voir README.md → « Tracking ».

export const analytics = {
  ga4MeasurementId: 'G-DQHF4S2PLG',
  gtmContainerId: 'GTM-N95KL6CL',
  /** Clé localStorage du choix de consentement */
  consentStorageKey: 'az_cookie_consent',
  /** Version du texte de consentement : incrémenter pour redemander le consentement */
  consentVersion: 1,
} as const;
