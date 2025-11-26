import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { add, addToQty } from './redux/cartSlicer/cartSlicer'

const ProductDetails = () => {
    const [detail,setDetail]=useState({})
    let{id}=useParams()
    let cartItems=useSelector((state)=>state.cart)
    console.log(id)

    let url=`https://dummyjson.com/products/${id}`
    console.log(cartItems)

    let navigate=useNavigate()

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
      let item=cartItems.find((el)=>el.id===data.id);
      if(item){
        dispatch(addToQty(data.id))
      }
      else{
        dispatch(add({...data,quantity:1}))
      }

      navigate("/")
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
