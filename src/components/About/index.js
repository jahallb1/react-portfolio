import React from "react";
import image from "../../assets/image/Josh-Hall.jpg";

function About() {
  return (
    <section>
      <section>
        <h3>Josh Hall - Full Stack Developer</h3>
        <br />
        <div className="about-me">
          <img src={image} alt="Josh Hall" className="image" />
          <p>
            Full stack web developer with a focus on front-end development using
            a background in music with training in attention to detail and
            collaboration to ensure the creation of user friendly web
            applications. Well-versed in HTML, CSS, JavaScript, and React to
            build user-friendly applications from mock-up to rollout. An
            upcoming University of Central Florida’s Full Stack Coding Boot
            Camp. I have applied react to my portfolio and created various
            smaller projects that are able to be scaled to larger ones. I worked
            on a team that used various complex API’s to create a Lyric-Look up
            page. I am excited to use my skills to work on a team to help build
            quality front-end applications for the web.
          </p>
        </div>
      </section>
    </section>
  );
}

export default About;
