import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import "./style.css"

const UseState = () => {
    let [value,setValue]=useState(0)
    let [like,setLike]=useState(false)
    // false: unlike
    // true : like
    console.log(value)

    function inc(){
        setValue(value+1)
    }
    function dec(){
        setValue(value-1)
    }

    function updateLike(){
        setLike(!like)
    }
  return (
    <div>
      {/* <button disabled={value==10} onClick={inc}>
        {
            (value==10)?
            "Max You can increase":
            "+"
        }
      </button>
      {value}
      <button disabled={value==0} onClick={dec}>
        {
            (value==0)?
            "Not able to Decrease":
            "-"
        }
      </button> */}

      <FaHeart onClick={updateLike} className={(like)?"change":""} style={{fontSize:"5rem"}}/>
    </div>
  )
}

export default UseState
