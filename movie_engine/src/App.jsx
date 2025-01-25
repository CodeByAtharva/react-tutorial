import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <h1>This is the webpage</h1>
    <Text disp="this is first line"/>
    <Text disp="this is second line"/>
    </>
  )
}


function Text({disp}){
  return(
    <>
    <h3>{disp}</h3>
    </>

  )
}

export default App
