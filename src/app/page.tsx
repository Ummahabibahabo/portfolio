import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200 selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
