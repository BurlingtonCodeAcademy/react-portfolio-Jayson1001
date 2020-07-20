import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
//import { Link } from "@reach-router";

class NavBar extends Component {
    render() {
        return (
            <nav className="nav-container">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About Me</Link>
                <Link className="nav-link" to="/projects">Projects And Portfolio</Link>
                <Link className="nav-link" to="/hobbies">Hobbies And Interests</Link>
                <Link className="nav-link" to="/work">Work History</Link>
                <Link className="nav-link" to="/contact">Contact Me Form</Link>
            </nav>
        )
    }
}

export default NavBar;