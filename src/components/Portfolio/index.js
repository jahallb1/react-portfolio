import React from "react";
//import tvTracker from "../../assets/image/tv-tracker.png";


function Portfolio() {
  const projects = [
    {
      name: "Tv-Tracker",
      //image: tvTracker,
      tools: "HTML, CSS, Javascript",
      link: "https://stark-brushlands-99590.herokuapp.com/",
      GitHub: "https://github.com/Dannymont94/tv-tracker",
      
    },
    {
      name: "Lyric-Lookup",
      image: "",
      tools: "HTML, CSS, Javascript",
      link: "https://mayorgak.github.io/lyric-look-up",
    },
    {
      name: "Password Generator",
      image: "",
      tools: "Javascript",
      link: "https://jahallb1.github.io/passwordgenerator/",
    },
    {
      name: "Run Buddy",
      image: "",
      tools: "HTML, CSS",
      link: "https://jahallb1.github.io/run-buddy/",
    },
    {
      name: "Readme Generator",
      image: "",
      tools: "Node.js, JavaScript",
      link: "https://github.com/jahallb1/readmeGenerator",
    },
    {
        name: "Budget Tracker",
        image: "",
        tools: "HTML, CSS, JavaScript, Node, Mongo",
        link: "https://github.com/jahallb1/budget-tracker",
      },

  ];
  return (
      <section>
          <div className="projects">
              {projects.map((projects, index) => (
                <React.Fragment>
                  <img src={projects.image}  alt=""/>
                  <a className={`project ${projects}`} href={projects.link} key={index}>
                      <div className="project-about">
                          
                          <h3>{projects.name}</h3>
                          <p>{projects.tools}</p>
                      </div>
                  </a>
                  </React.Fragment>
              ))}
          </div>
      </section>
  );
}

export default Portfolio;
