import { useEffect, useState } from "react";

function Stack({ restBase }) {
  const frontEndPath = `${restBase}wp-json/wp/v2/posts?_embed&per_page=50&categories=8`;
  const backEndPath = `${restBase}wp-json/wp/v2/posts?_embed&per_page=50&categories=9`;
  const toolsPath = `${restBase}wp-json/wp/v2/posts?_embed&per_page=50&categories=10`;

  const [frontEndSkills, setFrontEndSkills] = useState(null);
  const [backEndSkills, setBackEndSkills] = useState(null);
  const [tools, setTools] = useState(null);

  // front end use effect
  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch(frontEndPath);
      if (response.ok) {
        const data = await response.json();
        setFrontEndSkills(data);
        // console.log(data[0]._embedded["wp:featuredmedia"][0].link);
      }
    };
    fetchSkills();
  }, [frontEndPath]);

  // back end use effect
  useEffect(() => {
    const fetchBackEnd = async () => {
      const response = await fetch(backEndPath);
      if (response.ok) {
        const data = await response.json();
        setBackEndSkills(data);
      }
    };
    fetchBackEnd();
  }, [backEndPath]);

  // tools use effect
  useEffect(() => {
    const fetchTools = async () => {
      const response = await fetch(toolsPath);
      if (response.ok) {
        const data = await response.json();
        setTools(data);
      }
    };
    fetchTools();
  }, [toolsPath]);

  return (
    <section className="stack" id="stack">
      {frontEndSkills && frontEndSkills.length > 0 && (
        <>
          <h1>Stack</h1>
          <div className="skills-container">
            {frontEndSkills.map((skill) => (
              <div key={skill.id} className="skill-item">
                <img
                  src={skill._embedded?.["wp:featuredmedia"]?.[0]?.link}
                  alt={skill.title.rendered}
                />
                <div className="skill-content">
                  <b className="skill-title">{skill.title.rendered}</b>
                  <p className="skill-description">{skill.acf.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Stack;