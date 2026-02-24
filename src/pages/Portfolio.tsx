import { motion } from "framer-motion";
import { useState } from "react";
import {  BarChart3, TrendingUp, Filter } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import dashboardMockup from "../assets/dashboard-mockup.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const categories = ["All", "eCommerce", "FinTech", "Enterprise", "Healthcare", "SaaS"];

const projects = [
  { title: "TradeFlow Pro", category: "FinTech", desc: "High-frequency trading platform handling 10M+ transactions daily", metric: "99.99% Uptime", growth: "+340% Trading Volume" },
  { title: "ShopSphere", category: "eCommerce", desc: "Multi-vendor marketplace with AI-powered recommendations", metric: "$2M+ GMV", growth: "+280% Conversion" },
  { title: "BuildManager", category: "Enterprise", desc: "Construction project management with real-time collaboration", metric: "500+ Projects", growth: "-40% Overhead" },
  { title: "MedConnect", category: "Healthcare", desc: "Telemedicine platform connecting doctors and patients globally", metric: "50K+ Consultations", growth: "+200% Engagement" },
  { title: "CloudERP", category: "SaaS", desc: "Cloud-native ERP system for mid-market companies", metric: "200+ Companies", growth: "+150% Efficiency" },
  { title: "PaymentHub", category: "FinTech", desc: "Unified payment gateway supporting 40+ payment methods", metric: "$5M+ Processed", growth: "+420% Volume" },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-20">
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-bg-hero opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading badge="Portfolio" title="Our Work Speaks for Itself" description="Case studies from projects that delivered measurable results" />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === cat ? "gradient-bg-primary text-primary-foreground" : "glass-card text-muted-foreground hover:text-foreground"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }} className="glass-card rounded-xl overflow-hidden group hover:glow-border transition-all duration-500">
                <div className="aspect-video relative overflow-hidden">
                  <img src={dashboardMockup} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass text-xs text-primary">{p.category}</div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-semibold text-xl text-foreground">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                  <div className="flex gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-primary"><BarChart3 size={12} />{p.metric}</div>
                    <div className="flex items-center gap-1.5 text-xs text-neon-cyan"><TrendingUp size={12} />{p.growth}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
