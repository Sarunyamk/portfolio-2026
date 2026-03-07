import { PROJECTS } from '@/constants/project.constant';
import { LanguageProps } from '@/lib/types/lang.type';
import { MotionDiv } from '../motion/wrapper-motion';
import ProjectCard from './ProjectCard';

export default function Project({ t }: LanguageProps) {
  const labels = {
    viewProject: t.projects.viewProject,
    viewGit: t.projects.viewGit,
  };

  return (
    <section
      id="projects"
      className="relative flex items-center justify-center px-6 text-center py-10"
    >
      <div className="container relative z-10 max-w-7xl w-full">
        <h2 className="text-5xl md:text-7xl mb-6 text-gradient-1 py-10">
          {t.projects.heading}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const item = t.projects.items[index];
            if (!item) return null;
            return (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                <ProjectCard
                  project={project}
                  item={item}
                  labels={labels}
                  index={index}
                />
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
