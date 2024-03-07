import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() 
{
    const data =useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>
    // {
    //     fetch("https://api.github.com/users/bhavesh65321")
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setdata(data);
    //     })
    // },[data])
  return (
    <div className='bg-gray-500 text-center text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git picutre" width={400}/>
    </div>
  )
}

export default Github

export const githubInfoLoader=async() =>{
    const response =await fetch("https://api.github.com/users/bhavesh65321")
    return response.json()
}