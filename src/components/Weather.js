import React, { Component } from "react";

export class Weather extends Component {
  render() {
    return (
      <div className="container output">
        <div>
          {this.props.city && this.props.country && (
            <p>
              Location: {this.props.city}, {this.props.country}
            </p>
          )}
          {this.props.temperature && (
            <p>Temperature: {this.props.temperature} °C</p>
          )}
          {this.props.humidity && <p>Humidity: {this.props.humidity} RH</p>}
          {this.props.description && <p>Condition: {this.props.description}</p>}
          {this.props.error && <p>{this.props.error}</p>}
        </div>
      </div>
    );
  }
}

export default Weather;
