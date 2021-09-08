import React from 'react';

interface MyState {}
interface MyProps {
  typeHouse: string;
  name: string;
  price: string;
  rooms: string;
  buildDate: string;
  country: string;
  salesman: boolean;
}

export default class Card extends React.Component<MyProps, MyState> {
  render() {
    const { typeHouse, price, country, rooms, name, buildDate } = this.props;

    const imgSrc = `./img/${typeHouse.toLowerCase().replace(/\s/g, '')}.jpg`;

    return (
      <div className="card">
        <img className="card__image" src={imgSrc} alt="type of houme" />
        <div className="card__info">
          <h2 className="card__title">{typeHouse}</h2>
          <h2 className="card__price">${price}</h2>
          <h3 className="card__location">country: {country}</h3>
          <h3 className="card__amount-rooms">rooms: {rooms}</h3>
          <h5 className="card__author">
            {this.props.salesman ? 'individual' : 'entity'}, {name}
          </h5>
          <h5 className="card__date">Built in {buildDate}</h5>
          <div className="card__contacts">
            <div className="card__likes">
              <img
                className="card__contacts__image"
                src="./icons/like.png"
                alt="like"
              />
              <h4 className="card__likes__amount">0</h4>
            </div>
            <img
              className="card__contacts__image"
              src="./icons/phone.png"
              alt="call to auther"
            />
            <img
              className="card__contacts__image"
              src="./icons/mail.png"
              alt="sent email to auther"
            />
            <div className="card__views">
              <img
                className="card__contacts__image"
                src="./icons/views.png"
                alt="views"
              />
              <h4 className="card__views__amount">1</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
