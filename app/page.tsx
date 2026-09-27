import { Preloader } from "@/components/sections/Preloader";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { Included } from "@/components/sections/Included";
import { Reviews } from "@/components/sections/Reviews";
import { Metrics } from "@/components/sections/Metrics";
import { Engagements } from "@/components/sections/Engagements";
import { Faqs } from "@/components/sections/Faqs";
import { CtaMarquee } from "@/components/sections/CtaMarquee";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Services />
        <Included />
        <Process />
        <WhyUs />
        <Reviews />
        <Metrics />
        <Engagements />
        <Faqs />
        <CtaMarquee />
      </main>
      <Footer />
    </>
  );
}
