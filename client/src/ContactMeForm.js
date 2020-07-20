import React from "react";
import { Link } from "react-router-dom";

class ContactMeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="contact-container">
        <div className="contact-title">
          <h1>Contact Me</h1>
          <h3>
            Want to get in touch? Have a project I could help with? I'm always
            looking to collaborate on new things and look forward to hearing
            what you're working on. Feel free to reach out to me on any of the
            platforms below, but email will generally get you the quickest
            response.
          </h3>
        </div>
        <div className="contact-info-container">
          <div className="contact-left-container">
              <img
                className="contact-img"
                src="https://www.burchcom.com/wp-content/uploads/2019/01/images1997-5c2f99436aa28-1024x683.jpg"
              />
          </div>
          <div className="contact-right-conatiner">
            <div className="email">
              <img
                className="email-img"
                src="https://lh3.googleusercontent.com/proxy/9E7CnhVFzsx3iZ122_bUB_2_NqNCAJI09HjHGLnpwINJ9pJDNr5xo0yCqCMTlkKCVZXt5Yd1bjmWCHaGX4cXrOZUr-QDkUPO9ubBgN0uMoUbqae438mLbLr81I8IzhF5-4DDqz3ES9ldYZkCH3Im8m-xEpj8KTe70kWq9tTmqZ0JBJs"
              />
              jayson.durante@icloud.com
            </div>
            <br></br>
            <div className="github">
              <img
                className="github-img"
                src="https://avatars0.githubusercontent.com/u/9919?s=280&v=4"
              />
              https://github.com/Jayson1001?tab=repositories
            </div>
            <br></br>
            <div className="linkedIn">
              <img
                className="linkedIn-img"
                src="https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/8b/12/54/8b1254e7-8195-2cbf-a795-42e7e3a4a4da/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
              />
              https://www.linkedin.com/in/jayson-durante-a6477196/
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMeForm;
