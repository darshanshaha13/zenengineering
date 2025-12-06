import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClientsSection from "@/components/home/ClientsSection";
import Seo from "@/components/Seo";
import {
  organizationSchema,
  siteMeta,
  websiteSchema,
} from "@/seo/siteMeta";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Zen Engineering Solutions | Acoustic & HVAC Experts"
        description="Zen Engineering Solutions delivers premium HVAC, acoustic, and insulation services across Maharashtra with authorised Daikin, Anutone Acoustic, and Symphony partnerships."
        canonicalPath="/"
        image="/hero-image.jpg"
        structuredData={[
          { ...organizationSchema, "@id": `${siteMeta.siteUrl}#organization` },
          { ...websiteSchema, "@id": `${siteMeta.siteUrl}#website` },
        ]}
      />

      <main>
        <Hero />
        <ServicesSection />
        <ProjectsPreview />
        <WhyChooseUs />
        <ClientsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
