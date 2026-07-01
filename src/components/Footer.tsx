import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { UpworkIcon } from "./ui/upwork-icon";
import { cloudcodes } from "@/dynamic/cloudcodes/cloudcodes";

const Footer = () => {
  return (
    <footer id="contact" className="py-14 sm:py-16 md:py-20 bg-background relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            Let's Build Something
            <span className="text-gradient block sm:inline sm:ml-2">Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-2">
            Have a project in mind? We'd love to hear about it. 
            Get in touch and let's create something extraordinary together.
          </p>
          <Button variant="hero" size="lg" className="sm:h-14 sm:px-10 sm:text-lg" asChild>
            <a href="mailto:hello@cloudcodes.uk">
              <Mail className="w-5 h-5" />
              hello@cloudcodes.uk
            </a>
          </Button>
        </motion.div>
        <div className="border-t border-border pt-8 sm:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="CloudCodes Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-xl">CloudCodes</span>
            </div>

            <div className="flex items-center gap-5 sm:gap-6">
              <a
                href={cloudcodes.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-center p-1.5"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-center p-1.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-center p-1.5"
                aria-label="Upwork"
              >
                <UpworkIcon className="h-3.5 sm:h-4 w-auto" />
              </a>
            </div>

            <p className="text-muted-foreground text-xs sm:text-sm">
              © {new Date().getFullYear()} CloudCodes. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
