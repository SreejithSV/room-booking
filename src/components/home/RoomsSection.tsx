import { motion } from "framer-motion";
import { ArrowRight, Bed, Bath, Wifi, Coffee } from "lucide-react";
import { Button } from "../ui/button";
import roomSuite from "../../assets/room-suite.jpg";
import roomDeluxe from "../../assets/room-deluxe.jpg";
import roomPresidential from "../../assets/room-presidential.jpg";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Elegant comfort with city views and premium amenities for the discerning traveler.",
    price: 350,
    image: roomDeluxe,
    features: [
      { icon: Bed, label: "King Bed" },
      { icon: Bath, label: "Marble Bath" },
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Coffee, label: "Mini Bar" },
    ],
    size: "45 m²",
  },
  {
    id: 2,
    name: "Executive Suite",
    description: "Spacious luxury with separate living area, perfect for extended stays and business travelers.",
    price: 550,
    image: roomSuite,
    features: [
      { icon: Bed, label: "King Bed" },
      { icon: Bath, label: "Spa Bath" },
      { icon: Wifi, label: "High-Speed WiFi" },
      { icon: Coffee, label: "Full Bar" },
    ],
    size: "75 m²",
    featured: true,
  },
  {
    id: 3,
    name: "Presidential Suite",
    description: "The pinnacle of luxury living with panoramic views, private butler, and exclusive amenities.",
    price: 1200,
    image: roomPresidential,
    features: [
      { icon: Bed, label: "Master Bedroom" },
      { icon: Bath, label: "Jacuzzi" },
      { icon: Wifi, label: "Private WiFi" },
      { icon: Coffee, label: "Private Kitchen" },
    ],
    size: "150 m²",
  },
];

export function RoomsSection() {
  return (
    <section className="py-24 bg-background">
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
            Accommodations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Rooms & Suites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each room is a sanctuary of refined elegance, designed to provide the ultimate
            comfort while maintaining the highest standards of luxury.
          </p>
        </motion.div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-luxury transition-all duration-500 ${
                room.featured ? "lg:-mt-4 lg:mb-4" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {room.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-gold text-primary text-xs font-semibold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm text-foreground text-sm font-medium px-3 py-1.5 rounded-lg">
                  {room.size}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{room.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <feature.icon className="w-4 h-4 text-accent" />
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-serif font-semibold text-foreground">
                      ${room.price}
                    </span>
                    <span className="text-muted-foreground text-sm"> / night</span>
                  </div>
                  <Button variant="luxury-outline" size="sm" className="gap-2">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="luxury" size="lg">
            View All Accommodations
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
