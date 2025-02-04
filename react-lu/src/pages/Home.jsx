import React from 'react'
import { useState } from 'react'

const Home = () => {

  let [name,setName]=useState("Atharva")

  function printSomething(){
    setName( prompt("Button is clicked"))
   
  }



  return (
    <>
    <h1 className='Home'>{name}</h1>

    <button onClick={printSomething}>Click me</button>
    </>
  )
}

export default Home