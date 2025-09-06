import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../data/index.json";

export default function MyAchievements() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 120,
      mirror: true,
    });
  }, []);

  // Lazy load section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Preload images
  useEffect(() => {
    if (sectionVisible) {
      data?.achievements?.forEach((item) => {
        const img = new Image();
        img.src = item.src;
      });
    }
  }, [sectionVisible]);

  const handleImageClick = (src) => {
    setFullscreenImage(src);
  };

  return (
    <section
      className="achievements--section"
      id="myAchievements"
      ref={sectionRef}
    >
      {sectionVisible && (
        <>
          <div className="achievements--container-box">
            <div className="achievements--container">
              <h2 className="skills--section--heading">My Achievements</h2>
            </div>
          </div>

          <div className="achievements--section--container">
            {data?.achievements?.map((item, index) => (
              <div
                key={index}
                className="achievements--section--card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="achievements--section--img"
                  onClick={() => handleImageClick(item.src)}
                  style={{ cursor: "zoom-in" }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    decode="async"
                    width="100%"
                    height="280"
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
                <div className="achievements--section--card--content">
                  <h3 className="achievements--section--title">{item.title}</h3>
                  <p className="achievements--section--description">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {fullscreenImage && (
        <div
          className="fullscreen--overlay"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            style={{
              maxHeight: "90%",
              maxWidth: "90%",
              objectFit: "contain",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: "scale(1)",
              opacity: 1,
            }}
          />
        </div>
      )}
    </section>
  );
}
