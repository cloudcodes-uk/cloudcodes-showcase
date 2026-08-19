import { IProject, UnifiedProject, unifiedToIProject } from "./IProject";
import { fetchGithubProjects, formatProjectTitle } from "./fetchGithubProjects";

export { fetchGithubProjects, formatProjectTitle, unifiedToIProject };
export type { UnifiedProject };

export const projects: IProject[] = [
  {
    title: "Dentix",
    description:
      "A modern full-stack dental practice management platform streamlining patient scheduling, clinical records, and clinic workflows. Built with NestJS, TypeScript, PostgreSQL, and Next.js.",
    tags: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
      "TypeORM",
    ],
    github: [
      {
        label: "Frontend",
        url: "https://github.com/cloudcodes-uk/dentix_frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/cloudcodes-uk/dentix_backend",
      },
    ],
    live: "https://dentix.cloudcodes.uk",
  },
  {
    title: "StackPay",
    description:
      "A centralized SaaS spend control and payment automation platform for startups. Manage, schedule, and pay for your entire software stack from one dashboard — featuring virtual card management with spending caps, smart renewal alerts, anomaly detection, and real-time spend analytics.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Recharts",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Passport.js",
    ],
    github: [
      {
        label: "Frontend",
        url: "https://github.com/cloudcodes-uk/stackpay_frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/cloudcodes-uk/stackpay_backend",
      },
    ],
    live: "https://stackpay.cloudcodes.uk",
  },
];


