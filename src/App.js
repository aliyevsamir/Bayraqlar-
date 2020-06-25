import React, { Component } from 'react';
import countriesData from './countries.json';
import './App.css';
import Countries from './Components/Countries.js';

export default class App extends Component {
  state = {
    countries: [],
    searchValue: '',
  };

  componentDidMount() {
    this.getCountries();
  }

  getCountries = () => {
    const countries = Object.entries(countriesData);

    this.setState({
      countries,
    });
  };

  handleChange = e => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleSearch = e => {
    e.preventDefault();
    const { searchValue } = this.state;

    if (!searchValue) {
      this.getCountries();
    } else {
      const allCountries = Object.entries(countriesData);
      const filteredCountries = allCountries.filter(c =>
        c[1].toLowerCase().includes(searchValue.toLowerCase())
      );

      this.setState({
        countries: filteredCountries,
      });
    }
  };

  render() {
    const { countries, searchValue } = this.state;

    return (
      <div className='App'>
        <div className='navbar'>
          <input
            value={`${countries.length} countries founded`}
            className='countryCount'
            disabled
          />

          <form>
            <input
              type='text'
              className='searchBox'
              onChange={this.handleChange}
              value={searchValue}
            ></input>
            <input
              type='submit'
              value='Search'
              className='button'
              onClick={this.handleSearch}
            />
          </form>
        </div>

        <Countries
          countries={countries}
          searchValue={searchValue}
        />
      </div>
    );
  }
}
