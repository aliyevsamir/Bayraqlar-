import React, { Component } from "react";
import { v4 as id } from "uuid";
import Country from "./Country";

export default class Countries extends Component {
  render() {
    let { countries, searchValue } = this.props;
    return (
      <div className="countries grid">
        {countries.map(c => (
          <Country country={c} searchValue={searchValue} key={id()} />
        ))}
      </div>
    );
  }
}
