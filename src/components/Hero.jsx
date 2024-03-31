function Hero({ restData, restMedia }) {
  return (
    <section id="hero" className="site-hero">
      <span>{restData.acf ? restData.acf.introduction_text : ""}</span>
      <h1>{restData.acf ? restData.acf.name : ""}</h1>
      <h2>{restData.acf ? restData.acf.title : ""}</h2>
      <p>{restData.acf ? restData.acf.qualification : ""}</p>
      <div className="hero-socials">
        <ul>
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
        </ul>
      </div>
    </section>
  );
}

export default Hero;
