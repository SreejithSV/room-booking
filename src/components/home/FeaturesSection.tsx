import { motion } from "framer-motion";
import { Utensils, Dumbbell, Sparkles, Car, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "World-class restaurants featuring Michelin-starred chefs and exquisite cuisines from around the globe.",
  },
  {
    icon: Sparkles,
    title: "Spa & Wellness",
    description: "Rejuvenate your senses with our award-winning spa treatments and holistic wellness programs.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art equipment and personal trainers available 24/7 for your fitness goals.",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Complimentary valet parking service with secure underground facilities for all guests.",
  },
  {
    icon: Clock,
    title: "24/7 Concierge",
    description: "Our dedicated concierge team is available around the clock to fulfill your every request.",
  },
  {
    icon: Shield,
    title: "Premium Security",
    description: "Advanced security systems and trained personnel ensure your peace of mind throughout your stay.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4">
            World-Class Amenities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Exceptional Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From fine dining to wellness retreats, discover the comprehensive range of
            amenities designed for the most discerning guests.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-8 rounded-2xl shadow-sm hover:shadow-luxury transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
