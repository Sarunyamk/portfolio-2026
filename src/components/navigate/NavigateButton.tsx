'use client';
import { scrollToSection } from '@/lib/scroll-section';
import Link from 'next/link';
import { Button } from '../ui/button';

type NavigateButtonProps = {
  label: string;
  id: string;
};

export default function NavigateButton({ label, id }: NavigateButtonProps) {
  return (
    <Link href={id}>
      <Button variant="ghost" size="sm" onClick={() => scrollToSection(id)}>
        {label}
      </Button>
    </Link>
  );
}
