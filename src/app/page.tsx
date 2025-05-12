import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { FacilityTypes } from "@/components/facility-types";
import { Testimonials } from "@/components/testimonials";
import { Stats } from "@/components/stats";
import { CtaSection } from "@/components/cta-section";
import { ROICalculatorHome } from "@/components/roi-calculator-home";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <Stats />
      <ROICalculatorHome />
      <FacilityTypes />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
