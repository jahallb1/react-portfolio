import React from "react";
import image from "../../assets/image/Josh-Hall.jpg";

function About() {
  
  return (

    <section className="container">
      
      
      <h3 className="about-title">Josh Hall - Full Stack Developer</h3>
      <div className="about-me">
        <div className="about-image-container">
          <img src={image} alt="Josh Hall" className="image" />
        </div>
        <div className="about-text">
          <p>
            Full Stack Web Developer with a focus on front-end development using
            a background in music with training in attention to detail and
            collaboration to ensure the creation of user-friendly web
            applications. Well-versed in HTML, CSS, JavaScript, and React to
            build user-friendly applications from mock-up to rollout. An
            upcoming University of Central Florida’s Full Stack Coding Boot
            Camp. I have applied React to my portfolio and created various
            smaller projects that can be scaled to larger ones. I worked on a
            team that used various complex API’s to create a Lyric-Look up page.
            I am excited to use my skills to work on a team to build quality
            front-end applications for the web.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
