import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { scrollToSection, getCurrentYear } from './utilities/functions';

function App() {
  const restBase = 'https://klausdragon.com/portfolio/';

  return (
    <div>
      <header className="site-header">
        <nav className="site-navigation">
          <ul>
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
            <li><a href="#stack" onClick={() => scrollToSection('stack')}>Stack</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <Routes>
          <Route path='/' element={<Home restBase={restBase} />} />
          <Route path='/projects/:projectId' element={<ProjectDetails />} />
        </Routes>
      </main>
      <footer>
        <p>©{getCurrentYear()} Designed and Developed by Ali Abbasi</p>
      </footer>
    </div>
  );
}

export default App;