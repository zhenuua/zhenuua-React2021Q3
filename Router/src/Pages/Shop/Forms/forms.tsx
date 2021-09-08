import React, { FormEvent } from 'react';
import './forms.scss';
import './popup.scss';

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
  cardsHouses: Houses[];
  fullCardsHouses: (newCardsHouses: Houses[]) => void;
}
interface MyState {
  id: string;
  typeHouse: string;
  name: string;
  price: string;
  rooms: string;
  buildDate: string;
  country: string;
  agree: boolean;
  salesman: boolean;
  errorsAgree: boolean;
  errorsName: string;
  errorsPrice: string;
  errorsRooms: string;
  errorsBuildDate: boolean;
  showPopUp: boolean;
}

export default class Forms extends React.Component<MyProps, MyState> {
  state = {
    id: '',
    typeHouse: 'Block of flats',
    name: '',
    price: '',
    rooms: '',
    buildDate: '',
    country: 'Belarus',
    salesman: true,
    agree: false,
    errorsAgree: false,
    errorsName: '',
    errorsPrice: '',
    errorsRooms: '',
    errorsBuildDate: false,
    showPopUp: false,
  };

  handledChange(event: FormEvent<HTMLFormElement>) {
    const generateId =
      this.state.typeHouse +
      this.state.price +
      this.state.name +
      this.state.buildDate;
    this.setState({ id: '' });
    this.setState({ id: generateId });

    event.preventDefault();
    if (this.validate()) {
      const newCardsHouses = this.props.cardsHouses.concat({
        id: this.state.id,
        typeHouse: this.state.typeHouse,
        name: this.state.name,
        price: this.state.price,
        rooms: this.state.rooms,
        buildDate: this.state.buildDate,
        country: this.state.country,
        salesman: this.state.salesman,
      });

      this.props.fullCardsHouses(newCardsHouses);
      this.resetForm();
      this.showPopUp();
    }
  }

  validate() {
    let isValid = true;
    const reNumber = /^[0-9]+$/;
    const reSimbols = /[~!@#$%*()_—+=|:;"'`<>,.?/^]+/;
    const reSpace = /^[ ]+$/;
    this.setState({
      errorsAgree: false,
      errorsName: '',
      errorsPrice: '',
      errorsBuildDate: false,
      errorsRooms: '',
    });
    if (this.state.agree === false) {
      this.setState({ errorsAgree: true });
      isValid = false;
    }
    if (this.state.buildDate === '') {
      this.setState({ errorsBuildDate: true });
      isValid = false;
    }
    if (this.state.name.length === 0) {
      this.setState({ errorsName: 'Поле не может быть пустым.' });
      isValid = false;
    }
    if (reSpace.test(this.state.name)) {
      this.setState({
        errorsName: 'Поле не может состоять только из пробелов.',
      });
      isValid = false;
    }
    if (this.state.name.length > 30) {
      this.setState({
        errorsName: 'Количество символов не должно превышать 30.',
      });
      isValid = false;
    }
    if (reNumber.test(this.state.name)) {
      this.setState({ errorsName: 'Поле не может состоять только из цифр.' });
      isValid = false;
    }
    if (reSimbols.test(this.state.name)) {
      this.setState({
        errorsName: 'Поле не может содержать служебные символы.',
      });
      isValid = false;
    }
    if (!reNumber.test(this.state.price)) {
      this.setState({ errorsPrice: 'Поле может состоять только из цифр.' });
      isValid = false;
    }
    if (!reNumber.test(this.state.rooms)) {
      this.setState({ errorsRooms: 'Поле может состоять только из цифр.' });
      isValid = false;
    }
    return isValid;
  }

  resetForm() {
    this.setState({
      id: '',
      typeHouse: 'Block of flats',
      name: '',
      price: '',
      rooms: '',
      buildDate: '',
      country: 'Belarus',
      salesman: true,
      agree: false,
    });
  }

  showPopUp() {
    setTimeout(() => {
      this.setState({ showPopUp: true });
    }, 0);
    setTimeout(() => {
      this.setState({ showPopUp: false });
    }, 4000);
  }

  render() {
    return (
      <section className="forms-bar">
        <h1 className="forms-title">Form for add announcement</h1>
        <form
          className="form-add-house"
          onSubmit={(event) => {
            this.handledChange(event);
          }}
          // onChange={() => { this.validate() }}
        >
          <label className="item-form" htmlFor="typeHouse">
            <p>Type of house:</p>
            <select
              className="select-country"
              name="typeHouse"
              value={this.state.typeHouse}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                this.setState({ typeHouse: event.target.value })
              }
            >
              <option>Bungalow</option>
              <option>Country house</option>
              <option>Terraced house</option>
              <option>Block of flats</option>
              <option>Villa</option>
              <option>Cottage</option>
              <option>Weather-board house</option>
              <option>Mansion</option>
            </select>
          </label>
          <label className="item-form" htmlFor="name">
            <p>
              Your name:
              {this.state.errorsName && (
                <span className="error-text">* {this.state.errorsName}</span>
              )}
            </p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                this.setState({ name: event.target.value })
              }
            />
          </label>

          <label className="item-form" htmlFor="price">
            <p>
              {' '}
              Price($):
              {this.state.errorsPrice && (
                <span className="error-text">* {this.state.errorsPrice}</span>
              )}
            </p>
            <input
              type="text"
              name="price"
              value={this.state.price}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                this.setState({ price: event.target.value })
              }
            />
          </label>

          <label className="item-form" htmlFor="rooms">
            <p>
              {' '}
              Number of rooms:
              {this.state.errorsRooms && (
                <span className="error-text">* {this.state.errorsRooms}</span>
              )}
            </p>
            <input
              type="text"
              name="rooms"
              value={this.state.rooms}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                this.setState({ rooms: event.target.value })
              }
            />
          </label>

          <label className="item-form" htmlFor="buildDate">
            <p>
              {' '}
              Build date:
              {this.state.errorsBuildDate && (
                <span className="error-text">
                  {' '}
                  * Укажите, пожалуйста, дату постройки
                </span>
              )}
            </p>
            <input
              type="date"
              name="buildDate"
              value={this.state.buildDate}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                this.setState({ buildDate: event.target.value })
              }
            />
          </label>

          <label className="item-form" htmlFor="country">
            Country:
            <select
              className="select-country"
              name="country"
              value={this.state.country}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                this.setState({ country: event.target.value })
              }
            >
              <option>Russia</option>
              <option>Belarus</option>
              <option>Ukraine</option>
              <option>Spain</option>
              <option>United Kingdom</option>
              <option>Spain</option>
              <option>USA</option>
            </select>
          </label>

          <label className="switch" htmlFor="switch">
            <input
              id="switch"
              type="checkbox"
              checked={!this.state.salesman}
              onChange={() => this.setState({ salesman: !this.state.salesman })}
            />
            <span className="slider round train">
              <p className="salesman-person">
                {this.state.salesman ? 'individual' : 'entity'}
              </p>
            </span>
          </label>

          <label className="item-form" htmlFor="agree">
            <p>
              I agree with data processing
              {this.state.errorsAgree && (
                <span className="error-text">
                  {' '}
                  * Подтвердите, что согласны на обработку данных
                </span>
              )}
            </p>
            <input
              name="agree"
              type="checkbox"
              checked={this.state.agree}
              onChange={() => this.setState({ agree: !this.state.agree })}
            />
          </label>

          <div className="item-form">
            <input className="search-btn" type="submit" value="Send" />
          </div>
        </form>
        <div className="popup ">
          <span className={`popuptext ${this.state.showPopUp ? 'show' : ''} `}>
            Your form has been successfully added
          </span>
        </div>
      </section>
    );
  }
}
