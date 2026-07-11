import { Tent, Flame, Users, BookOpen } from 'lucide-react';
import aboutImage from '../assets/LoggedOff/FullSizeRender.jpg';

export default function About() {
  const cards = [
    {
      icon: <Tent size={40} className="text-accent" />,
      title: "Raw Adventure",
      desc: "Remove the comforts of modern life. Nature pulls the plug on distraction and reminds us of what's real."
    },
    {
      icon: <Flame size={40} className="text-accent" />,
      title: "Survival Mechanics",
      desc: "Firecraft, shelter building, and survival techniques that strip away relying on software to rely on self."
    },
    {
      icon: <Users size={40} className="text-accent" />,
      title: "Analog Brotherhood",
      desc: "An authentic, supportive community built around a campfire, not a group chat."
    },
    {
      icon: <BookOpen size={40} className="text-accent" />,
      title: "Islamic Values",
      desc: "Anchored in daily prayers and deep reflections, synchronizing with the ultimate reality."
    }
  ];

  return (
    <section id="about" className="section relative">
      <div className="glow-orb primary" style={{ top: '10%', left: '-10%' }}></div>
      <div className="glow-orb tertiary" style={{ bottom: '10%', right: '-10%' }}></div>
      
      <div className="container">
        <div className="about-header text-center animate-fade-in-up delay-100">
          <h2 className="heading-lg mb-2">Unplug Intentionally. <br /><span className="text-gradient">Reconnect Deeply.</span></h2>
          <p className="about-sub">
            We believe the most important firmware updates happen offline. Around a fire, on a steep trail, under a sky full of stars.
          </p>
        </div>

        <div className="grid grid-4 about-cards animate-fade-in-up delay-200">
          {cards.map((card, idx) => (
            <div key={idx} className="card-premium text-center">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="philosophy-block animate-fade-in-up delay-300">
          <div className="philosophy-content">
            <h3 className="heading-md mb-3"><span className="text-gradient">The Vision</span></h3>
            <p>
              We draw our inspiration directly from the Sunnah. The Prophet Muhammad ﷺ routinely sought the absolute stillness of nature for reflection, prayer, and revelation—a total disconnection from the noise of society. 
            </p>
            <p>
              At <strong>Logged Off</strong>, we believe the great outdoors is the ultimate arena for transformation. By systematically removing notifications, pings, and digital dopamine hits, we uncover a sacred space. Here, character is forged, true leadership emerges, and spiritual devotion is restored.
            </p>
          </div>
          <div className="philosophy-image glass">
            <img src={aboutImage} alt="Campfire reflection" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>

      <style>{`
        .relative { position: relative; }
        .text-center { text-align: center; }
        .mb-2 { margin-bottom: 1rem; }
        .mb-3 { margin-bottom: 1.5rem; }
        .text-accent { color: var(--accent-primary); }
        
        .about-header {
          max-width: 800px;
          margin: 0 auto 4rem;
        }
        
        .about-sub {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-top: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .about-header { margin-bottom: 5rem; }
          .about-sub { font-size: 1.25rem; }
        }
        
        .about-cards { margin-bottom: 6rem; }
        
        .card-icon {
          display: inline-flex;
          align-items: center; justify-content: center;
          width: 80px; height: 80px;
          border-radius: 50%;
          background: rgba(255,107,53, 0.1);
          margin-bottom: 1.5rem;
          transition: var(--transition-smooth);
        }
        
        .card-premium:hover .card-icon {
          transform: scale(1.1);
          background: rgba(255,107,53, 0.2);
        }
        
        .card-premium h3 {
          font-weight: 700;
          font-size: 1.35rem;
          margin-bottom: 1rem;
        }
        
        .card-premium p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        
        .philosophy-block {
          display: grid;
          gap: 3rem;
          align-items: center;
          background: var(--bg-surface-elevated);
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        
        @media (min-width: 992px) {
          .philosophy-block {
            grid-template-columns: 1fr 1fr;
            padding: 4rem;
            gap: 5rem;
          }
        }
        
        .philosophy-content p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .philosophy-content p { font-size: 1.15rem; }
        }
        
        .philosophy-image {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          padding: 0;
        }
        
        .philosophy-image img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }
        
        .image-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(255,107,53,0.2) 0%, transparent 100%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
