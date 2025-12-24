import './Projects.css'
import projectimg from '../assets/projectimg.png'
import projectimg2 from '../assets/projectimg2.png'
import projectimg3 from '../assets/projectimg3.png'
import projectimg4 from '../assets/projectimg4.png'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "./LanguageContext";
import { text } from "../i18n/text";

const images = [projectimg3, projectimg, projectimg2, projectimg4];

export default function Projects() {
  const { lang } = useLanguage();
  const t = text[lang].projects;

  return (
    <section>
      <h1>{t.title}</h1><br/>

      <div className="card__inner container">
        {t.cards.map((card, index) => (
          <article className="card" key={index}>
            <figure>
              <img src={images[index]} alt={card.title} />
            </figure>

            <div className="card__body">
              <h3 className="tit">{card.title}</h3>
              <p className="desc"><strong>{card.role}</strong></p>
              <p className="desc"><strong>{card.tech}</strong></p>
              <p className="desc"><strong>{card.conclusion}</strong></p>

              <div className="project__links">
                <a
                  href={card.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn demo"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
                <a
                  href={card.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
