import { useEffect } from "react";
import data from "../../data/index.json";
import AOS from "aos";
export default function Certifications() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="certifications--section" id="Certifications">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Certifications</h2>
      </div>

      <div className="certifications--section--container">
        {data?.certifications.map((item, index) => (
          <div
            key={index}
            className="certifications--section--card"
            data-aos="fade-up"
          >
            <div className="certifications--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            
            <div className="certifications--section--card--content">
              <h3 className="certifications--section--title">{item.title}</h3>
              <p className="certifications--section--description">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certbtn btn-outline-primary"
                >
                  View Certificate →
                </a>
              )}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
