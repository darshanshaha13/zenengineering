import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import ShinyText from "@/components/ui/ShinyText/ShinyText";
import { Link } from "react-router-dom";

const channelPartners = [
  {
    name: "Daikin",
    logoSrc: "/logos/daikin-logo.png",
  },
  {
    name: "Anutone",
    logoSrc: "/logos/anutone-logo.png",
  },
  {
    name: "Symphony",
    logoSrc: "/logos/symphony-logo.png",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] flex items-center overflow-hidden bg-[#050A14] py-12 md:py-16">
      {/* --- LAYER 1: Background Image & Texture --- */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.jpg"
          alt="Modern engineering workspace"
          className="w-full h-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* --- LAYER 2: Cinematic Lighting (Gradients) --- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A14] via-[#050A14]/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050A14] to-transparent" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* --- LAYER 3: Content --- */}
      <div className="container relative z-20 px-4 md:px-6">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs md:text-sm font-medium text-white/90 mb-6 md:mb-7 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide text-xs uppercase">
              Engineering Comfort. Delivering Excellence.
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 md:mb-6 leading-snug tracking-tight max-w-3xl">
            <span className="flex flex-wrap items-baseline gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
                Engineering
              </span>

              <ShinyText
                text="HVAC & Acoustic"
                speed={4}
                disabled={false}
                className="text-blue-400 italic drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]"
              />

              <span className="font-light text-white/80">
                Solutions That Last.
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-slate-300 mb-5 md:mb-7 max-w-3xl leading-relaxed font-light border-l-2 border-blue-500/50 pl-6">
            Trusted across Maharashtra, Zen Engineering Solutions provides
            premium HVAC, acoustic, and insulation services backed by proven
            engineering expertise. With offices in Sangli, Kolhapur, and Pune,
            we deliver energy-efficient solutions tailored to residential,
            commercial, industrial, and government needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mb-6 md:mb-8">
            <Button
              size="lg"
              className="h-12 md:h-13 px-7 md:px-8 text-base bg-white text-black hover:bg-slate-200 transition-all duration-300 rounded-full shadow-[0_0_16px_rgba(255,255,255,0.25)] font-semibold group"
              asChild
            >
              <Link to="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 md:h-13 px-7 md:px-8 text-base border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-full"
              asChild
            >
              <Link to="/projects" className="flex items-center">
                <PlayCircle className="mr-2 h-5 w-5" />
                View Case Studies
              </Link>
            </Button>
          </div>

          {/* Channel partners highlight */}
                    <br></br>
          <div className="max-w-4xl mt-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-[0_12px_35px_rgba(59,130,246,0.35)]">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-200/80 mr-2">
                  Our Channel Partners:
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:flex-nowrap md:items-center md:gap-4">
                {channelPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="group relative flex h-12 w-full max-w-[240px] items-center justify-center rounded-lg bg-gradient-to-br from-white/10 via-white/5 to-transparent px-3 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:ring-blue-400/50 md:w-[130px]"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/15 via-cyan-400/10 to-blue-500/15 opacity-0 blur-sm transition duration-300 group-hover:opacity-100" />
                    <img
                      src={partner.logoSrc}
                      alt={`${partner.name} logo`}
                      className="relative z-10 max-h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
