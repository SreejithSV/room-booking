import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const plans = [
  {
    name: "Startup",
    price: "$4,999",
    period: "starting from",
    desc: "Perfect for MVPs and early-stage startups",
    features: ["Custom web application", "Responsive design", "Basic integrations", "3 months support", "Source code ownership", "Deployment setup"],
    popular: false,
  },
  {
    name: "Business",
    price: "$14,999",
    period: "starting from",
    desc: "For growing businesses that need robust solutions",
    features: ["Full-stack development", "Mobile + Web apps", "Advanced integrations", "6 months support", "CI/CD pipeline", "Performance optimization", "Analytics dashboard", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored quote",
    desc: "For large-scale, mission-critical systems",
    features: ["Enterprise architecture", "Microservices", "AI/ML integration", "24/7 dedicated support", "SLA guarantees", "Security audit", "Scalability planning", "Dedicated team", "Custom SLA"],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="pt-20">
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-bg-hero opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading badge="Pricing" title="Transparent Pricing" description="Flexible plans designed to fit your project scope and budget" />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`rounded-xl p-8 space-y-6 relative transition-all duration-500 ${plan.popular ? "gradient-bg-primary neon-glow scale-105" : "glass-card hover:glow-border"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-background text-foreground text-xs font-bold flex items-center gap-1">
                    <Zap size={12} /> Most Popular
                  </div>
                )}
                <div>
                  <h3 className={`font-display font-semibold text-xl ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>{plan.name}</h3>
                  <p className={`text-sm mt-1 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{plan.desc}</p>
                </div>
                <div>
                  <span className={`text-4xl font-display font-bold ${plan.popular ? "text-primary-foreground" : "gradient-text"}`}>{plan.price}</span>
                  <span className={`text-sm ml-2 ${plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{plan.period}</span>
                </div>
                <div className="space-y-3">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check size={16} className={plan.popular ? "text-primary-foreground" : "text-primary"} />
                      <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-sm transition-all ${plan.popular ? "bg-background text-foreground hover:bg-background/90" : "border border-primary/30 text-primary hover:bg-primary/10"}`}
                >
                  Get Started <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Custom Quote */}
          <motion.div {...fadeUp} className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Need something different? We create custom quotes for unique requirements.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-bg-primary text-primary-foreground font-semibold hover:opacity-90 neon-glow transition-all">
              Request Custom Quote <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
