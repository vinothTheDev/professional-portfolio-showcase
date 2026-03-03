import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";

const certifications = [
  { title: "Python Programming", issuer: "Coursera" },
  { title: "Database Management", issuer: "Udemy" },
  { title: "Web Development Bootcamp", issuer: "Udemy" },
];

const achievements = [
  "Secured 1st place in Coding Hackathon 2025",
  "Presented paper on Artificial Intelligence at National Level Symposium",
  "Awarded Best Project for Smart Attendance System in college exhibition",
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Certifications & Achievements" subtitle="Recognitions" />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-display text-xl font-semibold flex items-center gap-2">
              <Award size={20} className="text-primary" /> Certifications
            </h3>
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <p className="font-semibold">{cert.title}</p>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            <h3 className="font-display text-xl font-semibold flex items-center gap-2">
              <Trophy size={20} className="text-primary" /> Achievements
            </h3>
            {achievements.map((ach, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <p>{ach}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
