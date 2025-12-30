import './Home.css'
import introImg from '../assets/introImg.png'
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { text } from "../i18n/text";

export default function Home() {
  const { lang } = useLanguage();
  const t = text[lang].home;

  return (
    <>
      <div className="intro">
        <div className="intro-text">
          <h1>
            <span className="bold">{t.title}</span>
          </h1>

          <h3>
            "{t.intro}"
          </h3>

          {/* Move to Contact-page */}
          <Link to="/projects">
            <button className="button">{t.contact}</button>
          </Link>
        </div>

        <div className="intro-image">
          <img src={introImg} alt="illustration" />
        </div>
      </div>
    </>
  );
}
