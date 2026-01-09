import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer with 8+ years of experience building scalable web applications.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Chen",
    role: "Frontend Architect",
    bio: "React specialist passionate about creating beautiful, accessible user interfaces.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Williams",
    role: "Backend Engineer",
    bio: "Node.js expert focused on building robust APIs and microservices architectures.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    bio: "Design enthusiast crafting intuitive experiences that users love.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
];

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
  return (
    <section id="team" className="py-24 bg-card relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">The Team</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Meet Our Crew</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A talented group of developers and designers united by our passion for 
            building exceptional digital products.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary font-mono text-sm mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>

              <div className="flex justify-center gap-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
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
