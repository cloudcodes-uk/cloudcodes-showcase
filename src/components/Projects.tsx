import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Github, Globe, Loader2, ExternalLink } from "lucide-react";
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
  } = useQuery({
    queryKey: ["github-projects"],
    queryFn: () => fetchGithubProjects(),
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });

  const displayProjects: IProject[] =
    fetchedProjects && fetchedProjects.length > 0
      ? fetchedProjects.map(unifiedToIProject)
      : staticProjects;

  return (
    <section id="projects" className="py-14 sm:py-18 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-primary font-mono text-xs sm:text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 mb-2 sm:mb-3">
            Our Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-xs sm:text-sm md:text-base px-2">
            Explore our latest work. Each project represents our commitment to quality,
            innovation, and delivering exceptional user experiences.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 gap-3">
            <Loader2 className="w-7 h-7 animate-spin text-primary" />
            <p className="text-xs sm:text-sm font-mono text-muted-foreground">
              Fetching repositories from GitHub...
            </p>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-7xl mx-auto items-stretch"
          >
            {displayProjects.map((project) => {
              return (
                <motion.div
                  key={project.title}
                  variants={item}
                  className="group rounded-xl sm:rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5 relative flex flex-col h-full"
                >
                  {/* Glowing Top Border Accent on Hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Compact Project Image Showcase */}
                  <div className="aspect-[16/9] bg-secondary/30 relative overflow-hidden flex items-center justify-center shrink-0">
                    <img
                      src={getProjectImage(project.image, project.live)}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Compact Project Info & Body */}
                  <div className="p-4 sm:p-5 md:p-6 relative bg-card/60 backdrop-blur-md flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors shrink-0 p-1"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-[11px] font-mono font-medium border border-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 5 && (
                          <span className="px-2 py-0.5 rounded-full bg-secondary/50 text-muted-foreground text-[10px] font-mono">
                            +{project.tags.length - 5}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-2 pt-3 mt-auto border-t border-border/60">
                      {project.live && (
                        <Button
                          variant="hero"
                          size="sm"
                          className="text-xs h-8 px-3.5"
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-3 h-3" />
                            Live Demo
                          </a>
                        </Button>
                      )}

                      {project.github.map((repo) => (
                        <Button
                          key={repo.url}
                          variant="heroOutline"
                          size="sm"
                          className="text-xs h-8 px-3.5"
                          asChild
                        >
                          <a href={repo.url} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3" />
                            {repo.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;


