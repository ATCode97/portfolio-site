import React from "react";
import { Icon, Grid } from "semantic-ui-react";

const HomePage = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Alistair Tsang
      </h1>

      <Grid>
        <Grid.Column textAlign="center">
          <a
            href={"https://github.com/ATCode97"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github icon" size="massive" />
          </a>

          <a
            href={"https://www.linkedin.com/in/alistair-tsang-2ba049171/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin icon" size="massive" />
          </a>
        </Grid.Column>
      </Grid>

      <br></br>
    </div>
  );
};

export default HomePage;
