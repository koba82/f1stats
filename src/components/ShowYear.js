import React, { useState, useEffect } from 'react'

function ShowYear(props) {
    const [year, setYear ] = useState(props)
    useEffect(() => {
        setYear(props)
    }, [props])

    return(
        <p>{year.year}</p>
    )
}

export default ShowYear