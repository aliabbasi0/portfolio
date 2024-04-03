import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Portfolio({ restBase }) {
  const projectPath = `${restBase}wp-json/wp/v2/project?_embed`;
  const [restProjects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(projectPath);
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        console.error("Error fetching projects:", response.statusText);
      }
    };
    fetchProjects();
  }, [projectPath]);

  return (
    <section id="portfolio" className="site-portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-container">
        {restProjects.length > 0 ? (
          restProjects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              {project._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <Link to={`/project/${project.slug}`}>
                  <img
                    src={project._embedded["wp:featuredmedia"][0].source_url}
                    alt={`Featured image for ${project.title}`}
                  />
                </Link>
              )}
              <h2>{project.title?.rendered}</h2>
              <p>{project.acf["project_description"]}</p>
            </div>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
