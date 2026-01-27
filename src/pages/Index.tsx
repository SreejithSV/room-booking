import { CTASection } from "../components/home/CTASection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { HeroSection } from "../components/home/HeroSection";
import { RoomsSection } from "../components/home/RoomsSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <RoomsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
