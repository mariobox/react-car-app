import React, { Component } from 'react';
import '../App.css';
import Header from './Header.js';
import Car from './Car'
import { initialCars } from '../cars';
import { additionalCars } from '../cars';
import AddCar from './AddCar'


class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: initialCars
    };
    this.loadAdditionalCars = this.loadAdditionalCars.bind(this);
    this.addCarToGallery = this.addCarToGallery.bind(this);
  }

  loadAdditionalCars() {
    var currentCars = { ...this.state.cars };
    var newCars = Object.assign(currentCars, additionalCars);
    this.setState({ cars: newCars });
  }

  addCarToGallery(car) {
    var ts = Date.now();
    var newCar = {};
    newCar['car' + ts] = car;
    var currentCars = { ...this.state.cars };
    var newCars = Object.assign(currentCars, newCar);
    this.setState({ cars: newCars });
  }

  render() {
    return (
      <div className="App">
        <Header text="Vehicle Quick Info" />
        <p className="App-intro">
          Some information about popular SUV and Crossover models.
        </p>
        <div className="cars">
          {
            Object
              .keys(this.state.cars)
              .map(key => <Car key={key} meta={this.state.cars[key]} />)
          }
        </div>
        <div className="add-cars"><button onClick={this.loadAdditionalCars}>Load more...</button></div>
        <AddCar addCar={this.addCarToGallery} />

      </div>
    );
  }
}

export default App;
