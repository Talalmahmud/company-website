import { Contact } from "@/components/Contact";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Technologies } from "@/components/sections/Technologies";
import { StatsSection } from "@/components/sections/StateSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />

      <Services />
      <ProcessSection />

      <Technologies />
      <Portfolio />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
      <Contact />
    </>
  );
}
