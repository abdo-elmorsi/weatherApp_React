import React, { Component } from "react";
import "./App.css";
import Form from "./Component/Form";
import Weather from "./Component/Weather";

class App extends Component {
  state = {
    city: "",
    country: "",
    temperature: "",
    humidity: "",
    description: "",
    windSpeed: "",
    error: "",
    date: "",
    Api_Key: "e36ed364400282e43250b6c4c0274d44",
  };
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city.trim() && country.trim()) {
      try {
        const api = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${this.state.Api_Key}`
        );
        const data = await api.json();
        // console.log(data);
        this.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          windSpeed: data.wind.speed,
          date: new Date().toLocaleString(),
          error: "",
        });
      } catch (error) {
        this.setState({
          error: "no",
        });
      }
    } else {
      this.setState({
        city: "",
        country: "",
        temperature: "",
        humidity: "",
        description: "",
        windSpeed: "",
        date: "",
        error: "Please Enter Data",
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Form getWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
          windSpeed={this.state.windSpeed}
          date={this.state.date}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
