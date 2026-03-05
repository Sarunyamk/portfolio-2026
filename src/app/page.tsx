import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navigate/Navbar';
import Project from '@/components/project/Project';
import Skills from '@/components/skill/Skill';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Project />
    </div>
  );
}
