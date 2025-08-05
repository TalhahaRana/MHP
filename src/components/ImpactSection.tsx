import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, Quote } from "lucide-react";
import circleDog from "@/assets/circle-dog.jpg";
import circleCat from "@/assets/circle-cat.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    pet: "Bella",
    location: "Denver, CO",
    rating: 5,
    text: "The team at Fur-Ever Friends made our adoption process so smooth and caring. Bella has brought endless joy to our family!",
    time: "3 months ago"
  },
  {
    name: "Mike Chen",
    pet: "Whiskers",
    location: "Austin, TX", 
    rating: 5,
    text: "I can't imagine life without Whiskers now. The support and follow-up care has been incredible.",
    time: "6 months ago"
  }
];

const ImpactSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-bl from-accent/5 to-primary/10 relative overflow-hidden">
      {/* Full-screen box background */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-transparent"></div>
      
      {/* Decorative circles that extend beyond the section */}
      <div className="absolute -top-32 -right-48 w-96 h-96 bg-primary/20 rounded-full animate-glow"></div>
      <div className="absolute -bottom-40 -left-52 w-80 h-80 bg-accent/15 rounded-full"></div>
      <div className="absolute top-1/3 -left-24 w-48 h-48 bg-secondary/30 rounded-full"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Visual Side with Large Overlapping Circles */}
          <div className="relative order-2 lg:order-1">
            {/* Large main circle extending beyond container */}
            <div className="relative w-96 h-96 -ml-20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full p-6 shadow-warm animate-scale-in">
                <img 
                  src={circleDog} 
                  alt="Happy rescued dog" 
                  className="w-full h-full object-cover rounded-full hover-scale"
                />
              </div>
              
              {/* Overlapping circle extending beyond main circle */}
              <div className="absolute -top-20 -right-32 w-56 h-56 bg-gradient-to-tl from-accent to-secondary rounded-full p-4 animate-fade-in">
                <img 
                  src={circleCat} 
                  alt="Content rescued cat" 
                  className="w-full h-full object-cover rounded-full hover-scale"
                />
              </div>

              {/* Small accent circle */}
              <div className="absolute -bottom-16 -left-12 w-32 h-32 bg-gradient-warm rounded-full animate-bounce-gentle"></div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute top-0 right-0 animate-fade-in">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-soft hover-scale">
                <CardContent className="p-6 text-center">
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary mb-1">4.9</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </CardContent>
              </Card>
            </div>

            <div className="absolute bottom-10 left-10 animate-fade-in">
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-soft hover-scale">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-accent mb-1">2-3</div>
                  <div className="text-sm text-muted-foreground">Days Avg Process</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2 animate-fade-in">
            <div>
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                Real Stories, Real Impact
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Families 
                <span className="block text-primary">Transformed</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                See how our rescue animals have transformed the lives of families 
                across the country. Every adoption creates a ripple of happiness 
                that extends far beyond just one home.
              </p>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-soft transition-all duration-300 hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Quote className="w-8 h-8 text-primary/50 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-muted-foreground mb-4 italic leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-foreground">
                              {testimonial.name} & {testimonial.pet}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <MapPin className="w-3 h-3 mr-1" />
                              {testimonial.location}
                              <span className="mx-2">•</span>
                              <Clock className="w-3 h-3 mr-1" />
                              {testimonial.time}
                            </div>
                          </div>
                          
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-primary fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="hover-scale">
                Read More Stories
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                Share Your Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;