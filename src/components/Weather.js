import React, { Component } from "react";

export class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && (
          <div>
            Location: {this.props.city}, {this.props.country}
          </div>
        )}
        {this.props.temperature && (
          <div>Temperature: {this.props.temperature}</div>
        )}
        {this.props.humidity && <div>Humidity: {this.props.humidity}</div>}
        {this.props.description && (
          <div>Conditions: {this.props.description}</div>
        )}
        {this.props.error && <div>{this.props.error}</div>}
      </div>
    );
  }
}

export default Weather;
