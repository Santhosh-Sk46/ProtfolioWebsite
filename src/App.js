import './App.css';
import Contact from './Protfolio/Contact';
import Intro from './Protfolio/intro';
import Navbar from './Protfolio/Navbar';
import Skills from './Protfolio/Skills';
import Works from './Protfolio/Works';

function App() {
  return (
    <>
    <div className="App">
    
            <Navbar/>
            <Intro/>
            <Skills/> 
            <Works/>
            <Contact/>
     
    </div>
    </>
  );
}

export default App;
