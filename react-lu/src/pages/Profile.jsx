import React, { useEffect, useState } from 'react'

const Profile = () => {

    let[state,setState]=useState("loaded");

    let[name,setName]=useState("Atharva")
    let[city,setCity]=useState("Pune")

    useEffect(()=>{
        console.log(state)
        

    },[name])

    function changeData(){
        setState("unloaded")

    }


  return (

    <>
    <h6>Profile</h6>
    <h1>{name}</h1>
    <h3>{city}</h3>

    <div>
        <button onClick={()=>{setName("Thor")}}   >change Name</button>
        <button onClick={()=>{setCity("Asgard")}} >Change City</button>
    </div>

    </>
  )
}

export default Profile