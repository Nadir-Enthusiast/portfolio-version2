import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

function App() {
  var preloader = document.getElementById('loader');
  function preLoaderHandler(){
      preloader.style.display = 'none';
  }
  return (
      <div className="App">
        {preLoaderHandler()}
        <Navbar />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
  );
}

export default App;
