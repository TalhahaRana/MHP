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
            Our Story of
            <span className="block text-primary">Love & Hope</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            From a garage rescue to a lifesaving foundation - discover the journey that changed thousands of lives
          </p>
          <Button size="lg" variant="secondary" className="hover-scale animate-fade-in">
            Begin the Journey
          </Button>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  It Started with a 
                  <span className="text-primary block">Rainy Night</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    On a cold, rainy evening in October 2008, Sarah Johnson was driving home from work 
                    when she spotted a soggy cardboard box on the side of the road. What she found inside 
                    would change her life forever - three tiny, shivering puppies, barely old enough to 
                    open their eyes.
                  </p>
                  <p>
                    That night, Sarah's garage became an impromptu animal hospital. With the help of a 
                    local veterinarian friend, she nursed the puppies back to health. But as word spread 
                    about her rescue efforts, more and more abandoned animals began appearing at her door.
                  </p>
                  <p>
                    What started as a single act of compassion quickly grew into something much bigger. 
                    Sarah realized that her community needed a dedicated organization to address the 
                    growing problem of animal abandonment and neglect.
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

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            15 Years of Making a Difference
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
              
              {storyMilestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className={`p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-2 ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <CardContent className="p-0">
                        <div className={`flex items-center gap-4 mb-4 ${
                          index % 2 === 0 ? 'justify-end' : 'justify-start'
                        }`}>
                          <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                            <milestone.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                            <div className="text-sm text-muted-foreground">{milestone.stats}</div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-glow animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The People Behind the Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
              The Heart of Our Mission
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
                  More Than Just Rescue
                </h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our story isn't just about the numbers - though we're proud of our 2,500+ rescues. 
                    It's about the individual lives we've touched, the families we've brought together, 
                    and the community we've built around a shared love for animals.
                  </p>
                  <p>
                    Every volunteer who gives their weekends, every foster family who opens their home, 
                    every donor who contributes to our mission - they're all part of this incredible 
                    story that continues to unfold every single day.
                  </p>
                  <p>
                    From that first rainy night to today, our commitment remains unchanged: every animal 
                    deserves love, care, and a chance at happiness. This is our story, but more importantly, 
                    it's the beginning of countless stories of hope, healing, and new beginnings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact by Numbers */}
      <section className="py-20 bg-gradient-warm text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Impact in Numbers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {impactNumbers.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{item.number}</div>
                  <div className="text-sm font-semibold mb-2">{item.label}</div>
                  <div className="text-xs opacity-80">{item.description}</div>
                </CardContent>
              </Card>
            ))}
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
            <Button size="lg" variant="outline" className="hover-scale">
              Meet Our Animals
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Story;