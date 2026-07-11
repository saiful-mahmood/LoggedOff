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
          
          <div className="safety-bar glass text-center mb-4">
            <div className="safety-icon"><ShieldCheck size={36} className="text-accent" /></div>
            <div className="safety-text">
              <h4 className="heading-md" style={{fontSize: '1.5rem'}}>Secure Protocol</h4>
              <p>Our retreats lead with highly trained offline staff, wilderness first aid preparedness, strict supervision standards, and ironclad emergency procedures.</p>
            </div>
          </div>
          
          <div className="registration-card glass">
            <div className="reg-header">
              <div className="reg-badge">Next Expedition</div>
              <h4 className="heading-md" style={{fontSize: '2rem'}}>August 20th &ndash; 23rd</h4>
              <p className="reg-scarcity">Only 10 Seats Available</p>
            </div>
            
            <div className="reg-body">
              <div className="reg-price-box">
                <div className="price-val">$499</div>
                <div className="price-label">Per Person / All-Inclusive</div>
              </div>
              
              <ul className="reg-details">
                <li><strong>Full Weekend Experience:</strong> All meals, gear, and lodging included.</li>
                <li><strong>Cohorts:</strong> Separate groups for 9-12th Graders, College Students, and Adults.</li>
                <li><strong>Registration:</strong> Advance booking required. A deposit must be paid to secure your spot.</li>
              </ul>
              
              <a href="#contact" className="btn btn-primary w-full mt-4" style={{width: '100%'}}>Secure Your Seat</a>
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
        
        .registration-card {
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          max-width: 900px;
          margin: 0 auto;
          overflow: hidden;
          border: 1px solid rgba(255,107,53,0.2);
        }
        
        .reg-header {
          background: rgba(255, 107, 53, 0.05);
          padding: 1.5rem;
          text-align: center;
          border-bottom: 1px solid rgba(255,107,53,0.1);
        }
        
        .reg-badge {
          display: inline-block;
          background: var(--gradient-ember);
          color: white;
          padding: 0.35rem 1rem;
          border-radius: 50px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          box-shadow: 0 4px 15px rgba(255,107,53,0.3);
        }
        
        .reg-scarcity {
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 1.1rem;
          margin-top: 0.5rem;
        }
        
        .reg-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .reg-price-box {
          text-align: center;
        }
        
        .price-val {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1;
        }
        
        .price-label {
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
          margin-top: 0.5rem;
        }
        
        .reg-details {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .reg-details li {
          position: relative;
          padding-left: 1.5rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .reg-details li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-primary);
          font-size: 1.5rem;
          line-height: 1;
          top: -2px;
        }
        
        .reg-details strong {
          color: var(--text-primary);
        }
        
        @media (min-width: 768px) {
          .safety-bar {
            flex-direction: row;
            text-align: left;
            gap: 2.5rem;
          }
          
          .registration-card {
            flex-direction: row;
          }
          
          .reg-header {
            flex: 1;
            padding: 2.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-bottom: none;
            border-right: 1px solid rgba(255,107,53,0.1);
          }
          
          .reg-body {
            flex: 1.5;
            padding: 2.5rem;
          }
          
          .price-val {
            font-size: 4rem;
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
