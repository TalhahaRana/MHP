import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Award } from "lucide-react";
import circleDog from "@/assets/circle-dog.jpg";
import circleCat from "@/assets/circle-cat.jpg";
import circlePuppy from "@/assets/circle-puppy.jpg";

const MissionSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/10 rounded-full"></div>
        <div className="absolute bottom-32 -right-40 w-80 h-80 bg-accent/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-secondary/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Our Mission
                <span className="block text-primary">Changes Lives</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Every act of kindness sparks a chain reaction. Whether it's offering a warm meal or rescuing an injured stray our mission brings hope and healing to animals—and to the hearts of those who help them.
              </p>
            </div>

            {/* Mission Points */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center group-hover:animate-bounce-gentle">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Feed the Hungry</h4>
                  <p className="text-muted-foreground">Daily street feeding drives ensure no stray goes to sleep on an empty stomach.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center group-hover:animate-bounce-gentle">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Rescue & Heal</h4>
                  <p className="text-muted-foreground">From injury to recovery, we provide critical care and medical treatment</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center group-hover:animate-bounce-gentle">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Inspire Compassion</h4>
                  <p className="text-muted-foreground">CarOur work brings communities together through empathy and action.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Side with Overlapping Circles */}
          <div className="relative">
            {/* Main Circle - Dog */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-warm rounded-full p-4 animate-glow">
                <img 
                  src={circleDog} 
                  alt="Rescued dog" 
                  className="w-full h-full object-cover rounded-full hover-scale"
                />
              </div>
              
              {/* Overlapping Circle - Cat (top right, half outside) */}
              <div className="absolute -top-16 -right-20 w-48 h-48 bg-gradient-to-br from-accent to-primary rounded-full p-3 animate-fade-in">
                <img 
                  src={circleCat} 
                  alt="Rescued cat" 
                  className="w-full h-full object-cover rounded-full hover-scale"
                />
              </div>
              
              {/* Overlapping Circle - Puppy (bottom left, half outside) */}
              <div className="absolute -bottom-12 -left-16 w-40 h-40 bg-gradient-to-tr from-primary to-accent rounded-full p-3 animate-fade-in">
                <img 
                  src={circlePuppy} 
                  alt="Rescued puppy" 
                  className="w-full h-full object-cover rounded-full hover-scale"
                />
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute top-10 left-0 animate-fade-in">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-warm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </CardContent>
              </Card>
            </div>

            <div className="absolute bottom-20 right-0 animate-fade-in">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-warm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Care</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;