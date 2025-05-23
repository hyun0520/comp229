  /*
  FileName: Contact.jsx
  Name:Chunghyun Lee
  Student number: 301000913
  Course: COMP229-401
  Date: 2025/05/22
  */

import "./Contact.css";
import { MdAssistantNavigation } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdContactSupport } from "react-icons/md";

export default function Contact() {
  return (
    <>
    <div className="form">
      {/*header*/}
      <h2>CONTACT</h2>
      {/*location*/}
      <div className="contact-row">
        <MdAssistantNavigation className="contact-icon" />
        <p>Gyeonggi-do, Republic of Korea </p>
      </div>
      {/*email*/}
      <div className="contact-row">
        <MdEmail className="contact-icon" />
        <p>clee255@my.centennialcollege.ca</p>
      </div>
      {/*phone number*/}
      <div className="contact-row">
        <IoCallOutline className="contact-icon" />
        <p>82+ 010-9422-1702</p>
      </div>
      {/*contact-page form button*/}
      <div className="contact-row">
        <MdContactSupport  className="contact-icon" />
        <Link to="/Form"><button className="contact-button">Contact Form</button></Link>
      </div>
      {/*line bar*/}
      <h2></h2>
      {/*Social Network Service move*/}
      <div className="sns">
        {/*facebook*/}
        <a href="https://www.facebook.com/people/ChoongHyeon-Lee/pfbid02UGVNDYE6QpLfYVMq8BahGa9jzsGSmLuXptyMcYZNbyYnV9jCi8h4bhXEMdRNUAPCl/?mibextid=wwXIfr&rdid=IKGXBesTHiCXo4ee&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15Wr5c1jHQ%2F%3Fmibextid%3DwwXIfr"><FaFacebookSquare color="blue"/></a>
        {/*linkedin*/}
        <a href="https://www.linkedin.com/in/chunghyun-lee-56b0a3190/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FaLinkedin color="0072B1"/></a>
        {/*github*/}
        <a href="https://github.com/hyun0520/comp229"><FaGithub color="black"/></a>
      </div>
    </div>
    </>
  );
};
