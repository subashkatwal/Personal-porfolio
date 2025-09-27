import React, { useRef } from "react";
import "./Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e69mwn8",      
        "template_33hjeax", 
        form.current,
        "DH4T34QurES0OgpmI"      
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact container" id="contact">
      <h2>Let's Work Together</h2>
      <p>
        Have a project in mind? I'd love to hear from you. Let's discuss how we
        can bring your ideas to life.
      </p>

      <div className="contact-content">
        {/* Left Side */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            I'm always open to discussing new opportunities, creative projects,
            or potential collaborations. Feel free to reach out if you'd like to
            connect!
          </p>
          <ul>
            <li>
              <i className="fas fa-envelope"></i> subashkatwal112@gmail.com
            </li>
            <li>
              <i className="fas fa-phone-alt"></i> 9749459199
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your full name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="your.email@example.com" required />

          <label>Message</label>
          <textarea name="message" placeholder="Tell me about your project..." required />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
