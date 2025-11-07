import React, { useState, useSyncExternalStore } from 'react'

const Usestateone = () => {
    const [count, setCount] = useState(10);


    function handleClickplus() {
        setCount(count + 1);
    }
    function handleClickmius() {
        if (count > 0) {
            setCount(count - 1);
        }
    }
     function handleClickfive() {
        setCount(count + 5);
    }
    return (
        <>
            <p>My number is : {count}</p>
            <button className='bg-amber-200 py-3 px-5 rounded-full' onClick={handleClickplus}>+</button>
            <button className='bg-amber-200 py-3 px-5 rounded-full' onClick={handleClickmius}>-</button>
            <button className='bg-amber-200 py-3 px-5 rounded-full' onClick={handleClickfive}>5</button>
        </>
    )
}

export default Usestateone
