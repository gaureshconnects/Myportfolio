import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="logo-container">
        <img src="./img/F.png" alt="Logo" className="logo-image" />
      </div>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              to="heroSection"
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar--content"
              activeClass="navbar--active-content"
              spy={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="Certifications"
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar--content"
              activeClass="navbar--active-content"
              spy={true}
            >
              Certifications
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="mySkills"
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar--content"
              activeClass="navbar--active-content"
              spy={true}
            >
              My Expertise
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="AboutMe"
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar--content"
              activeClass="navbar--active-content"
              spy={true}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="MyPortfolio"
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar--content"
              activeClass="navbar--active-content"
              spy={true}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="myAchievements"
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar--content"
              activeClass="navbar--active-content"
              spy={true}
            >
              My Achievements
            </Link>
          </li>
        </ul>
      </div>

      <Link
        onClick={closeMenu}
        to="Contact"
        smooth={true}
        offset={-70}
        duration={500}
        className="btn btn-outline-primary"
        activeClass="navbar--active-content"
        spy={true}
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
