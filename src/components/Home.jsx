import { useState, useEffect } from "react";

const Home = ({ restBase }) => {
  const pageId = "9";
  const restPath = `${restBase}wp-json/wp/v2/pages/${pageId}`;

  const [restData, setData] = useState(null);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <>
      {isLoaded && restData ? (
        <article id={`post-${restData.id}`}>
          <span>{restData.acf ? restData.acf.introduction_text : ""}</span>
          <h1 dangerouslySetInnerHTML={{ __html: restData.title.rendered }} />
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: restData.content.rendered }}
          />
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;
