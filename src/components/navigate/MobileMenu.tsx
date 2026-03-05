'use client';

import { NAVBAR_ITEMS } from '@/constants/nav-items';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import NavigateButton from './NavigateButton';

type Props = {
  activeSection: string;
};

export default function MobileMenu({ activeSection }: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

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
                  label={item.label}
                  id={item.id}
                  active={activeSection}
                />
              </div>
            ))}

            <div className="text-gradient-1 text-lg cursor-pointer">
              EN / TH
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
