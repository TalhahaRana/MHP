import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Calendar } from "lucide-react";
import catProfile from "@/assets/cat-profile.jpg";
import dogProfile from "@/assets/dog-profile.jpg";
import puppyProfile from "@/assets/puppy-profile.jpg";

const animals = [
  {
    id: 1,
    name: "Luna",
    type: "Cat",
    age: "2 years",
    location: "Foster Care",
    image: catProfile,
    description: "Sweet and gentle cat who loves cuddles and sunny windowsills. Great with children and other pets.",
    urgent: false,
  },
  {
    id: 2,
    name: "Max",
    type: "Dog",
    age: "4 years",
    location: "Main Shelter",
    image: dogProfile,
    description: "Loyal and friendly dog who enjoys walks and playing fetch. Well-trained and house-broken.",
    urgent: true,
  },
  {
    id: 3,
    name: "Charlie",
    type: "Puppy",
    age: "6 months",
    location: "Foster Care",
    image: puppyProfile,
    description: "Playful puppy full of energy and love. Looking for an active family to grow up with.",
    urgent: false,
  },
];

const FeaturedAnimals = () => {
  return (
    <section id="animals" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Your New Best Friend
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These amazing animals are ready to find their forever homes. 
            Each one has been lovingly cared for and is waiting for a family to love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {animals.map((animal) => (
            <Card key={animal.id} className="overflow-hidden hover:shadow-warm transition-all duration-300 hover:-translate-y-2 group animate-scale-in">
              <div className="relative">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {animal.urgent && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Urgent
                  </Badge>
                )}
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {animal.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground">{animal.name}</h3>
                  <Button size="sm" variant="ghost" className="p-2 hover-scale">
                    <Heart className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </Button>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{animal.age}</span>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{animal.location}</span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {animal.description}
                </p>
                
                <div className="flex gap-3">
                  <Button variant="default" className="flex-1 hover-scale">
                    Meet {animal.name}
                  </Button>
                  <Button variant="outline" size="sm" className="hover-scale">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 hover-scale">
            View All Available Pets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;