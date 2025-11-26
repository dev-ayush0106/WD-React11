import React from 'react'
import { IoMdClose } from 'react-icons/io'

const Model = ({onClose}) => {
  return (
    <div className=' flex justify-center items-center'>
      <div className='fixed inset-0 flex flex-col backdrop-blur-sm'>
        <IoMdClose onClick={onClose} />

        <h1>Popup</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit sapiente vitae labore libero quidem vero architecto, voluptas neque quia est tempore saepe iure</p>
        <input type="text"/>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Model
