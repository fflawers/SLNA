import { useScrollAnimation } from '../hooks/useScrollAnimation';
import MenuItem from './MenuItem';
import './MenuSection.css';

export default function MenuSection({ items, title, subtitle, totalPrice, totalLabel, showPairing, lang, t }) {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [totalRef, totalVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section id="menu-section" className="menu-section">
      {/* Section header */}
      <header
        ref={headerRef}
        className={`menu-section__header ${headerVisible ? 'menu-section__header--visible' : ''}`}
      >
        <div className="menu-section__header-decoration">
          <span className="menu-section__header-line" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="menu-section__header-line" />
        </div>
        <h2 className="menu-section__title">{title}</h2>
        <p className="menu-section__subtitle">{subtitle}</p>
        {t.menuDescription && (
          <p className="menu-section__description">{t.menuDescription}</p>
        )}
      </header>

      {/* Botanical side decoration */}
      <div className="menu-section__side-botanical">
        <img src={`${import.meta.env.BASE_URL}images/botanical-decoration.png`} alt="" aria-hidden="true" />
      </div>

      {/* Menu items grid */}
      <div className="menu-section__grid">
        {items.map((item, index) => (
          <MenuItem
            key={item.id}
            item={item}
            index={index}
            showPairing={showPairing}
            lang={lang}
            t={t}
          />
        ))}
      </div>

      {/* Total price */}
      <div
        ref={totalRef}
        className={`menu-section__total ${totalVisible ? 'menu-section__total--visible' : ''}`}
      >
        <div className="menu-section__total-decoration">
          <span className="menu-section__total-line" />
        </div>
        <div className="menu-section__total-content">
          <p className="menu-section__total-label">{totalLabel}</p>
          <p className="menu-section__total-price">{totalPrice} <span className="menu-section__total-pp">{t.perPerson}</span></p>
        </div>
        <div className="menu-section__total-decoration">
          <span className="menu-section__total-line" />
        </div>
      </div>
      {t.footerMoneyFormat && (
        <p className="menu-section__total-label" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          {t.footerMoneyFormat}
        </p>
      )}
    </section>
  );
}
