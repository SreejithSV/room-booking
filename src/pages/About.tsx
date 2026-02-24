import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Shield, Heart, Award, Search, FileText, Code, TestTube, Rocket, Headphones } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import teamPhoto from"../assets/team-photo.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const process = [
  { icon: Search, title: "Discovery", desc: "Understanding your business needs and goals" },
  { icon: FileText, title: "Planning", desc: "Architecture design and project roadmap" },
  { icon: Code, title: "Development", desc: "Agile sprints with continuous delivery" },
  { icon: TestTube, title: "Testing", desc: "Rigorous QA and performance testing" },
  { icon: Rocket, title: "Deployment", desc: "Smooth launch with zero downtime" },
  { icon: Headphones, title: "Support", desc: "Ongoing maintenance and optimization" },
];

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries with cutting-edge technology" },
  { icon: Shield, title: "Integrity", desc: "Transparent communication and honest partnerships" },
  { icon: Award, title: "Excellence", desc: "Uncompromising quality in every line of code" },
  { icon: Heart, title: "Customer-First", desc: "Your success is our ultimate measure" },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-bg-hero opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="About Us"
            title="Building the Future of Software"
            description="We are a team of passionate engineers, designers, and strategists dedicated to delivering world-class software solutions."
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeUp} className="glass-card rounded-xl p-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target size={28} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-2xl text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">To empower businesses worldwide with innovative software solutions that drive growth, efficiency, and competitive advantage. We believe great software should be accessible to every company, regardless of size.</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="glass-card rounded-xl p-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Eye size={28} className="text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-2xl text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">To become a global leader in custom software development, recognized for innovation, reliability, and transformative impact on businesses across every industry.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-bg-hero opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading badge="Our Team" title="Meet the Experts" description="A diverse, talented team of engineers and innovators" />
          <motion.div {...fadeUp} className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-neon-cyan/20 rounded-2xl blur-lg" />
            <img src={teamPhoto} alt="AMRODEK Team" className="relative rounded-2xl w-full" />
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Our Process" title="How We Work" description="A proven methodology that delivers results on time, every time" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {process.map((step, i) => (
              <motion.div key={step.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }} className="text-center space-y-3">
                <div className="w-14 h-14 rounded-xl gradient-bg-primary flex items-center justify-center mx-auto">
                  <step.icon size={24} className="text-primary-foreground" />
                </div>
                <div className="text-xs font-bold text-primary">STEP {i + 1}</div>
                <h4 className="font-display font-semibold text-foreground">{step.title}</h4>
                <p className="text-muted-foreground text-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading badge="Values" title="What Drives Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }} className="glass-card rounded-xl p-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <v.icon size={28} className="text-primary" />
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground">{v.title}</h4>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
