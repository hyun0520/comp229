import "./Form.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function form() {
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("전송되었습니다");
    navigate("/"); // Home으로 이동
  };
  return (
    <>
    <div className="cform">
      <h2>CONTACT</h2>

      <div className="contact-row">
        <label htmlFor="fname">Name:</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      </div>

      <div className="contact-row">
        <label htmlFor="phone">phone number</label>
          <input type="text" id="phone" name="phone" placeholder="number" />
      </div>

      <div className="contact-row">
        <label htmlFor="country">Country:</label>
        <select id="country" name="country">
            <option value="">--Select--</option>
            <option value="australia">South Korea</option>
            <option value="canada">Canada</option>
            <option value="usa">Other</option>
        </select>
      </div>

      <div className="contact-row">
         <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="...." ></textarea>
      </div>
      <div className="contact-row">
        <Link to="/"><button className="contact-button">Contact Form</button></Link>
      </div>
      
    </div>
    </>
  )
}
