import React from 'react';
import CardGrid from './Cards/CardGrid';
import SearchBar from './SearchBar/SearchBar';
import { cardsHouses } from '../asset/cardsHouses';

export default class App extends React.Component {
  getItems() {
    return cardsHouses.map((item) => ({
      id: item.id,
      title: item.typeHouse,
      imgSrc: item.image,
      price: item.price,
      rooms: item.rooms,
      country: item.country,
      city: item.city,
      author: item.author,
      addDate: item.addDate,
      likes: item.likes,
      views: item.views,
    }));
  }

  render() {
    return (
      <main>
        <SearchBar />
        <CardGrid typeHouse={this.getItems()} />
      </main>
    );
  }
}
