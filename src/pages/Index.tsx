import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
