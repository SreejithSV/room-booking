import { motion } from "framer-motion";
import { CalendarDays, Users, Search } from "lucide-react";
import { Button } from "../ui/button";
import heroImage from "../../assets/hero-hotel.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury hotel lobby"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm tracking-[0.3em] uppercase mb-6"
          >
            Welcome to Grandeur
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-tight mb-6"
          >
            Experience
            <span className="block text-gradient-gold">Unmatched Luxury</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Discover a world where elegance meets comfort. Our award-winning hospitality
            ensures every stay is an unforgettable journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="gold" size="xl">
              Book Your Stay
            </Button>
            <Button variant="hero-outline" size="xl">
              Explore Rooms
            </Button>
          </motion.div>
        </div>

        {/* Booking Widget */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-luxury p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Check In */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Check In</label>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background hover:border-accent transition-colors cursor-pointer">
                  <CalendarDays className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Select Date</span>
                </div>
              </div>

              {/* Check Out */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Check Out</label>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background hover:border-accent transition-colors cursor-pointer">
                  <CalendarDays className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Select Date</span>
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Guests</label>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-background hover:border-accent transition-colors cursor-pointer">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-foreground">2 Adults, 1 Room</span>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button variant="gold" size="xl" className="w-full gap-2">
                  <Search className="w-5 h-5" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
