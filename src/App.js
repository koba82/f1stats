import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Laptimes from './components/Laptimes'
import DriverListBySeason from './components/DriverListBySeason'
import ConstructorListBySeason from './components/ConstructorListBySeason'
import SelectYear from './components/SelectYear'
import ShowYear from './components/ShowYear'

function App() {
  const [year, setYear] = useState(2019)

  function updateYear(event) {
    if(event.target.name == 'year') {
      console.log("update year")
      setYear(event.target.value)
    } else if(event.target.name == 'increment') {
      console.log('increment')
      const updateYear = year + 1
      setYear(updateYear)
    } else if(event.target.name == 'decrement') {
      const updateYear = year - 1
      setYear(updateYear)
    }
  }

  return (
      <div>
        {/* <Laptimes /> */}
         <div className="topbar">
          <SelectYear handleChange={updateYear} year={year} />
        </div> 
        <div className="sidebar">
          <DriverListBySeason year={year} />
          <ConstructorListBySeason year={year} />
          <ShowYear year={year} />
        </div>
      </div>
    )
}

export default App;
