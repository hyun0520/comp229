  /*
  FileName: About.jsx
  Name:Chunghyun Lee
  Student number: 301000913
  Course: COMP229-401
  Date: 2025/05/22
  */

import './About.css';
import aboutimg from '../assets/aboutimg.png';

export default function About() {
  return (
    <div className="About">
      {/*About-page picture*/}
      <div className="About-image">
        <img src={aboutimg} alt="picture" />
      </div>
      <div className="About-text">
        {/*header*/}
        <h2 className="bold">About Me</h2>
        {/*Introduction*/}
        <p><strong>Name:</strong> Chung-hyun Lee</p>
        <p><strong>Age:</strong> 1999. May. 20</p>
        <p><strong>Blood type:</strong> O  RH+</p>
        <p><strong>Strength:</strong><br/>
        <span className="strength-text">
            I have completed my military service, which has strengthened my discipline and sense of responsibility. 
            I am a dedicated and reliable individual who is ready to contribute to any team with a strong work ethic and a positive attitude.
        </span>
        </p>
        {/*Resume download button*/}
        <div className="button-group">
          <a href="/ChungHyun_Lee_Resume.pdf" download>
          <button className="resume-button">RESUME</button>
          </a>
        </div>
      </div>
    </div>
  );
}