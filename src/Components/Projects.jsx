import React from "react";
import { Container, Divider } from "semantic-ui-react";
import rbimg from "../Img/MaterialUI.png";

const Projects = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Projects
      </h1>
      <Container textAlign="justified">
        <Divider />
        <img class="ui small centered image" src={rbimg} alt="project 1" />
        <p>something about the backend project</p>
      </Container>
    </div>
  );
};

export default Projects;
