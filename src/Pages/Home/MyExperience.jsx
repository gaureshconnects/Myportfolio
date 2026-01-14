import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyExperience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  const [zoomImage, setZoomImage] = useState(null);

  const experiences = [
    {
      logo: "./img/infi.svg",
      role: "Internship Trainee",
      company: "Infosys Springboard · Internship",
      duration: "Sep 2025 – Dec 2025 | Hybrid",
      skills: ["React.js", "PostgreSQL", "Python FastAPI", "Git", "SCSS"],
      certificate: "../../../public/infycert.jpg",
      descriptions: [
        "Successfully completed an industry-oriented internship under the Infosys Springboard program",
        "Gained hands-on experience in software development and problem-solving",
        "Worked on real-world use cases and mini projects to apply theoretical knowledge",
        "Strengthened fundamentals of HTML, CSS, JavaScript, Python",
        "Understood the basics of Software Development Life Cycle (SDLC)",
        "Improved skills in debugging, logical thinking, and code optimization",
        "Followed industry best practices for coding and documentation",
        "Enhanced collaboration, self-learning, and professional work ethics",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">My Experience</h2>

      {experiences.map((exp, index) => (
        <div key={index} className="experience-card" data-aos="fade-up">
          <div className="experience-header">
            <div className="experience-left">
              <img
                src={exp.logo}
                alt={exp.company}
                className="experience-logo"
              />
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>

                <p className="experience-skills">
                  <strong>Skills:</strong> {exp.skills.join(" · ")}
                </p>

                <ul className="experience-description">
                  {exp.descriptions.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="experience-right">
              <p className="experience-date">{exp.duration}</p>

              {exp.certificate && (
                <img
                  src={exp.certificate}
                  alt="Internship Certificate"
                  className="certificate-thumb"
                  onClick={() => setZoomImage(exp.certificate)}
                />
              )}
            </div>
          </div>
        </div>
      ))}

      {zoomImage && (
        <div
          className="certificate-modal"
          onClick={() => setZoomImage(null)}
        >
          <div className="certificate-modal-content">
            <img src={zoomImage} alt="Certificate Zoom" />
            <span className="close-btn">&times;</span>
          </div>
        </div>
      )}
    </section>
  );
}
