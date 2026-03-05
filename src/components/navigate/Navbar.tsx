'use client';

import { useEffect, useState } from 'react';
import { ModeToggle } from '../theme/ModeToggle';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections: string[] = ['home', 'skills', 'projects'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-gradient-1 font-bold text-lg">
          &lt;My Portfolio /&gt;
        </div>

        <DesktopMenu activeSection={activeSection} />

        <MobileMenu activeSection={activeSection} />

        <div className="hidden md:block ">
          <ModeToggle />
        </div>
      </div>{' '}
    </nav>
  );
}
