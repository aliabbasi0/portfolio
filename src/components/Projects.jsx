import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects({ restBase }) {
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
    <>
      <section id="projects" className="site-portfolio">
        <h3>Portfolio</h3>
        <div className="gallery">
          {restProjects.length > 0 ? (
            restProjects.map((project) => (
              <Link to={`/project/${project.slug}`} key={project.id}>
                <article className="card">
                  {project._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                    <figure>
                      <img
                        src={
                          project._embedded["wp:featuredmedia"][0].source_url
                        }
                        alt={`Featured image for ${project.title}`}
                      />
                      <figcaption>{project.title?.rendered}</figcaption>
                    </figure>
                  )}
                </article>
              </Link>
            ))
          ) : (
            <p>Porjects on its way..</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;
