import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Github, Globe, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  fetchGithubProjects,
  projects as staticProjects,
  unifiedToIProject,
} from "../dynamic/projects/projects";
import { getProjectImage } from "../dynamic/projects/getProjectImage";
import type { IProject } from "../dynamic/projects/IProject";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  const {
    data: fetchedProjects,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["github-projects"],
    queryFn: () => fetchGithubProjects(),
    staleTime: 1000 * 60 * 10, // 10 minutes cache
    retry: 1,
  });

  const displayProjects: IProject[] =
    fetchedProjects && fetchedProjects.length > 0
      ? fetchedProjects.map(unifiedToIProject)
      : staticProjects;

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4">
            Our Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            Explore our latest work. Each project represents our commitment to quality,
            innovation, and delivering exceptional user experiences.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm font-mono text-muted-foreground">
              Fetching repositories from GitHub...
            </p>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {displayProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={item}
                className="group relative rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={getProjectImage(project.image, project.live)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 backdrop-blur-md bg-background/60 border-t border-white/10">
                  <h3 className="text-base sm:text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white text-[11px] sm:text-xs mb-2 sm:mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-mono bg-secondary rounded-full text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Always visible on mobile (no hover), hover-reveal on desktop */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    {project.live ? (
                      <Button
                        variant="hero"
                        size="sm"
                        className="text-[10px] sm:text-xs h-7 sm:h-8"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          Live Demo
                        </a>
                      </Button>
                    ) : null}

                    {project.github.map((repo) => (
                      <Button
                        key={repo.url}
                        variant="heroOutline"
                        size="sm"
                        className="text-[10px] sm:text-xs h-7 sm:h-8"
                        asChild
                      >
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          {repo.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
