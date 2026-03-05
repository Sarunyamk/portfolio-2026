import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navigate/Navbar';
import Project from '@/components/project/Project';
import Skills from '@/components/skill/Skill';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <Suspense>
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Project />
      </div>
    </Suspense>
  );
}
