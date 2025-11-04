import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { add } from './redux/cartSlicer/cartSlicer'

const ProductDetails = () => {
    const [detail,setDetail]=useState({})
    let{id}=useParams()

    console.log(id)

    let url=`https://dummyjson.com/products/${id}`

    async function fetchDetail(){
        let data=await axios.get(url)
        setDetail(data.data)
    }

    useEffect(()=>{
        fetchDetail()
    },[])

    console.log(detail)

    let dispatch=useDispatch()
    function addToCart(data){
      dispatch(add(data))
    }
  return (
    <div>
      {
        <>
        <h1>{detail.title}</h1>
        <img src={detail.thumbnail} alt="" />
        <p>{detail.description}</p>
        <p>{detail.price}</p>
        <button onClick={()=>{addToCart(detail)}}>Add to Cart</button>
        </>

      }
    </div>
  )
}

export default ProductDetails
