import React from 'react'

function DriverName(props) {
        return (
            <div>
                <div className="driver-name">
                    <div className="-given-name">{props.givenName}</div>
                    <div className="-family-name">{props.familyName}</div>
                </div>
            </div>
        )
}

export default DriverName