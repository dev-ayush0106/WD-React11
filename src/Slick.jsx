import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slick = () => {
    let images=[
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
  ]

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
        <Slider {...settings}>
      {
        images.map((el)=>(
            <div className='w-[500px]'>
            <img src={el} alt="" />
            </div>
        ))
      }
      </Slider>
    </div>
  )
}

export default Slick
