import React from "react";
import "./Contact.css";
import contactbg from '../images/contact-bg.jpg';

function Contact() {
  return (
    <>
      <div className="contact-bg-wrapper">
      <img src={contactbg} alt="editing-bg" className="contact-bg"></img>
      </div>
      <div className="contact">
        <form className="contact-form">
          <label htmlFor="email" className="contact-label">
            Your Email:
          </label>
          <input
            type="text"
            placeholder="person@example.com"
            className="input-field"
          ></input>
          <label htmlFor="message" className="contact-label">
            Message:
          </label>
          <textarea
            name="message"
            className="message-box"
            placeholder="Message..."
          ></textarea>
          <br></br>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
