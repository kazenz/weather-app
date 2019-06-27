import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Icon from "./components/Icon";
import Footer from "./components/Footer";

import "./App.css";

const API_KEY = "99936ede9f3a36268ee4418ee3da8b44";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: "halle",
    country: "de",
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  standard = async () => {
    const city = this.state.city;
    const country = this.state.country;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a Location"
      });
    }
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a Location"
      });
    }
  };

  componentDidMount = () => {
    this.standard();
  };

  render() {
    return (
      <div className="App blue lighten-5 homescreen">
        <Titles />
        <div>
          <Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
          <Icon
            description={this.state.description}
            className="descriptionSm"
          />
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;
