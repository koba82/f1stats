import React, { useState, useEffect } from 'react'
import DriverName from './DriverName';

function DriverListBySeason(props) {

    const [ year, setYear ] = useState(props)
    const [ drivers, setDrivers ] = useState([])
    const [ driverTable, setDriverTable ] = useState([])

    useEffect(() => {
        const url = 'http://ergast.com/api/f1/' + props.year + '/drivers.json'
        fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            setDrivers(jsonData.MRData.DriverTable.Drivers)
            }
        )
    }, [props])

    useEffect(() => {
        const newDriverTable = drivers.map(driver => {
            return (
                <DriverName key={driver.id} permanentNumber={driver.permanentNumber} familyName={driver.familyName} givenName={driver.givenName} />
            )    
        })
        setDriverTable(newDriverTable)
    }, [drivers])

    
    // const driverTable = drivers.map(driver => {
    //     return (
    //         <DriverName key={driver.id} familyName={driver.familyName} givenName={driver.givenName} />
    //     )    
    // })

    return(
            <div className="driver-name-list">
                {driverTable}
            </div>
        )
}

export default DriverListBySeason