import React, { useReducer } from 'react'
function reducer(state,action){
switch(action.type){
    case "increment" : return({count:state.count+1})
    case "decrement": return({count:state.count-1})
    case "reset" : return({count:0})
}
}
const Example1 = () => {
    const[state,dispatch]=useReducer(reducer,{count:0})
    console.log(state)
  return (
    <div>
      <button onClick={()=>{dispatch({type:"increment"})}}>+</button>
      {state.count}
      <button onClick={()=>{dispatch({type:"decrement"})}}>-</button>
      <button onClick={()=>{dispatch({type:"reset"})}}>Reset</button>
    </div>
  )
}

export default Example1
