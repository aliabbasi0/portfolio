import { getCurrentYear } from "../utilities/functions";
import EmailIcon from "../assets/iconmonstr-email-10.svg";
import LinkedInIcon from "../assets/iconmonstr-linkedin-4.svg";
import GitHubIcon from "../assets/iconmonstr-github-4.svg";
import EmailTooltip from "./EmailTooltip";

function footer() {
  return (
    <footer>
      <ul>
        <li>
          <EmailTooltip icon={EmailIcon} email="aliabbasi0@outlook.com" />
          {/* <img src={EmailIcon} alt="Email Icon" /> */}
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aliabbasi0/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn Icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/aliabbasi0"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub Icon" />
          </a>
        </li>
      </ul>
      <p>©{getCurrentYear()} Designed and Developed by Ali Abbasi</p>
    </footer>
  );
}

export default footer;
