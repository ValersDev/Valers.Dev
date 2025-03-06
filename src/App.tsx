import { useRef } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section ref={heroRef} id="hero" className="min-h-screen flex items-center">
          <Hero />
        </section>
        
        <section ref={aboutRef} id="about" className="min-h-screen flex items-center">
          <About />
        </section>
        
        <section ref={projectsRef} id="projects" className="min-h-screen flex items-center">
          <Projects />
        </section>
        
        <section ref={contactRef} id="contact" className="min-h-screen flex items-center">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
