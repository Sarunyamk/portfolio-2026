export type Project = {
  tags: string[];
  github: string;
  video: string;
  deploy?: string;
};
export type ProjectItem = {
  title: string;
  description: string;
  frontend: string;
  backend: string;
};

export type Labels = {
  viewProject: string;
  viewGit: string;
};
