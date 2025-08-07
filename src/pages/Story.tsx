import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Calendar, Users, Award, Sparkles } from "lucide-react";
import heroAnimals from "@/assets/hero-animals.jpg";
import catProfile from "@/assets/cat-profile.jpg";
import dogProfile from "@/assets/dog-profile.jpg";

const storyMilestones = [
  {
    year: "2008",
    title: "A Humble Beginning",
    description: "Sarah Johnson converted her garage into a makeshift rescue center after finding three abandoned puppies in a cardboard box during a rainstorm.",
    icon: Heart,
    stats: "3 animals rescued"
  },
  {
    year: "2009",
    title: "First Official Rescue Center",
    description: "With community support and volunteer help, we opened our first official facility with capacity for 25 animals.",
    icon: MapPin,
    stats: "25 capacity, 87 rescues"
  },
  {
    year: "2011",
    title: "The No-Kill Promise",
    description: "We made our commitment official - no healthy animal would ever be euthanized due to space or time constraints.",
    icon: Award,
    stats: "100% no-kill policy"
  },
  {
    year: "2013",
    title: "Mobile Veterinary Clinic",
    description: "Launched our mobile clinic to reach underserved communities and provide emergency medical care in the field.",
    icon: Users,
    stats: "500+ mobile treatments"
  },
  {
    year: "2016",
    title: "1,000 Adoptions Milestone",
    description: "Celebrated our 1,000th successful adoption with a community festival that raised awareness and funds.",
    icon: Sparkles,
    stats: "1,000 happy families"
  },
  {
    year: "2020",
    title: "Emergency Response Team",
    description: "During the pandemic, we formed a specialized emergency response team for urgent rescue situations.",
    icon: Calendar,
    stats: "24/7 emergency response"
  },
  {
    year: "2023",
    title: "2,500+ Lives Changed",
    description: "Today, we've rescued and rehomed over 2,500 animals while maintaining our commitment to excellence.",
    icon: Heart,
    stats: "2,500+ rescues & counting"
  }
];

const impactNumbers = [
  { number: "2,500+", label: "Animals Rescued", description: "Every rescue has a story" },
  { number: "1,800+", label: "Forever Homes", description: "Perfect matches made" },
  { number: "500+", label: "Volunteers", description: "Hearts dedicated to the cause" },
  { number: "15+", label: "Years of Service", description: "Unwavering commitment" },
  { number: "3", label: "Full-Service Facilities", description: "Comprehensive care centers" },
  { number: "100%", label: "No-Kill Policy", description: "Every life matters" }
];

const Story = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroAnimals})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Because Every Paw
              <span className="block text-primary">Deserves Love</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in leading-relaxed">
              In 2020, Mission Hungry Paws began with one simple, powerful act of kindness: feeding a hungry stray so it wouldn't go to sleep with an empty stomach. What started as a personal mission by one individual quickly grew into a movement — driven by compassion, community, and the belief that no animal should ever feel unloved or forgotten.
            </p>
          </div>
      </section>

      {/* The Reality We Saw */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  We saw a heartbreaking 
                  <span className="text-primary block">reality</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Countless stray animals struggling to survive without food, shelter, or care. 
                    And we knew we couldn't turn away.
                  </p>
                  <p>
                    What began as feeding one hungry stray became something much bigger — a mission 
                    to ensure no animal goes without the basic necessities of life and love.
                  </p>
                  <p>
                    Every animal we encountered had a story of struggle, but also incredible 
                    resilience. They reminded us that even the smallest act of kindness can 
                    change a life forever.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={catProfile} 
                  alt="Rescued cat" 
                  className="w-full h-96 object-cover rounded-lg shadow-soft hover:shadow-glow transition-all duration-500 hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From a Meal to a Movement */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            From a Meal to a Movement
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since then, Mission Hungry Paws has become a 100% non-profit organization dedicated to feeding stray animals and giving them the love they deserve. To date, we've achieved incredible milestones together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-lg font-semibold text-foreground mb-2">Nutritious Meals</div>
                <div className="text-sm text-muted-foreground">Delivered to stray animals</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-lg font-semibold text-foreground mb-2">Life-Saving Rescues</div>
                <div className="text-sm text-muted-foreground">Carried out with compassion</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-lg font-semibold text-foreground mb-2">Passionate Volunteers</div>
                <div className="text-sm text-muted-foreground">Built a family of helpers</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">
              But we're not stopping there.
            </p>
          </div>
        </div>
      </section>

      {/* Building a Safe Haven */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              Building a Safe Haven
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={dogProfile} 
                  alt="Happy rescued dog" 
                  className="w-full h-96 object-cover rounded-lg shadow-soft hover:shadow-glow transition-all duration-500 hover:scale-105"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Taking Our Mission to the Next Level
                </h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Today, we're taking our mission to the next level — by building a dedicated shelter for stray animals. A place where they'll find food, safety, medical care, and most importantly, love.
                  </p>
                  <p>
                    The Shelter Fund is the heart of this effort, and every donation brings us closer to opening the doors to hope.
                  </p>
                  <p>
                    This isn't just about building walls and installing equipment. We're creating a sanctuary where healing begins, where trust is rebuilt, and where every animal gets the chance they deserve.
                  </p>
                </div>
                <div className="mt-8">
                  <a href="/shelter">
                    <Button size="lg" className="animate-glow">
                      <Heart className="w-5 h-5 mr-2" />
                      Support Our Shelter Fund
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why We Exist
          </h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <p className="text-2xl font-semibold mb-8">
                Our mission is simple:
              </p>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 mr-3" />
                    No stray animal should sleep hungry or feel unloved.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 mr-3" />
                    We exist to protect, feed, and care for those who cannot ask for help but desperately need it.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <p className="text-2xl font-semibold mb-6">
                With your support, we can make sure every paw finds the love it deserves.
              </p>
              <Button size="lg" variant="secondary" className="hover-scale">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Be Part of Our Continuing Story
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Every day brings new chapters of hope, healing, and happy endings. 
            Join us in writing the next part of our story together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="hover-scale">
              <Heart className="w-5 h-5 mr-2" />
              Start Your Story With Us
            </Button>
            <a href="/shelter">
              <Button size="lg" variant="outline" className="hover-scale">
                Support Our Shelter
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Story;