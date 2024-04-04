import { HashLink } from "react-router-hash-link";
import HomeIcon from "../assets/home-icon.svg";
import PortfolioIcon from "../assets/portfolio-icon.svg";
import StackIcon from "../assets/stack-icon.svg";
import AboutIcon from "../assets/about-icon.svg";
import { useState, useEffect } from "react";

function Nav() {
  const scrollwithDelay = (el) => {
    setTimeout(() => {
      console.log("scroll with delay");
      el.scrollIntoView({ behavior: "smooth" });
    }, "500");
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="site-nav">
      <ul>
        <li>
          <HashLink smooth to="/#hero" scroll={(el) => scrollwithDelay(el)}>
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
        <li>
          <HashLink
            smooth
            to="/#portfolio"
            scroll={(el) => scrollwithDelay(el)}
          >
            {isMobile ? (
              <img loading="lazy" src={PortfolioIcon} alt="Portfolio Icon" />
            ) : (
              <span>Portfolio</span>
            )}
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#stack" scroll={(el) => scrollwithDelay(el)}>
            {isMobile ? (
              <img loading="lazy" src={StackIcon} alt="Stack Icon" />
            ) : (
              <span>Stack</span>
            )}
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about" scroll={(el) => scrollwithDelay(el)}>
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
