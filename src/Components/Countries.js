import React, { Component } from "react";
import Country from "./Country";

export default class Countries extends Component {
  render() {
    let { countries, searchResult } = this.props;
    return (
      <div className="countries grid">
        {countries.map(c => (
          <Country country={c} searchResult={searchResult} />
        ))}
      </div>
    );
  }
}
