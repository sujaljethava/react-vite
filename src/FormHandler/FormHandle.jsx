import React from 'react'

const FormHandle = () => {
    const formhandler = (e) =>{
        e.preventDefault();
        console.log("Form submitted");
        
    }
    return (
        <>
            <div>
                <form onSubmit={(e)=>{
                    formhandler(e)
                }}>
                    <input type="text" name="" id="" placeholder='Enter your name' className='border-2 px-5 py-3 m-7' />
                    <button className='border-1-white py-2 px-5 rounded-e-2xl bg-gray-500 text-white'>Submit</button>
                </form>
            </div>

        </>
    )
}

export default FormHandle
