import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Online Bookstore Management System",
    description:
      "A web application using HTML, CSS, JavaScript, and MySQL to manage book sales, customer accounts, and billing.",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    icon: "📚",
  },
  {
    title: "Smart Attendance System",
    description:
      "A Python-based face recognition system integrated with OpenCV for automated attendance tracking.",
    tags: ["Python", "OpenCV", "Machine Learning"],
    icon: "🤖",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and deployed a responsive website showcasing personal projects and skills.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    icon: "🌐",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Projects" subtitle="My Work" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:glow-border transition-all duration-300"
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
