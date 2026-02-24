import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Globe, Code, BarChart3, Users, Cpu, Cloud, Smartphone, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import heroBg from "../assets/hero-bg.jpg";
import dashboardMockup from "../assets/dashboard-mockup.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  { icon: Code, title: "Custom Software", desc: "Tailored solutions built for your unique needs" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native Android & iOS applications" },
  { icon: Globe, title: "Web Applications", desc: "Scalable, modern web platforms" },
  { icon: BarChart3, title: "ERP & CRM", desc: "Enterprise resource planning systems" },
  { icon: Cloud, title: "Cloud & SaaS", desc: "Cloud-native platforms that scale" },
  { icon: Cpu, title: "AI & Automation", desc: "Intelligent systems powered by AI" },
];

const whyUs = [
  { icon: Zap, title: "Lightning Fast", desc: "Rapid development with agile methodologies" },
  { icon: Shield, title: "Enterprise Security", desc: "Bank-grade security for all applications" },
  { icon: Globe, title: "Global Scale", desc: "Infrastructure built for millions of users" },
  { icon: Users, title: "Dedicated Teams", desc: "Expert engineers assigned to your project" },
];

const industries = [
  "eCommerce", "Financial & Trading", "Construction", "Healthcare", "Small Business", "Enterprise",
];

const techStack = [
  "React", "Node.js", "Python", "TypeScript", "AWS", "Azure", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "TensorFlow", "Flutter",
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO, TechFlow Inc.", text: "AMRODEK transformed our legacy system into a modern, scalable platform. Exceptional team and delivery.", rating: 5 },
  { name: "Michael Torres", role: "CEO, BuildRight", text: "Their construction management software saved us 40% in project overhead. Highly recommended.", rating: 5 },
  { name: "Emma Williams", role: "VP Engineering, FinEdge", text: "The trading platform they built handles millions of transactions daily without a hitch.", rating: 5 },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 gradient-bg-hero" />
          <div className="absolute inset-0 bg-background/40" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <Zap size={14} />
                <span>Next-Gen Software Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                Transforming Ideas into{" "}
                <span className="gradient-text">Powerful Software</span>{" "}
                Solutions
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                We build innovative, scalable, and reliable software that empowers businesses worldwide. From startups to enterprises.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-bg-primary text-primary-foreground font-semibold transition-all hover:opacity-90 neon-glow"
                >
                  Get a Free Consultation <ArrowRight size={18} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border/50 text-foreground font-semibold transition-all hover:bg-muted/30 hover:border-primary/30"
                >
                  View Our Services
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                {[
                  { num: "200+", label: "Projects Delivered" },
                  { num: "50+", label: "Global Clients" },
                  { num: "99%", label: "Client Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-display font-bold gradient-text">{stat.num}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-neon-cyan/20 rounded-2xl blur-xl" />
                <img src={dashboardMockup} alt="Dashboard" className="relative rounded-2xl border border-border/30 shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="What We Do"
            title="Our Core Services"
            description="End-to-end software development solutions for every business need"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl p-8 group cursor-pointer transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-bg-hero opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="Why AMRODEK"
            title="Why Choose Us"
            description="We deliver excellence at every stage of the development process"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center space-y-4 p-8 rounded-xl glass-card"
              >
                <div className="w-16 h-16 rounded-xl gradient-bg-primary flex items-center justify-center mx-auto animate-pulse-glow">
                  <item.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Industries"
            title="Industries We Serve"
            description="Deep domain expertise across multiple sectors"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-xl p-6 text-center cursor-pointer group"
              >
                <Globe size={32} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <p className="font-medium text-sm text-foreground">{ind}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-bg-hero opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="Testimonials"
            title="What Our Clients Say"
            description="Trusted by leading companies worldwide"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card rounded-xl p-8 space-y-4"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Technology"
            title="Technologies We Use"
            description="Modern, battle-tested technologies for robust solutions"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech}
                {...fadeUp}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-6 py-3 rounded-full glass-card text-sm font-medium text-foreground hover:border-primary/40 cursor-default transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative rounded-2xl overflow-hidden p-12 md:p-16 text-center"
          >
            <div className="absolute inset-0 gradient-bg-primary opacity-90" />
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-primary-foreground/80">
                Let's discuss your project and turn your vision into reality.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-background text-foreground font-semibold transition-all hover:bg-background/90"
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
