function Hero({ restData }) {
  return (
    <section id="hero" className="site-hero">
      <div className="site-hero__logo">
        <span className="opening">&lt;&gt;</span>
        {restData.acf && restData.acf.logo && (
          <img loading="lazy" src={restData.acf.logo.url} alt="Logo" referrerPolicy="off" />
        )}
        <span className="closing">&lt;/&gt;</span>
      </div>
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
