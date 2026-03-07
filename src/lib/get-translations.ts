import en from '@/locales/en.json';
import th from '@/locales/th.json';

export type Translations = typeof en;
export type Lang = 'en' | 'th';

export function getTranslations(lang: Lang): Translations {
  return lang === 'th' ? th : en;
}
