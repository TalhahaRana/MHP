import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Fur-Ever Friends</h3>
                <p className="text-sm text-background/70">Foundation</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              Rescuing, rehabilitating, and rehoming animals in need for over 15 years. 
              Every animal deserves love and a second chance.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 text-background hover:text-primary hover:bg-background/10 hover-scale">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 text-background hover:text-primary hover:bg-background/10 hover-scale">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 text-background hover:text-primary hover:bg-background/10 hover-scale">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#animals" className="text-background/80 hover:text-primary transition-colors">
                  Find a Pet
                </a>
              </li>
              <li>
                <a href="#get-involved" className="text-background/80 hover:text-primary transition-colors">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#stories" className="text-background/80 hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Pet Adoption
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Foster Program
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Medical Care
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Spay/Neuter
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Training Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80">123 Rescue Lane</p>
                  <p className="text-background/80">Animal City, AC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:(555) 123-PETS" className="text-background/80 hover:text-primary transition-colors">
                  (555) 123-PETS
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@fureverfiends.org" className="text-background/80 hover:text-primary transition-colors">
                  info@fureverfiends.org
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Emergency Rescue</h5>
              <p className="text-background/80 text-sm mb-2">24/7 Emergency Line:</p>
              <a href="tel:(555) 911-HELP" className="text-primary font-semibold">
                (555) 911-HELP
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-background/80 mb-6">
              Get the latest news about our rescues, adoption events, and ways to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-foreground border border-background/20 focus:outline-none focus:border-primary"
              />
              <Button variant="default" className="bg-primary hover:bg-primary/90 hover-scale">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Fur-Ever Friends Foundation. All rights reserved. | 
            <a href="#" className="hover:text-primary transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-primary transition-colors ml-1">Terms of Service</a>
          </p>
          <p className="text-background/60 text-sm mt-2">
            Fur-Ever Friends Foundation is a 501(c)(3) non-profit organization. EIN: 12-3456789
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;