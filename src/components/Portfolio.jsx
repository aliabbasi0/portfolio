function Portfolio({ restProjects }) {
  return (
    <section id="portfolio" className="site-portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <img src="https://via.placeholder.com/150" alt="Portfolio Item" />
          <h2>{restProjects[0].acf.project_title}</h2>
          <p>Portfolio Item Description</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
