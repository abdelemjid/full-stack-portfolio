import Biography from "./components/section/biography";
import HeroSection from "./components/section/hero";
import Skills from "./components/section/skills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Biography />
      <Skills />
    </div>
  );
}
