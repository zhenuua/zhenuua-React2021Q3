import React from 'react';
import Card from './Card';

import './cardGrid.scss';

interface Categories {
  title: string;
  imgSrc: string;
}
interface MyState {}
interface MyProps {
  itemsCategories: Categories[];
}

export default class CardGrid extends React.Component<MyProps, MyState> {
  render() {
    return (
      <section className="cards-field">
        {this.props.itemsCategories.map((item) => (
          <Card key={item.title} title={item.title} imgSrc={item.imgSrc} />
        ))}
      </section>
    );
  }
}
