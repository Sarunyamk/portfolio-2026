import type { Metadata } from 'next';
import { siteConfig } from './site-config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: 'Sarunya | Full Stack Developer',
    template: '%s | Sarunya Portfolio',
  },

  description: siteConfig.description,

  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Sarunya',
    'Portfolio',
  ],

  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.links.github,
    },
  ],

  creator: siteConfig.author.name,

  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'th_TH',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Sarunya | Full Stack Developer',
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Sarunya — Full Stack Developer Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sarunya | Full Stack Developer',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: siteConfig.logo,
  },
};
