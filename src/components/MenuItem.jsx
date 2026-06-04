import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './MenuItem.css';

export default function MenuItem({ item, index, showPairing = false, lang, t }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.15 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const isEven = index % 2 === 0;
  const name = item.name[lang];
  const description = item.description[lang];
  const details = item.details[lang];
  const price = showPairing ? item.priceMaridaje : item.priceDegustacion;

  return (
    <article
      ref={ref}
      id={`menu-item-${item.id}`}
      className={`menu-item ${isVisible ? 'menu-item--visible' : ''} ${isEven ? 'menu-item--left' : 'menu-item--right'}`}
      style={{ '--delay': `${index * 0.1}s`, '--accent': item.accentColor }}
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setExpanded(!expanded); } }}
    >
      {/* Course number */}
      <div className="menu-item__course-num">
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>

      {/* Image */}
      <div className="menu-item__image-wrapper">
        <div className={`menu-item__image-container ${imageLoaded ? 'menu-item__image-container--loaded' : ''}`}>
          <img
            src={item.image}
            alt={name}
            className="menu-item__image"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
          <div className="menu-item__image-overlay" />
        </div>
        <div className="menu-item__weight-badge">
          <span>{item.weight}</span>
        </div>
      </div>

      {/* Content */}
      <div className="menu-item__content">
        <div className="menu-item__header">
          <h3 className="menu-item__name">{name}</h3>
          <div className="menu-item__price">{price} <span className="menu-item__price-pp">{t.perPerson}</span></div>
        </div>

        <p className="menu-item__description">{description}</p>

        <div className={`menu-item__details ${expanded ? 'menu-item__details--expanded' : ''}`}>
          <ul className="menu-item__detail-list">
            {details.map((detail, i) => (
              <li key={i} className="menu-item__detail-item">
                <span className="menu-item__detail-dot" />
                {detail}
              </li>
            ))}
          </ul>

          {showPairing && item.pairing && (
            <div className="menu-item__pairing">
              <div className="menu-item__pairing-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 2v4M16 2v4M4 10h16M6 4h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
                <span>{t.pairingLabel}</span>
              </div>
              <p className="menu-item__pairing-drink">{item.pairing.drink[lang]}</p>
              <p className="menu-item__pairing-volume">{item.pairing.volume}</p>
            </div>
          )}
        </div>

        <button 
          className="menu-item__expand-btn"
          aria-label={expanded ? 'Show less' : 'Show more'}
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            className={`menu-item__expand-icon ${expanded ? 'menu-item__expand-icon--rotated' : ''}`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </article>
  );
}
