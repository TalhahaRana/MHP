import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
      <FeaturedAnimals />
      <ImpactSection />
      <GetInvolved />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default Index;
