import { IProject, UnifiedProject, unifiedToIProject } from "./IProject";
import { fetchGithubProjects, formatProjectTitle } from "./fetchGithubProjects";

export { fetchGithubProjects, formatProjectTitle, unifiedToIProject };
export type { UnifiedProject };

export const projects: IProject[] = [
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

