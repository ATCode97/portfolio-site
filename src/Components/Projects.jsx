import React from "react";
import { Container, Divider } from "semantic-ui-react";
import beimg from "../Img/NC_NewsBE.png";
import feimg from "../Img/NC_NewsFE.png";
import trimg from "../Img/Tech_Review.png";
import waimg from "../Img/worldArt.png";

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
        <img class="ui large centered image" src={trimg} alt="tech-review" />
        <h3>Tech Review</h3>
        <p>
          An web application that review different frontend and backend
          libraries, in terms of their ease of use and their documentation as
          well. To serve to advise which libraries developers can use for their
          projects.{" "}
        </p>
        <Divider />
        <img class="ui large centered image" src={waimg} alt="worldArt" />
        <h3>worldArt</h3>
        <p>An React native app as my final project</p>
        <Divider />
        <img class="ui large centered image" src={feimg} alt="NC New Site" />
        <h3>Northcoders News Site</h3>
        <p>
          An React web app thats similar to a reddit style forum. To display
          information from NC News Api.
        </p>
        <Divider />
        <img class="ui large centered image" src={beimg} alt="NC API backend" />
        <h3>Northcoders News APi</h3>
        <p>
          An express server built with a RESTful architectural style using SQL
          database along with Postgres and knex for various endpoints. This
          hosted database is use to interact with data that would be use for my
          front end nc news projects.{" "}
        </p>
      </Container>
    </div>
  );
};

export default Projects;
