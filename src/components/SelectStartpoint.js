import React, { useState, useFilter } from 'react'

function SelectStartpoint(props) {
    return(
        <div className={`filter filter-startpoint`}>
            <label>Select startpoint: </label>
            <button name="startpoint-driver" onClick={() => props.updateStartpoint('driver')}>Driver</button>
            <button name="startpoint-constructor" onClick={() => props.updateStartpoint('constructor')}>Constructor</button>
        </div>
    )
}

export default SelectStartpoint