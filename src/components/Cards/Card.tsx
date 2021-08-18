import React from 'react';

interface MyState {}
interface MyProps {
  title: string;
  imgSrc: string;
}

export default class Card extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div className="card">
        <img className="card__image" src={this.props.imgSrc} />
        <h2 className="card__title">{this.props.title}</h2>
        <h2 className="card__price">${8500}</h2>
        <h3 className="card__amount-rooms">rooms: {2}</h3>
        <h3 className="card__country">country: Belarus</h3>
        <h3 className="card__author">Yauheni Zakharenka</h3>
        <h4 className="card__date">Added on 18/08/2021</h4>
        <div className="card__contacts">
          <img alt="call to auther" />
          <img alt="sent email to auther" />
          <div className="card__likes">
            <img className="card__likes__image" alt="image of like" />
            <h4 className="card__likes__amount">7</h4>
          </div>
          <div className="card__views">
            <img className="card__views__image" alt="image of views" />
            <h4 className="card__views__amount">327</h4>
          </div>
        </div>
      </div>
    );
  }
}
