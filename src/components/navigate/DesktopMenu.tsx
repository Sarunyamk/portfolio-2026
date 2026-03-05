'use client';

import { NAVBAR_ITEMS } from '@/constants/nav-items';
import { useLanguage } from '@/hooks/useLanguage';
import NavigateButton from './NavigateButton';

type Props = {
  activeSection: string;
};

export default function DesktopMenu({ activeSection }: Props) {
  const { t } = useLanguage();

  return (
    <div className="hidden md:flex gap-4">
      {NAVBAR_ITEMS.map((item) => (
        <NavigateButton
          key={item.id}
          label={t.nav[item.id as keyof typeof t.nav]}
          id={item.id}
          active={activeSection}
        />
      ))}
    </div>
  );
}
