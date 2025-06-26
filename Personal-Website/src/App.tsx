
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import Navbar from './components/Navbar.tsx';




const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </main>
    </>
  );
};



export default App
