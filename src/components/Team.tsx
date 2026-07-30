import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { team } from "@/dynamic/team/team";
import type { TeamMember } from "@/dynamic/team/ITeam";

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
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
              className="group text-center w-full sm:w-[calc(50%-1rem)] lg:w-[280px] flex flex-col cursor-pointer"
              onClick={() => setSelectedMember(member)}
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
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2 px-2 sm:px-0">
                {member.bio}
              </p>

              <div className="flex justify-center gap-4 mt-auto">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Member Detail Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden border-border/50 bg-card">
          {selectedMember && (
            <div className="flex flex-col items-center">
              {/* Header with gradient background */}
              <div className="relative w-full pt-10 pb-14 flex justify-center bg-gradient-to-b from-primary/15 via-primary/5 to-transparent">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/10">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 -mt-4 text-center w-full">
                <DialogTitle className="text-xl sm:text-2xl font-bold text-center">
                  {selectedMember.name}
                </DialogTitle>
                <p className="text-primary font-mono text-xs sm:text-sm mt-1.5 mb-4">
                  {selectedMember.role}
                </p>
                
                <div className="w-12 h-px bg-primary/30 mx-auto mb-4" />

                <DialogDescription className="text-muted-foreground text-sm leading-relaxed text-center">
                  {selectedMember.bio}
                </DialogDescription>

                {/* Social links */}
                <div className="flex justify-center gap-3 mt-6">
                  <a
                    href={selectedMember.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-200 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-200 text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Team;
