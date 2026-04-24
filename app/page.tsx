import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Thesis from "@/components/Thesis";
import Arguments from "@/components/Arguments";
import PullBand from "@/components/PullBand";
import WhyNow from "@/components/WhyNow";
import BeforeAfter from "@/components/BeforeAfter";
import Service from "@/components/Service";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import MouseGlow from "@/components/MouseGlow";
import RevealObserver from "@/components/RevealObserver";
import TweaksMount from "@/components/TweaksMount";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <RevealObserver />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Thesis />
        <Arguments />
        <PullBand />
        <WhyNow />
        <BeforeAfter />
        <Service />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <TweaksMount />
    </>
  );
}
