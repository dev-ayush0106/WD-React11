import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const products=useSelector((state)=>state.cart)
    console.log(products)
  return (
    <div>
      <h1>Cart Page</h1>
      <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
      {
        products.map((el)=>(
            <div style={{border:"2px solid black",padding:"30px"}}>
                <h3>{el.title}</h3>
                <img src={el.thumbnail} alt="" />
                <p>{`Rs ${Math.ceil(el.price*83)}`}</p>
                <button style={{backgroundColor:"red",color:"white"}}>Remove Item</button>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Cart
