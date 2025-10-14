import React, { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Carousel = ({images}) => {
    const [current,setCurrent]=useState(0)
    function prevSlide(){
        if(current==0){
            setCurrent(images.length-1)
        }
        else{
        setCurrent(current-1)
        }
    }
    function nextSlide(){
        if(current==images.length-1){
            setCurrent(0)
        }
        else{
        setCurrent(current+1)
        }
    }
  return (
    <div>
        <FaArrowCircleLeft onClick={prevSlide} style={{fontSize:"3rem", color:"black"}} />
        <img src={images[current]} alt="" />
        <FaArrowCircleRight onClick={nextSlide} style={{fontSize:"3rem", color:"black"}} />
    </div>
  )
}

export default Carousel
