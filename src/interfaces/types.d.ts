export interface ProjectsList {
  [key: string]: Project;
}

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  images: string[];
  technologies: string[];
}

export interface Technology {
  [key: string]: React.ReactNode;
}

export enum ProjectType {
  MOBILE = 'mobile',
  WEB = 'web',
}
