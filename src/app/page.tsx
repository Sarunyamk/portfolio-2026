import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navigate/Navbar';
import Project from '@/components/project/Project';
import Skills from '@/components/skill/Skill';
import { getTranslations, type Lang } from '@/lib/get-translations';
import { Suspense } from 'react';

type Props = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function HomePage({ searchParams }: Props) {
  const params = await searchParams;
  const lang: Lang = params.lang === 'th' ? 'th' : 'en';
  const t = getTranslations(lang);

  return (
    <Suspense>
      <div>
        <Navbar />
        <Hero t={t} />
        <Skills t={t} />
        <Project t={t} />
        <Footer />
      </div>
    </Suspense>
  );
}
