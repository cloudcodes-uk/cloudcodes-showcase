import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

import { team } from "@/dynamic/team/team";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Team = () => {
  // Configurable zoom/scale variables (values can be percentages or decimals, e.g., '100%' or '1')
  // To zoom out on hover, make hoverScale smaller than baseScale.
  const baseScale = "100%";
  const hoverScale = "110%";

  return (
    <section id="team" className="py-16 sm:py-20 md:py-24 bg-card relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">The Team</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4">Meet Our Crew</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            A talented group of developers and designers united by our passion for 
            building exceptional digital products.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className="group text-center w-full sm:w-[calc(50%-1rem)] lg:w-[280px]"
            >
              <div className="relative mb-4 sm:mb-6 mx-auto w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 scale-[var(--base-scale)] group-hover:scale-[var(--hover-scale)]"
                    style={{
                      "--base-scale": baseScale,
                      "--hover-scale": hoverScale,
                    } as React.CSSProperties}
                  />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary font-mono text-xs sm:text-sm mb-2 sm:mb-3">{member.role}</p>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-4 sm:line-clamp-none px-2 sm:px-0">
                {member.bio}
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1.5"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1.5"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
