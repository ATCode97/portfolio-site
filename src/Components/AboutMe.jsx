import React from "react";
import { Container, Divider } from "semantic-ui-react";

const AboutMe = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        About me
      </h1>

      <Container textAlign="justified">
        <Divider />
        <h1>Hello!</h1>
        <p>
          I have excellent written and spoken communication skills gained by
          gathering information from a variety of different sources and
          articulating arguments through essays, reports and presentations. I
          also possess strong customer service skills and work well
          independently as well as in teams, gained through a variety of paid
          and unpaid work. I enjoy hobbies that include building and problem
          solving, eg: assembling Japanese robot models, completing puzzles,
          designing and constructing my computer. After graduating with a degree
          in Politics and History, I realised that I would be more interested in
          a career in software development. I have been learning to code online,
          and recently completed a classroom based intensive coding course
          showing a high aptitude to quickly learn new skills. I love travelling
          and last summer, after working in an admin role at Mitie, travelled to
          the US, Taiwan and Hong Kong.
        </p>
        <Divider />
        <h1>Work Experience</h1>
        <h2>Northcoders, Leeds</h2>
        <p>
          I successfully completed an industry led curriculum for a career in
          the software industry. During the course, I learnt industry best
          practices including git version control, TDD and pair programming. I
          have built and developed a backend server following the MVC framework,
          and I am confident in Express, Axios, Knex and PSQL. I developed and
          built a web application and also designed using CSS and bootstrap.
        </p>
        <Divider />
        <h2>Background Artist, CBC Agency</h2>
        <p>
          I work as an “extra” for a variety of TV productions (BBC, Amazon, Sky
          etc) in various locations in the UK. This role requires the ability to
          quickly grasp and follow direction from the Assistant Director,
          reliability and good time management. I also demonstrate good
          interpersonal skills by communicating and working with people from a
          diverse range of ages and backgrounds.
        </p>
        <Divider />
        <h2> Delivery Driver, Eden Bespoke Flowers</h2>
        <p>
          I work as a delivery driver for a local florist. Some orders are time
          sensitive and deliveries can be spread over a wide area in Leeds. This
          role requires good special planning to work out the most efficient and
          quickest route to complete my deliveries.
        </p>
        <Divider />
        <h2>LBG Back Log Admin, Mitie, Engineering Service</h2>
        <p>
          I was responsible for contacting and communicating with external
          contractors and internal engineers to update and track the status of
          current projects. Role required strong communication skills, tact and
          persistence. Through working in a group, I also demonstrated strong
          teamwork and interpersonal skills.
        </p>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default AboutMe;
