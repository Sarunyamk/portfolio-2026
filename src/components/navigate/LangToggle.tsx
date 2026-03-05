'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function LangToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { lang } = useLanguage();

  const toggle = () => {
    const newLang = lang === 'en' ? 'th' : 'en';
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Button variant="outline" size="icon" onClick={toggle} className="font-semibold text-xs w-9 h-9">
      {lang === 'en' ? 'TH' : 'EN'}
    </Button>
  );
}
