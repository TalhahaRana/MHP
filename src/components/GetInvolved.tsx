import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, HandHeart, DollarSign, Calendar, Users, Gift } from "lucide-react";

const ways = [
  {
    icon: DollarSign,
    title: "Donate",
    description: "Your contribution helps us provide medical care, food, and shelter for animals in need.",
    action: "Donate Now",
    color: "bg-accent",
  },
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Share your time and skills to help care for animals and support our mission.",
    action: "Join Us",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Spread Awareness",
    description: "Help us reach more people by sharing our mission on social media and with friends.",
    action: "Share Story",
    color: "bg-accent",
  },
];

const GetInvolved = () => {
  return (
    <section id="get-involved" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How You Can Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to make a difference in the lives of animals. 
            Whether you have 5 minutes or 5 hours, every contribution matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-border/50 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${way.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <way.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{way.title}</h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {way.description}
                </p>
                
                <Button 
                  variant={way.color === "bg-primary" ? "default" : "donate"}
                  className="w-full group-hover:scale-105 transition-transform duration-300 hover-scale"
                >
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="mt-16 bg-gradient-warm rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Shelter Fund</h3>
          <p className="text-xl mb-6 opacity-90">
            Help us respond to urgent rescue situations and provide immediate medical care.
          </p>
          <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
            Shelter Fund
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;