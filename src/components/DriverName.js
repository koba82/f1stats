import React from 'react'

function DriverName(props) {
        const driverNumber = props.permanentNumber ? <span>{props.permanentNumber}</span> : <span className='placeholder'></span>
        return (
            <div>
                <div className="driver-name" key={props.key}>
                    <div className="-given-name">{driverNumber}
                        {props.givenName.charAt(0)}.</div>
                    <div className="-family-name">{props.familyName}</div>
                </div>
            </div>
        )
}

export default DriverName