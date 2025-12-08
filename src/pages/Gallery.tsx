import { useEffect, useState } from "react";
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
  { id: "01", url: "/gallery/01.webp", title: "Project 01" },
  { id: "02", url: "/gallery/02.webp", title: "Project 02" },
  { id: "03", url: "/gallery/03.webp", title: "Project 03" },
  { id: "04", url: "/gallery/04.webp", title: "Project 04" },
  { id: "05", url: "/gallery/05.webp", title: "Project 05" },
  { id: "06", url: "/gallery/06.webp", title: "Project 06" },
  { id: "07", url: "/gallery/07.webp", title: "Project 07" },
  { id: "08", url: "/gallery/08.webp", title: "Project 08" },
  { id: "09", url: "/gallery/09.webp", title: "Project 09" },
  { id: "10", url: "/gallery/10.webp", title: "Project 10" },
  { id: "11", url: "/gallery/11.webp", title: "Project 11" },
  { id: "12", url: "/gallery/12.webp", title: "Project 12" },
  { id: "13", url: "/gallery/13.webp", title: "Project 13" },
  { id: "14", url: "/gallery/14.webp", title: "Project 14" },
  { id: "15", url: "/gallery/15.webp", title: "Project 15" },
  { id: "16", url: "/gallery/16.webp", title: "Project 16" },
  { id: "17", url: "/gallery/17.webp", title: "Project 17" },
  { id: "18", url: "/gallery/18.webp", title: "Project 18" },
  { id: "19", url: "/gallery/19.webp", title: "Project 19" },
  { id: "20", url: "/gallery/20.webp", title: "Project 20" },
  { id: "21", url: "/gallery/21.webp", title: "Project 21" },
  { id: "22", url: "/gallery/22.webp", title: "Project 22" },
  { id: "23", url: "/gallery/23.webp", title: "Project 23" },
  { id: "24", url: "/gallery/24.webp", title: "Project 24" },
  { id: "25", url: "/gallery/25.webp", title: "Project 25" },
  { id: "26", url: "/gallery/26.webp", title: "Project 26" },
  { id: "27", url: "/gallery/27.webp", title: "Project 27" },
  { id: "28", url: "/gallery/28.webp", title: "Project 28" },
];

// helper to vary tile sizes – gives that “magazine” / masonry feel
const layoutClass = (index: number) => {
  const i = index % 10;
  if (i === 0 || i === 5) return "lg:col-span-2 lg:row-span-2";
  if (i === 2 || i === 7) return "lg:col-span-2";
  if (i === 4) return "lg:row-span-2";
  return "";
};

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isModalOpen = activeIndex !== null;

  // Keyboard controls for lightbox
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_IMAGES.length
        );
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  const openImage = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const showPrev = (event?: React.MouseEvent) => {
    event?.stopPropagation();
    setActiveIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  };

  const showNext = (event?: React.MouseEvent) => {
    event?.stopPropagation();
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_IMAGES.length
    );
  };

  const activeImage =
    activeIndex !== null ? GALLERY_IMAGES[activeIndex] : null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: DARK_BG }}>
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
        {/* HERO */}
        <section
          className={`relative min-h-[50vh] flex items-center py-24 bg-[${SECONDARY_BG}] border-b ${BORDER_DARK} text-white overflow-hidden`}
        >
          {/* Background texture */}
          <div
            className="absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen" />

          <div className="container-custom relative z-10">
            <span
              className={`${ACCENT_COLOR_CLASS} font-semibold text-sm uppercase tracking-wider mb-3 block`}
            >
              Our Work in Pictures
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Project{" "}
              <span
                className={`${ACCENT_COLOR_CLASS} drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
              >
                Gallery
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light border-l-2 border-blue-500/50 pl-6">
              A showcase of over 500 completed acoustic and HVAC engineering
              projects, demonstrating our commitment to precision and
              performance across India.
            </p>
          </div>
        </section>

        {/* GALLERY */}
        {/* GALLERY */}
        <section
                  className="py-10 md:py-14"
                  style={{ backgroundColor: DARK_BG }}
                >
                  <div className="container-custom">
                    <div className="relative mb-6 md:mb-8">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-400/10 blur-3xl" />
                      <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-4 md:p-5 shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
                        <div
                          className="
                            grid
                            auto-rows-[110px]
                            sm:auto-rows-[130px]
                            md:auto-rows-[150px]
                            lg:auto-rows-[170px]
                            xl:auto-rows-[190px]
                            grid-cols-2
                            md:grid-cols-3
                            xl:grid-cols-4
                            gap-3
                            md:gap-4
                          "
                        >
                          {GALLERY_IMAGES.map((image, index) => (
                            <button
                              key={image.id}
                              type="button"
                              onClick={() => openImage(index)}
                              className={`
                                group relative flex overflow-hidden rounded-2xl
                                ${GLASS_CARD_BASE}
                                shadow-lg shadow-black/40
                                hover:-translate-y-[2px]
                                hover:shadow-blue-500/25
                                transition-all duration-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500/70
                                focus:ring-offset-2 focus:ring-offset-black/40
                                ${layoutClass(index)}
                              `}
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/10 opacity-40" />
                              <img
                                src={image.url}
                                alt={image.title}
                                className="relative z-10 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                loading="lazy"
                              />
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                              <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-2 text-[10px] sm:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                <div className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 uppercase tracking-[0.18em]">
                                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                  {image.title}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
        </section>

      </main>

      {/* LIGHTBOX / MODAL */}
      {isModalOpen && activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev / Next */}
          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 md:left-8 rounded-full bg-white/10 px-3 py-2 text-2xl text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 md:right-8 rounded-full bg-white/10 px-3 py-2 text-2xl text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image container */}
          <div
            className="relative max-h-[85vh] w-full max-w-5xl px-4 md:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-black/40 shadow-2xl">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="h-full w-full max-h-[80vh] object-contain"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-200">
              <span className="font-medium tracking-wide">
                {activeImage.title}
              </span>
              <span className="text-xs text-slate-400">
                {activeIndex! + 1} / {GALLERY_IMAGES.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
