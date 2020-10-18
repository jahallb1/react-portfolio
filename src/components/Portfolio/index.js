import React from "react";

function Portfolio() {
  const projects = [
    {
      name: "Lyric-Lookup",
      class: "",
      tools: "HTML, CSS, Javascript",
      link: "",
    },
    {
      name: "",
      class: "",
      tools: "",
      link: "",
    },
    {
      name: "",
      class: "",
      tools: "",
      link: "",
    },
    {
      name: "",
      class: "",
      tools: "",
      link: "",
    },
    {
      name: "",
      class: "",
      tools: "",
      link: "",
    },
  ];
  return (
      <section>
          <div className="projects">
              {projects.map((projects, index) => (
                  <a className={`project ${projects.class}`} href={projects.link} key={index}>
                      <div className="project-about">
                          <h3>{projects.name}</h3>
                          <p>{projects.tools}</p>
                      </div>
                  </a>
              ))}
          </div>
      </section>
  );
}

export default Portfolio;
