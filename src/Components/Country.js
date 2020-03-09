import React, { Component } from "react";

export default class Country extends Component {
  render() {
    let { country, searchResult } = this.props;
    let countryImg = country[0].toLowerCase();
    let countryName = country[1];

    // console.log(
    //   countryName.substring(0, searchResult.length),
    //   "-----",
    //   searchResult
    // );

    let template =
      searchResult.toLowerCase() ==
      countryName.substring(0, searchResult.length).toLowerCase() ? (
        <div className="country">
          <div className="country-flag">
            <img
              src={`svg/${countryImg}.svg`}
              alt=""
              style={{ height: "20px", width: "20px" }}
            />
          </div>
          <div className="country-name">{country[1]}</div>
        </div>
      ) : null;

    return template;
  }
}
