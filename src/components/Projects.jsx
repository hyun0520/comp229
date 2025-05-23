  /*
  FileName: Project.jsx
  Name:Chunghyun Lee
  Student number: 301000913
  Course: COMP229-401
  Date: 2025/05/22
  */

import './Projects.css'
import projectimg from '../assets/projectimg.png'
import projectimg2 from '../assets/projectimg2.png'
import projectimg3 from '../assets/projectimg3.png'

const cards = [
  {
    title: "Global Citizenship", //card 
    desc: {
      role: "Role: Writer",
      conclusion: "Conclusion: To become a global citizen, write about empathy, critical consciousness, and respect for cultural diversity."
    },
    image: projectimg2,
    alt: "GNEDImg",
  },
  {
    title: "Portfolio Project",
    desc: {
      role: "Role: Frontend developer",
      conclusion: "Conclusion: made it a portfolio assignment with Comp229 and implemented the site using React and vite."
    },
    image: projectimg3,
    alt: "PortfolioImg",
  },
  {
    title: "NumPy and Matplotlib",
    desc: {
      role: "Role: developer",
      conclusion: "Conclusion: For the COMP318 - UI - Smart Device Week 2 assignment, use Python to implement a graph using NumPy and Matplotlib."
    },
    image: projectimg,
    alt: "pythonProjectImg",
  }
];


export default function Projects() {
    return (
      <>
        <section>
          <h1>Projects</h1><br/>
          <div className="card__inner container">
            {cards.map((card) => (
              <article className="card">
                <figure>
                <img src={card.image} alt={card.alt} /> {/*Img alt*/}
                </figure>
                <div className="card__body">
                  <h3 className="tit">{card.title}</h3> {/*Project tittle*/}
                  <p className="desc"><strong>{card.desc.role}</strong></p> {/*Project role*/}
                  <p className="desc"><strong>{card.desc.conclusion}</strong></p> {/*Project description*/}
                </div>
              </article>
            ))}
          </div>
        </section>
      </>
    )
}

