import React, { useEffect, useState } from 'react'

const Profile = () => {

    let[state,setState]=useState("loaded");

    useEffect(()=>{
        console.log(state)
        

    })

    function changeData(){
        setState("unloaded")


    }


  return (

    <>
    <h3>Profile</h3>
    <button onClick={changeData}>setdata</button>
    </>
  )
}

export default Profile