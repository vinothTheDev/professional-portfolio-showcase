import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 container mx-auto text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Software Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Vinoth Kumar{" "}
          <span className="text-gradient">M</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Computer Science Engineering student with strong foundations in
          programming, web technologies, and database management.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <a href="mailto:vinoth.srm113@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} /> vinoth.srm113@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <Phone size={16} /> +91-8610917373
          </span>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="inline-block mt-16 text-primary animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={28} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
