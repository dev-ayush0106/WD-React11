import React, { useRef } from 'react'

const RefExample1 = () => {
    let inputRef=useRef()

    function handleChange(){
        console.log(inputRef)
        inputRef.current.focus()
        // inputRef.current.style.height="100px"
        inputRef.current.value="Focused"

    }
  return (
    <div>
      <input ref={inputRef} type="text"/>
      <button onClick={handleChange}>Focus</button>
    </div>
  )
}

export default RefExample1
