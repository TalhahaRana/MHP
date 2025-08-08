import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
              {/* <Heart className="w-6 h-6 text-white" /> */}
              <a href="/">
                <img src="/src/assets/logo.jpg" alt="Logo" className="w-8 h-8" />
              </a>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Mission Hunger Paws</h1>
              <p className="text-xs text-muted-foreground">Foundation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            
            <a href="/story" className="text-foreground hover:text-primary transition-colors">
              Our Story
            </a>
            <a href="#get-involved" className="text-foreground hover:text-primary transition-colors">
              Get Involved
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hover-scale">
              Sponsor a Pet
            </Button>
            <Button variant="donate" size="sm" className="animate-glow">
              <Heart className="w-4 h-4 mr-2" />
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="/about"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#animals"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Find a Pet
              </a>
              <a
                href="/story"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </a>
              <a
                href="#get-involved"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Involved
              </a>
              <a
                href="#stories"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Sponsor a Pet
                </Button>
                <Button variant="donate" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;