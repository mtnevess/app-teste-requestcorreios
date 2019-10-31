import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import {CalculaPrecoPrazo} from './js files/IntegraAPICorreios.js';


class App extends Component {

  funcaoCorreios(){
    let args;
    CalculaPrecoPrazo(args);
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Button
                variant="contained"
                type="submit"
                onClick={this.funcaoCorreios}
              >
                Login
              </Button>
        </p>

      </header>
    </div>
  );
}
}

export default App;
