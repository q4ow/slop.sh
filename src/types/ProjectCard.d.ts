export interface ProjectCardProps {
  role: string;
  company: string;
  timeline: string;
  description: string;
  logo: string;
  website?: string;
}

export interface ProjectsContainerProps {
  title: string;
  projects: ProjectCardProps[];
}
