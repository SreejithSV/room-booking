import { motion } from "framer-motion";
import { Briefcase, Heart, TrendingUp, Coffee, GraduationCap, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const benefits = [
  { icon: TrendingUp, title: "Career Growth", desc: "Clear progression paths and mentorship programs" },
  { icon: Coffee, title: "Flexible Work", desc: "Remote-first culture with flexible hours" },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health coverage and wellness programs" },
  { icon: GraduationCap, title: "Learning Budget", desc: "Annual budget for courses, conferences, and certifications" },
  { icon: Globe, title: "Global Team", desc: "Work with talented people from around the world" },
  { icon: Briefcase, title: "Cutting-Edge Projects", desc: "Work on exciting, impactful software solutions" },
];

const openings = [
  { title: "Senior Full-Stack Engineer", dept: "Engineering", type: "Remote", level: "Senior" },
  { title: "React Native Developer", dept: "Mobile", type: "Remote", level: "Mid-Senior" },
  { title: "DevOps Engineer", dept: "Infrastructure", type: "Hybrid", level: "Senior" },
  { title: "AI/ML Engineer", dept: "Data Science", type: "Remote", level: "Mid-Senior" },
  { title: "UI/UX Designer", dept: "Design", type: "Remote", level: "Mid" },
  { title: "Project Manager", dept: "Operations", type: "Remote", level: "Senior" },
];

const Careers = () => {
  return (
    <div className="pt-20">
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-bg-hero opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="Careers"
            title="Join Our Team"
            description="Build the future with us. We're looking for talented, passionate people who want to make an impact."
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Perks" title="Why Work With Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }} className="glass-card rounded-xl p-8 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <b.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-bg-hero opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading badge="Open Roles" title="Current Openings" />
          <div className="space-y-4 max-w-4xl mx-auto">
            {openings.map((job, i) => (
              <motion.div key={job.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }} className="glass-card rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:glow-border transition-all duration-500">
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground">{job.title}</h3>
                  <div className="flex gap-3 mt-1">
                    <span className="text-xs text-muted-foreground">{job.dept}</span>
                    <span className="text-xs text-primary">{job.type}</span>
                    <span className="text-xs text-muted-foreground">{job.level}</span>
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-primary/30 text-primary text-sm font-medium hover:bg-primary/10 transition-all">
                  Apply <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
