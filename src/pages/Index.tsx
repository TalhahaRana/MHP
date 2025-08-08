import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import MissionSection from "@/components/MissionSection";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import ImpactSection from "@/components/ImpactSection";
import GetInvolved from "@/components/GetInvolved";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MissionSection />
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Every Paw Deserves Love & Care
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Help us feed the hungry, rescue the forgotten, and build a shelter where every paw feels safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/shelter">
                <Button size="lg" className="animate-glow">
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Shelter
                </Button>
              </a>
              <Button size="lg" variant="outline">
                Learn More About Our Vision
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* <FeaturedAnimals /> */}
      {/* <ImpactSection /> */}
      <GetInvolved />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default Index;
