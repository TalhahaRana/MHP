import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Home, Users } from "lucide-react";

const stats = [
  { icon: Heart, value: "2,500+", label: "Animals Rescued" },
  { icon: Home, value: "1,800+", label: "Successful Adoptions" },
  { icon: Shield, value: "100%", label: "No-Kill Policy" },
  { icon: Users, value: "500+", label: "Active Volunteers" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Mission of
              <span className="text-primary block">Love & Compassion</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, Fur-Ever Friends Foundation has been dedicated to rescuing, 
              rehabilitating, and rehoming animals in need. We believe every animal deserves 
              a chance at happiness and a loving forever home.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive approach includes emergency rescue operations, medical care, 
              behavioral rehabilitation, and a thorough adoption process to ensure perfect 
              matches between pets and families.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Heart className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Compassionate Care</h4>
                  <p className="text-muted-foreground">Every animal receives individualized attention and medical care.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">No-Kill Philosophy</h4>
                  <p className="text-muted-foreground">We never euthanize healthy animals due to space or time limits.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Home className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Perfect Matches</h4>
                  <p className="text-muted-foreground">Our thorough process ensures lasting bonds between pets and families.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 hover-scale group">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;