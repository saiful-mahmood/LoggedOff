import { ArrowRight } from 'lucide-react';
import actImg1 from '../assets/LoggedOff/IMG_0475(1).jpg';
import actImg2 from '../assets/LoggedOff/6082bda8-9bae-4770-99c1-501296613e2d.jpg';
import actImg3 from '../assets/LoggedOff/IMG_7800.jpg';

export default function Activities() {
  const activities = [
    {
      name: "Archery Mastery",
      desc: "Learn focus, discipline, safety, and technique. Shut off the peripheral noise and lock onto a single target.",
      img: actImg1,
    },
    {
      name: "Wilderness Fishing",
      desc: "Absolute patience, observation, and responsibility. An analog appreciation for Allah's provision in the serenity of nature.",
      img: actImg2,
    },
    {
      name: "Open-Water Nav",
      desc: "Teamwork, analog navigation, and building core confidence on the open water amidst breathtaking, untamed landscapes.",
      img: actImg3,
    }
  ];

  return (
    <section id="activities" className="section relative">
      <div className="container">
        <div className="activities-header">
          <div>
            <h2 className="heading-lg">Analog <span className="text-gradient">Experiences</span></h2>
            <p className="activities-sub">
              Every activity is engineered to foster personal leadership, physical resilience, and teamwork. No signal required.
            </p>
          </div>
          <div className="header-btn">
            <a href="#schedule" className="btn btn-outline">View Itinerary</a>
          </div>
        </div>

        <div className="grid grid-3">
          {activities.map((act, idx) => (
            <div key={idx} className="activity-card group">
              <div className="activity-img">
                <div className="img-overlay"></div>
                <img src={act.img} alt={act.name} loading="lazy" />
              </div>
              <div className="activity-content glass">
                <h3 className="heading-md mb-2">{act.name}</h3>
                <p>{act.desc}</p>
                <div className="act-arrow">
                  <ArrowRight className="text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .activities-header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }
        
        .activities-sub {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-top: 1rem;
        }
        
        .header-btn { display: none; }
        
        @media (min-width: 900px) {
          .activities-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
          .header-btn { display: block; }
        }
        
        .activity-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        
        .activity-img {
          height: 350px;
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          z-index: 1;
        }
        
        @media (min-width: 768px) { .activity-img { height: 450px; } }
        
        .img-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to top, rgba(5,11,9, 0.9) 0%, transparent 60%);
          z-index: 2;
          transition: var(--transition-smooth);
        }
        
        .activity-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .activity-card:hover .activity-img img { transform: scale(1.08); }
        .activity-card:hover .img-overlay { opacity: 0.8; }
        
        .activity-content {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          padding: 1.5rem;
          border-radius: 12px;
          z-index: 3;
          transform: translateY(20px);
          opacity: 0.9;
          transition: var(--transition-smooth);
          background: rgba(10, 19, 16, 0.85);
        }
        
        .activity-card:hover .activity-content {
          transform: translateY(0);
          opacity: 1;
          border-color: rgba(255, 107, 53, 0.5);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        
        .mb-2 { margin-bottom: 0.75rem; }
        
        .activity-content h3 { font-size: 1.5rem; text-transform: uppercase; letter-spacing: 0.05em; }
        .activity-content p { font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem;}
        
        .act-arrow {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--accent-primary);
          text-transform: uppercase;
          font-size: 0.85rem;
          opacity: 0;
          transform: translateX(-10px);
          transition: var(--transition-smooth);
        }
        .text-accent { color: var(--accent-primary); }
        
        .activity-card:hover .act-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </section>
  );
}
