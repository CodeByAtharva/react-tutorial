import React, { useState } from 'react'

const Product = () => {


  let[avengers,setAvengers]=useState([

    {name:"Thor",age:1500},
    {name:"Iron man",age:50},
    {name:"Captain America",age:150},

  ])


  return (

    <>
    
    <div className='Products'>Product</div>
    
    {
      avengers.map((ele)=>{
        return(
          <div className='box'>
            <h1>{ele.name}</h1>
            <h3>{ele.age}</h3>
          </div>
          )
      })

    }

    </>
  )
}

export default Product