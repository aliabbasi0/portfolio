function About({ restData, restMedia }) {
  return (
    <section id="about" className="site-about">
      <img
        src={restMedia?.[0]?.guid?.rendered}
        alt={restMedia?.[0]?.alt_text}
      />
    </section>
  );
}

export default About;
