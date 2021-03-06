import React from "react";
import './App.css';
import Header from "./components/Header";
import Mui from "./components/Mui";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Weathercard from "./components/Weathercard";
// import Button from "./components/Button";
import WeekContainer from "./components/WeekContainer";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      fiveDay: [],
      checked: false,

    };
  }

  getfiveDayWeather() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=lucknow&units=metric&APPID=6a9e129e1114a2ccfb8ab9389e6ef2ba")
      .then((res) => res.json())
      .then(response => this.setState({ fiveDay: response, }))

  }

  getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=26.8467&lon=80.9462&units=metric&APPID=6a9e129e1114a2ccfb8ab9389e6ef2ba")
      .then((res) => res.json())
      .then(weather => this.setState({ weather: [weather], }))
  }

  componentDidMount() {
    this.getWeather()
  }


  muiColorHandler = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className={this.state.checked ? 'App-black' : 'App'} >
        <Header />
        <Mui muiColor={this.muiColorHandler} />
        {this.state.weather.map((season) =>
          <Weathercard key={season.id} season={season} checked={this.state.checked} />
        )}


        <WeekContainer fiveDay={this.state.fiveDay} checked={this.state.checked} fiveDayhandler={this.getfiveDayWeather.bind(this)} />
      </div>
    );
  }
}


export default App;

