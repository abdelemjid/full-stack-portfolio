import ClientLayout from "./components/layouts/clientLayout";
import Biography from "./components/section/biography";
import Contact from "./components/section/contact";
import EducationTimeline from "./components/section/education";
import HeroSection from "./components/section/hero";
import Projects from "./components/section/projects";
import Skills from "./components/section/skills";

export default function Home() {
  return (
    <ClientLayout>
      <HeroSection />
      <Biography />
      <Skills />
      <EducationTimeline />
      <Projects />
      <Contact />
    </ClientLayout>
  );
}
