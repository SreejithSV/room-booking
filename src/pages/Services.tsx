import { motion } from "framer-motion";
import { Code, Smartphone, BarChart3, Cloud, Cpu, Palette, Wrench, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const services = [
  { icon: Code, title: "Custom Software Development", desc: "Bespoke software solutions designed to solve your unique business challenges. We architect, build, and deploy systems that drive growth.", features: ["Full-cycle development", "Legacy modernization", "API development"] },
  { icon: Smartphone, title: "Web & Mobile Apps", desc: "Cross-platform mobile and responsive web applications with stunning UX and robust performance.", features: ["React Native & Flutter", "Progressive Web Apps", "App Store deployment"] },
  { icon: BarChart3, title: "ERP & CRM Systems", desc: "Enterprise resource planning and customer relationship management systems tailored to your workflow.", features: ["Process automation", "Real-time analytics", "Custom integrations"] },
  { icon: Cloud, title: "SaaS Development", desc: "Cloud-native SaaS platforms built for scale, security, and multi-tenancy from day one.", features: ["Multi-tenant architecture", "Subscription billing", "Usage analytics"] },
  { icon: Cpu, title: "AI & Automation", desc: "Intelligent systems powered by machine learning, NLP, and computer vision to automate and optimize.", features: ["Predictive analytics", "Natural language processing", "Computer vision"] },
  { icon: Globe, title: "Cloud Solutions", desc: "Cloud migration, infrastructure setup, and managed services on AWS, Azure, and GCP.", features: ["Cloud migration", "DevOps & CI/CD", "Infrastructure as Code"] },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered design that delights. From wireframes to pixel-perfect interfaces.", features: ["User research", "Prototyping", "Design systems"] },
  { icon: Wrench, title: "Maintenance & Support", desc: "24/7 monitoring, updates, and support to keep your systems running at peak performance.", features: ["24/7 monitoring", "Performance optimization", "Security updates"] },
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-bg-hero opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="Our Services"
            title="Full-Stack Software Solutions"
            description="From concept to deployment and beyond — we handle every aspect of your software journey with precision and expertise."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl p-8 group hover:glow-border transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <s.icon size={28} className="text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display font-semibold text-xl text-foreground">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {s.features.map((f) => (
                        <span key={f} className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs border border-primary/10">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="relative rounded-2xl overflow-hidden p-12 md:p-16 text-center">
            <div className="absolute inset-0 gradient-bg-primary opacity-90" />
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">Need a Custom Solution?</h2>
              <p className="text-primary-foreground/80">Let's discuss your requirements and find the perfect approach for your project.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-background text-foreground font-semibold hover:bg-background/90 transition-all">
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
