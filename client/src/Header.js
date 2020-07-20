import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <h1 className="header-title">Jayson's Prolific Profile!</h1>
        <h3 className="header-subtitle">City Style Meets Mountain Functionality</h3>
      </div>
    );
  }
}

export default Header;
