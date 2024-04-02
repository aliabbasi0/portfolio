import { useEffect, useState } from "react";

function Portfolio({ restBase }) {
  const projectPath = `${restBase}wp-json/wp/v2/project/`;
  const [restProjects, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(projectPath);
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    };
    fetchProjects();
  }, [projectPath]);

  return (
    <section id="portfolio" className="site-portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <img src="https://via.placeholder.com/150" alt="Portfolio Item" />
          <h2>
            {restProjects && restProjects.length > 0
              ? restProjects[0].acf["project_title"]
              : ""}
          </h2>
          <p>
            {restProjects && restProjects.length > 0
              ? restProjects[0].acf["project_description"]
              : ""}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
