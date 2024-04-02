import { getCurrentYear } from "../utilities/functions";

function footer({ restData }) {
  return (
    <footer>
      {/* <ul>
          <li>
            <a
              href={restData.acf ? restData.acf.icons[0].icon_url : ""}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={restData.acf ? restData.acf.icons[1].icon_url : ""}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul> */}
      <p>©{getCurrentYear()} Designed and Developed by Ali Abbasi</p>
    </footer>
  );
}

export default footer;
