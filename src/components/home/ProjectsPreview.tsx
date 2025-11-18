import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const featuredProjects = [
  {
    id: 1,
    title: "Commercial Office Complex",
    category: "Acoustic & HVAC",
    location: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Complete acoustic treatment and climate control for 50,000 sq ft office space."
  },
  {
    id: 2,
    title: "Educational Institution",
    category: "Insulation & HVAC",
    location: "Kolhapur, Maharashtra",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    description: "Advanced insulation and HVAC systems for multiple buildings spanning 100,000 sq ft."
  },
  {
    id: 3,
    title: "Manufacturing Facility",
    category: "Climate Control",
    location: "Sangli, Maharashtra",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    description: "Industrial-grade climate control and acoustic solutions for production environment."
  }
];

const ProjectsPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 animate-fade-in">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our recent work and see how we've delivered excellence across diverse industries.
            </p>
          </div>
          <Button size="lg" asChild>
            <NavLink to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="overflow-hidden border-none shadow-lg hover-lift group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  📍 {project.location}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <NavLink 
                  to={`/projects/${project.id}`}
                  className="text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </NavLink>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
