
import About from './About/About';
import './App.css';
import Certificates from './Certificates/Certificates';
import Experience from './Experience/Experience';
import Experties from './Experties/Experties';
import Header from './Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Experties />
      <Experience />
      <Projects />
      <Certificates />
      <About />
    </div>
  );
}

export default App;
