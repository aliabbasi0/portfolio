import { HashLink as Link } from "react-router-hash-link";

function Nav() {
  return (
    <nav className="site-nav">
      <ul>
        <li>
          <Link smooth to="/#hero">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="/#portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link smooth to="/#stack">
            Stack
          </Link>
        </li>
        <li>
          <Link smooth to="/#about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
