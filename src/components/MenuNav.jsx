import './MenuNav.css';

export default function MenuNav({ activeMenu, onMenuChange, t }) {
  return (
    <nav id="menu-nav" className="menu-nav" aria-label="Menu selection">
      <div className="menu-nav__inner">
        <button
          id="btn-menu-maridaje"
          className={`menu-nav__tab ${activeMenu === 'maridaje' ? 'menu-nav__tab--active' : ''}`}
          onClick={() => onMenuChange('maridaje')}
          aria-pressed={activeMenu === 'maridaje'}
        >
          <span className="menu-nav__tab-title">{t.navDegustacion}</span>
          <span className="menu-nav__tab-subtitle">{t.navConMaridaje}</span>
        </button>

        <div className="menu-nav__divider" />

        <button
          id="btn-menu-degustacion"
          className={`menu-nav__tab ${activeMenu === 'degustacion' ? 'menu-nav__tab--active' : ''}`}
          onClick={() => onMenuChange('degustacion')}
          aria-pressed={activeMenu === 'degustacion'}
        >
          <span className="menu-nav__tab-title">{t.navDegustacion}</span>
          <span className="menu-nav__tab-subtitle">{t.navSinMaridaje}</span>
        </button>
      </div>
    </nav>
  );
}
