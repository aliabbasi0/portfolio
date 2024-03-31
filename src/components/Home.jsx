import { useState, useEffect, React } from "react";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import About from "./About";

const Home = ({ restBase }) => {
  const homePageId = "9";
  const homePath = `${restBase}wp-json/wp/v2/pages/${homePageId}`;
  const mediaPath = `${restBase}wp-json/wp/v2/media/`;
  const projectPath = `${restBase}wp-json/wp/v2/project/`;

  const [restData, setData] = useState(null);
  const [restMedia, setMedia] = useState(null);
  const [restProjects, setProjects] = useState(null);
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
      }
    };
    fetchMedia();
  }, [mediaPath]);

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
    <>
      {isLoaded && restData ? (
        <article id={`post-${restData.id}`}>
          <Hero restData={restData} restMedia={restMedia} />
          <Portfolio restProjects={restProjects} />
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
