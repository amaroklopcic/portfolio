import React from "react";

function AboutSection() {
  return (
    <div
      id="about"
      className="page-section flex-center"
      style={{ backgroundColor: "white", flexDirection: "column" }}
    >
      <div style={{ width: "50vw", textAlign: "center" }}>
        <h2 className="page-section-header">About</h2>
        <div style={{ margin: "1rem" }}>
          <img
            style={{ borderRadius: "50%" }}
            width="400px"
            height="400px"
            src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg"
            alt=""
          />
        </div>
        <p style={{ fontSize: "1.1rem", marginTop: "2rem" }}>
          Hi, my name is Amar. I’m a self-taught full stack web developer born
          and raised in Chicago. My interest in programming came from an early
          age, since I was about 12 or so and I knew it was my passion and what
          I was meant to do by the time I reached highschool. Initially starting
          out in game development, I eventually moved on and started making web
          applications. After a few years working on personal projects and
          getting comfortable programming, I eventually got a job at a CBD and
          marijuana market research start-up. It’s here where I have by far made
          the most growth, having to adapt and take on many roles outside of my
          web development skills.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
