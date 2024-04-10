import DOMPurify from "dompurify";

const createMarkup = (htmlContent) => {
  return { __html: DOMPurify.sanitize(htmlContent) };
};

const scrollToSection = (section) => {
  const element = document.getElementById(section);
  element.scrollIntoView({ behavior: "smooth" });
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const scrollwithDelay = (el) => {
  setTimeout(() => {
    console.log("scroll with delay");
    el.scrollIntoView({ behavior: "smooth" });
  }, "500");
};

export { scrollToSection, getCurrentYear, createMarkup, scrollwithDelay };
