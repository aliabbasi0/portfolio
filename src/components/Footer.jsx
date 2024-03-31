import { getCurrentYear } from "../utilities/functions";

function footer() {
  return (
    <footer>
      <p>©{getCurrentYear()} Designed and Developed by Ali Abbasi</p>
    </footer>
  );
}

export default footer;
