  /*
  FileName: Form.jsx
  Name:Chunghyun Lee
  Student number: 301000913
  Course: COMP229-401
  Date: 2025/05/22
  */
 
import "./Form.css";
import { Link } from "react-router-dom";

export default function form() {
  return (
    <>
      <div className="cform">
        {/*header*/}
        <h2>CONTACT</h2>
        {/*Name Section*/}
        <div className="contact-row">
          <label htmlFor="fname">Name:</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        </div>
        {/*Phone-Num Section*/}
        <div className="contact-row">
          <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder="number" />
        </div>
        {/*List of countries Section*/}
        <div className="contact-row">
          <label htmlFor="country">Country:</label>
          <select id="country" name="country">
              <option value="">--Select--</option>
              <option value="australia">South Korea</option>
              <option value="canada">Canada</option>
              <option value="usa">Other</option>
          </select>
        </div>
        {/*Subject Section*/}
        <div className="contact-row">
          <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="...." ></textarea>
        </div>
        {/*Move to Home-page*/}
        <div className="contact-row">
          <Link to="/"><button className="contact-button">SUBMIT</button></Link>
        </div>
        
      </div>
    </>
  )
}
