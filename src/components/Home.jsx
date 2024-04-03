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
        return data;
      }
      throw new Error("Failed to fetch");
    };
    const delay = new Promise((resolve) => setTimeout(resolve, 1500));
    Promise.all([fetchData(), delay])
      .then(([data]) => {
        setData(data);
        setLoadStatus(true);
      })
      .catch(() => setLoadStatus(false));
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
        <div className="loader-body">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default Home;

// App --> router for external pages
