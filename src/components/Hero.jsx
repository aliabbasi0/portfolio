import Clock from "./Clock";

function Hero({ restData }) {
  return (
    <section id="hero" className="site-hero">
      <Clock />
      <div className="site-hero__content">
        <h1>
          <span className="intro">
            {restData.acf ? restData.acf.introduction_text : ""}
          </span>
          {restData.acf ? restData.acf.name : ""}
        </h1>
        <h2>{restData.acf ? restData.acf.title : ""}</h2>
        <p className="qualification">
          {restData.acf ? restData.acf.qualification : ""}
        </p>
      </div>
    </section>
  );
}

export default Hero;
