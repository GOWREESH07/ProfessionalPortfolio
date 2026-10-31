import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import AgenticEvolution from "@/components/AgenticEvolution";
import AppliedResearchProjects from "@/components/AppliedResearchProjects";
import HardwareAndIoT from "@/components/HardwareAndIoT";
import ResearchExplorations from "@/components/ResearchExplorations";
import TechStack from "@/components/TechStack";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Certifications from "@/components/Certifications";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-text-primary selection:bg-accent-chartreuse selection:text-bg-primary">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <AgenticEvolution />
      <AppliedResearchProjects />
      <HardwareAndIoT />
      <ResearchExplorations />
      <TechStack />
      <ExperienceTimeline />
      <Certifications />
      <ContactSection />
      <Footer />
    </main>
  );
}
