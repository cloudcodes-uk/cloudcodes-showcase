import { env } from "@/lib/env";
import type { UnifiedProject } from "./IProject";

interface GitHubRepoItem {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics?: string[];
  updated_at: string;
}

interface GitHubSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubRepoItem[];
}

/**
 * Standardize project title from the project ID tag or repo name.
 * e.g., "cloudcodes-orbit" -> "CloudCodes Orbit"
 *       "cloudcodes-stack-pay" -> "CloudCodes Stack Pay"
 */
export function formatProjectTitle(projectId: string): string {
  if (projectId.toLowerCase().startsWith("cloudcodes-")) {
    const rawName = projectId.slice("cloudcodes-".length);
    const formattedName = rawName
      .split(/[-_]+/)
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return `CloudCodes ${formattedName}`;
  }

  return projectId
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Dynamically fetches portfolio repositories from the GitHub Search API
 * and merges split repositories into unified project objects.
 */
export async function fetchGithubProjects(
  username: string = env.VITE_GITHUB_USERNAME || "cloudcodes-uk",
  token: string = env.VITE_GITHUB_TOKEN || ""
): Promise<UnifiedProject[]> {
  const url = `https://api.github.com/search/repositories?q=user:${encodeURIComponent(
    username
  )}+topic:projects&sort=updated`;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(
      `GitHub API request failed with status ${response.status}: ${response.statusText}`
    );
  }

  const data: GitHubSearchResponse = await response.json();
  const repos = data.items || [];

  // Map to store grouped repos by projectId (e.g., "cloudcodes-orbit")
  const groups = new Map<string, GitHubRepoItem[]>();

  for (const repo of repos) {
    const repoTopics = repo.topics || [];
    // Identify project ID tag matching cloudcodes-*
    const projectIdTag = repoTopics.find((t) =>
      t.toLowerCase().startsWith("cloudcodes-")
    );

    const groupKey = projectIdTag ? projectIdTag.toLowerCase() : repo.name.toLowerCase();

    if (!groups.has(groupKey)) {
      groups.set(groupKey, []);
    }
    groups.get(groupKey)!.push(repo);
  }

  const unifiedProjects: UnifiedProject[] = [];

  for (const [groupKey, groupRepos] of groups.entries()) {
    // Determine frontend & backend repos based on role tags
    const frontendRepo = groupRepos.find((r) =>
      (r.topics || []).some((t) => t.toLowerCase() === "frontend")
    );
    const backendRepo = groupRepos.find((r) =>
      (r.topics || []).some((t) => t.toLowerCase() === "backend")
    );

    // Links assignment
    let frontendUrl: string | undefined = frontendRepo?.html_url;
    let backendUrl: string | undefined = backendRepo?.html_url;

    // If single repo with no specific role tag, default to frontendUrl
    if (!frontendUrl && !backendUrl && groupRepos.length === 1) {
      frontendUrl = groupRepos[0].html_url;
    }

    // Demo URL: prefer frontend repo's homepage, then backend's, then any
    const rawDemoUrl =
      (frontendRepo?.homepage && frontendRepo.homepage.trim()) ||
      (backendRepo?.homepage && backendRepo.homepage.trim()) ||
      groupRepos.find((r) => r.homepage && r.homepage.trim())?.homepage?.trim();

    const demoUrl = rawDemoUrl || undefined;

    // Description: prefer frontend repo, then first with description
    const description =
      frontendRepo?.description ||
      groupRepos.find((r) => r.description && r.description.trim())?.description ||
      "";

    // Combine & filter topics
    const allTopics = new Set<string>();
    for (const r of groupRepos) {
      for (const t of r.topics || []) {
        const lower = t.toLowerCase();
        // Remove internal tags: 'projects', 'cloudcodes-*', 'frontend', 'backend'
        if (
          lower === "projects" ||
          lower.startsWith("cloudcodes-") ||
          lower === "frontend" ||
          lower === "backend"
        ) {
          continue;
        }
        allTopics.add(t);
      }
    }

    const title = formatProjectTitle(groupKey);

    unifiedProjects.push({
      id: groupKey,
      title,
      description,
      demoUrl,
      frontendUrl,
      backendUrl,
      topics: Array.from(allTopics),
    });
  }

  return unifiedProjects;
}
