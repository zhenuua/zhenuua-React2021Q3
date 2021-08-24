import React from 'react';
import Card from './Card';

import './cardGrid.scss';

interface Houses {
  id: string;
  typeHouse: string;
  name: string;
  price: string;
  rooms: string;
  buildDate: string;
  country: string;
  salesman: boolean;
}

interface MyProps {
  typeHouse: Houses[];
}

export default class CardGrid extends React.Component<MyProps> {
  render() {
    return (
      <section className="cards-field">
        {this.props.typeHouse.map((item) => (
          <Card
            key={item.id}
            typeHouse={item.typeHouse}
            name={item.name}
            price={item.price}
            rooms={item.rooms}
            buildDate={item.buildDate}
            country={item.country}
            salesman={item.salesman}
          />
        ))}
      </section>
    );
  }
}
