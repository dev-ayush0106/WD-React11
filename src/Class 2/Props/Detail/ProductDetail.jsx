import React from 'react'
import ProductId from './ProductId'
import ProductName from './ProductName'
import ProductPrice from './ProductPrice'

const ProductDetail = ({id,name,price}) => {
  return (
    <div style={{border:"2px solid black"}}>
      <ProductId id={id}/>
      <ProductName name={name}/>
      <ProductPrice price={price}/>
    </div>
  )
}

export default ProductDetail
