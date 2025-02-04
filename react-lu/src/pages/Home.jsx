import React from 'react'

const Home = () => {

  function printSomething(){
    alert("Button is clicked")
  }


  
  return (
    <>
    <h1 className='Home'>Home</h1>

    <button onClick={printSomething}>Click me</button>
    </>
  )
}

export default Home