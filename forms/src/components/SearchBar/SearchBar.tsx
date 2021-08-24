import React from 'react';
import './searchBar.scss';

export default class CardGrid extends React.Component {
  render() {
    return (
      <section className="search-bar">
        <form className="search-form">
          <label htmlFor="searchBar">
            <input className="input-search" type="search" name="searchBar" />
          </label>
          <input className="search-btn" type="submit" value="search" />
        </form>
      </section>
    );
  }
}
