import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slicer/slicer';

const Ninth = () => {
    let value=useSelector((state)=>state.counter.value);

    console.log(value)

    let dispatch=useDispatch();

    function inc(){
        dispatch(increment())
    }
    function dec(){
        dispatch(decrement())
    }
  return (
    <div>
      {/* 
        how to access the value from the store : useSelector()
      */}

      {/* 
        how we can send any click event to the slicer : useDispatch()
      */}

      <button onClick={inc}>+</button>
      {value}
      <button onClick={dec}>-</button>
    </div>
  )
}

export default Ninth
