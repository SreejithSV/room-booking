import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  gradient?: boolean;
}

const SectionHeading = ({ badge, title, description, gradient = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center max-w-3xl mx-auto mb-16"
  >
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
        {badge}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 ${gradient ? "gradient-text" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
    )}
  </motion.div>
);

export default SectionHeading;
    