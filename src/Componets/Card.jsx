import React from 'react'

const Card = (props) => {
    return (
        <>

            <div className="card">
                <h3>Name : {props.name}</h3>
                <h4>Age : {props.age}</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </>
    )
}

export default Card
