import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock, MapPin } from "lucide-react";

const stories = [
  {
    id: 1,
    petName: "Bella",
    familyName: "The Johnson Family",
    timeframe: "2 months ago",
    location: "Denver, CO",
    story: "Bella was found injured on the highway, but after months of rehabilitation, she found her perfect match with the Johnsons. Now she's living her best life hiking and playing with their kids!",
    before: "Injured and scared",
    after: "Happy and loved",
    image: "🐕"
  },
  {
    id: 2,
    petName: "Whiskers",
    familyName: "Sarah & Tom",
    timeframe: "6 months ago",
    location: "Austin, TX",
    story: "This senior cat was surrendered when his owner couldn't care for him anymore. Sarah and Tom specifically wanted an older cat, and Whiskers has brought so much joy to their quiet home.",
    before: "Lonely senior",
    after: "Cherished companion",
    image: "🐱"
  },
  {
    id: 3,
    petName: "Rocky",
    familyName: "The Martinez Family",
    timeframe: "1 year ago",
    location: "Seattle, WA",
    story: "Rocky was a shelter dog for over a year due to his high energy. The Martinez family was looking for an active companion for their teenage son. Now Rocky goes running every morning!",
    before: "Overlooked for energy",
    after: "Perfect running buddy",
    image: "🐶"
  },
];

const SuccessStories = () => {
  return (
    <section id="stories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Happy Tails & Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These heartwarming stories show the incredible transformations that happen 
            when the right animal meets the right family. Every adoption is a celebration!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story) => (
            <Card key={story.id} className="hover:shadow-warm transition-all duration-300 hover:-translate-y-2 group animate-scale-in">
              <CardContent className="p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-bounce-gentle">{story.image}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {story.petName} & {story.familyName}
                  </h3>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <Badge variant="secondary" className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {story.timeframe}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {story.location}
                    </Badge>
                  </div>
                </div>

                {/* Before/After */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-sm font-semibold text-muted-foreground mb-1">Before</div>
                    <div className="text-sm">{story.before}</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-sm font-semibold text-primary mb-1">After</div>
                    <div className="text-sm text-primary">{story.after}</div>
                  </div>
                </div>

                {/* Story */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{story.story}"
                </p>

                {/* Action */}
                <div className="text-center">
                  <Button variant="outline" size="sm" className="w-full hover-scale">
                    <Heart className="w-4 h-4 mr-2" />
                    Read Full Story
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Your Success Story Starts Here
          </h3>
          <p className="text-xl text-muted-foreground mb-6">
            Ready to add a new chapter to your family's story? Browse our available pets 
            and find your perfect companion today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="hover-scale">
              Start Adoption Process
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;