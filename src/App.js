import React from "react";
import { Router } from "@reach/router";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Router className="Routing">
          <HomePage path="/" />
          <AboutMe path="/aboutme" />
          <Contact path="/contact" />
          <Experience path="/experience" />
        </Router>
      </main>
    </div>
  );
}

export default App;
