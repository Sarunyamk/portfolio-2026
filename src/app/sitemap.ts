import { BASE_URL } from '@/constants/user.constant';
import { BUILD_TIME } from '@/lib/git-buildtime';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: BUILD_TIME,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}?lang=en`,
          th: `${BASE_URL}?lang=th`,
        },
      },
    },
  ];
}
