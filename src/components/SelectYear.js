import React from 'react'

function SelectYear(props) {
    return(
        <select
            value={props.state.year}
            onChange={props.handleChange}
            name="year">
            <option value="1950">1950</option>
            <option value="1988">1988</option>
            <option value="1999">1999</option>
            <option value="2019">2019</option>
        </select>
    )
}

export default SelectYear