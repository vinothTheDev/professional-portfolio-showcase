import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="About Me" subtitle="Who I Am" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-12 glow-border border border-border"
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a motivated and detail-oriented Computer Science Engineering student at 
            SRM Madurai College For Engineering And Technology. With strong foundations in 
            programming, web technologies, and database management, I'm eager to apply my 
            technical knowledge and problem-solving skills to contribute effectively in a 
            dynamic IT environment. I'm actively seeking opportunities to grow as a software developer.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { label: "Languages", value: "4+" },
              { label: "Projects", value: "3+" },
              { label: "Certifications", value: "3" },
              { label: "Hackathon Wins", value: "1st" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
