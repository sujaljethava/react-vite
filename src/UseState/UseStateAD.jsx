import React, { useState } from 'react'

const UseStateAD = () => {
    const [num, setnum] = useState({ user: 'Sujal', age: 21 })

    const btnclick = () => {

        const newnum = { ...num }
        newnum.user = 'Yash',
        newnum.age = 22
        setnum(newnum)
        
        console.log(newnum);
    }
    return (
        <>
            <div>
                <h1>{num.user},{num.age}</h1>
                <button onClick={btnclick}>click me</button>
            </div>

        </>
    )
}

export default UseStateAD
