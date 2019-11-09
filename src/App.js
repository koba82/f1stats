import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Laptimes from './components/Laptimes'
import DriverListBySeason from './components/DriverListBySeason'

function App() {
  return (
    <div>
      <Laptimes />
      <DriverListBySeason year="2014" />
    </div>
  );
}

export default App;
