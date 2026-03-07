'use client';

import { useSearchParams } from 'next/navigation';
import { getTranslations, type Lang, type Translations } from '@/lib/get-translations';

export type { Translations, Lang };

export function useLanguage() {
  const searchParams = useSearchParams();
  const lang: Lang = searchParams.get('lang') === 'th' ? 'th' : 'en';
  const t: Translations = getTranslations(lang);
  return { lang, t };
}
