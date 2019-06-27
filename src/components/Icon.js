import React, { Component } from "react";

export class Icon extends Component {
  render() {
    switch (this.props.description) {
      case "clear sky":
        return (
          <img
            src={require("../pictures/clear-sky.png")}
            alt="clear-sky"
            className="iconSm"
          />
        );
      case "few clouds":
        return (
          <img
            src={require("../pictures/few-clouds.png")}
            alt="few-clouds"
            className="iconSm"
          />
        );
      case "light rain":
        return (
          <img
            src={require("../pictures/rain.png")}
            alt="raining"
            className="iconSm"
          />
        );
      case "broken clouds":
        return (
          <img
            src={require("../pictures/cloudy.png")}
            alt="broken clouds"
            className="iconSm"
          />
        );
      case "thunderstorm":
        return (
          <img
            src={require("../pictures/storm.png")}
            alt="storm"
            className="iconSm"
          />
        );
      case "scattered clouds":
        return (
          <img
            src={require("../pictures/cloudy.png")}
            alt="scattered clouds"
            className="iconSm"
          />
        );
      case "shower rain":
        return (
          <img
            src={require("../pictures/rain.png")}
            alt="raining"
            className="iconSm"
          />
        );
      case "rain":
        return (
          <img
            src={require("../pictures/rain.png")}
            alt="raining"
            className="iconSm"
          />
        );
      default:
        return <div>no icon</div>;
    }
  }
}

export default Icon;
