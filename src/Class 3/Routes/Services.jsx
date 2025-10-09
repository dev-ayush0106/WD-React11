import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Services = () => {
  let navigate=useNavigate()
  return (
    <div>
        <h1>Services Page</h1>
        <button onClick={()=>{navigate("mern")}}>Go to Mern</button>
        <button onClick={()=>{navigate("java")}}>Go to Java</button>
        <button onClick={()=>{navigate("python")}}>Go to Python</button>
        <button onClick={()=>{navigate("da")}}>Go to DA</button>
        <Outlet/>
    </div>
  )
}

export default Services
