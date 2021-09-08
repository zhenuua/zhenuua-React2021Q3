import React from 'react';
import CardGrid from './Cards/CardGrid';
import Forms from './Forms/forms';
import { cardsHousesDefault } from '../../asset/constants';

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
interface MyProps {}
interface MyState {
  cardsHouses: Houses[];
}

export default class Shop extends React.Component<MyProps, MyState> {
  state = {
    cardsHouses: [],
  };

  componentDidMount() {
    this.setState({
      cardsHouses: cardsHousesDefault,
    });
  }

  static getItems(cardsHousesAdd: Houses[]) {
    return cardsHousesAdd.map((item) => ({
      id: item.id,
      typeHouse: item.typeHouse,
      name: item.name,
      price: item.price,
      rooms: item.rooms,
      buildDate: item.buildDate,
      country: item.country,
      salesman: item.salesman,
    }));
  }

  changeHouses(newCardsHouses: Houses[]) {
    this.setState({ cardsHouses: newCardsHouses });
  }

  render() {
    return (
      <main>
        <Forms
          cardsHouses={this.state.cardsHouses}
          fullCardsHouses={(newCardsHouses) => {
            this.changeHouses(newCardsHouses);
          }}
        />
        <CardGrid typeHouse={Shop.getItems(this.state.cardsHouses)} />
      </main>
    );
  }
}
