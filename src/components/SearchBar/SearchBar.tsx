import React from 'react';
import './searchBar.scss';

export default class CardGrid extends React.Component {
  // loginInput(e: string) {
  //   console.log(e);
  // }
  // onKeyUp(event: string) {
  //   if (event === 'Enter' || event === 'NumpadEnter') {
  //     console.log('search');
  //   } else {
  //     console.log('write');
  //   }
  // }
  render() {
    return (
      <section className="search-bar">
        <form>
          <label>
            <input className="input-search" type="search" name="name" />
          </label>
          <input type="submit" value="search" />
        </form>
      </section>
      // <input
      //   className='input-search'
      //   type="search"
      //   onKeyPress={(event: React.KeyboardEvent) => this.onKeyUp(event.code)}
      //   onChange={(e: React.FormEvent<HTMLInputElement>) => this.loginInput(e.currentTarget.value)}
      // />
    );
  }
}
