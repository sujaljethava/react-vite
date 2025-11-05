import React from 'react'

const Functions = () => {
    const scroll = (elem) => {
        if (elem > 0) {
            console.log("sheedha jaa raha hai!");
        } else {
            console.log("ultaa jaa raha hai!");
        }
    }
    return (
        <>
            <div onWheel={(elem)=>{
                scroll(elem.deltaY)
            }}>

                <div className=' bg-amber-200 w-full h-185'>hello</div>
                <div className=' bg-amber-500 w-full h-185'></div>
                <div className=' bg-amber-950 w-full h-185'></div>
            </div>
        </>
    )
}

export default Functions
