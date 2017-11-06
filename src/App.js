import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavbarComponent from './components/navbar/navbarComponent';
import BalanceComponent from './components/balance/balanceComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavbarComponent />
          <div className="app-container">
            <BalanceComponent />
            Transactions
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
