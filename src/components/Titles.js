import React, { Component } from "react";

export class Titles extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-3">
          <a href="#" className="brand-logo">
            Weather App
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>Halle</li>
            <li>
              <a href="badges.html">Merseburg</a>
            </li>
            <li>
              <a href="collapsible.html">Berlin</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Titles;
