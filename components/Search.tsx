"use client"

import { getArt } from '@/API/fetch'
import React, { ChangeEvent, SubmitEvent, useState } from 'react'



export const Search = () => {


    const [search, setSearch] = useState('')

    
    const handleChange = (e:ChangeEvent)=>{
        setSearch(e.target.value)
    }
    const handleSubmit =(e:SubmitEvent)=>{
        e.preventDefault()
        console.log(e)
        getArt(search)
    }


  return (
    <div>
        <input type="text" onChange={handleChange} value={search} placeholder='search'/>
        <button onSubmit={handleSubmit}>Search</button>
    </div>
  )
}
