import logo from './logo.svg';
import './App.css';
import React from 'react';

import preparations from './data/preparations.json';

const name = 'Clarisse Agbegnenou';
const element = <h1>Bonjour, {name}</h1>;

function Welcome(props) {
  return <h1>Bonjour, {props.name}</h1>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App container">

      <Clock />
      <form>
        <div className="row mb-3">
          <label htmlFor="inputProduit" className="col-sm-2 col-form-label">Produit</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputProduit"/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPrix" className="col-sm-2 col-form-label">Prix unitaire</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPrix"/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputQuantite" className="col-sm-2 col-form-label">Quantité</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputQuantite"/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputMontant" className="col-sm-2 col-form-label">Montant</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputMontant"/>
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary">Enregistrer</button>
      </form>
    </div>
  );
}

export default App;
