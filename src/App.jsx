import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
