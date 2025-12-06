import { useParams } from "react-router-dom";
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, MapPin, Calendar, Ruler, Check } from "lucide-react";
import Seo from "@/components/Seo";
import { buildAbsoluteUrl, siteMeta } from "@/seo/siteMeta";

const DARK_BG = "#050A14";
const SECONDARY_BG = "#0B1120";
const BORDER_DARK = "border-white/10";
const GLASS_CARD = `border ${BORDER_DARK} bg-white/5 backdrop-blur-lg shadow-xl shadow-black/30`;
const TEXT_MUTED = "text-slate-300";
const ACCENT = "text-blue-400";

const projectData: Record<string, any> = {
  "1": {
    title: "Ayurvedic Medical College, Baramati",
    category: "Auditorium Acoustics",
    location: "Baramati, Maharashtra",
    area: "350-seater auditorium",
    year: "2024",
    client: "Ayurvedic Medical College",
    duration: "Turnkey execution",
    heroImage: "/projects/01/01-ACB-01.jpg",
    images: [
      "/projects/01/01-ACB-01.jpg",
      "/projects/01/01-ACB-02.jpg",
      "/projects/01/01-ACB-03.jpg",
      "/projects/01/01-ACB-04.jpg",
      "/projects/01/01-ACB-05.jpg"
    ],
    description: "350-seater auditorium outfitted with Anutone Slat Surco Lite, Stretch Hush, Rosetta carpet, and Polywool for balanced absorption and premium finishes.",
    challenge: "Deliver even reverberation control and speech clarity across a 350-seat hall while integrating multiple acoustic materials into a cohesive visual language.",
    solution: "Applied layered acoustic wall panelling, acoustic grid ceiling, carpeted flooring, stage flooring, and acoustic doors using Anutone and Rosetta systems with Polywool infill.",
    results: [
      "Speech intelligibility improved for the full seating bowl",
      "Comfortable reverberation time suited for lectures and events",
      "Durable finishes for high footfall academic use"
    ],
    specifications: [
      { label: "Capacity", value: "350 seats" },
      { label: "Products Used", value: "Anutone Slat Surco Lite, Anutone Stretch Hush, Rosetta carpet, Polywool" },
      { label: "Scope", value: "Acoustic wall panelling, acoustic grid ceiling, carpet, acoustic doors, stage flooring" }
    ],
    tags: ["Auditorium", "Acoustic", "Carpet"]
  },
  "2": {
    title: "Southern Star Auditorium, Camp",
    category: "Auditorium Acoustics",
    location: "Pune, Maharashtra",
    area: "600-seater auditorium",
    year: "2024",
    client: "Southern Star Auditorium",
    duration: "Turnkey execution",
    heroImage: "/projects/02/02-01.jpg",
    images: [
      "/projects/02/02-01.jpg",
      "/projects/02/02-02.jpg",
      "/projects/02/02-03.jpg",
      "/projects/02/02-04.jpg",
      "/projects/02/02-05.jpg",
      "/projects/02/02-06.jpg"
    ],
    description: "600-seater auditorium featuring Anutone Slat Surco Lite, Hush Panel, Matt Ebony, Ebony, Sisoli Serene, and Astral lay-in metal ceilings for immersive sound and premium aesthetics.",
    challenge: "Achieve uniform absorption and diffusion across a large 600-seat auditorium while blending multiple Anutone finishes with metal ceiling elements.",
    solution: "Installed mixed acoustic surfaces combining slat panels, stretch fabric, timber finishes, and metal lay-in ceilings to control reflections and deliver a refined interior.",
    results: [
      "Balanced reverberation suited for speech and performance",
      "Consistent acoustic experience across all seating zones",
      "Premium layered finishes aligned with the hall design"
    ],
    specifications: [
      { label: "Capacity", value: "600 seats" },
      { label: "Products Used", value: "Anutone Slat Surco Lite, Anutone Hush Panel, Anutone Matt Ebony, Anutone Ebony, Anutone Sisoli Serene, Astral lay-in metal ceiling" },
      { label: "Scope", value: "Acoustic wall and ceiling treatments with metal ceiling integration" }
    ],
    tags: ["Auditorium", "Acoustic", "Metal Ceiling"]
  },
  "3": {
    title: "KIMS-UAIMS Hospital, Sangli",
    category: "Acoustic Ceilings",
    location: "Sangli, Maharashtra",
    area: "Acoustic baffle ceiling",
    year: "2024",
    client: "KIMS-UAIMS Hospital",
    duration: "Turnkey execution",
    heroImage: "/projects/03/03-01.jpg",
    images: [
      "/projects/03/03-01.jpg",
      "/projects/03/03-02.jpg",
      "/projects/03/03-03.jpg",
      "/projects/03/03-04.jpg"
    ],
    description: "Custom 30mm PET acoustic baffle ceiling designed to manage reverberation in critical healthcare areas at KIMS-UAIMS Hospital.",
    challenge: "Reduce echo in large hospital volumes without obstructing services or lighting while maintaining hygienic, easy-to-clean surfaces.",
    solution: "Fabricated and installed 30mm customized PET acoustic baffles with coordinated spacing to deliver absorption and visual rhythm without blocking utilities.",
    results: [
      "Noticeable drop in echo and improved speech clarity in circulation zones",
      "Lightweight baffles compatible with existing services and maintenance",
      "Durable PET construction suited for healthcare hygiene standards"
    ],
    specifications: [
      { label: "Scope", value: "Acoustic baffle ceiling" },
      { label: "Products Used", value: "30mm customized acoustic baffle of PET panel" },
      { label: "Application", value: "Healthcare circulation and common areas" }
    ],
    tags: ["Healthcare", "Acoustic Ceiling", "Baffles"]
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;
  const seoTitle = project
    ? `${project.title} | Projects | ${siteMeta.name}`
    : `Project | ${siteMeta.name}`;
  const seoDescription =
    project?.description ??
    "Detailed project information from Zen Engineering Solutions.";

  if (!project) {
    return (
      <div className={`min-h-screen bg-[${DARK_BG}] text-white`}>
        <Seo
          title="Project Not Found | Zen Engineering Solutions"
          description="The requested project could not be found at Zen Engineering Solutions."
          canonicalPath={`/projects/${id ?? ""}`}
          robots="noindex,nofollow"
        />
        {/* <Header /> */}
        <main className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white border border-blue-500/50">
              <NavLink to="/projects">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Projects
              </NavLink>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[${DARK_BG}] text-white`}>
      <Seo
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/projects/${id ?? ""}`}
        image={project.heroImage}
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Project",
          name: project.title,
          description: project.description,
          location: project.location,
          image: buildAbsoluteUrl(project.heroImage),
          provider: {
            "@type": "Organization",
            name: siteMeta.name,
            url: siteMeta.siteUrl,
          },
          startDate: project.year,
          areaServed: "Maharashtra, India",
        }}
      />
      {/* <Header /> */}
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#050A14] text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-black/40 to-transparent z-10" />
            <div className="absolute top-1/3 left-1/4 w-[520px] h-[520px] bg-blue-500/10 blur-[140px] rounded-full mix-blend-screen" />
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-custom relative z-20 pb-16 text-white">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="mb-6 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/15 hover:border-white/40"
            >
              <NavLink to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </NavLink>
            </Button>
            <Badge className="bg-blue-500 text-white mb-4">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-white/80 animate-fade-in">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                {project.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-400" />
                {project.year}
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="h-5 w-5 text-blue-400" />
                {project.area}
              </div>
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section className={`section-padding bg-[${DARK_BG}] text-white border-t ${BORDER_DARK}`}>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className={`text-lg ${TEXT_MUTED} leading-relaxed mb-8`}>
                  {project.description}
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                    <p className={`${TEXT_MUTED} leading-relaxed`}>
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                    <p className={`${TEXT_MUTED} leading-relaxed`}>
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Results & Impact</h3>
                    <ul className="space-y-3">
                      {project.results.map((result: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1">
                            <Check className="h-5 w-5 text-blue-400" />
                          </span>
                          <span className={TEXT_MUTED}>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <Card className={`${GLASS_CARD} sticky top-24`}>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold mb-2">Project Details</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <div className={`${TEXT_MUTED} mb-1`}>Client</div>
                        <div className="font-semibold text-white">{project.client}</div>
                      </div>
                      <div>
                        <div className={`${TEXT_MUTED} mb-1`}>Location</div>
                        <div className="font-semibold text-white">{project.location}</div>
                      </div>
                      <div>
                        <div className={`${TEXT_MUTED} mb-1`}>Year Completed</div>
                        <div className="font-semibold text-white">{project.year}</div>
                      </div>
                      <div>
                        <div className={`${TEXT_MUTED} mb-1`}>Project Area</div>
                        <div className="font-semibold text-white">{project.area}</div>
                      </div>
                      <div>
                        <div className={`${TEXT_MUTED} mb-1`}>Duration</div>
                        <div className="font-semibold text-white">{project.duration}</div>
                      </div>
                      <div>
                        <div className={`${TEXT_MUTED} mb-2`}>Tags</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag: string) => (
                            <Badge key={tag} className="text-xs bg-white/10 text-white border border-white/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.specifications.map((spec: any, index: number) => (
                  <Card key={index} className={GLASS_CARD}>
                    <CardContent className="p-6">
                      <div className={`text-sm ${TEXT_MUTED} mb-2`}>{spec.label}</div>
                      <div className="font-semibold text-lg text-white">{spec.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Project Gallery */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.images.map((image: string, index: number) => (
                  <div 
                    key={index}
                    className="aspect-video rounded-xl overflow-hidden shadow-xl shadow-black/30 hover:-translate-y-1 transition-transform duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img 
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`section-padding bg-[${SECONDARY_BG}] text-white border-t ${BORDER_DARK}`}>
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto p-10 rounded-2xl border-2 border-blue-500/30 bg-white/5 backdrop-blur-lg shadow-2xl shadow-blue-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Have a Similar Project?
              </h2>
              <p className="text-xl mb-8 text-slate-200">
                Let's discuss how we can deliver exceptional results for your engineering needs.
              </p>
              <Button
                size="lg"
                className="h-14 px-8 bg-blue-600 hover:bg-blue-500 text-white border border-blue-500/50 rounded-full"
                asChild
              >
                <NavLink to="/contact">
                  Start Your Project
                </NavLink>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
