import React from "react";

function Portfolio() {
  const projects = [
    {
      name: "Lyric-Lookup",
      class: "",
      tools: "HTML, CSS, Javascript",
      link: "https://mayorgak.github.io/lyric-look-up",
    },
    {
      name: "Password Generator",
      class: "",
      tools: "Javascript",
      link: "https://jahallb1.github.io/passwordgenerator/",
    },
    {
      name: "Run Buddy",
      class: "",
      tools: "HTML, CSS",
      link: "https://jahallb1.github.io/run-buddy/",
    },
    {
      name: "Readme Generator",
      class: "",
      tools: "Node.js, JavaScript",
      link: "https://github.com/jahallb1/readmeGenerator",
    },
    {
      name: "Budget Tracker",
      class: "",
      tools: "HTML, CSS, JavaScript, Node, Mongo",
      link: "https://github.com/jahallb1/budget-tracker",
    },
    {
        name: "Budget Tracker",
        class: "",
        tools: "HTML, CSS, JavaScript, Node, Mongo",
        link: "https://github.com/jahallb1/budget-tracker",
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
