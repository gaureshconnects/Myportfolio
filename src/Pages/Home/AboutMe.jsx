import { useEffect } from "react";
import AOS from "aos";
export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,         // Animate every time on scroll
      mirror: true,        // Allow animation when scrolling back up
      offset: 120,         // Trigger animation a bit before entering viewport
    });
  }, []);

  return (
    <section id="AboutMe" className="about--section">
      <div
        className="about--section--img"
        data-aos="fade-right"
        data-aos-once="false"
      >
        <div className="about--img--wrapper">
          <img src="./img/8.jpg" alt="About Image" />
        </div>
      </div>

      <div
        className="hero--section--content--box about--section--box"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-once="false"
      >
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Hello! I'm Gauresh Nandkumar Govekar, a passionate and detail-oriented Computer Engineer with a strong interest in Web Development, Machine Learning, and Cloud Computing. I specialize in building responsive and dynamic web applications using technologies like React.js, Node.js, MongoDB, and Express.js. With hands-on experience in developing full-stack applications, data visualization dashboards, and predictive analytics tools, I love turning ideas into impactful solutions.
          </p>
          <p className="hero--section-description">
            I’m also skilled in Python, with experience in designing intelligent systems and working with APIs and databases. I enjoy solving complex problems, learning new technologies, and continuously improving my craft. Whether it's designing user-friendly interfaces or optimizing backend logic, I aim to create products that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
}
