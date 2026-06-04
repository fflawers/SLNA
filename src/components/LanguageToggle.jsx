import './LanguageToggle.css';

export default function LanguageToggle({ lang, onToggle }) {
  return (
    <div className="lang-toggle" role="radiogroup" aria-label="Language">
      <button
        id="btn-lang-es"
        className={`lang-toggle__btn ${lang === 'es' ? 'lang-toggle__btn--active' : ''}`}
        onClick={() => onToggle('es')}
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
      <span className="lang-toggle__divider">/</span>
      <button
        id="btn-lang-en"
        className={`lang-toggle__btn ${lang === 'en' ? 'lang-toggle__btn--active' : ''}`}
        onClick={() => onToggle('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
