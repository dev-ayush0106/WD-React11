import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{width:"80%",display:"flex",justifyContent:"space-between"}}>
        <div className="logo">
            <h1>Logo</h1>
        </div>
        <div className="nav">
            <span><Link to="/">Home</Link></span>
            <span><Link to="/about">About</Link></span>
            <span><Link to="/services">Services</Link></span>
            <span><Link to="/contact">Contact</Link></span>
            {/* <span><a href="/">Home</a></span>
            <span><a href="/about">About</a></span>
            <span><a href="/services">Services</a></span>
            <span><a href="/contact">Contact</a></span> */}
        </div>
    </div>
  )
}

export default Navbar