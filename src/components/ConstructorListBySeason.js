import React from 'react'
import ConstructorName from './ConstructorName';

class ConstructorListBySeason extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            year: props.year,
            fetchUrl: 'http://ergast.com/api/f1/' + props.year + '/constructors.json',
            constructors: []
        }
    }

    componentDidMount() {
        fetch(this.state.fetchUrl)
        .then(response => response.json())
        .then(jsonData => {
            this.setState({
                constructors: jsonData.MRData.ConstructorTable.Constructors
            })
        })
    }

    render() {
        const constructorTable = this.state.constructors.map(constructor => {
            return (
                <ConstructorName constructorName={constructor.name} />
            )    
        })
        return(
            <div className="constructor-name-list">
                {constructorTable}
            </div>
        )
    }


}

export default ConstructorListBySeason