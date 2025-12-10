import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { text } from "../i18n/text";
import logoimg from '../assets/logoimg.png';
import './Layout.css';

export default function Layout({ children }) {
  const { lang, setLang } = useLanguage();
  const t = text[lang].nav;

  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="logo" src={logoimg} alt="logo" />
        </Link>

        <nav className="nav">
          <ul>
            <li><Link to="/">{t.home}</Link></li>
            <li><Link to="/about">{t.about}</Link></li>
            <li><Link to="/projects">{t.projects}</Link></li>
            <li><Link to="/contact">{t.contact}</Link></li>
            <li><Link to="/service">{t.service}</Link></li>
          </ul>
        </nav>

        <div className="lang-switch">
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
            EN
          </button>
          <button className={lang === "ko" ? "active" : ""} onClick={() => setLang("ko")}>
            KR
          </button>
        </div>
      </header>

      
      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <p>© 2025 CH.Lee Portfolio. All Rights Reserved.</p>
      </footer>
    </>
  );
}
