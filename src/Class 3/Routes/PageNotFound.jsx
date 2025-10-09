import React from 'react'
import { useLocation } from 'react-router-dom'

const PageNotFound = () => {
    let loc=useLocation()
    console.log(loc)
  return (
    <div>
        <h1>No Page Found</h1>
        <h2>Path at {loc.pathname}</h2>
    </div>
  )
}

export default PageNotFound
