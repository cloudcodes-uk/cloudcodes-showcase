import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { projects } from "../dynamic/projects/projects";
import { getProjectImage } from "../dynamic/projects/getProjectImage";

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
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            Explore our latest work. Each project represents our commitment to quality,
            innovation, and delivering exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-bold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Always visible on mobile (no hover), hover-reveal on desktop */}
                <div className="flex flex-wrap gap-2 sm:gap-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="sm" className="text-xs sm:text-sm h-8 sm:h-9" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Live Demo
                    </a>
                  </Button>
                  {project.github.map((repo) => (
                    <Button key={repo.label} variant="heroOutline" size="sm" className="text-xs sm:text-sm h-8 sm:h-9" asChild>
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        {repo.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
