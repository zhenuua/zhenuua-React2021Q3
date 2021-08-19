import React from 'react';
import './searchBar.scss';

export default class CardGrid extends React.Component {
  render() {
    return (
      <section className="search-bar">
        <form className="search-form">
          <label>
            <input className="input-search" type="search" name="name" />
          </label>
          <input className="search-btn" type="submit" value="search" />
        </form>
      </section>
    );
  }
}
