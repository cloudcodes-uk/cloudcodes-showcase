import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, scalable e-commerce solution built with React and Node.js. Features real-time inventory, secure payments, and beautiful UI.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team chat, and advanced analytics dashboard.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "AI Content Generator",
    description: "Leveraging GPT technology to create engaging content. Includes SEO optimization and multi-language support.",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile-first fitness companion with workout plans, progress tracking, and social challenges.",
    tags: ["React Native", "Firebase", "Charts", "PWA"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
];

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
    <section id="projects" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest work. Each project represents our commitment to quality,
            innovation, and delivering exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative rounded-2xl overflow-hidden bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
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
