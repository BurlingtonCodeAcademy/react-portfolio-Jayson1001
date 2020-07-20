import React from "react";
import { Link } from "react-router-dom";
import me from './images/Me.jpeg'
import looking2 from './images/looking2.jpeg';
import nycjay from "./images/nycjay.jpeg";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="body">
        <div className="img-container">
          <img className="me-img" src={nycjay} />
        </div>
        <div className="desc">
            <p>
              I try to look at things from a different perspective/through a different lens. "As a designer, I strive for a smooth integration of city style with outdoor functionality."
            </p>
          </div>
        </div>
    );
  }
}

export default Home;
