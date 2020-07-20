import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="footer-container">
        <div className="footer-title">Want to get in touch with me?</div>
        <br></br>
        <div className="footer-contact-container">
          <div className="contact-info-left">
            <div className="email">
              <img className="email-img" src="https://d.newsweek.com/en/full/1518723/message-bottle.webp?w=790&f=b2e06fbb2777560c10b3157db51345f7" />
              jayson.durante@icloud.com
            </div>
            <br></br>
            <div className="github">
              <img className="github-img" src="https://avatars0.githubusercontent.com/u/9919?s=280&v=4" />
              https://github.com/Jayson1001?tab=repositories
            </div>
            <br></br>
            <div className="linkedIn">
              <img className="linkedIn-img" src="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/8b/12/54/8b1254e7-8195-2cbf-a795-42e7e3a4a4da/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png" />
              https://www.linkedin.com/in/jayson-durante-a6477196/
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
