import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Technologies } from "@/components/sections/Technologies";
import { Stats } from "@/components/sections/Stats";
import { Industries } from "@/components/sections/Industries";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      {/* Image 1 style — floating icon cards constellation */}
      <Hero />

      <TrustedBy />

      <Services />

      {/* Image 3 style — large feature cards with illustration tops */}
      <WhyChooseUs />

      {/* Image 4 style — fan / arc tech icons */}
      <Technologies />

      <Stats />
      <Industries />
      <Portfolio />
      <Process />

      {/* Image 2 style — floating person photo cards around centered text */}
      <Testimonials />

      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
