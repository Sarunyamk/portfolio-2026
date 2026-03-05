'use client';

import { scrollToSection } from '@/lib/scroll-section';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

type NavigateButtonProps = {
  label: string;
  id: string;
  active: string;
};

export default function NavigateButton({
  label,
  id,
  active,
}: NavigateButtonProps) {
  return (
    <Button
      onClick={() => scrollToSection(id)}
      className={cn(
        active === id ? 'text-white bg-gradient-2' : 'text-gradient-1'
      )}
    >
      {label}
    </Button>
  );
}
