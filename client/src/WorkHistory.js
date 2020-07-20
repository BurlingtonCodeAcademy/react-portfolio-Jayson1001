import React from "react";
import { Link } from "react-router-dom";
import resumeSC from "./images/resumeSC.png";
import JaysonResume from "./images/JaysonResume.pdf";

class WorkHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="work-title-container">
          <div className="title">
            <h1>Work History</h1>
          </div>
        </div>
        <div className="history-container">
          <div className="goals-employers-container">
            <div className="goals">
              <h1>Career Goals</h1>
              <ul>
                <li>Grow and develop my skills as a web developer.</li>
                <li>Branch from web development into other areas of coding.</li>
                <li>
                  Ultimately work for myself as a designer/developer/consultant
                  and live in the mountains.
                </li>
              </ul>
            </div>
            <div className="employers">
              <div className="employers-title">
                <h1>Past Employment:</h1>
              </div>
              <h2>Burton Snowboards NYC Flagship - Store Manager</h2>
              <h3>03/2012 - Present</h3>
              <ul>
                <li>
                  Managed a group of 20 employees at a fast paced multi-million
                  dollar flagship retail store in SoHo, NYC.
                </li>
              </ul>
              <br></br>
              <h2>SRK Pools - East Hampton, NY</h2>
              <h3>2010-2012</h3>
              <ul>
                <li>
                  Built and maintained high end pool and filtration systems for
                  customers in the hamptons.
                </li>
              </ul>
              <br></br>
              <h2>The Energy Firm - Bridgehampton, NY</h2>
              <h3>2008-2010</h3>
              <ul>
                <li>
                  Sold and installed solar electic systems for customers all
                  over Long Island, NY.
                </li>
              </ul>
            </div>
            <br></br>
          </div>
          <div className="skills-resume-container">
            <div className="skills">
              <div className="skills-title">
                <h1>Skills</h1>
              </div>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>Web Development</li>
                <li>GitHub</li>
                <li>Command Line</li>
              </ul>
            </div>
            <div className="resume">
              <div className="resume-title">
                <h1>My Resume</h1>
                <h3>Click the screenshot below to download a pdf version.</h3>
              </div>
              <a href={JaysonResume} download>
                <img
                  className="resume-img"
                  src={resumeSC}
                  alt="My Personal Resume Screenshot"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkHistory;
