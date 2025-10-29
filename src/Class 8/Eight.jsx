import React from 'react'
import Example1 from './useReducer/Example1'
import Example2 from './useReducer/Example2'
import RefExample1 from './useRef/RefExample1'

const Eight = () => {
  return (
    <div>
      {/* useReducer : state management tool. used to manage multiple state at a time 
        syntax:
        const[state,dispatch]=useReducer(reducer,initialState)

        dispatch: it is a rocket launcher
        reducer: it is a base
        intialState: the current state
      */}
      {/* <Example1/> */}
      {/* <Example2/> */}


      {/* useRef : it is used to handle the dom manipulation , works as a mutable varaible on thr re-remders*/}

      <RefExample1/>
    </div>
  )
}

export default Eight
