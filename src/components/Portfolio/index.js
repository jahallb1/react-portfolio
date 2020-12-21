import React from "react";
import tvTracker from "../../assets/image/tv-tracker.png";
import tictactoe from "../../assets/image/tic-tac-toe.png";
import Lyric from "../../assets/image/lyric-lookup.png";
import password from "../../assets/image/password.png";

function Portfolio() {
  const projects = [
    {
      name: "Tv-Tracker",
      image: tvTracker,
      tools: "React, MongoDB, Express, Node.js",
      link: "https://stark-brushlands-99590.herokuapp.com/",
      GitHub: "https://github.com/Dannymont94/tv-tracker",
    },
    {
      name: "Tic-Tac-Toe",
      image: tictactoe,
      tools: "HTML, CSS, Javascript",
      link: "https://jahallb1.github.io/tic-tac-toe/",
      GitHub: "https://github.com/jahallb1/tic-tac-toe",
    },
    {
      name: "Lyric-Lookup",
      image: Lyric,
      tools: "HTML, CSS, Javascript",
      link: "https://mayorgak.github.io/lyric-look-up",
      GitHub: "https://github.com/Mayorgak/lyric-look-up"
    },
    {
      name: "Password Generator",
      image: password,
      tools: "Javascript",
      link: "https://jahallb1.github.io/passwordgenerator/",
      GitHub: "https://github.com/jahallb1/passwordgenerator"
    },
  ];
  return (
    <section className="card-container">
      <h2 className="port">Portfolio</h2>

      {projects.map((projects, index) => (
        <div className="card" key={projects.name}>
          <img className="card-img" src={projects.image} alt="" />
          <div className="card-body">
            <a
              className={`project ${projects}`}
              href={projects.link}
              key={index}
            >
              <h3>{projects.name}</h3>
              <p>{projects.tools}</p>
            </a>
            <div className="card-about">
              <a
                className={`project ${projects}`}
                href={projects.GitHub}
                key={index}
              >
                <p>{projects.GitHub}</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
