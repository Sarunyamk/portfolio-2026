'use client';

import { useSearchParams } from 'next/navigation';
import en from '@/locales/en.json';
import th from '@/locales/th.json';

export type Translations = typeof en;

export function useLanguage() {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') === 'th' ? 'th' : 'en';
  const t: Translations = lang === 'th' ? th : en;
  return { lang, t };
}
