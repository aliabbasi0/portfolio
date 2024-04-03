import { HashLink as Link } from "react-router-hash-link";
import HomeIcon from "../assets/home-icon.svg";
import PortfolioIcon from "../assets/portfolio-icon.svg";
import StackIcon from "../assets/stack-icon.svg";
import AboutIcon from "../assets/about-icon.svg";
import { useState, useEffect } from "react";

function Nav() {
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
          <Link smooth to="/#hero">
            {isMobile ? (
              <img loading="lazy" src={HomeIcon} alt="Home Icon" />
            ) : (
              <span>Home</span>
            )}
          </Link>
        </li>
        <li>
          <Link smooth to="/#portfolio">
            {isMobile ? (
              <img loading="lazy" src={PortfolioIcon} alt="Portfolio Icon" />
            ) : (
              <span>Portfolio</span>
            )}
          </Link>
        </li>
        <li>
          <Link smooth to="/#stack">
            {isMobile ? (
              <img loading="lazy" src={StackIcon} alt="Stack Icon" />
            ) : (
              <span>Stack</span>
            )}
          </Link>
        </li>
        <li>
          <Link smooth to="/#about">
            {isMobile ? (
              <img loading="lazy" src={AboutIcon} alt="About Icon" />
            ) : (
              <span>About</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
