import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "B.E Computer Science & Engineering",
    institution: "SRM Madurai College For Engineering And Technology",
    year: "2024 – 2028",
  },
  {
    degree: "HSC – Grade XII (CBSE)",
    institution: "Krishnamal Ramasubbaiyer School",
    year: "May 2024",
  },
  {
    degree: "SSLC – Grade X (CBSE)",
    institution: "Krishnamal Ramasubbaiyer School",
    year: "July 2022",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Education" subtitle="My Journey" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6 items-start"
              >
                <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 items-center justify-center">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div className="bg-card border border-border rounded-xl p-6 flex-1 hover:glow-border transition-shadow duration-300">
                  <p className="text-primary text-sm font-display">{edu.year}</p>
                  <h3 className="font-display text-lg font-semibold mt-1">{edu.degree}</h3>
                  <p className="text-muted-foreground mt-1">{edu.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
