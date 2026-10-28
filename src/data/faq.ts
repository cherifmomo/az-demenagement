// FAQ du site (accueil + international, avec schéma FAQPage).
// ÉDITABLE VIA L'ADMIN (/admin/ → FAQ) : src/content/faq.json

import data from '../content/faq.json';

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqHome: FaqItem[] = data.faqHome;
export const faqInternational: FaqItem[] = data.faqInternational;
