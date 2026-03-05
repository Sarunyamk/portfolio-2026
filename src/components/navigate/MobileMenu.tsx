'use client';

import { NAVBAR_ITEMS } from '@/constants/nav-items';
import { useLanguage } from '@/hooks/useLanguage';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ModeToggle } from '../theme/ModeToggle';
import { Button } from '../ui/button';
import { LangToggle } from './LangToggle';
import NavigateButton from './NavigateButton';

type Props = {
  activeSection: string;
};

export default function MobileMenu({ activeSection }: Props) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="md:hidden">
      {/* hamburger */}

      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        size="icon"
        className="text-white"
      >
        <Menu size={26} />
      </Button>

      {/* menu */}
      {open && (
        <div className="fixed inset-0 z-100 min-h-screen bg-black/95 backdrop-blur-xl flex flex-col">
          {/* close */}
          <div className="flex justify-end p-6">
            <Button
              onClick={() => setOpen(false)}
              variant="ghost"
              size="icon"
              className="text-white"
            >
              <X size={26} />
            </Button>
          </div>

          {/* menu */}
          <div className="flex flex-col items-center justify-center flex-1 gap-10 text-xl">
            {NAVBAR_ITEMS.map((item) => (
              <div key={item.id} onClick={() => setOpen(false)}>
                <NavigateButton
                  label={t.nav[item.id as keyof typeof t.nav]}
                  id={item.id}
                  active={activeSection}
                />
              </div>
            ))}

            <div className="flex items-center gap-2">
              <LangToggle />
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
