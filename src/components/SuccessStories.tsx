import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Clock, MapPin } from "lucide-react";


const SuccessStories = () => {
  return (
    <section id="stories" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Shelter Funds
          </h3>
          <p className="text-xl text-muted-foreground mb-6">
            Help Us Build a Safe Haven for Animals in Need.
          </p>
            <p className="text-base text-foreground mb-4 text-left max-w-2xl mx-auto">
            Our dream of creating a dedicated animal shelter is underway, but we can’t do it alone. The Shelter Fund is a vital campaign to raise the resources we need to bring this vision to life—from the ground up.<br /><br />
            <span className="font-semibold">Your support will help us:</span>
            <ul className="list-disc list-inside ml-4 my-2 space-y-1">
              <li>Secure land and construct safe, weatherproof enclosures</li>
              <li>Build medical and quarantine areas for sick or injured animals</li>
              <li>Create clean spaces for feeding, sleeping, and play</li>
              <li>Install water, power, and sanitation systems</li>
              <li>Equip the shelter with beds, food storage, medical supplies, and more</li>
            </ul>
            Every donation brings us one step closer to opening the doors of a place where abandoned, abused, and homeless animals will find the care they deserve.<br /><br />
            Join us in laying the foundation—literally—for a better tomorrow.
            </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;