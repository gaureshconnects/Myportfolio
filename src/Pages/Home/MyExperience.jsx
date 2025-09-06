import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../data/index.json";

export default function MyExperience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  const experiences = [
    {
      logo: "./img/infi.svg",
      role: "Internship Trainee",
      company: "Infosys Springboard · Internship",
      duration: "Sep 2025 – Present | Hybrid",
      skills: ["HTML","CSS","JavaScript","SQL","Python"],
      descriptions: [
        "Worked on Python scripting and automation.",
        "Collaborated with mentors on real-world projects.",
        "Learned corporate coding standards and practices.",
        "Explored debugging and problem-solving techniques.",
        "Gained exposure to hybrid work culture.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">My Experience</h2>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="experience-card"
          data-aos="fade-up"
        >
          <div className="experience-header">
            <div className="experience-left">
              <img
                src={exp.logo}
                alt={exp.company}
                className="experience-logo"
              />
              <div>
                <div className="experience-top">
                  <h3 className="experience-role">{exp.role}</h3>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-skills">
                  <strong>Skills:</strong> {exp.skills.join(" · ")}
                </p>

                {/* 
                <ul className="experience-description">
                  {exp.descriptions.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                */}
              </div>
            </div>
            <div className="experience-right">
              <p className="experience-date">{exp.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
