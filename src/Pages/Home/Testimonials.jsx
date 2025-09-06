import data from "../../data/index.json";

export default function Achievements() {
  return (
    <section className="testimonial--section" id="myintrest">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="skills--section--heading">My Achievements</h2>
        </div>
      </div>
      <div className="portfolio--section--container achievement--card--grid">
        {testimonial.map((item, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="text-md">{item.description}</p>
                <div className="testimonial--section--card--author--detail">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <p className="text-md testimonial--author--name">
                      {item.title}
                    </p>
                    <p className="text-md testimonial--author--designation">
                      {item.organization}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flip-card-back">
                <img
                  src={item.backImage}
                  alt="Achievement Visual"
                  className="flip-back-img"
                />
                <p>{item.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
