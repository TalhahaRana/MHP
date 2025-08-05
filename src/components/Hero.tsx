import { Button } from "@/components/ui/button";
import { Heart, PawPrint } from "lucide-react";
import heroImage from "@/assets/hero-animals.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <PawPrint className="w-16 h-16 mx-auto mb-4 text-white/90" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Every Animal Deserves
          <span className="block text-accent">Love & Care</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Join us in rescuing, rehabilitating, and rehoming animals in need. 
          Together, we can give them the second chance they deserve.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Heart className="w-5 h-5 mr-3" />
            Adopt a Friend
          </Button>
          
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
            Learn Our Story
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-accent mb-2">2,500+</div>
            <div className="text-white/80">Animals Rescued</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-accent mb-2">1,800+</div>
            <div className="text-white/80">Forever Homes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-white/80">Years of Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;