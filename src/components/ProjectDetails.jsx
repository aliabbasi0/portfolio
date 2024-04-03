import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectDetails({ restBase }) {
  const { slug } = useParams();
  const restPath = `${restBase}wp-json/wp/v2/project?slug=${slug}&_embed`;
  const [restData, setData] = useState({});
  const [loading, setLoading] = useState(false);

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

  return (
    <section className="page-single">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div>
          <img
            src={restData._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
            alt={`Featured image for ${restData.title?.rendered}`}
          />
          <h1>{restData.acf?.["project_title"]}</h1>
          <h2>{restData.acf?.["overview_title"]}</h2>
          <p>{restData.acf?.["overview_explained"]}</p>
          <h2>{restData.acf?.["what_i_learned_title"]}</h2>
          <p>{restData.acf?.["what_i_learned_explained"]}</p>
          <Link to="/#portfolio">Back to Portfolio</Link>
        </div>
      )}
    </section>
  );
}

export default ProjectDetails;
