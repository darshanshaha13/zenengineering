import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap, Target } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Excellence & Quality",
    description: "Committed to delivering superior engineering solutions that exceed industry standards."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly skilled engineers and technicians with extensive industry experience."
  },
  {
    icon: Zap,
    title: "Innovative Solutions",
    description: "Cutting-edge technology and methods for efficient and sustainable results."
  },
  {
    icon: Target,
    title: "On-Time Delivery",
    description: "Proven track record of completing projects on schedule without compromising quality."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineering Excellence You Can Trust
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine expertise, innovation, and dedication to deliver exceptional results for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="border-none shadow-md hover-lift text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
