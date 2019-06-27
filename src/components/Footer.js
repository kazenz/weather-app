import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer blue lighten-3 footerSm">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <p className="grey-text text-lighten-4">
                  Written in React with live data from openweathermap.org via
                  API.
                </p>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <div className="container">
              © 2019 Copyright
              <a
                className="grey-text text-lighten-4 right"
                href="https://frytagg.de/weather-app"
              >
                Frytagg.de
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
