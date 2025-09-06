import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1uv3aua",     // e.g., service_gmail
        "template_8gsr8z5",    // e.g., template_xyz
        form.current,
        "DlT1ex2WuWBJNDTsr"      // e.g., xzyAbc123456
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <h1 className="sub--title">Get In Touch With</h1>

        <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
          <a href="https://linkedin.com/in/connectgauresh" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="30" height="30" />
          </a>
          <a href="mailto:connectgauresh@gmail.com">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Gmail" width="30" height="30" />
          </a>
          <a href="https://www.instagram.com/connectgauresh" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="30" height="30" />
          </a>
        </div>
      </div>

      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        <div className="container">
          <label className="contact--label">
            <span className="text-md">First Name</span>
            <input type="text" name="first-name" className="contact--input text-md" required />
          </label>
          <label className="contact--label">
            <span className="text-md">Last Name</span>
            <input type="text" name="last-name" className="contact--input text-md" required />
          </label>
          <label className="contact--label">
            <span className="text-md">Email</span>
            <input type="email" name="email" className="contact--input text-md" required />
          </label>
          <label className="contact--label">
            <span className="text-md">Phone Number</span>
            <input type="text" name="phone" className="contact--input text-md" />
          </label>
        </div>

        <label className="contact--label">
          <span className="text-md">Message</span>
          <textarea name="message" className="contact--input text-md" rows="6" required />
        </label>

        <div>
          <button type="submit" className="btn btn-outline-primary">Submit</button>
        </div>
      </form>
    </section>
  );
}
