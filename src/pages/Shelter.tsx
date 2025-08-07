import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home, Users, Shield, Zap, Building2, HandHeart, Star } from "lucide-react";

const Shelter = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Building2 className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Dream Shelter
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Building a state-of-the-art facility where every animal receives the love, care, 
              and second chance they deserve. Join us in creating a sanctuary of hope.
            </p>
            <Button size="lg" className="animate-glow">
              <Heart className="w-5 h-5 mr-2" />
              Support Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Help Us Build Their Future */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Help Us Build Their Future
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every brick, every room, every corner of our new shelter represents hope for animals in need. 
                Your support helps us create a place where healing begins and forever homes are found.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <Home className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Modern Housing Units</CardTitle>
                  <CardDescription>
                    Comfortable, climate-controlled spaces designed for animal welfare and rehabilitation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Goal</span>
                      <span className="font-semibold">$150,000</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="text-sm text-muted-foreground">65% funded</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Medical Center</CardTitle>
                  <CardDescription>
                    Fully equipped veterinary facility for emergency care and routine health services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Goal</span>
                      <span className="font-semibold">$200,000</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <div className="text-sm text-muted-foreground">40% funded</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Community Center</CardTitle>
                  <CardDescription>
                    Education and training facilities for volunteers, adopters, and community programs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Goal</span>
                      <span className="font-semibold">$100,000</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <div className="text-sm text-muted-foreground">25% funded</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Total Campaign Goal</h3>
              <div className="text-4xl font-bold text-primary mb-2">$450,000</div>
              <div className="text-lg text-muted-foreground mb-6">$247,500 raised • 55% complete</div>
              <Button size="lg" variant="donate">
                <Heart className="w-5 h-5 mr-2" />
                Contribute Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How You Can Help
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                There are many ways to support our shelter project. Every contribution, 
                big or small, brings us closer to opening our doors to animals in need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <HandHeart className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Financial Donations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-16 flex-col">
                      <span className="font-semibold">$25</span>
                      <span className="text-xs">Feed 5 animals</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <span className="font-semibold">$100</span>
                      <span className="text-xs">Medical supplies</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <span className="font-semibold">$500</span>
                      <span className="text-xs">Sponsor a kennel</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex-col">
                      <span className="font-semibold">$1000</span>
                      <span className="text-xs">Equipment fund</span>
                    </Button>
                  </div>
                  <Button className="w-full">
                    <Heart className="w-4 h-4 mr-2" />
                    Custom Amount
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <Zap className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Other Ways to Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                      <Star className="w-5 h-5 text-primary" />
                      <span>Volunteer for construction days</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                      <Star className="w-5 h-5 text-primary" />
                      <span>Donate building materials</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                      <Star className="w-5 h-5 text-primary" />
                      <span>Spread awareness on social media</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                      <Star className="w-5 h-5 text-primary" />
                      <span>Organize fundraising events</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More About Volunteering
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Building a Shelter */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why We're Building a Shelter
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our current facilities are overwhelmed. Animals deserve better, 
                and our community needs a modern, comprehensive shelter that can meet growing demands.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-bold text-red-800 mb-2">Current Crisis</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• Operating at 150% capacity</li>
                    <li>• Limited medical facilities</li>
                    <li>• No isolation areas for sick animals</li>
                    <li>• Inadequate space for rehabilitation</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-bold text-green-800 mb-2">Our Solution</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Triple current capacity</li>
                    <li>• Full veterinary hospital</li>
                    <li>• Specialized care units</li>
                    <li>• Training and education center</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Animals on waiting list</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency care needed</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">75%</div>
                  <div className="text-sm text-muted-foreground">Increase in surrenders</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">2025</div>
                  <div className="text-sm text-muted-foreground">Projected opening</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Together, we can build hope
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate to the Shelter Fund
                </Button>
                <Button size="lg" variant="outline">
                  <Building2 className="w-5 h-5 mr-2" />
                  View Building Plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shelter;