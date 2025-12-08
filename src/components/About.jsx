import './About.css';
import aboutimg from '../assets/aboutimg.png';
import { useLanguage } from "./LanguageContext";
import { text } from "../i18n/text";

export default function About() {
  const { lang } = useLanguage();
  const t = text[lang].about;

  return (
    <div className="About">
      {/* About-page picture */}
      <div className="About-image">
        <img src={aboutimg} alt="picture" />
      </div>

      <div className="About-text">
        {/* header */}
        <h2 className="bold">{t.title}</h2>

        {/* Introduction */}
        <p><strong>{t.nameLabel}</strong> {t.name}</p>
        <p><strong>{t.ageLabel}</strong> {t.age}</p>
        <p><strong>{t.bloodLabel}</strong> {t.blood}</p>

        <p>
          <strong>{t.strengthLabel}</strong><br/>
          <span className="strength-text">
            {t.strength}
          </span>
        </p>

        {/* Resume download button */}
        <div className="button-group">
          <a href="/ChungHyun_Lee_Resume.pdf" download>
            <button className="resume-button">{t.resume}</button>
          </a>
        </div>
      </div>
    </div>
  );
}
