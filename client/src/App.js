import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'
import Home from './Home'
import AboutMe from './AboutMe'
import ProjectsAndPortfolio from './ProjectsAndPortfolio'
import HobbiesAndInterests from './HobbiesAndInterests'
import WorkHistory from './WorkHistory'
import ContactMeForm from './ContactMeForm'
import Footer from './Footer'


function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={AboutMe} />
        <Route path='/projects' component={ProjectsAndPortfolio} />
        <Route path='/hobbies' component={HobbiesAndInterests} />
        <Route path='/work' component={WorkHistory} />
        <Route path='/contact' component={ContactMeForm} />
      </Switch>
      
    </div>
  );
}

export default App;
