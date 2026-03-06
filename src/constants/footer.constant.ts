import { Github, Linkedin, LucideProps, Mail } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type FooterLink = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  href: string;
  label: string;
};

export const FOOTER_LINK: FooterLink[] = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Sarunyamk',
  },
  {
    icon: Linkedin,
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/sarunya-vajapattana-7b5a33339',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sarunya46mk@gmail.com',
  },
];
