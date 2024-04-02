function Hero({ restData, restMedia }) {
  return (
    <section id="hero" className="site-hero">
      <div className="site-hero__logo">
        <span className="opening">&lt;&gt;</span>
        <img
          src={restMedia?.[0]?.media_details?.sizes?.full?.source_url}
          alt="logo"
          referrerpolicy="off"
        />
        <span className="closing">&lt;/&gt;</span>
      </div>
      <div className="site-hero__content">
        <p className="intro">
          {restData.acf ? restData.acf.introduction_text : ""}
        </p>
        <h1>{restData.acf ? restData.acf.name : ""}</h1>
        <h2>{restData.acf ? restData.acf.title : ""}</h2>
        <p className="qualification">
          {restData.acf ? restData.acf.qualification : ""}
        </p>
        
      </div>
    </section>
  );
}

export default Hero;
