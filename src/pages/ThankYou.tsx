// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home } from "lucide-react";

// --- Consistent Dark Theme Constants from Contact.tsx ---
const DARK_BG = "#050A14"; 
const SECONDARY_BG = "#0B1120"; 
const TEXT_MUTED_DARK = "text-slate-400"; 
const TEXT_LIGHT = "text-white";
const BORDER_DARK = "border-white/10"; 
const ACCENT_COLOR_CLASS = "text-blue-400"; 
const GLASS_CARD_BASE = `border ${BORDER_DARK} bg-white/5 backdrop-blur-lg`;

const ThankYou = () => {
  return (
    // Use the same overall container background as Contact.tsx
    <div className={`min-h-screen bg-[${DARK_BG}] flex flex-col justify-between`}>
      {/* <Header /> */}
      
      <main className="flex-grow flex items-center justify-center section-padding">
        <div className="container-custom relative z-10 text-center">
          
          {/* Subtle Glow/Spotlight effect for visual interest */}
          <div className="absolute inset-0 w-full h-full bg-blue-500/5 blur-[100px] rounded-full mx-auto" />

          {/* Thank You Card */}
          <div className={`mx-auto max-w-2xl p-8 md:p-12 rounded-xl ${GLASS_CARD_BASE} shadow-2xl shadow-black/50 relative z-20`}>
            
            {/* Success Icon */}
            <CheckCircle2 className={`w-20 h-20 mx-auto mb-6 ${ACCENT_COLOR_CLASS} drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]`} />
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className={ACCENT_COLOR_CLASS}>Thank You!</span>
            </h1>
            
            {/* Message */}
            <p className={`text-xl ${TEXT_LIGHT} mb-6 max-w-xl mx-auto`}>
              Your message has been successfully sent. We appreciate you reaching out and will get back to you within 24 hours.
            </p>
            
            {/* Action Button to Home */}
            <Button 
              asChild // Use asChild if you are integrating with a router link component (e.g., Next.js Link)
              size="lg" 
              className="mt-6 h-12 text-base bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 rounded-lg shadow-lg shadow-blue-500/40 group"
            >
              {/* If using a standard HTML file, replace the surrounding anchor/link with:
                  <a href="/">Back to Homepage</a>
              */}
              <a href="/">
                <Home className="mr-2 h-4 w-4 group-hover:-translate-x-0.5 transition-transform" /> 
                Back to Homepage
              </a>
            </Button>
            
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;