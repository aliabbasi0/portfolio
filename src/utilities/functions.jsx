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

export { scrollToSection, getCurrentYear, createMarkup };
