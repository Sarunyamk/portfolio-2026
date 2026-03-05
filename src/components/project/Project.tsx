'use client';

import { PROJECTS } from '@/constants/project.constant';
import { useLanguage } from '@/hooks/useLanguage';
import { GitCommit } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv } from '../motion/wrapper-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export default function Project() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="relative flex items-center justify-center px-6 text-center"
    >
      <div className="relative z-10 max-w-7xl w-full">
        <h2 className="text-5xl md:text-7xl mb-6 text-gradient-1 py-10">
          {t.projects.heading}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  <h2>{t.projects.items[index]?.title ?? project.title}</h2>
                </CardTitle>
                <CardDescription>{t.projects.items[index]?.description ?? project.description}</CardDescription>
                <CardAction>
                  <MotionDiv>
                    <Link href={project.github}>
                      <Button>
                        <GitCommit />
                      </Button>
                    </Link>
                  </MotionDiv>
                </CardAction>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <Image
                    src={'/example.jpg'}
                    alt="image project"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex}>{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <MotionDiv>
                  <Link href={project.linkVideo}>
                    <Button>{t.projects.viewProject}</Button>
                  </Link>
                </MotionDiv>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
