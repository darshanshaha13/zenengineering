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
    heroImage: "/projects/01/01-ACB-01.webp",
    images: [
      "/projects/01/01-ACB-01.webp",
      "/projects/01/01-ACB-02.webp",
      "/projects/01/01-ACB-03.webp",
      "/projects/01/01-ACB-04.webp",
      "/projects/01/01-ACB-05.webp"
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
    heroImage: "/projects/02/02-01.webp",
    images: [
      "/projects/02/02-01.webp",
      "/projects/02/02-02.webp",
      "/projects/02/02-03.webp",
      "/projects/02/02-04.webp",
      "/projects/02/02-05.webp",
      "/projects/02/02-06.webp"
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
    heroImage: "/projects/03/03-01.webp",
    images: [
      "/projects/03/03-01.webp",
      "/projects/03/03-02.webp",
      "/projects/03/03-03.webp",
      "/projects/03/03-04.webp"
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
  },
  "4": {
    title: "Anand Bhavan Auditorium, CSIBER College Kolhapur",
    category: "Auditorium Acoustics",
    location: "Kolhapur, Maharashtra",
    area: "950-seater auditorium",
    year: "2024",
    client: "CSIBER College",
    duration: "Turnkey execution",
    heroImage: "/projects/04/Cyber%2002.webp",
    images: [
      "/projects/04/Cyber%2002.webp",
      "/projects/04/Cyber%2003.webp",
      "/projects/04/Cyber%2006.webp",
      "/projects/04/Cyber%2010.webp",
      "/projects/04/Cyber%2011.webp",
      "/projects/04/Cyber%2024.webp"
    ],
    description: "950-seater Anand Bhavan auditorium outfitted with Anutone Strand Board, Polywool infill, and 10mm PET panels to deliver balanced acoustics and premium finishes across walls and ceilings.",
    challenge: "Create a coherent acoustic envelope for a large 950-seat hall while integrating multiple material systems across walls, grid ceilings, and gypsum ceilings without compromising aesthetics.",
    solution: "Installed Anutone Strand Board with Polywool backing on walls, combined acoustic grid ceilings, and coordinated gypsum ceilings to control reverberation and maintain a clean visual language.",
    results: [
      "Improved speech clarity and controlled reverberation throughout the 950-seat bowl",
      "Layered wall and ceiling treatments that align with the auditorium’s architecture",
      "Durable acoustic system designed for high occupancy institutional use"
    ],
    specifications: [
      { label: "Capacity", value: "950 seats" },
      { label: "Products Used", value: "Anutone Strand Board, Polywool, 10mm PET panel" },
      { label: "Scope", value: "Acoustic wall panelling, acoustic grid ceiling, gypsum ceiling" }
    ],
    tags: ["Auditorium", "Acoustic", "Grid Ceiling", "Gypsum Ceiling", "Anutone"]
  },
  "5": {
    title: "National Institute of Naturopathy, Pune",
    category: "Auditorium Acoustics",
    location: "Pune, Maharashtra",
    area: "400-seater auditorium",
    year: "2024",
    client: "National Institute of Naturopathy",
    duration: "Turnkey execution",
    heroImage: "/projects/05/IMG_6765%20copy.webp",
    images: [
      "/projects/05/IMG_6765%20copy.webp",
      "/projects/05/IMG_6773%20copy.webp",
      "/projects/05/IMG_6775%20copy.webp",
      "/projects/05/IMG_6777%20copy.webp",
      "/projects/05/IMG_6779%20copy.webp",
      "/projects/05/IMG_6789%20copy.webp",
      "/projects/05/IMG_6799%20copy.webp",
      "/projects/05/IMG_6809%20copy.webp",
      "/projects/05/IMG_6810%20copy.webp"
    ],
    description: "400-seater auditorium outfitted with Anutone Slat Surco Lite, Hush Panel, Nubby, and SynthPF to achieve balanced absorption across walls and ceilings with premium finishes.",
    challenge: "Deliver clear speech intelligibility and controlled reverberation in a 400-seat hall while integrating multiple acoustic systems across wall panelling, grid ceilings, and gypsum ceilings.",
    solution: "Applied Anutone Slat Surco Lite and Nubby with SynthPF infill on walls, combined Hush Panel treatments on acoustic grid ceilings, and coordinated gypsum ceiling elements for a seamless acoustic envelope.",
    results: [
      "Enhanced speech clarity and comfortable reverberation for presentations and performances",
      "Consistent acoustic experience across all seating zones",
      "Durable finishes suited for high-usage institutional venues"
    ],
    specifications: [
      { label: "Capacity", value: "400 seats" },
      { label: "Products Used", value: "Anutone Slat Surco Lite, Anutone Hush Panel, Anutone Nubby, SynthPF" },
      { label: "Scope", value: "Acoustic wall panelling, acoustic grid ceiling, gypsum ceiling" }
    ],
    tags: ["Auditorium", "Acoustic", "Grid Ceiling", "Gypsum Ceiling", "Anutone"]
  },
  "6": {
    title: "MALPANI GROUP OFFICE, CHAKAN PUNE",
    category: "Acoustic Wall Panelling",
    location: "Chakan, Pune",
    area: "Conference & Training Rooms",
    year: "2024",
    client: "MALPANI GROUP",
    duration: "Turnkey execution",
    heroImage: "/projects/06/IMG-20240913-WA0006.webp",
    images: [
      "/projects/06/IMG-20240913-WA0006.webp",
      "/projects/06/IMG-20240913-WA0007.webp",
      "/projects/06/IMG-20240913-WA0008.webp",
      "/projects/06/IMG-20240913-WA0009.webp",
      "/projects/06/IMG-20240913-WA0010.webp",
      "/projects/06/IMG-20240913-WA0011.webp"
    ],
    description: "Acoustic wall panelling for conference and training rooms using the Anutone Stretch System to deliver clean aesthetics and focused sound control.",
    challenge: "Control reflections and improve intelligibility in multi-purpose rooms while maintaining a sleek corporate finish.",
    solution: "Installed Anutone Stretch System panels across key reflection points to dampen echo and deliver a premium, seamless surface.",
    results: [
      "Improved speech clarity for meetings and trainings",
      "Minimalist stretch finish that blends with the corporate interior",
      "Durable acoustic treatment designed for frequent use"
    ],
    specifications: [
      { label: "Application", value: "Conference & training rooms" },
      { label: "Products Used", value: "Anutone Stretch System" },
      { label: "Scope", value: "Acoustic wall panelling" }
    ],
    tags: ["Acoustic", "Stretch System", "Conference Room", "Training Room", "Anutone"]
  },
  "7": {
    title: "GPMT Institute Miraj",
    category: "Acoustic Cloud Ceiling",
    location: "Miraj, Maharashtra",
    area: "Canteen area",
    year: "2024",
    client: "GPMT Institute",
    duration: "Turnkey execution",
    heroImage: "/projects/07/IMG-20240308-WA0109.webp",
    images: [
      "/projects/07/IMG-20240308-WA0109.webp",
      "/projects/07/IMG-20240308-WA0110.webp",
      "/projects/07/IMG-20240308-WA0111.webp",
      "/projects/07/IMG-20240308-WA0112.webp"
    ],
    description: "Custom 30mm PET acoustic clouds installed throughout the canteen area to tame noise and improve comfort for students and staff.",
    challenge: "Reduce reverberation and chatter in an open canteen while keeping the ceiling visually light and easy to maintain.",
    solution: "Designed and installed customized 30mm PET acoustic cloud panels over key seating zones to absorb reflections without obstructing services.",
    results: [
      "Noticeable drop in canteen echo and improved speech clarity",
      "Lightweight cloud panels that preserve an open, airy ceiling",
      "Durable PET finish suited for high-traffic dining areas"
    ],
    specifications: [
      { label: "Application", value: "Canteen acoustic cloud ceiling" },
      { label: "Products Used", value: "Customised 30mm acoustic cloud of PET panel" },
      { label: "Scope", value: "Acoustic cloud installation" }
    ],
    tags: ["Acoustic", "Cloud Ceiling", "PET Panel", "Canteen"]
  },
  "8": {
    title: "WORKDAY, PUNE",
    category: "Acoustic Ceiling",
    location: "Pune, Maharashtra",
    area: "Office spaces",
    year: "2024",
    client: "Workday",
    duration: "Turnkey execution",
    heroImage: "/projects/08/WORK%20DAY%201.webp",
    images: [
      "/projects/08/WORK%20DAY%201.webp",
      "/projects/08/WORKDAT.webp"
    ],
    description: "Acoustic ceiling installation using 25mm Anutone Strand Melange Fila bevel edge panels to create a calm, intelligible workspace.",
    challenge: "Reduce ceiling reflections and ambient noise in open office areas without compromising the modern aesthetic.",
    solution: "Installed 25mm Anutone Strand Melange Fila bevel edge acoustic ceiling panels to absorb reflections and maintain a clean, refined look.",
    results: [
      "Improved speech clarity and reduced noise fatigue for staff",
      "Seamless ceiling finish that matches the office design language",
      "Durable acoustic system suitable for high-activity work areas"
    ],
    specifications: [
      { label: "Application", value: "Office acoustic ceiling" },
      { label: "Products Used", value: "25mm Anutone Strand Melange Fila bevel edge" },
      { label: "Scope", value: "Acoustic ceiling installation" }
    ],
    tags: ["Acoustic", "Ceiling", "Anutone", "Office"]
  },
  "9": {
    title: "Maths Dept Auditorium, Shivaji University Kolhapur",
    category: "Auditorium Acoustics",
    location: "Kolhapur, Maharashtra",
    area: "80-seater auditorium",
    year: "2024",
    client: "Shivaji University",
    duration: "Turnkey execution",
    heroImage: "/projects/09/WhatsApp%20Image%202025-11-25%20at%2010.50.32%20AM%20(2).webp",
    images: [
      "/projects/09/WhatsApp%20Image%202025-11-25%20at%2010.50.32%20AM%20(2).webp",
      "/projects/09/WhatsApp%20Image%202025-11-25%20at%2010.50.33%20AM%20(1).webp",
      "/projects/09/WhatsApp%20Image%202025-11-25%20at%2010.50.33%20AM%20(2).webp",
      "/projects/09/WhatsApp%20Image%202025-11-25%20at%2010.50.33%20AM.webp",
      "/projects/09/WhatsApp%20Image%202025-11-25%20at%2010.50.34%20AM%20(1).webp",
      "/projects/09/WhatsApp%20Image%202025-11-25%20at%2010.50.34%20AM.webp"
    ],
    description: "80-seater Mathematics Department auditorium treated with Anutone Slat Surco Lite and 10mm PET panels to achieve balanced acoustics and a refined finish.",
    challenge: "Deliver clear speech and controlled reverberation in a compact 80-seat hall while keeping a clean academic aesthetic.",
    solution: "Installed Anutone Slat Surco Lite with 10mm PET panels across critical wall and ceiling zones to absorb reflections and maintain visual harmony.",
    results: [
      "Improved speech intelligibility for lectures and presentations",
      "Controlled reverberation suited to a compact auditorium",
      "Durable acoustic finishes aligned with university standards"
    ],
    specifications: [
      { label: "Capacity", value: "80 seats" },
      { label: "Products Used", value: "Anutone Slat Surco Lite, 10mm PET panel" },
      { label: "Scope", value: "Acoustic wall and ceiling treatments" }
    ],
    tags: ["Auditorium", "Acoustic", "PET Panel", "Anutone"]
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

