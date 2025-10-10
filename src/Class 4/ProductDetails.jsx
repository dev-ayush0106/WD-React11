import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
  return (
    <div>
      {
        <>
        <h1>{detail.title}</h1>
        <img src={detail.thumbnail} alt="" />
        <p>{detail.description}</p>
        <p>{detail.price}</p>
        <button>Add to Cart</button>
        </>

      }
    </div>
  )
}

export default ProductDetails
