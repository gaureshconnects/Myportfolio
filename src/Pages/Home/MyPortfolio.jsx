import { useEffect } from "react";
import AOS from "aos";
import data from "../../data/index.json";

export default function MyPortfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="portfolio--section" id="MyPortfolio" data-aos="fade-up">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="skills--section--heading">My Portfolio</h2>
        </div>
        <div>
          <a
            href="https://github.com/itsgauresh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-github"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              width="24"
              height="24"
              style={{ marginRight: "8px" }}
            />
            Visit My GitHub
          </a>
        </div>
      </div>

      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div
            key={index}
            className="portfolio--section--card"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <div className="portfolio--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
                
                {/* ✅ Tech Stack Logos */}
                {item.techstack && (
                  <div className="techstack-logos">
                    {item.techstack.map((tech, techIndex) => (
                      <img
                        key={techIndex}
                        src={tech.logo}
                        alt={tech.name}
                        title={tech.name}
                        className="tech-logo"
                      />
                    ))}
                  </div>
                )}
              </div>

              <a
                href={item.url}
                className="text-sm portfolio--link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
