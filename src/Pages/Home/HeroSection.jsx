export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Gauresh Nandkumar Govekar</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I specialize in building responsive and dynamic web applications
            <br />
            using technologies like React.js, Node.js, MongoDB, and Express.js.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            margin: "16px 0",
          }}
        >
          <a
            href="https://drive.google.com/file/d/1EnLk9DX_qxV9wGxKBNeHRN6rWZP1EHDJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            View Resume
          </a>

          <a
            href="https://github.com/itsgauresh"
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

      <div className="hero--section--img">
  <div className="hero--img--wrapper">
    <img src="./img/gg.jpg" alt="Hero Section" />
  </div>
</div>

    </section>
  );
}
