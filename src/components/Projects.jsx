import './Projects.css'

const cards = [
  {
    title: "tileform",
    desc: "The best way to predict the future is to create it.",
    image: "img/card_bg01.jpg",
    alt: "form",
    link: "/"
  },
  {
    title: "tileform",
    desc: "The best way to predict the future is to create it.",
    image: "img/card_bg02.jpg",
    alt: "form",
    link: "/"
  },
  {
    title: "tileform",
    desc: "The best way to predict the future is to create it.",
    image: "img/card_bg03.jpg",
    alt: "form",
    link: "/"
  }
];

export default function Projects() {
    return (
      <>
        <section id="cardType" className="card__wrap nexon section">
          <h1>Projects</h1>
          <p></p>
          <div className="card__inner container">
            {cards.map((card, index) => (
              <article className="card" key={index}>
                <figure className="card__header">
                  <img src={card.image} alt={card.alt} />
                </figure>
                <div className="card__body">
                  <h3 className="tit">{card.title}</h3>
                  <p className="desc">{card.desc}</p>
                  <a className="button" href={card.link}>About</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </>
    )
}

