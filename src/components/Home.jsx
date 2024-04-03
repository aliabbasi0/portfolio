import { useState, useEffect } from "react";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import About from "./About";
import Stack from "./Stack";

const Home = ({ restBase }) => {
  const homePageId = "9";
  const restPath = `${restBase}wp-json/wp/v2/pages/${homePageId}?_embed&acf_format=standard`;

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
          <Hero restData={restData} />
          <Portfolio restBase={restBase} />
          <Stack restBase={restBase} />
          <About restData={restData} />
        </article>
      ) : (
        <p className="loading">
          <span>Loading...</span>
        </p>
      )}
    </>
  );
};

export default Home;

// App --> router for external pages
