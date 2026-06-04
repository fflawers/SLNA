import { useState, useRef, useCallback } from 'react';
import LanguageToggle from './components/LanguageToggle';
import HeroCover from './components/HeroCover';
import MenuNav from './components/MenuNav';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { translations, menuItems, totalPrices } from './data/menuData';
import './App.css';

function App() {
  const [activeMenu, setActiveMenu] = useState('maridaje');
  const [lang, setLang] = useState('es');
  const menuRef = useRef(null);

  const t = translations[lang];

  const handleExplore = useCallback(() => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleMenuChange = useCallback((menu) => {
    setActiveMenu(menu);
    menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const showPairing = activeMenu === 'maridaje';
  const title = activeMenu === 'maridaje' ? t.menuTitleMaridaje : t.menuTitleDegustacion;
  const subtitle = activeMenu === 'maridaje' ? t.menuSubtitleMaridaje : t.menuSubtitleDegustacion;
  const totalPrice = activeMenu === 'maridaje' ? totalPrices.maridaje : totalPrices.degustacion;
  const totalLabel = activeMenu === 'maridaje' ? t.totalLabelMaridaje : t.totalLabelDegustacion;

  return (
    <div className="app">
      <LanguageToggle lang={lang} onToggle={setLang} />
      <HeroCover onExplore={handleExplore} lang={lang} t={t} />

      <div ref={menuRef} className="menu-anchor">
        <MenuNav activeMenu={activeMenu} onMenuChange={handleMenuChange} t={t} />

        <main id="main-content">
          <MenuSection
            key={`${activeMenu}-${lang}`}
            items={menuItems}
            title={title}
            subtitle={subtitle}
            totalPrice={totalPrice}
            totalLabel={totalLabel}
            showPairing={showPairing}
            lang={lang}
            t={t}
          />
        </main>
      </div>

      <Footer t={t} />
    </div>
  );
}

export default App;
