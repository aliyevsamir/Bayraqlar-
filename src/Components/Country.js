import React, { Component, Fragment } from 'react';
import './Country.css';

export default class Country extends Component {
  render() {
    const { country, searchValue } = this.props;
    const countryImg = country[0].toLowerCase();
    const countryName = country[1];
    const startIndex = countryName
      .toLowerCase()
      .indexOf(searchValue.toLowerCase());
    const lastIndex = startIndex + searchValue.length - 1;

    return (
      <div className='country'>
        <div className='country-flag'>
          <img
            src={`svg/${countryImg}.svg`}
            alt={`flag of ${countryName}`}
          />
        </div>
        <div className='country-name'>
          {startIndex !== 0
            ? countryName.substring(0, startIndex)
            : null}
          {startIndex !== -1 ? (
            <Fragment>
              <span className='highlighter'>
                {countryName.substring(
                  startIndex,
                  lastIndex + 1
                )}
                {/* {searchValue} */}
              </span>
              {countryName.substring(lastIndex + 1)}
            </Fragment>
          ) : (
            countryName.substring(startIndex + 1)
          )}
        </div>
      </div>
    );
  }
}
