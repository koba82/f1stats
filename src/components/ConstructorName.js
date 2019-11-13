import React from 'react'

function ConstructorName(props) {
        return (
            <div onClick={() => props.updateConstructor(props.value)}>
                <div className="constructor-name">
                    {props.constructorName}
                </div>
            </div>
        )
}

export default ConstructorName