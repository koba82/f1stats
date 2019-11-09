import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Laptimes from './components/Laptimes'
import DriverListBySeason from './components/DriverListBySeason'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      year: '2019'
    }
  }


  render() {
    return (
      <div>
        <Laptimes />
        <DriverListBySeason year="2019" />
      </div>
    );
  }
}

export default App;
