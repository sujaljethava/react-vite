import React, { useState } from 'react'

const UsestateNum = () => {
    const [one, setone] = useState([10, 20, 30, 40, 50])

    const clickbtn = () => {
        const newone = [...one]
        newone[0] = 100
        newone.push(70)
        console.log(newone);
        setone(newone)
        
    }
    return (
        <>
            <div>
                <h1>{one}</h1>
                <button onClick={clickbtn}>click</button>
            </div>

        </>
    )
}

export default UsestateNum
