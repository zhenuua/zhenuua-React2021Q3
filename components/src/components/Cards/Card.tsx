import React from 'react';

interface MyState {}
interface MyProps {
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

export default class Card extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div className="card">
        <img className="card__image" src={this.props.imgSrc} alt="house" />
        <div className="card__info">
          <h2 className="card__title">{this.props.title}</h2>
          <h2 className="card__price">${this.props.price}</h2>
          <h3 className="card__location">
            country: {this.props.country}; city: {this.props.city}
          </h3>
          <h3 className="card__amount-rooms">rooms: {this.props.rooms}</h3>
          <h5 className="card__author">{this.props.author}</h5>
          <h5 className="card__date">Added on {this.props.addDate}</h5>
          <div className="card__contacts">
            <div className="card__likes">
              <img
                className="card__contacts__image"
                src="./icons/like.png"
                alt="likes"
              />
              <h4 className="card__likes__amount">{this.props.likes}</h4>
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
              <h4 className="card__views__amount">{this.props.views}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
