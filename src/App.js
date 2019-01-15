import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import downArrow from './down-arrow.png';
import phpIcon from "./php-brands.svg";
import html5 from "./html5-brands.svg"
import jsIcon from "./js-brands.svg";
import cartIcon from "./cart.svg";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
library.add(faCircle);
library.add(faCircleNotch);

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* Header */}
        <header className="App-header">
        {/* Navbar */}
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">FEATURES<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">TEMPLATES</a>
                </li>
              </ul>
            </div>
            <a class="navbar-brand" href="#">MNOICE</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">REFERENCES</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">CONTACT</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div id="App-main">
          <div className="App-main-center">
            <img src={logo} alt="Logo" className="App-main-img"/>
            <h1> Hi, i'm Tests </h1>
            <p className="border-top border-bottom lessAbout">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non lectus sed nisl molestie malesuada. Aliquam ornare wisi eu metus. Nulla non arcu lacinia neque faucibus fringilla. Aenean vel massa quis mauris vehicula lacinia.</p>
          </div>
        <div className="scroll-down-background"><a className="scroll-down" href="#App-content"><img src={downArrow} className="scroll-down-about" /></a></div>
        </div>
        <div id="App-content">
          <div className="container projects">
            <h1>OUR PROJECTS<FontAwesomeIcon icon="circle" /><FontAwesomeIcon icon="circle-notch" /></h1>
            <p></p>
            <div className="portfolio">
              <div className="portfolio-1 portfolio-overlay">
                <div class="overlay">
                  <div class="text">This site is made with <i>WORDPRESS.</i><br /><br /> Website is used for renting cars. This was my one of the biggest project this year (2018).</div>
                  <div class="text used"><img src={phpIcon} height={40} /><img src={html5} height={40} className="html5" /><img src={jsIcon} height={40} /><img src={cartIcon} height={40} /></div>
                </div>
              </div>
                <div className="portfolio-2-3">
                  <div className="portfolio-2 portfolio-overlay"></div>
                  <div className="portfolio-3 portfolio-overlay"></div>
                </div>
              <div className="portfolio-4 portfolio-overlay"></div>
            </div>
          </div>
        </div>
        <footer className="App-footer">
          <a href="https://pngtree.com/free-vectors">free vectors from pngtree.com</a>
          <a href='https://www.freepik.com/free-vector/low-poly-geometrical-background_848196.htm'>Designed by Starline</a>
          <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </footer>
      </div>
    );
  }
}

export default App;