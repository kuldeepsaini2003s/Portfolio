import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Skills from "./components/Skills";
import { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-dark relative text-light h-screen remove-scrollbar">
      <Background />
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Contact />
        <Footer />
        {scrolled && (
          <div className="fixed z-50 bottom-5 right-10">
            <button onClick={handleScrollTop} class="top-button">
              <svg class="svgIcon" viewBox="0 0 384 512">
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
