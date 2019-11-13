import React, { useEffect, useState } from 'react'

function DriverSeasonResults(props) {
    const [ results, setResults ] = useState()

    useEffect(() => {
        setResults('');
        const url = 'http://ergast.com/api/f1/' + props.year + '/drivers/' + props.driver + '/results.json'
        fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            const newResults = jsonData.MRData.RaceTable.Races.map(race => {
                return (
                    <div className='driver-race-results'> 
                        <div className="race-name">{race.raceName}</div>
                        <div className="race-name">{race.Results[0].positionText}</div>
                    </div>
                )    
            })
            setResults(newResults)
            }
        )
    }, [props])
    
    if(results) {
        return (
            <div className="driver-result-list">
                {results}
            </div>
        )
    } else {
        return (
            <div className="driver-result-list">
                <div className="loading"></div>
            </div>  
        )
    }

}



export default DriverSeasonResults