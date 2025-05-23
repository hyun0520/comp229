  /*
  FileName: Home.jsx
  Name:Chunghyun Lee
  Student number: 301000913
  Course: COMP229-401
  Date: 2025/05/22
  */

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
          {/*Move to Contact-page*/}
          <Link to="/contact">
            <button className="button">CONTACT</button>
          </Link>
        </div>
        <div className="intro-image">
          <img src={introImg} alt="illustration" />
        </div>
      </div>
    </>
  );
};