import React, { useState, useEffect } from 'react'
import DriverName from './DriverName';

function DriverListBySeason(props) {

    const [ driverTable, setDriverTable ] = useState([])

    useEffect(() => {
        setDriverTable('');
        const url = 'http://ergast.com/api/f1/' + props.year + '/drivers.json'
        fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            const newDriverTable = jsonData.MRData.DriverTable.Drivers.map(driver => {
                return (
                    <DriverName 
                        value={driver.driverId}
                        updateDriver={props.updateDriver}
                        key={driver.id} 
                        permanentNumber={driver.permanentNumber} 
                        familyName={driver.familyName} 
                        givenName={driver.givenName} 
                    />
                )    
            })
            setDriverTable(newDriverTable)
        })
    }, [props.year])


    if(driverTable) {
        return(
            <div className="driver-name-list">
                {driverTable}
            </div>
            )
    } else {
        return(
            <div className="driver-name-list">
                <div className="loading"></div>
            </div>
            )
    }
}

export default DriverListBySeason