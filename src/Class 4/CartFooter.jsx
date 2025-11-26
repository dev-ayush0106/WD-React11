import React from 'react'
import { useSelector } from 'react-redux'

const CartFooter = () => {
    let cart = useSelector((state) => state.cart)

    let totalAmount=cart.reduce((acc,el)=>{
        return acc+(el.quantity*(Math.ceil(el.price*83)))
        
    },0)
    return (
        <div>
            <h1>Order Summary</h1>
            <hr />
            <div style={{ display: "flex" }}>
                <h2 style={{ width: "40%" }}>Title</h2>
                <h2 style={{ width: "40%" }}>Quantity</h2>
                <h2 style={{ width: "40%" }}>Price</h2>
            </div>
            {
                cart.map((el) => (
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "40%" }}>{el.title}</div>
                        <div style={{ width: "40%" }}>{el.quantity}</div>
                        <div style={{ width: "40%" }}>{Math.ceil(el.price * 83) * el.quantity}</div>
                    </div>
                ))
            }

            <div style={{display:"flex"}}>
                <h2 style={{width:"80%"}}>Total</h2>
                <h2>{totalAmount}/-</h2>
            </div>


        </div>
    )
}

export default CartFooter
