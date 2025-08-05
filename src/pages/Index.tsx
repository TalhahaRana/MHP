import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import GetInvolved from "@/components/GetInvolved";
import SuccessStories from "@/components/SuccessStories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <FeaturedAnimals />
      <GetInvolved />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default Index;
