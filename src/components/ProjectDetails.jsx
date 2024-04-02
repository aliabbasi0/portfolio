import { Link } from "react-router-dom";
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
    <section className="site-single">
      <h1>Project Details</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div>
          <h2>{restData.title?.rendered}</h2>
          <img
            src={restData._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
            alt={`Featured image for ${restData.title?.rendered}`}
          />
          <p>{restData.acf?.["project_description"]}</p>
          <Link to="/portfolio">Back to Portfolio</Link>
        </div>
      )}
    </section>
  );
}

export default ProjectDetails;
