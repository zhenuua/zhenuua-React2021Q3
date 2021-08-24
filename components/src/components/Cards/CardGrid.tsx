import React from 'react';
import Card from './Card';

import './cardGrid.scss';

interface Houses {
  id: number;
  title: string;
  imgSrc: string;
  price: number;
  rooms: number;
  country: string;
  city: string;
  author: string;
  addDate: string;
  likes: number;
  views: number;
}
interface MyState {}
interface MyProps {
  typeHouse: Houses[];
}

export default class CardGrid extends React.Component<MyProps, MyState> {
  render() {
    return (
      <section className="cards-field">
        {this.props.typeHouse.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            imgSrc={item.imgSrc}
            price={item.price}
            rooms={item.rooms}
            country={item.country}
            city={item.city}
            author={item.author}
            addDate={item.addDate}
            likes={item.likes}
            views={item.views}
          />
        ))}
      </section>
    );
  }
}
