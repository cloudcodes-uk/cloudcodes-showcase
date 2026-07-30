import { IProject } from "./IProject";

export const projects: IProject[] = [
  {
    title: "StackPay Dashboard",
    description:
      "A centralized SaaS spend control platform that helps startups manage, schedule, and pay for their entire software stack. Features virtual card management with spending caps, smart renewal alerts, anomaly detection, and real-time spend analytics.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Recharts"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com/cloudcodes-uk/stackpay_frontend",
    live: "https://stackpay.cloudcodes.uk",
  },
    {
    title: "StackPay Backend",
    description:
      "Robust API powering StackPay's financial automation engine. Handles virtual card issuance, merchant-locked spending caps, automated billing alerts via scheduled cron jobs, seat-usage anomaly detection, and multi-tier subscription management.",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Passport.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com/cloudcodes-uk/stackpay_backend",
    live: "https://stackpay-backend.cloudcodes.uk/api/docs",
  },
];
