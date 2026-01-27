import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alexandra Mitchell",
    role: "CEO, Global Ventures",
    content: "An absolutely extraordinary experience. The attention to detail and personalized service exceeded all expectations. This is luxury redefined.",
    rating: 5,
    avatar: "A",
  },
  {
    id: 2,
    name: "James Wellington",
    role: "Travel Journalist",
    content: "Having stayed in hotels around the world, Grandeur stands in a class of its own. The perfect blend of elegance, comfort, and impeccable service.",
    rating: 5,
    avatar: "J",
  },
  {
    id: 3,
    name: "Sofia Rodriguez",
    role: "Interior Designer",
    content: "The architecture and design are breathtaking. Every corner reveals thoughtful details that make you feel truly special. A masterpiece of hospitality.",
    rating: 5,
    avatar: "S",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
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
            Guest Experiences
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            What Our Guests Say
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Discover why discerning travelers from around the world choose Grandeur
            for their most memorable stays.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-primary-foreground/5 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/10"
            >
              <Quote className="w-10 h-10 text-accent/30 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
