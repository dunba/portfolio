import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const envelope = <FontAwesomeIcon icon={faEnvelope} />;
  const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
  const github = <FontAwesomeIcon icon={faGithub} />;
  const avi =
    "https://media-exp1.licdn.com/dms/image/C5603AQFeO49OhubXTw/profile-displayphoto-shrink_400_400/0/1560040627270?e=1617840000&v=beta&t=3cFzlC4PH48N3xi1FFK61NhXnp0IlNcqGFFjSNe8R_o";
  return (
    <div className="homediv">
      <div className="bioleft">
        <div className="breathingroom">
          <img id="avi" src={avi} />
          <div className="mynameis">
            <h1>Dunba </h1>
            <h1>Tehinse </h1>
          </div>

          <hr></hr>
          <ul className="icons2">
            <li id="icongraphics2">
              <a target="_blank" href="https://github.com/dunba">
                {github}
              </a>
            </li>
            <li id="icongraphics2">
              <a target="_blank" href="https://linkedin.com/in/dunba">
                {linkedin}
              </a>
            </li>
            <li id="icongraphics2">
              <a target="_blank" href="mailto:hello@dunba.world">
                {envelope}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bioright">
        <div className="breathingroom">
          <h1 id="hello">Hello</h1>
          <p>
            I'm Dunba, a creative storyteller and self-taught developer with a
            professional background in news and sports media.
          </p>
          <p>
            I am passionate about media and technology, and i aim to build
            innovative products at the intersection of both industries.
          </p>
          <div className="resumebuttons">
            <Link to="/Resume">
              <button id="resumebttn">Resume</button>
            </Link>
            <Link to="/Projects">
              <button id="projectsbttn">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
