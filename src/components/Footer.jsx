import { Power } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="logo group">
              <div className="logo-icon-footer">
                <Power strokeWidth={2.5} size={28} className="text-secondary" />
              </div>
              <span className="heading-md mb-0">LOGGED<span className="text-gradient">OFF</span></span>
            </a>
            <p className="mt-3">
              Trade screens for stars. Cultivating a resilient generation deeply anchored in their faith, away from the digital noise.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Directory</h4>
            <a href="#about">The Vision</a>
            <a href="#activities">Experiences</a>
            <a href="#retreats">Upcoming Retreats</a>
            <a href="#schedule">Itinerary Logic</a>
          </div>
          
          <div className="footer-contact" id="contact">
            <h4>Join The Network</h4>
            <p>Subscribe to our secure relay for retreat coordinates.</p>
            <form className="contact-form mt-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email coordinates..." required aria-label="Email address" />
              <button type="submit" className="btn btn-primary">Transmit</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Logged Off Experiences. All systems offline.</p>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 6rem 0 2rem;
          background: linear-gradient(to top, var(--bg-surface-elevated), var(--bg-base));
          border-top: 1px solid rgba(255,255,255,0.02);
        }
        
        .mb-0 { margin-bottom: 0 !important; }
        .mt-3 { margin-top: 1rem; }
        
        .footer-top {
          display: grid;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        
        @media (min-width: 768px) {
          .footer-top {
            grid-template-columns: 2fr 1fr 1.5fr;
            gap: 5rem;
          }
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-primary);
        }
        
        .logo-icon-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          transition: var(--transition-smooth);
        }
        
        .logo-icon-footer svg { color: var(--accent-primary); }
        
        .footer-brand p {
          color: var(--text-secondary);
          max-width: 400px;
          font-size: 1.05rem;
          line-height: 1.6;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .footer-links h4, .footer-contact h4 {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .footer-links a {
          color: var(--text-secondary);
          font-size: 1rem;
          font-weight: 500;
          display: inline-block;
          width: fit-content;
        }
        
        .footer-links a:hover {
          color: var(--accent-primary);
          transform: translateX(5px);
        }
        
        .footer-contact p {
          color: var(--text-secondary);
          font-size: 1rem;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        @media (min-width: 480px) {
          .contact-form { flex-direction: row; }
        }
        
        .contact-form input {
          flex-grow: 1;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255, 107, 53, 0.2);
          padding: 1rem 1.25rem;
          border-radius: 50px;
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 1rem;
          outline: none;
          transition: var(--transition-smooth);
        }
        
        .contact-form input:focus {
          border-color: var(--accent-primary);
          box-shadow: 0 0 15px rgba(255, 107, 53, 0.2);
        }
        
        .contact-form button { white-space: nowrap; }
        
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          text-align: center;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
      `}</style>
    </footer>
  );
}
