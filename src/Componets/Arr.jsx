import React from 'react'
import User from './User'

//map method
const Arr = () => {

    const array = [10, 20, 30, 40, 50]

    const profile = [
        {
            name: "Sujal",
            age: 21
        },
        {
            name: "Harshi",
            age: 22
        }
    ]


    return (
        <>
            {/* <User user={array[0]}/>
          <User user={array[1]}/>
          <User user={array[2]}/>
          <User user={array[3]}/>
          <User user={array[4]}/> */}

            {array.map(function (yes) {
                return <h1>{yes}</h1>
            })}

            {profile.map((yes, index) => (
                <h1>
                    Name: {yes.name}, Age: {yes.age}
                </h1>
            ))}
          

        </>
    )
}

export default Arr
