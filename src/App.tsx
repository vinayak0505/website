
import { useEffect, useState } from 'react';
import About from './About/About';
import './App.css';
import Certificates from './Certificates/Certificates';
import Experience from './Experience/Experience';
import Experties from './Experties/Experties';
import Header from './Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function App() {

  const [showTitle, setShowTitle] = useState(false);
  const [showLine, setShowLine] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      console.log(window.scrollY);
      setShowLine(window.scrollY > 0);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [])

  return (
    <div className="App">
      <Header showTitle={showTitle} showLine={showLine}/>
      <Home setShowTitle={setShowTitle}/>
      <Experties />
      <Experience />
      <Projects />
      <Certificates />
      <Skills/>
      <About />
    </div>
  );
}

export default App;
