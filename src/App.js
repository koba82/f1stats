import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Laptimes from './components/Laptimes'
import DriverListBySeason from './components/DriverListBySeason'
import ConstructorListBySeason from './components/ConstructorListBySeason'
import SelectYear from './components/SelectYear'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      year: '1999'
    }
    
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Laptimes />
        <div className="topbar">
          <SelectYear handleChange={this.handleChange} state={this.state} />
        </div>
        <div className="sidebar">
          <DriverListBySeason year={this.state.year} />
          <ConstructorListBySeason year={this.state.year} />
        </div>
      </div>

    );
  }
}

export default App;
