import React, {useState, useEffect} from 'react'
import ConstructorName from './ConstructorName';

function ConstructorListBySeason(props) {

    const [ year, setYear ] = useState(props)
    const [ constructors, setConstructors ] = useState([])
    const [ constructorTable, setConstructorTable ] = useState([])

    useEffect(() => {
        const url = 'http://ergast.com/api/f1/' + props.year + '/constructors.json'
        fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            const newConstructorTable = jsonData.MRData.ConstructorTable.Constructors.map(constructor => {
                return (
                    <ConstructorName 
                        constructorName={constructor.name}
                        updateConstructor={props.updateConstructor}
                        value={constructor.constructorId} />
                )    
            })
            setConstructorTable(newConstructorTable)
            }
        )
    }, [props.year])

    return(
            <div className="constructor-name-list">
                {constructorTable}
            </div>
    )


}

export default ConstructorListBySeason