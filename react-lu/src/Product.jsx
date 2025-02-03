import React from 'react'

const Product = (props) => {
  return (
    <>
    <h3>Product name: {props.name}</h3>
    <p>price: {props.price}</p>
    </>
  )
}

export default Product