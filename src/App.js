import React, { Component } from "react";
import countries from "./countries.json";
import "./App.css";
import Countries from "./Components/Countries.js";

export default class App extends Component {
  state = {
    country: "",
    searchResult: ""
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      country: e.target.value
    });
  };

  handleSearch = () => {
    this.setState({
      ...this.state,
      searchResult: this.state.country
    });
  };

  render() {
    let entries = Object.entries(countries);

    console.log(entries);

    return (
      <div className="App">
        <span className="countryCount">248 </span>Countries{" "}
        <input type="text" onChange={this.handleChange}></input>
        <button className="button" onClick={this.handleSearch}>
          Search
        </button>
        <Countries countries={entries} searchResult={this.state.searchResult} />
      </div>
    );
  }
}
