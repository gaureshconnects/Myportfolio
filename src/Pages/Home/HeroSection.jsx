import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSection() {
  const [openResume, setOpenResume] = useState(false);
  const [openCertificate, setOpenCertificate] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(0);

  const certificates = [
    "/img/Coursera 6BF3BFPPL9BY_page-0001.jpg",
    "/img/Coursera 84SMMOXPFPRM_page-0001.jpg",
    "/img/Coursera 65EGXW5H4MD9_page-0001.jpg",
  ];

  return (
    <>
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">
              Hey, I'm Gauresh Nandkumar Govekar
            </p>

            <h1 className="hero--section--title">
              <span className="hero--section-title--color">
                DevOps Engineer
              </span>
            </h1>

            <p className="hero--section-description">
              I am building my expertise in DevOps by learning cloud
              infrastructure,
              <br />
              CI/CD pipelines, Docker, Kubernetes, AWS, Linux, and automation
              tools.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => setOpenResume(true)}
              className="btn btn-outline-primary"
            >
              View Resume
            </button>

            <a
              href="https://github.com/gaureshconnects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                width="30"
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
              />
            </a>

            <a href="mailto:connectgauresh@gmail.com">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Gmail"
                width="30"
              />
            </a>
          </div>
        </div>

        {/* Swiper Certificate Slider */}
        <div className="hero--section--img">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="certificateSwiper"
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide key={index}>
                <img
                  src={certificate}
                  alt={`Certificate ${index + 1}`}
                  className="certificate-image"
                  onClick={() => {
                    setSelectedCertificate(index);
                    setOpenCertificate(true);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
              src="/img/gaureshgovekarresume_compressed.pdf"
              title="Resume"
            ></iframe>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {openCertificate && (
        <div className="resume-modal">
          <div className="resume-modal-content">
            <button
              className="close-btn"
              onClick={() => setOpenCertificate(false)}
            >
              ✕
            </button>

            <Swiper
              modules={[Navigation]}
              navigation
              initialSlide={selectedCertificate}
              spaceBetween={20}
              slidesPerView={1}
              className="certificateModalSwiper"
            >
              {certificates.map((certificate, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={certificate}
                    alt={`Certificate ${index + 1}`}
                    className="certificate-modal-image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}