import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 bg-background relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something
            <span className="text-gradient ml-2">Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Have a project in mind? We'd love to hear about it. 
            Get in touch and let's create something extraordinary together.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:hello@cloudcodes.uk">
              <Mail className="w-5 h-5" />
              hello@cloudcodes.uk
            </a>
          </Button>
        </motion.div>

        <div className="border-t border-border pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-mono font-bold text-primary-foreground text-sm">&lt;/&gt;</span>
              </div>
              <span className="font-bold text-xl">CloudCodes</span>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/cloudcodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>

            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} CloudCodes. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
