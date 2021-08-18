import React from 'react';
import CardGrid from './Cards/CardGrid';
import SearchBar from './SearchBar/SearchBar';
import { cardCategories } from '../asset/cardCategories';

interface MyProps {}
interface MyState {}

export default class App extends React.Component<MyProps, MyState> {
  getItems() {
    return cardCategories.map((item) => ({
      title: item.nameCategory,
      imgSrc: item.image,
    }));
  }

  render() {
    return (
      <main>
        <SearchBar />
        <CardGrid itemsCategories={this.getItems()} />
      </main>
    );
  }
}
