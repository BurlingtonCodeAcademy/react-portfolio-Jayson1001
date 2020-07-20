import React from "react";
import { Link } from "react-router-dom";
import me from "./images/Me.jpeg";
import shred from "./images/shred.jpeg";
import stowe from "./images/stowe.jpeg";
import nail from "./images/nail.jpeg";
import nail2 from "./images/nail2.jpeg";
import squad from "./images/squad.jpeg";
import nycjay from "./images/nycjay.jpeg";
import chips from "./images/chips.jpeg";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="about-container">
          <div className="about-left-container">
            <h2 className="about-me">About Me:</h2>
            <div className="about-desc-container">
              <p>
                I've been a passionate outdoorsman for my entire life. I've
                worked in many different fields over the years. I was born in
                Manhattan and raised a little north of the city in Westchester,
                where my passion for the outdoors began. I went to college at
                the University of Colorado at Boulder, where I continued to
                pursue my love for the outdoors. I am an avid snowboarder and
                grew up riding almost every weekend in VT.
              </p>
              <p>
                I've always had a interet in coding and web development, but my
                calling came at an interesting time. Before I got into web
                developemnt I was a manager of a flagship retial store in NYC. I
                have many friends in the business and their experiences inspired
                to start teaching myself to code.
              </p>
              <p>
                It was tricky at first trying to balance ny full time job with
                self schooling on the side, but then the glabal pandemic of
                Coivd-19 came and ravished my city and as a result i was
                furloughed from my job. I took the opportunity to really focus
                on coding with the end goal of coming out of this with a new
                career path. Long story short, I was offered to be sent to the
                Burlington Code Academy by my employer with the end goal of
                becoming a Jr Web Developer. The rest is history!
              </p>
            </div>
          </div>
          <div className="about-right-container">
            <div className="about-img-container">
              <img className="about-img" src={chips} />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-images">
            <img className="about-img-footer" src={stowe} />
            <img className="about-img-footer" src={shred} />
            <img className="about-img-footer" src={nail} />
            <img className="about-img-footer" src={nail2} />
            <img className="about-img-footer" src={squad} />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
