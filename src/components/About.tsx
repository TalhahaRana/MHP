import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Shield, Home, Users } from "lucide-react";

const stats = [
  { icon: Utensils, value: "10,000+", label: "Meals Served to Strays" },
  { icon: Home, value: "500+", label: "Animal Rescues" },
  { icon: Shield, value: "100%", label: "No-Profit" },
  { icon: Users, value: "100+", label: "Active Volunteers" },
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
              At Mission Hungry Paws, our mission is simple—but deeply profound:
              to bring love, nourishment, and care to every stray animal we
              meet. We believe that compassion is not a luxury—it’s a
              responsibility. Every animal, no matter how small or forgotten,
              deserves to be seen, fed, healed, and loved.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Driven by empathy and
              powered by community support, we work every day to feed the
              hungry, rescue the wounded, comfort the abandoned, and speak up
              for those who have no voice. For us, this is not just a cause—it’s
              a calling.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Utensils className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Compassionate Care
                  </h4>
                  <p className="text-muted-foreground">
                    Every animal receives individualized attention and medical
                    care.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Shield className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    No-Kill Philosophy
                  </h4>
                  <p className="text-muted-foreground">
                    We never euthanize healthy animals due to space or time
                    limits.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Home className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Perfect Matches
                  </h4>
                  <p className="text-muted-foreground">
                    Our thorough process ensures lasting bonds between pets and
                    families.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 hover-scale group"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
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
