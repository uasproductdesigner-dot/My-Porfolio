// src/App.js or App.jsx
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Services from "./components/Services/Services";
import './App.css';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Services /> */}
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;