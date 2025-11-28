// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ArrowRight, GalleryHorizontal } from "lucide-react"; // Added GalleryHorizontal icon
import { Helmet } from "react-helmet-async";

// --- Consistent Dark Theme Constants from About.tsx ---
const DARK_BG = "#050A14"; 
const SECONDARY_BG = "#0B1120"; 
const TEXT_MUTED_DARK = "text-slate-400"; 
const BORDER_DARK = "border-white/10"; 
const ACCENT_COLOR_CLASS = "text-blue-400"; 
const GLASS_CARD_BASE = `border ${BORDER_DARK} bg-white/5 backdrop-blur-lg`;
const GLASS_CARD_HOVER = `shadow-xl shadow-black/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300`;


const categories = ["All", "Commercial", "Educational", "Industrial", "Residential", "Healthcare"];

const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", category: "Commercial", title: "Modern Office Complex" },
  { id: 2, url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80", category: "Educational", title: "Cutting-Edge University Campus" },
  { id: 3, url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", category: "Industrial", title: "High-Efficiency Manufacturing Facility" },
  { id: 4, url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", category: "Commercial", title: "Acoustically Treated Corporate HQ" },
  { id: 5, url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", category: "Healthcare", title: "Specialized Hospital HVAC System" },
  { id: 6, url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", category: "Residential", title: "Quiet Luxury Apartment Project" },
  { id: 7, url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", category: "Commercial", title: "Critical Data Center Cooling" },
  { id: 8, url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80", category: "Commercial", title: "High-Fidelity Recording Studio" },
  { id: 9, url: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=800&q=80", category: "Commercial", title: "Large-Scale Shopping Mall" }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    // Set the overall container background to the DARK_BG color for uniformity
    <div className={`min-h-screen bg-[${DARK_BG}]`}>
      {/* <Header /> */}

      <Helmet>
        <title>Gallery | Zen Engineering Solutions</title>
        <meta
          name="description"
          content="Browse the gallery of 500+ completed Acoustic, HVAC, Industrial, Commercial, Residential and Healthcare engineering projects delivered by Zen Engineering Solutions across India."
        />
      </Helmet>

      <main>
        {/* =======================================================================================
           1. Hero Section - Adapted for Dark Theme 
           ======================================================================================= */}
        <section className={`relative min-h-[50vh] flex items-center py-24 bg-[${SECONDARY_BG}] border-b ${BORDER_DARK} text-white overflow-hidden`}>
          
          {/* --- Background Texture --- */}
          <div className="absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay pointer-events-none" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}} 
          />
          {/* Subtle Glow/Spotlight effect */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen" />

          {/* --- Content --- */}
          <div className="container-custom relative z-10">
            <span className={`${ACCENT_COLOR_CLASS} font-semibold text-sm uppercase tracking-wider mb-3 block`}>
              Our Work in Pictures
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Project <span className={`${ACCENT_COLOR_CLASS} drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]`}>Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light border-l-2 border-blue-500/50 pl-6">
              A showcase of over 500 completed acoustic and HVAC engineering projects,
              demonstrating our commitment to precision and performance across India.
            </p>
          </div>
        </section>


        {/* =======================================================================================
           2. Gallery Section - Adapted for Dark Theme 
           ======================================================================================= */}
        <section className={`section-padding bg-[${DARK_BG}]`}>
          <div className="container-custom">
            
            {/* --- Category Filters - Styled for Dark Theme --- */}
            <div className="flex flex-wrap gap-3 justify-center mb-12 p-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-inner shadow-black/30 max-w-5xl mx-auto">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  className={selectedCategory === cat 
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30" 
                    : `border-white/20 bg-transparent hover:bg-white/10 text-white/80 transition-colors duration-200`
                  }
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* --- Image Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                // Used GLASS_CARD_BASE and GLASS_CARD_HOVER for premium card effect
                <div 
                  key={image.id} 
                  className={`relative group overflow-hidden rounded-xl ${GLASS_CARD_BASE} ${GLASS_CARD_HOVER} p-3 shadow-2xl shadow-black/50 animate-scale-in`} 
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  
                  {/* Image with hover effect */}
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full aspect-video object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 transform-gpu" 
                  />
                  
                  {/* Overlay for Title/Category - Premium Dark Look */}
                  <div className="absolute inset-3 rounded-lg bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      {/* Badge styling for the category */}
                      <Badge 
                        className="mb-2 bg-blue-500/90 hover:bg-blue-600 text-white border-none shadow-md"
                      >
                        <GalleryHorizontal className="h-3 w-3 mr-1" />
                        {image.category}
                      </Badge>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
                        {image.title}
                      </h3>
                      
                      {/* Subtle 'View' button on hover */}
                      <Button
                        variant="link"
                        className="p-0 h-auto text-sm text-blue-300 hover:text-blue-200 mt-1"
                      >
                        View Details <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
                <div className={`text-center py-10 rounded-xl bg-[${SECONDARY_BG}] border ${BORDER_DARK}`}>
                    <p className={`text-xl font-semibold ${ACCENT_COLOR_CLASS}`}>No Projects Found</p>
                    <p className={TEXT_MUTED_DARK}>Try selecting a different category or view all projects.</p>
                </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;