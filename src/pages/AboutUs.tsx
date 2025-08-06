import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Clock } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Executive Director",
    description: "Leading animal welfare initiatives for over 15 years.",
    image: "/placeholder.svg"
  },
  {
    name: "Dr. Michael Chen",
    role: "Head Veterinarian",
    description: "Specialized in emergency animal care and rehabilitation.",
    image: "/placeholder.svg"
  },
  {
    name: "Emily Rodriguez",
    role: "Adoption Coordinator",
    description: "Passionate about finding perfect matches for every animal.",
    image: "/placeholder.svg"
  },
  {
    name: "James Wilson",
    role: "Community Outreach",
    description: "Building bridges between our foundation and the community.",
    image: "/placeholder.svg"
  }
];

const milestones = [
  { year: "2008", event: "Foundation established with first rescue center" },
  { year: "2012", event: "Opened second facility and launched mobile clinic" },
  { year: "2016", event: "Reached 1,000 successful adoptions milestone" },
  { year: "2020", event: "Expanded to three counties with emergency response team" },
  { year: "2023", event: "Celebrated 2,500+ animals rescued and rehomed" }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Our Mission
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn about our journey, our team, and our unwavering commitment to animal welfare
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <About />

      {/* Our Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Story</h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed mb-6">
                Founded in 2008 by a group of passionate animal lovers, Fur-Ever Friends Foundation 
                began as a small rescue operation in a converted garage. What started with saving 
                just a few abandoned puppies has grown into one of the region's most trusted animal 
                welfare organizations.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Our founder, Sarah Johnson, witnessed the devastating impact of animal abandonment 
                in her community and knew something had to be done. With the support of local 
                veterinarians and volunteers, we established our first official rescue center, 
                implementing a comprehensive approach to animal care that addressed not just 
                immediate needs, but long-term welfare.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, we operate three full-service facilities, a mobile veterinary clinic, 
                and an emergency response team. Our no-kill philosophy and commitment to finding 
                the perfect match for every animal has resulted in over 2,500 successful adoptions 
                and countless lives saved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-0">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <p className="text-muted-foreground">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Our dedicated team brings together expertise, passion, and unwavering commitment to animal welfare
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 hover-scale group">
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 hover-scale group">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Compassion</h3>
                <p className="text-muted-foreground">Every decision we make is guided by empathy and love for animals in need.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 hover-scale group">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Excellence</h3>
                <p className="text-muted-foreground">We strive for the highest standards in animal care and adoption services.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 hover-scale group">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Community</h3>
                <p className="text-muted-foreground">Building strong partnerships with our community to create lasting change.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 hover-scale group">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Commitment</h3>
                <p className="text-muted-foreground">Our dedication to animal welfare never wavers, 24 hours a day.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our mission to give every animal a chance at happiness. Whether through adoption, 
            volunteering, or donation, you can help save lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-scale">
              Adopt a Pet
            </Button>
            <Button size="lg" variant="outline" className="hover-scale border-white text-white hover:bg-white hover:text-primary">
              Become a Volunteer
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;