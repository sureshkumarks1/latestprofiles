import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  const handleThemeToggle = () => {
    toggleTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Handle smooth scroll with navbar offset
    const handleClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
          const targetPosition = targetElement.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          setActiveSection(targetId);
        }
      }
    };

    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    // Update active section on scroll
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
      const scrollPosition = window.scrollY + headerHeight + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Your Name</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          <li>
            <button 
              className="theme-toggle"
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
