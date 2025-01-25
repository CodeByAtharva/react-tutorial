import { useState } from 'react'
import './App.css'

import MovieCard from './Components/MovieCard'


function App() {

  return (
    <>
    <h1>This is the webpage</h1>
    <Text disp="this is first line"/>
    <Text disp="this is second line"/>

    <MovieCard movie={
      {src:"https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      }/>
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
