import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const {id}=useParams()
    console.log(id);
    const [data,setdata]=useState([''])
useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=4491a6bb`)
        console.log(response);
        setdata(response.data)
    }
    fetchdata()
},[])

   
  return (
    <div>
        <img src={data.Poster} alt="" />
        <p>Title: {data.Title}</p>
        <p>Director:{data.Director}</p>
        <p> Actors:{data.Actors}</p>
        <p>Released:{data.Released}</p>
        <p>Runtime:{data.Runtime}</p>
        
    </div>
  )
}

