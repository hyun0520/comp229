import "./Contact.css";
import { MdAssistantNavigation } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdContactSupport } from "react-icons/md";
import { useLanguage } from "./LanguageContext";
import { text } from "../i18n/text";

export default function Contact() {
  const { lang } = useLanguage();
  const t = text[lang].contact;

  return (
    <>
      <div className="form">
        {/* header */}
        <h2>{t.title}</h2>

        {/* location */}
        <div className="contact-row">
          <MdAssistantNavigation className="contact-icon" />
          <p>{t.address}</p>
        </div>

        {/* email (고정) */}
        <div className="contact-row">
          <MdEmail className="contact-icon" />
          <p>clee255@my.centennialcollege.ca</p>
        </div>

        {/* phone number (고정) */}
        <div className="contact-row">
          <IoCallOutline className="contact-icon" />
          <p>82+ 010-9422-1702</p>
        </div>

        {/* contact form button */}
        <div className="contact-row">
          <MdContactSupport className="contact-icon" />
          <Link to="/Form">
            <button className="contact-button">{t.form}</button>
          </Link>
        </div>

        {/* line bar */}
        <h2></h2>

        {/* Social Network Service */}
        <div className="sns">
          <a href="https://www.facebook.com/people/ChoongHyeon-Lee/pfbid02UGVNDYE6QpLfYVMq8BahGa9jzsGSmLuXptyMcYZNbyYnV9jCi8h4bhXEMdRNUAPCl/?mibextid=wwXIfr&rdid=IKGXBesTHiCXo4ee&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15Wr5c1jHQ%2F%3Fmibextid%3DwwXIfr">
            <FaFacebookSquare color="blue" />
          </a>

          <a href="https://www.linkedin.com/in/chunghyun-lee-56b0a3190/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <FaLinkedin color="#0072B1" />
          </a>

          <a href="https://github.com/hyun0520/comp229">
            <FaGithub color="black" />
          </a>
        </div>
      </div>
    </>
  );
}
