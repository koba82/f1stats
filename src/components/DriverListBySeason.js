import React from 'react'
import DriverName from './DriverName';

class DriverListBySeason extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            year: props.year,
            fetchUrl: 'http://ergast.com/api/f1/' + props.year + '/drivers.json',
            drivers: []
        }
    }

    componentDidMount() {
        fetch(this.state.fetchUrl)
        .then(response => response.json())
        .then(jsonData => {
            this.setState({
                drivers: jsonData.MRData.DriverTable.Drivers
            })
        })
    }

    render() {
        const driverTable = this.state.drivers.map(driver => {
            return (
                <DriverName familyName={driver.familyName} />
            )    
        })

        return(
            <div className="driver-name-list">
                {driverTable}
            </div>
        )
    }


}

export default DriverListBySeason