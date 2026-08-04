export interface UnifiedProject {
  id: string;              // e.g., "cloudcodes-orbit"
  title: string;           // e.g., "CloudCodes Orbit"
  description: string;     // Repository description
  demoUrl?: string;        // Live project demo URL (from repo homepage)
  frontendUrl?: string;    // GitHub repository link for frontend
  backendUrl?: string;     // GitHub repository link for backend
  topics: string[];        // Unique list of tech stack tags (e.g. ["nestjs", "react", "typescript"])
}

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

export function unifiedToIProject(unified: UnifiedProject): IProject {
  const github: IProjectGithub[] = [];
  if (unified.frontendUrl) {
    github.push({ label: "Frontend", url: unified.frontendUrl });
  }
  if (unified.backendUrl) {
    github.push({ label: "Backend", url: unified.backendUrl });
  }

  return {
    title: unified.title,
    description: unified.description,
    tags: unified.topics,
    github,
    live: unified.demoUrl || "",
  };
}
