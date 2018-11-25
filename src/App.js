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
  <div className="categories">
  <a href="#" className="trending">Business</a>
    <a href="#" className="trending">Trending</a>
    <a href="#" className="tech">Tech</a>
    <a href="#" className="sports">Sports</a>
  </div>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="#"><i className="fa fa-map-marker-alt"></i> Location</a></li>
    <li><a href="#"><i className="fa fa-newspaper"></i> News Feed</a></li>
    <li><a href="#"> <i className="fa fa-plus"></i> More</a></li>

  </ul>

  <div className="news-article">
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/office.jpg" alt="Image..."/>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">News Headline <i class="fa fa-chevron-circle-up"></i></span>
        
      </div>
      <div class="card-reveal">
        <span className="card-title grey-text text-darken-4">News headline &nbsp;<i class="fa fa-times-circle"></i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>
    </div>

    <div className="news-article">
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/office.jpg" alt="Image..."/>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">News Headline <i class="fa fa-chevron-circle-up"></i></span>
        
      </div>
      <div class="card-reveal">
        <span className="card-title grey-text text-darken-4">News headline &nbsp;<i class="fa fa-times-circle"></i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>
    </div>
    

    <div className="news-article">
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/office.jpg" alt="Image..."/>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">News Headline <i class="fa fa-chevron-circle-up"></i></span>
        
      </div>
      <div class="card-reveal">
        <span className="card-title grey-text text-darken-4">News headline &nbsp;<i class="fa fa-times-circle"></i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>
    </div>


    <div className="news-article">
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/office.jpg" alt="Image..."/>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">News Headline <i class="fa fa-chevron-circle-up"></i></span>
        
      </div>
      <div class="card-reveal">
        <span className="card-title grey-text text-darken-4">News headline &nbsp;<i class="fa fa-times-circle"></i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>
    </div>



  </div>



  

   
    );
  }
}

export default App;
