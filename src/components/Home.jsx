import { useState, useEffect } from "react";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import About from "./About";
import Stack from "./Stack";

const Home = ({ restBase }) => {
  const homePageId = "9";
  const homePath = `${restBase}wp-json/wp/v2/pages/${homePageId}`;
  const mediaPath = `${restBase}wp-json/wp/v2/media/`;

  const [restData, setData] = useState(null);
  const [restMedia, setMedia] = useState(null);

  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(homePath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [homePath]);

  useEffect(() => {
    const fetchMedia = async () => {
      const response = await fetch(mediaPath);
      if (response.ok) {
        const data = await response.json();
        setMedia(data);
        console.log(data[0].media_details.sizes.full.source_url);
      }
    };
    fetchMedia();
  }, [mediaPath]);

  return (
    <>
      {isLoaded && restData ? (
        <article id={`post-${restData.id}`}>
          <Hero restData={restData} restMedia={restMedia} />
          <Portfolio restBase={restBase} />
          <Stack restBase={restBase} />
          <About restData={restData} restMedia={restMedia} />
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;

// App --> router for external pages
