export interface IProjectGithub {
  label: string;
  url: string;
}

export interface IProject {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github: IProjectGithub[];
  live: string;
}
