import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decCount, incCount, remove } from './redux/cartSlicer/cartSlicer'
import CartFooter from './CartFooter'

const Cart = () => {
    const products=useSelector((state)=>state.cart)
    console.log(products)
    let dispatch=useDispatch()
    function removeItem(data){
      dispatch(remove(data))
    }
  return (
    <div>
      <h1>Cart Page</h1>
      <div style={{display:"flex",flexWrap:"wrap",gap:"20px",justifyContent:"center"}}>
      {
        products.map((el)=>(
            <div style={{border:"2px solid black",padding:"30px"}}>
                <h3>{el.title}</h3>
                <img src={el.thumbnail} alt="" />
                <p>{`Rs ${Math.ceil(el.price*83)}`}</p>
                <div>
                  <button onClick={()=>{dispatch(incCount(el.id))}}>+</button>
                  {el.quantity}
                  <button onClick={()=>{dispatch(decCount(el.id))}} disabled={el.quantity==1}>-</button>
                </div>
                <button
                onClick={()=>{removeItem(el.id)}}
                style={{backgroundColor:"red",color:"white"}}>Remove Item</button>
            </div>
        ))
      }
      </div>

      <CartFooter/>
    </div>
  )
}

export default Cart
