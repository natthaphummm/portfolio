import Navar from "./components/layout/Navbar";
import Contact from "./components/common/Contact";
import Hero from "./components/common/Hero";
import Skills from "./components/common/Skills";
import Projects from "./components/common/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-gray-200">
      <Navar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}
