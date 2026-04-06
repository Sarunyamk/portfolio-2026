'use client';

import { Labels, Project, ProjectItem } from '@/lib/types/project.type';
import { ExternalLink, Github, StepBack } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { useLanguage } from '@/hooks/useLanguage';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type Props = {
  project: Project;
  item: ProjectItem;
  labels: Labels;
  index: number;
};

function buildVideoUrl(raw: string): string {
  const base = raw.replace('youtube.com', 'youtube-nocookie.com');
  const separator = base.includes('?') ? '&' : '?';
  return `${base}${separator}rel=0&modestbranding=1&autoplay=1&mute=1`;
}

export default function ProjectCard({ project, item, labels, index }: Props) {
  const [flipped, setFlipped] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoUrl = buildVideoUrl(project.video);
  const { t } = useLanguage();

  return (
    <div
      className={`relative ${project.deploy ? 'h-137' : 'h-125'}`}
      style={{ perspective: '1200px' }}
      role="article"
      aria-label={item.title}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(168,85,247,0.15) 0%, transparent 70%)',
          animationDelay: `${index * 100}ms`,
        }}
      />

      <div
        className="relative w-full h-full transition-all duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <Card
          className="absolute inset-0 flex flex-col bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <CardHeader className="pb-2 relative">
            <span className="absolute top-4 right-4 text-xs font-mono opacity-40 select-none">
              0{index + 1}
            </span>

            <h3 className="text-lg font-bold text-gradient-1 leading-tight pr-8">
              {item.title}
            </h3>
          </CardHeader>

          <CardContent className="flex flex-col flex-1 pt-0 gap-4">
            {/* VIDEO */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black mb-6">
              {!isLoaded ? (
                <button
                  onClick={() => setIsLoaded(true)}
                  className="
        absolute inset-0 z-10
        flex items-center justify-center
        bg-black/60 text-white
        transition-all duration-500 ease-out
        hover:scale-[1.03] hover:bg-black/80
      "
                >
                  ▶ Play Video
                </button>
              ) : null}

              <iframe
                src={isLoaded ? videoUrl : undefined}
                className={`
      absolute inset-0 w-full h-full
      transition-opacity duration-500
      ${isLoaded ? 'opacity-100' : 'opacity-0'}
    `}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={item.title}
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>

          {/* ACTIONS */}
          <CardFooter className="flex flex-col gap-2">
            <div className="flex w-full gap-2">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" size="sm" className="w-full gap-1.5">
                  <Github size={14} />
                  {labels.viewGit}
                </Button>
              </Link>

              <Button
                variant="outline"
                size="sm"
                className="flex-1 gap-1.5"
                onClick={() => setFlipped(true)}
              >
                {t.projects.detail}
              </Button>
            </div>

            {project.deploy && (
              <Link
                href={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="sm"
                  className="w-full gap-1.5 bg-gradient-1 text-white border-0 hover:opacity-90"
                >
                  <ExternalLink size={14} />
                  {labels.viewProject}
                </Button>
              </Link>
            )}
          </CardFooter>
        </Card>

        <Card
          className="absolute inset-0 flex flex-col bg-card/90 backdrop-blur-sm border border-border rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Header */}
          <CardHeader className="flex-row items-center justify-between border-b border-border py-3">
            <h3 className="text-sm font-semibold text-gradient-1 truncate pr-2">
              {item.title}
            </h3>
          </CardHeader>

          {/* DESCRIPTION */}
          <CardContent className="flex-1 flex items-center justify-center p-6">
            <p className="text-sm leading-relaxed text-center line-clamp-6">
              {item.description}
            </p>
          </CardContent>

          {/* Footer */}
          <CardFooter className="border-t border-border flex gap-2">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="outline" size="sm" className="w-full gap-1.5">
                <Github size={14} />
                {labels.viewGit}
              </Button>
            </Link>

            <Button
              variant="outline"
              size="sm"
              className="flex-1 gap-1.5"
              onClick={() => setFlipped(false)}
            >
              <StepBack size={14} />
              Back
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
