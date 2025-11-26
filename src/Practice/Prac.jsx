import React, { useContext, useState } from 'react'
import HigherContext from '../Context/Higher'

const Prac = () => {
    // let [state,setState]=useState(0);
    // console.log(state)

    const value=useContext(HigherContext)
    console.log(value)
  return (
    // <div>
      // <>
      //   <StaticHTML/>
      // </>

      <React.Fragment>
        
      </React.Fragment>
    // </div>
  )
}

export default Prac


function StaticHTML(){
  const trustedHTML="<p>Hii I am HTML</p>"
  return <div dangerouslySetInnerHTML={{__html:trustedHTML}}/>
}
