import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.getWeather} className="formInput">
          <input type="text" name="city" placeholder="city" />
          <input
            type="text"
            name="country"
            placeholder="country (eg. de, us, fr)"
          />
          <button className="formInput">Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
