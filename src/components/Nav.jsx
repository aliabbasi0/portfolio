import { HashLink } from "react-router-hash-link";
import HomeIcon from "../assets/home-icon.svg";
import PortfolioIcon from "../assets/portfolio-icon.svg";
import StackIcon from "../assets/stack-icon.svg";
import AboutIcon from "../assets/about-icon.svg";
import { useState, useEffect } from "react";
import { scrollwithDelay } from "../utilities/functions";

function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (activeLink) {
      const timeoutId = setTimeout(() => setActiveLink(null), 500);
      return () => clearTimeout(timeoutId);
    }
  }, [activeLink]);

  return (
    <nav className="site-nav">
      <ul>
        <li className={activeLink === "hero" ? "active" : ""}>
          <HashLink
            smooth
            to="/#hero"
            scroll={(el) => scrollwithDelay(el)}
            onClick={() => setActiveLink("hero")}
          >
            {isMobile ? (
              <img
                className="home-icon"
                loading="lazy"
                src={HomeIcon}
                alt="Home Icon"
              />
            ) : (
              <span>Home</span>
            )}
          </HashLink>
        </li>
        <li className={activeLink === "projects" ? "active" : ""}>
          <HashLink
            smooth
            to="/#projects"
            scroll={(el) => scrollwithDelay(el)}
            onClick={() => setActiveLink("projects")}
          >
            {isMobile ? (
              <img loading="lazy" src={PortfolioIcon} alt="Portfolio Icon" />
            ) : (
              <span>Portfolio</span>
            )}
          </HashLink>
        </li>
        <li className={activeLink === "stack" ? "active" : ""}>
          <HashLink
            smooth
            to="/#stack"
            scroll={(el) => scrollwithDelay(el)}
            onClick={() => setActiveLink("stack")}
          >
            {isMobile ? (
              <img loading="lazy" src={StackIcon} alt="Stack Icon" />
            ) : (
              <span>Stack</span>
            )}
          </HashLink>
        </li>
        <li className={activeLink === "about" ? "active" : ""}>
          <HashLink
            smooth
            to="/#about"
            scroll={(el) => scrollwithDelay(el)}
            onClick={() => setActiveLink("about")}
          >
            {isMobile ? (
              <img loading="lazy" src={AboutIcon} alt="About Icon" />
            ) : (
              <span>About</span>
            )}
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
