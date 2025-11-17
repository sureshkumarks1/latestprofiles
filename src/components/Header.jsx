import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const handleThemeToggle = () => {
    toggleTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Scroll to top when route changes
    const timer = setTimeout(() => {
      const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Your Name</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
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
