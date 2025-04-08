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

function App() {
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
      </div>                
    </div>
  );
}

export default App;
