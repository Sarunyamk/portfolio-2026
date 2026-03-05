import { scrollToSection } from '@/lib/scroll-section';

type MobileMenu = {
  label: string;
  icon: React.ReactNode;
  command: () => void;
};
export const MOBILE_MENUS: MobileMenu[] = [
  {
    label: 'Projects',
    icon: 'pi pi-briefcase',
    command: () => scrollToSection('projects'),
  },
  {
    label: 'Technologies',
    icon: 'pi pi-user',
    command: () => scrollToSection('tech'),
  },
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => scrollToSection('hero'),
  },
];
