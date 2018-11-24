import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      

  <nav>
    <div className="nav-wrapper #2196f3 blue">
      <a href="#!" className="brand-logo log-name">Dash News</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="fa fa-bars"></i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="sass.html" title="My Country"><i className="fa fa-map-marker-alt"></i></a></li>
        <li><a href="badges.html" title="News Feeed"><i className="fa fa-newspaper"></i></a></li>
        
        <li><a href="mobile.html">More</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>

   </div>

   
    );
  }
}

export default App;
