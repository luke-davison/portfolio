import Image from "next/image";
import LandingSection from "./landingSection";
import AboutSection from "./aboutSection";
import PortfolioSection from "./portfolioSection";
import WorkSection from "./workSection";

export default function Home() {
  return (
    <div>
      <LandingSection />
      <AboutSection />
      <PortfolioSection />
      <WorkSection />
    </div>
  );
}
