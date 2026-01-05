import Navigation from "./components/sections/navigation";
import HeroSection from "./components/sections/hero";
import PioneeringSolutions from "./components/sections/pioneering-solutions";
import ApplicationCarousel from "./components/sections/application-carousel";
import FutureExcellence from "./components/sections/future-excellence";
import TestimonialsSlider from "./components/sections/testimonials-slider";
import WorkflowSelector from "./components/sections/workflow-selector";
import LatestNews from "./components/sections/latest-news";
// import CareersCTA from "./components/sections/CareersCTA";
import Footer from "./components/sections/footer";
import BioprocessInnovation from "./components/sections/bioprocess-innovation";
import CareersCTA from "./components/sections/careers-cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="p-0">
        <HeroSection />
        <PioneeringSolutions />
        <ApplicationCarousel />
        <FutureExcellence />
        <TestimonialsSlider />
        <BioprocessInnovation />
        <WorkflowSelector />
        <CareersCTA />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}
