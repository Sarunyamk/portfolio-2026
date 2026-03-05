'use client';
import Link from 'next/link';
import { Button } from '../ui/button';

type NavigateButtonProps = {
  label: string;
  id: string;
};

export default function NavigateButton({ label, id }: NavigateButtonProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link href={id}>
      <Button variant="ghost" size="sm" onClick={() => scrollToSection(id)}>
        {label}
      </Button>
    </Link>
  );
}
