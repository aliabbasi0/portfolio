import { getCurrentYear } from "../utilities/functions";
import EmailIcon from "../assets/iconmonstr-email-10.svg";
import LinkedInIcon from "../assets/iconmonstr-linkedin-4.svg";
import GitHubIcon from "../assets/iconmonstr-github-4.svg";

function footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="mailto:aliabbasi0@outlook.com">
            <img loading="lazy" src={EmailIcon} alt="Email Icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aliabbasi0/"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src={LinkedInIcon} alt="LinkedIn Icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/aliabbasi0"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src={GitHubIcon} alt="GitHub Icon" />
          </a>
        </li>
      </ul>
      <p>©{getCurrentYear()} Designed and Developed by Ali Abbasi</p>
    </footer>
  );
}

export default footer;
