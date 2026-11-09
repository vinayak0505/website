
import { useEffect, useState } from 'react';
import About from './About/About';
import './App.css';
import Certificates from './Certificates/Certificates';
import Experience from './Experience/Experience';
import Expertise from './Expertise/Expertise';
import Header from './Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function App() {
  const [showTitle, setShowTitle] = useState(false);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    let isTicking = false;

    const updatePosition = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          setShowLine(window.scrollY > 0);
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener('scroll', updatePosition, { passive: true });
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [])

  return (
    <div className="App">
      <Header showTitle={showTitle} showLine={showLine}/>
      <Home setShowTitle={setShowTitle}/>
      <Expertise />
      <Experience />
      <Projects />
      <Certificates />
      <Skills/>
      <About />
    </div>
  );
}

export default App;
