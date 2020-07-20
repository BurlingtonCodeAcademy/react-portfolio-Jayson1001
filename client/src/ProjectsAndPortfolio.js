//import React from "react";
import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import { Link } from "react-router-dom";
import {guess} from "./images/guess-the-number.png";

class ProjectsAndPortfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="projects-container">
        <div className="title-container">
            <h1 className="title">Projects and Portfolio</h1>
        </div>
        <div className="bca-container">
          <div className="bca-projects">
            <h1>Burlington Code Academy Projects</h1>
            <ul>
              <li><a href="https://github.com/BurlingtonCodeAcademy/guess-the-number-Jayson1001">Guess The Number</a></li>
          </ul>
          <img src={guess} />
          <ul>
              <li><a href="https://github.com/BurlingtonCodeAcademy/zorkington-jayson-erin">Zorkington</a></li>
              <li><a href="https://github.com/BurlingtonCodeAcademy/yelpington-Jayson1001">Yelpington</a></li>
              <li><a href="https://github.com/BurlingtonCodeAcademy/remock-Jayson1001">Remock</a></li>
              <li><a href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-jena-jayson">Tic Tac Toe</a></li>
              <li><a href="https://github.com/BurlingtonCodeAcademy/geo-vermonter-jayson-joe">GeoVermonter</a></li>
            </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default ProjectsAndPortfolio;
