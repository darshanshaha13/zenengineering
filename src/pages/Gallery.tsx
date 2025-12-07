// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import {
  buildAbsoluteUrl,
  organizationSchema,
  siteMeta,
} from "@/seo/siteMeta";

// --- Consistent Dark Theme Constants from About.tsx ---
const DARK_BG = "#050A14"; 
const SECONDARY_BG = "#0B1120"; 
const BORDER_DARK = "border-white/10"; 
const ACCENT_COLOR_CLASS = "text-blue-400"; 
const GLASS_CARD_BASE = `border ${BORDER_DARK} bg-white/[0.04] backdrop-blur-lg`;
const GALLERY_IMAGES = [
  { id: "01", url: "/gallery/01.jpg", title: "Project 01" },
  { id: "02", url: "/gallery/02.jpg", title: "Project 02" },
  { id: "03", url: "/gallery/03.jpg", title: "Project 03" },
  { id: "04", url: "/gallery/04.jpg", title: "Project 04" },
  { id: "05", url: "/gallery/05.jpg", title: "Project 05" },
  { id: "06", url: "/gallery/06.jpg", title: "Project 06" },
  { id: "07", url: "/gallery/07.jpg", title: "Project 07" },
  { id: "08", url: "/gallery/08.jpg", title: "Project 08" },
  { id: "09", url: "/gallery/09.jpeg", title: "Project 09" },
  { id: "10", url: "/gallery/10.jpeg", title: "Project 10" },
  { id: "11", url: "/gallery/11.jpg", title: "Project 11" },
  { id: "12", url: "/gallery/12.jpeg", title: "Project 12" },
];

const Gallery = () => {
  const layoutClass = (index: number) => {
    if (index % 7 === 0) return "lg:col-span-2 lg:row-span-2";
    if (index % 5 === 0) return "lg:row-span-2";
    return "";
  };

  return (
    // Set the overall container background to the DARK_BG color for uniformity
    <div className={`min-h-screen bg-[${DARK_BG}]`}>
      {/* <Header /> */}

      <Seo
        title="Gallery | Zen Engineering Solutions"
        description="Browse the gallery of 500+ completed Acoustic, HVAC, Industrial, Commercial, Residential and Healthcare engineering projects delivered by Zen Engineering Solutions across India."
        canonicalPath="/gallery"
        image={GALLERY_IMAGES[0]?.url}
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Zen Engineering Solutions Project Gallery",
            description:
              "Photos and highlights from Zen Engineering Solutions projects across Maharashtra.",
            url: buildAbsoluteUrl("/gallery"),
            numberOfItems: GALLERY_IMAGES.length,
          },
          { ...organizationSchema, "@id": `${siteMeta.siteUrl}#organization` },
        ]}
      />

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
            <div className="relative mb-10">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-400/10 blur-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_40px_80px_rgba(0,0,0,0.35)]">
                <div className="grid auto-rows-[220px] sm:auto-rows-[260px] md:auto-rows-[300px] lg:auto-rows-[320px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {GALLERY_IMAGES.map((image, index) => (
                    <div
                      key={image.id}
                      className={`group relative overflow-hidden rounded-2xl ${GLASS_CARD_BASE} shadow-xl shadow-black/40 hover:-translate-y-[3px] hover:shadow-blue-500/25 transition-all duration-500 ${layoutClass(index)}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/10 opacity-60" />
                      <img
                        src={image.url}
                        alt={image.title}
                        className="relative z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          {image.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
