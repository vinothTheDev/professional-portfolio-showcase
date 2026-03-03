import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="mb-12 text-center"
  >
    <p className="text-primary text-sm font-display tracking-[0.2em] uppercase mb-2">
      {subtitle}
    </p>
    <h2 className="font-display text-3xl md:text-4xl font-bold">{title}</h2>
  </motion.div>
);

export default SectionHeading;
