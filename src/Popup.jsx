import React, { useState } from 'react'
import Model from './Model'

const Popup = () => {
    const [open,setOpen]=useState(false)
    return (
        <div>
            <div className='flex justify-center '>
                <div>
                <h1 className='text-3xl'>PopUp Model</h1>
                <button onClick={()=>{setOpen(true)}} className='bg-blue-700 px-4 py-3 text-white rounded-2xl'>Open Model</button>
                </div>
            </div>
            {open && <Model onClose={()=>{setOpen(false)}}/>}
        </div>
    )
}

export default Popup
