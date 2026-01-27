import { useState } from "react";

export default function HeroSection() {
  const [openResume, setOpenResume] = useState(false);

  return (
    <>
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Gauresh Nandkumar Govekar</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
              I specialize in building responsive and dynamic web applications
              <br />
              using technologies like React.js, Node.js, MongoDB, and Express.js.
            </p>
          </div>

          {/* Buttons + Social Icons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              margin: "16px 0",
            }}
          >
            {/* Resume Button */}
            <button
              onClick={() => setOpenResume(true)}
              className="btn btn-outline-primary"
            >
              View Resume
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/gaureshconnects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                width="30"
                height="30"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/connectgauresh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                width="30"
                height="30"
              />
            </a>

            {/* Gmail */}
            <a href="mailto:connectgauresh@gmail.com">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Gmail"
                width="30"
                height="30"
              />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero--section--img">
          <div className="hero--img--wrapper">
            <img src="./img/gauresh.jpg" alt="Hero Section" />
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      {openResume && (
        <div className="resume-modal">
          <div className="resume-modal-content">
            <button
              className="close-btn"
              onClick={() => setOpenResume(false)}
            >
              ✕
            </button>

            <iframe
              src="/img/resumegovekargauresh.pdf"
              title="Resume"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
