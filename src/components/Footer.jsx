import './Footer.css';

export default function Footer({ t }) {
  const noteLines = t.footerNote.split('\n');

  return (
    <footer id="footer" className="footer">
      <div className="footer__botanical">
        <img src="/images/botanical-decoration.png" alt="" aria-hidden="true" />
      </div>

      <div className="footer__content">
        <div className="footer__brand">
          <h2 className="footer__title">Gardenia</h2>
          <p className="footer__subtitle">{t.heroSubtitle}</p>
        </div>

        <div className="footer__divider" />

        <p className="footer__note" style={{ marginBottom: 'var(--space-sm)' }}>
          *{t.footerPpDisclaimer}
        </p>

        <p className="footer__note">
          {noteLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < noteLines.length - 1 && <br />}
            </span>
          ))}
        </p>

        <a
          href="https://maps.app.goo.gl/Hfx4uCBjtHzUy7FL8"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__address"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p>{t.footerAddress}</p>
        </a>

        <div className="footer__social">
          <a href="#" className="footer__social-link" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <div className="footer__address">
          <p>Made by {'FFG && LSNA'}
          </p>
        </div>

        <p className="footer__copyright">
          © {new Date().getFullYear()} {t.footerCopyright}
        </p>
      </div>
    </footer>
  );
}
