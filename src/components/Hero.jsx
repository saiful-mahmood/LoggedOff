import { Power, ArrowRight } from 'lucide-react';
import heroVideo from '../assets/LoggedOff/IMG_0430.MOV';
import heroPoster from '../assets/LoggedOff/CE4E6BB1-FF71-4B0F-A328-72A83E9B8892.jpg';

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-bg">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
          src={heroVideo}
          poster={heroPoster}
        ></video>
      </div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <div className="hero-text animate-fade-in-up">
          <div className="hero-badge">
            <Power size={16} className="text-accent" /> 
            <span>Disconnect to Reconnect</span>
          </div>
          <h1 className="heading-xl hero-title">
            Log Off From The <br className="desktop-break" />
            <span className="text-gradient">Noise.</span>
          </h1>
          <p className="hero-desc delay-100">
            Trade screens for stars. Build resilience, brotherhood, and a profound connection with Allah in the raw beauty of the outdoors.
          </p>
          <div className="hero-actions delay-200">
            <a href="#retreats" className="btn btn-primary pulse-btn">
              Explore Retreats <ArrowRight size={20} />
            </a>
            <a href="#about" className="btn btn-outline">Our Philosophy</a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator delay-300 animate-fade-in-up">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 6rem;
          padding-bottom: 5rem;
          overflow: hidden;
        }
        
        .hero-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background-image: url('${heroPoster}');
          background-size: cover;
          background-position: center;
          z-index: -2;
          transform: scale(1.05);
        }
        
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
          filter: contrast(1.15) saturate(1.2) brightness(0.9);
        }
        
        .hero-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(
            to bottom, 
            rgba(5, 11, 9, 0.3) 0%, 
            rgba(5, 11, 9, 0.6) 70%, 
            var(--bg-base) 100%
          ), radial-gradient(
            circle at center, 
            transparent 30%, 
            rgba(5, 11, 9, 0.7) 100%
          );
          z-index: -1;
        }
        
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          max-width: 1000px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }
        
        .text-accent { color: var(--accent-primary); }
        
        .hero-title {
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        
        .desktop-break { display: none; }
        @media (min-width: 900px) {
          .desktop-break { display: block; }
        }
        
        .hero-desc {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 600px;
        }
        
        @media (min-width: 768px) {
          .hero-desc { font-size: 1.35rem; }
        }
        
        .hero-actions {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          width: 100%;
          max-width: 350px;
        }
        
        @media (min-width: 500px) {
          .hero-actions {
            flex-direction: row;
            width: auto;
            max-width: none;
          }
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }
        
        .mouse {
          width: 30px;
          height: 50px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 20px;
          position: relative;
        }
        
        .wheel {
          width: 4px;
          height: 8px;
          background: var(--text-primary);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scrollWheel 2s infinite;
        }
        
        @keyframes scrollWheel {
          0% { top: 8px; opacity: 1; }
          100% { top: 24px; opacity: 0; }
        }
      `}</style>
    </header>
  );
}
