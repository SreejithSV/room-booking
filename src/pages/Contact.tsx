import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", projectType: "", budget: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <div className="pt-20">
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-bg-hero opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading badge="Contact" title="Let's Build Together" description="Tell us about your project and we'll get back to you within 24 hours." />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Info */}
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email Us", value: "hello@amrodek.com", href: "mailto:hello@amrodek.com" },
                { icon: Phone, label: "Call Us", value: "+1 (234) 567-890", href: "tel:+1234567890" },
                { icon: MapPin, label: "Visit Us", value: "Global Offices", href: "#" },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/1234567890" },
              ].map((item, i) => (
                <motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" {...fadeUp} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 glass-card rounded-xl p-6 hover:glow-border transition-all duration-500 ">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Form */}
            <motion.div {...fadeUp} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                    { name: "email", label: "Email", type: "email", placeholder: "john@company.com" },
                    { name: "company", label: "Company", type: "text", placeholder: "Your company" },
                    { name: "budget", label: "Budget Range", type: "text", placeholder: "$10k - $50k" },
                  ].map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{field.label}</label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Select project type</option>
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="erp">ERP/CRM System</option>
                    <option value="saas">SaaS Platform</option>
                    <option value="ecommerce">eCommerce</option>
                    <option value="ai">AI/Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Details</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-bg-primary text-primary-foreground font-semibold hover:opacity-90 neon-glow transition-all w-full justify-center">
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
