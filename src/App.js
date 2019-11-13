import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
//import Laptimes from './components/Laptimes'
import DriverListBySeason from './components/DriverListBySeason';
import ConstructorListBySeason from './components/ConstructorListBySeason';
import SelectYear from './components/SelectYear';
//import ShowYear from './components/ShowYear'
import DriverSeasonResults from './components/DriverSeasonResults';

function App() {
	const [year, setYear] = useState(2019)
  const [driver, setDriver] = useState('max_verstappen')
  const [constructor, setConstructor] = useState()

	function updateYear(event) {
		if (event.target.name === 'year') {
			console.log('update year')
			setYear(event.target.value)
		} else if (event.target.name === 'increment') {
			console.log('increment')
			const updateYear = parseInt(year) + 1
			setYear(updateYear)
		} else if (event.target.name === 'decrement') {
			const updateYear = parseInt(year) - 1
			setYear(updateYear)
		}
	}

  function updateDriver(e) { setDriver(e) }
  function updateConstructor(e) { setConstructor(e) }

	return (
		<div>
			<div className="topbar">
				<SelectYear
					handleChange={updateYear}
					year={year}
				/>
			</div>
			<div className="sidebar">
				<DriverListBySeason
					updateDriver={updateDriver}
					year={year}
				/>
				<ConstructorListBySeason 
					updateConstructor={updateConstructor}
					year={year} />
				<DriverSeasonResults
					driver={driver}
					year={year}
				/>
			</div>
		</div>
	);
}

export default App;
