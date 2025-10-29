import React, { useReducer } from 'react'
function formReducer(state,action){
    return ({...state,[action.name]:action.value})
}
const Example2 = () => {
    const[form,dispatch]=useReducer(formReducer,{name:"",email:"",age:"",location:""})

    function handleChange(e){
        dispatch({name:e.target.name,value:e.target.value})
    }
  return (
    <div>
      <input onChange={handleChange} name="name" type="text" placeholder='Name' value={form.name}/>

      <input onChange={handleChange} name="email" type="email" placeholder='Email' value={form.email}/>

      <input onChange={handleChange} name="age" type="text" placeholder='Age' value={form.age}/>

      <input onChange={handleChange} name="location" type="text" placeholder='Location' value={form.location}/>
        <br />
        {form.name} | {form.email} | {form.age} | {form.location}
    </div>
  )
}

export default Example2
