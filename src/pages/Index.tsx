
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Activities from '../components/Activities';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';

const Index = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Activities />
      <Contact />
      <FloatingButton />
    </div>
  );
};

export default Index;
