import './Home.css'
import introImg from '../assets/introImg.png'
import { Link } from "react-router-dom";

export default function intro() {
return (
    <>
      <div className="intro">
        <div className="intro-text">
          <h1><span className="bold">WELCOME</span></h1>
          <h3>
            "As a student, I’m working toward becoming a skilled full-stack web developer."
          </h3>
          <Link to="/contact">
            <button className="button">CONTACT</button>
          </Link>
        </div>
        <div className="intro-image">
          <img src={introImg} alt="developer illustration" />
        </div>
      </div>
    </>
  );
};