import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled || menuOpen ? 'scrolled glass-nav' : ''}`}>
      <div className="container nav-content">
        <a href="/" className="logo group">
          <div className="logo-icon">
            <svg viewBox="0 0 100 100" className="custom-logo-svg">
              <path 
                className="logo-power"
                d="M 50 15 L 50 45 M 30 25 A 35 35 0 1 0 70 25" 
                stroke="#ff9f1c" 
                strokeWidth="6" 
                strokeLinecap="round" 
                fill="none" 
              />
              <path 
                className="logo-ekg"
                d="M 18 65 L 35 65 L 44 42 L 53 85 L 61 52 L 67 65 L 82 65" 
                stroke="#ff6b35" 
                strokeWidth="5" 
                strokeLinecap="round"
                strokeLinejoin="round" 
                fill="none" 
              />
            </svg>
          </div>
          <span className="logo-text">LOGGED<span className="text-gradient">OFF</span></span>
        </a>
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>The Vision</a>
          <a href="#activities" onClick={() => setMenuOpen(false)}>Experiences</a>
          <a href="#retreats" onClick={() => setMenuOpen(false)}>Retreats</a>
          <a href="#schedule" onClick={() => setMenuOpen(false)}>Itinerary</a>
          <a href="#contact" className="btn btn-primary btn-sm mobile-only" onClick={() => setMenuOpen(false)}>Disconnect Now</a>
        </div>
        
        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary btn-sm desktop-only">Disconnect Now</a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition-smooth);
        }
        
        .navbar.scrolled {
          padding: 1rem 0;
        }
        
        .glass-nav {
          background: rgba(5, 11, 9, 0.85) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }
        
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        
        .logo-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px; height: 45px;
          background: transparent;
          border-radius: 12px;
          transition: var(--transition-fast);
        }
        
        .custom-logo-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        
        .logo-power {
          filter: drop-shadow(0 0 3px rgba(255,159,28,0.5));
          transition: var(--transition-smooth);
        }
        
        .logo-ekg {
          filter: drop-shadow(0 0 4px rgba(255,107,53,0.6));
          transform-origin: center;
        }
        
        .logo:hover .logo-power { 
          stroke: #ffb703;
          filter: drop-shadow(0 0 6px rgba(255,159,28,0.8));
        }
        
        .logo:hover .logo-ekg { 
          animation: pulse-ekg 1.2s infinite;
        }
        
        @keyframes pulse-ekg {
          0%, 100% { 
            filter: drop-shadow(0 0 4px rgba(255,107,53,0.6)); 
            stroke-width: 5;
            transform: scale(1);
          }
          15% { 
            filter: drop-shadow(0 0 10px rgba(255,107,53,0.9)); 
            stroke-width: 6;
            stroke: #ff4d00;
            transform: scale(1.05);
          }
          30% { 
            filter: drop-shadow(0 0 4px rgba(255,107,53,0.6)); 
            stroke-width: 5;
            transform: scale(1);
          }
          45% { 
            filter: drop-shadow(0 0 15px rgba(255,107,53,1)); 
            stroke-width: 6.5;
            stroke: #ff3300;
            transform: scale(1.1);
          }
        }
        
        @media (min-width: 768px) {
          .logo { font-size: 1.8rem; gap: 0.75rem; }
        }
        
        .nav-links {
          position: fixed;
          top: 76px; left: 0; right: 0; bottom: 0;
          background: var(--bg-surface);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3rem;
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: var(--transition-smooth);
        }
        
        .nav-links.active {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }
        
        .nav-links a:not(.btn) {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          position: relative;
        }
        
        .nav-links a:not(.btn):after {
          content: '';
          position: absolute;
          bottom: -5px; left: 0;
          width: 0%; height: 2px;
          background: var(--gradient-ember);
          transition: var(--transition-smooth);
        }
        
        .nav-links a:not(.btn):hover { color: var(--text-primary); }
        .nav-links a:not(.btn):hover::after { width: 100%; }
        
        .btn-sm { padding: 0.75rem 1.75rem; font-size: 0.9rem; }
        
        .mobile-only { display: inline-flex; margin-top: 1rem; }
        .desktop-only { display: none; }
        
        .menu-btn {
          background: none; border: none;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center; justify-content: center;
        }
        
        @media (min-width: 900px) {
          .nav-links {
            position: static;
            flex-direction: row;
            background: transparent;
            gap: 2.5rem;
            transform: translateY(0);
            opacity: 1; 
            visibility: visible;
          }
          .nav-links a:not(.btn) { font-size: 0.95rem; font-weight: 500; }
          .mobile-only { display: none; }
          .desktop-only { display: inline-flex; }
          .menu-btn { display: none; }
        }
      `}</style>
    </nav>
  );
}
