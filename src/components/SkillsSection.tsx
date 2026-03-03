import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 75 },
      { name: "Java", level: 70 },
      { name: "Python", level: 85 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "Git", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Eclipse", level: 65 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Communication", level: 90 },
      { name: "Teamwork", level: 85 },
      { name: "Problem Solving", level: 88 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Skills" subtitle="What I Know" />
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold text-primary mb-5">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
