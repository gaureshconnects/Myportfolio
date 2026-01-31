import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rbawaim",
        "template_8gsr8z5",
        form.current,
        "DlT1ex2WuWBJNDTsr"
      )
      .then(
        () => {
          alert("Thank you! Your message has been sent.");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      {/* Header */}
      <div className="contact--header">
        <h1 className="sub--title">Get In Touch</h1>
        <p className="text-md">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div className="contact--socials">
          <a href="https://linkedin.com/in/connectgauresh" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          </a>
          <a href="mailto:connectgauresh@gmail.com">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Gmail" />
          </a>
          <a href="https://www.instagram.com/connectgauresh" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          </a>
        </div>
      </div>

      {/* Form */}
      <form ref={form} onSubmit={sendEmail} className="contact--form">
        <div className="contact--grid">
          <label className="contact--label">
            <span>First Name</span>
            <input type="text" name="first-name" required />
          </label>

          <label className="contact--label">
            <span>Last Name</span>
            <input type="text" name="last-name" required />
          </label>

          <label className="contact--label">
            <span>Email</span>
            <input type="email" name="email" required />
          </label>

          <label className="contact--label">
            <span>Phone</span>
            <input type="text" name="phone" />
          </label>
        </div>

        <label className="contact--label full-width">
          <span>Message</span>
          <textarea name="message" rows="5" required />
        </label>

        <button type="submit" className="btn btn-outline-primary contact--btn">
          Send Message
        </button>
      </form>
    </section>
  );
}
