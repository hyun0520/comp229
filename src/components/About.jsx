import './About.css';
import aboutimg from '../assets/aboutimg.png';
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="About">
      <div className="About-image">
        <img src={aboutimg} alt="developer illustration" />
      </div>
      <div className="About-text">
        <h2 className="bold">About Me</h2>
        <p><strong>Name:</strong> Chung-hyun Lee</p>
        <p><strong>Age:</strong> 1999. May. 20</p>
        <p><strong>Blood type:</strong> O  RH+</p>
        <p><strong>Strength:</strong><br/>
        <span className="strength-text">
            I have completed my military service, which has strengthened my discipline and sense of responsibility. 
            I am a dedicated and reliable individual who is ready to contribute to any team with a strong work ethic and a positive attitude.
        </span>
        </p>
        <div className="button-group">
          <a href="/ChungHyun_Lee_Resume.pdf" download>
    <button className="resume-button">RESUME</button>
  </a>
        </div>
      </div>
    </div>
  );
}