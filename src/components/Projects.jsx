import './Projects.css'
import projectimg from '../assets/projectimg.png'
import projectimg2 from '../assets/projectimg2.png'
import projectimg3 from '../assets/projectimg3.png'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const cards = [
  {
    title: "Portfolio Project",
    desc: {
      role: "Role: Frontend developer",
      conclusion: "Conclusion: made it a portfolio assignment with Comp229 and implemented the site using React and vite."
    },
    image: projectimg3,
    alt: "PortfolioImg",
    demo: "https://chunghyunleeportfolio.netlify.app/",
    github: "https://github.com/hyun0520/comp229"
  },
  {
    title: "FlickBuzz project",
    desc: {
      role: "Role: developer",
      conclusion: "Conclusion: It is a movie review site where users can leave reviews of movies."
    },
    image: projectimg,
    alt: "COMP229ProjectImg",
    demo: "https://your-flickbuzz-link.com",
    github: "https://github.com/JalenNM/COMP229-S25-Group2Coders"
  },
  {
    title: "Morae-al Publication",
    desc: {
      role: "Role: Writer",
      conclusion: "Conclusion: To become a global citizen, write about empathy, critical consciousness, and respect for cultural diversity."
    },
    image: projectimg2,
    alt: "GNEDImg",
    demo: "https://moraeal.netlify.app/",
    github: "https://github.com/hyun0520/moraeal"
  }
];

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1><br/>
      <div className="card__inner container">
        {cards.map((card, index) => (
          <article className="card" key={index}>
            <figure>
              <img src={card.image} alt={card.alt} />
            </figure>

            <div className="card__body">
              <h3 className="tit">{card.title}</h3>
              <p className="desc"><strong>{card.desc.role}</strong></p>
              <p className="desc"><strong>{card.desc.conclusion}</strong></p>

              {/* BTN area */}
              <div className="project__links">
                <a href={card.demo} target="_blank" rel="noopener noreferrer" className="btn demo">
                  <FaExternalLinkAlt />
                  Demo
                </a>

                <a href={card.github} target="_blank" rel="noopener noreferrer" className="btn github">
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
