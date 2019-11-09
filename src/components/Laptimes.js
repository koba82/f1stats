import React from 'react'

class Laptimes extends React.Component {

    constructor() {
        super()
        this.state= {
            fetchUrl: 'http://ergast.com/api/f1/2019/19/drivers/max_verstappen/laps/10.json',
            data: {},
            laptime: '',
            currentDriver: 'max_verstappen'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(event) {
        let name = event.target.name
        this.setState(prevState => {
                return {
                    currentDriver: name,
                    fetchUrl: 'http://ergast.com/api/f1/2019/19/drivers/' + name + '/laps/10.json'
                }
            }
        )

    }

    componentDidMount() {
        fetch(this.state.fetchUrl)
        .then(response => response.json())
        .then(jsonData => {
            this.setState({
                data: jsonData,
                laptime: jsonData.MRData.RaceTable.Races[0]['Laps'][0]['Timings'][0].time
            })
        })
    }

    componentDidUpdate() {
        fetch(this.state.fetchUrl)
        .then(response => response.json())
        .then(jsonData => {
            this.setState({
                data: jsonData,
                laptime: jsonData.MRData.RaceTable.Races[0]['Laps'][0]['Timings'][0].time
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.currentDriver}</h1>
                <h2>{this.state.laptime ? this.state.laptime : 'Loading...'}</h2>
                <button name="max_verstappen" onClick={this.clickHandler}>Max Verstappen</button>
                <button name="ricciardo" onClick={this.clickHandler}>Daniel Ricciardo</button>
            </div>
        )
    }

}


export default Laptimes