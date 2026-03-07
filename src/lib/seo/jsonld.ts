import { siteConfig } from './site-config';

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.author.name,
  url: siteConfig.url,
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
  ],
  jobTitle: siteConfig.author.jobTitle,
  knowsAbout: [
    'React.js',
    'Next.js',
    'Node.js',
    'TypeScript',
    'TailwindCSS',
  ],
};
