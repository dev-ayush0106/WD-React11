import React from 'react'
import ProductDetail from './ProductDetail'

const Product = () => {
    let products=[
        {
            name:"Iphon 17",
            price:70000,
            id:34273
        },
        {
            name:"Iphon 16",
            price:60000,
            id:23273
        },
        {
            name:"Iphon 15",
            price:50000,
            id:64273
        },
        {
            name:"Google Pixel 9",
            price:40000,
            id:49273
        },
        {
            name:"Samsung S24",
            price:40000,
            id:58273
        } 
    ]
  return (
    <div>

      {
        products.map((el)=>(
            <ProductDetail id={el.id} name={el.name} price={el.price}/>
        ))
        }
    </div>
  )
}

export default Product
