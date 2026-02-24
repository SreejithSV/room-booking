import { motion } from "framer-motion";
import { ShoppingCart, TrendingUp, Building2, HeartPulse, Briefcase, Server, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const industries = [
  { icon: ShoppingCart, title: "eCommerce Solutions", desc: "Custom online stores, marketplace platforms, and omnichannel retail systems that drive revenue and enhance customer experiences.", cta: "Explore eCommerce" },
  { icon: TrendingUp, title: "Financial & Trading Platforms", desc: "High-frequency trading systems, payment gateways, and fintech solutions built for speed, security, and compliance.", cta: "Explore FinTech" },
  { icon: Building2, title: "Construction & Real Estate", desc: "Project management, BIM integration, and property management platforms that streamline operations.", cta: "Explore Construction" },
  { icon: HeartPulse, title: "Healthcare Systems", desc: "HIPAA-compliant EHR systems, telemedicine platforms, and medical data analytics solutions.", cta: "Explore Healthcare" },
  { icon: Briefcase, title: "Small Business Tools", desc: "Affordable, powerful tools for invoicing, inventory, CRM, and operations management.", cta: "Explore SMB Tools" },
  { icon: Server, title: "Enterprise Systems", desc: "Large-scale enterprise solutions including ERP, data warehousing, and business intelligence platforms.", cta: "Explore Enterprise" },
];

const Industries = () => {
  return (
    <div className="pt-20">
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-bg-hero opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="Industries"
            title="Solutions for Every Industry"
            description="Deep domain expertise across sectors, delivering specialized software that understands your business."
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 space-y-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:glow-border transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <ind.icon size={32} className="text-primary" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-display font-semibold text-2xl text-foreground">{ind.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{ind.desc}</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-medium text-sm hover:bg-primary/10 transition-all shrink-0">
                {ind.cta} <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Industries;
