import React from 'react'

const BtnClickfunction = () => {
    function Click() {
        console.log('sujal');
        // document.writeln('sujal')
    }

    function mouseenter() {
        console.log("mouse leave");

    }
    function inputchange(val) {
        console.log(val);

    }
    return (
        <>
            <div className='py-5 px-10'>

                <button onClick={Click} className='bg-amber-200 py-3 px-5 rounded-full' onMouseEnter={mouseenter}>Click me</button>
                <input type="text" name="" id="" placeholder='Enter Your Name' className='border'
                    onChange={function (elem) {
                        inputchange(elem.target.value)
                    }} />
            </div>
        </>
    )
}

export default BtnClickfunction
