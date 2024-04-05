import { HashLink } from "react-router-hash-link";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Project({ restBase }) {
  const { slug } = useParams();

  const restPath = `${restBase}wp-json/wp/v2/project?slug=${slug}&_embed&acf_format=standard`;
  const projectsPath = `${restBase}wp-json/wp/v2/project?_embed&acf_format=standard`;

  const [restData, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [nextProject, setNextProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data[0]);
      } else {
        console.error("Error fetching project:", response.statusText);
      }
      setLoading(false);
    };
    fetchData();
  }, [restPath]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch(projectsPath);
      if (response.ok) {
        const projects = await response.json();
        const currentIndex = projects.findIndex(
          (project) => project.slug === slug
        );
        const nextIndex = currentIndex + 1;
        if (nextIndex < projects.length) {
          setNextProject(projects[nextIndex]);
        }
      }
    };
    fetchProjects();
  }, [slug, projectsPath]);

  return (
    <section className="page-single">
      {loading ? (
        <div className="loader-body">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <img
            src={restData.acf?.["project_image"].url}
            alt={`Featured image for ${restData.title?.rendered}`}
          />
          <h1>{restData.acf?.["project_title"]}</h1>
          <p className="tech-stack">{restData.acf?.["tech_stack"]}</p>
          <div className="direct-links">
            <a
              className="btn-69"
              href={restData.acf?.["live_site"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </a>
            <a
              className="btn-69"
              href={restData.acf?.["github_repository"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>

          <h2>{restData.acf?.["overview_title"]}</h2>
          <p>{restData.acf?.["overview_explained"]}</p>
          <h2>{restData.acf?.["what_i_learned_title"]}</h2>
          <p>{restData.acf?.["what_i_learned_explained"]}</p>
          <div className="next-project">
            <HashLink to="/#portfolio">
              <button className="btn-17">Back to Portfolio</button>
            </HashLink>
            {nextProject && (
              <HashLink to={`/project/${nextProject.slug}`}>
                <button className="btn-17">
                  Next: {nextProject.title?.rendered}
                </button>
              </HashLink>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
