import { Clock, Sunrise, Moon, ShieldCheck, Activity } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    {
      day: "Friday",
      icon: <Moon className="text-accent" size={28} />,
      events: ["System Shutdown (Arrival & Setup)", "Maghrib Protocol", "Campfire Diagnostics", "Opening Reflection Circle"]
    },
    {
      day: "Saturday",
      icon: <Sunrise className="text-accent" size={28} />,
      events: ["Fajr Bootup sequence", "Firecraft Logic Workshop", "Archery & Analog Target Practice", "Topographic Hike", "Campfire Sync Discussion"]
    },
    {
      day: "Sunday",
      icon: <Clock className="text-accent" size={28} />,
      events: ["Fajr & Morning Rations", "Analog Leadership Algorithms", "Quranic Reflection Module", "Closing Output & Departure"]
    }
  ];

  return (
    <section id="schedule" className="section relative">
      <div className="glow-orb tertiary" style={{ top: '20%', left: '40%' }}></div>
      <div className="container">
        <div className="schedule-wrap">
          <div className="text-center mb-5">
            <div className="badge-tech inline-block mb-3">
              <Activity size={16} /> <span>System Itinerary</span>
            </div>
            <h2 className="heading-lg">Into The <span className="text-gradient">Wilderness.</span></h2>
            <p className="schedule-sub">
              A sample itinerary balancing high-energy analog processing with serene moments of prayer, reflection, and offline bonding.
            </p>
          </div>
          
          <div className="schedule-grid">
            {schedule.map((day, idx) => (
              <div key={idx} className="schedule-card glass">
                <div className="day-header">
                  <div className="day-icon">{day.icon}</div>
                  <h3 className="heading-md mb-0">{day.day}</h3>
                </div>
                <div className="timeline">
                  {day.events.map((event, i) => (
                    <div key={i} className="timeline-item">
                      <div className="timeline-line"></div>
                      <div className="timeline-dot"></div>
                      <p>{event}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="safety-bar glass text-center">
            <div className="safety-icon"><ShieldCheck size={36} className="text-accent" /></div>
            <div className="safety-text">
              <h4 className="heading-md" style={{fontSize: '1.5rem'}}>Secure Protocol</h4>
              <p>Our retreats lead with highly trained offline staff, wilderness first aid preparedness, strict supervision standards, and ironclad emergency procedures.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .mb-3 { margin-bottom: 1.5rem; }
        .mb-5 { margin-bottom: 4rem; }
        .mb-0 { margin-bottom: 0 !important; }
        .text-center { text-align: center; }
        .inline-block { display: inline-flex; }
        .text-accent { color: var(--accent-primary); }
        
        .badge-tech {
          align-items: center; gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(46, 196, 182, 0.4);
          background: rgba(46, 196, 182, 0.05);
          color: var(--accent-tertiary);
          border-radius: 4px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .schedule-sub {
          max-width: 600px;
          margin: 1.5rem auto 0;
          color: var(--text-secondary);
          font-size: 1.15rem;
        }
        
        .schedule-grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        @media (min-width: 1024px) {
          .schedule-grid { grid-template-columns: repeat(3, 1fr); margin-bottom: 5rem; }
        }
        
        .schedule-card {
          padding: 2.5rem;
          border-radius: 16px;
          position: relative;
          border-top: 2px solid rgba(255,107,53, 0.3);
        }
        
        .day-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        
        .day-icon {
          width: 50px; height: 50px;
          border-radius: 12px;
          background: rgba(255, 107, 53, 0.1);
          display: flex; align-items: center; justify-content: center;
        }
        
        .timeline { position: relative; padding-left: 10px; }
        
        .timeline-item {
          position: relative;
          padding-left: 2rem;
          padding-bottom: 2rem;
        }
        
        .timeline-item:last-child { padding-bottom: 0; }
        
        .timeline-line {
          position: absolute;
          left: 3px; top: 12px; bottom: -12px;
          width: 2px;
          background: rgba(255,255,255,0.05);
        }
        
        .timeline-item:last-child .timeline-line { display: none; }
        
        .timeline-dot {
          position: absolute;
          left: 0; top: 6px;
          width: 8px; height: 8px;
          background: var(--accent-primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-primary);
        }
        
        .timeline-item p {
          font-size: 1.05rem;
          color: var(--text-primary);
          line-height: 1.4;
          font-weight: 500;
        }
        
        .safety-bar {
          padding: 3rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
          border-left: 4px solid var(--accent-tertiary);
        }
        
        @media (min-width: 768px) {
          .safety-bar {
            flex-direction: row;
            text-align: left;
            gap: 2.5rem;
          }
        }
        
        .safety-text p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </section>
  );
}
