import { useEffect, useState } from 'react';
import './HeroCover.css';

export default function HeroCover({ onExplore, lang, t }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero-cover" className="hero-cover">
      {/* Background decorative elements */}
      <div className="hero-bg-pattern" />
      
      <div className="hero-botanical hero-botanical--top-right">
        <img src="images/botanical-decoration.png" alt="" aria-hidden="true" />
      </div>
      
      <div className="hero-botanical hero-botanical--bottom-left">
        <img src="images/botanical-decoration.png" alt="" aria-hidden="true" />
      </div>

      <div className={`hero-content ${loaded ? 'hero-content--visible' : ''}`}>
        <div className="hero-flower">
          <img src="images/gardenia-flower.png" alt="Gardenia" />
        </div>
        
        <div className="hero-divider hero-divider--top" />
        
        <h1 className="hero-title">
          <span className="hero-title__script">Gardenia</span>
        </h1>
        
        <p className="hero-subtitle">{t.heroSubtitle}</p>
        
        <div className="hero-divider hero-divider--bottom" />
        
        <p className="hero-tagline">{t.heroTagline}</p>
        
        <button 
          id="explore-menu-btn"
          className="hero-cta" 
          onClick={onExplore}
          aria-label={t.heroCta}
        >
          <span>{t.heroCta}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-indicator__mouse">
          <div className="hero-scroll-indicator__wheel" />
        </div>
      </div>
    </section>
  );
}
