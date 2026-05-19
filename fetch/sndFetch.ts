import React from 'react'

export const sndFetch = async (query: string) => {

    const response = await fetch(`/api/nekos?query=${query}&type=1`)
    
    if (await !response.ok) {
        return  new Error(`HTTP ${response.status}`)
    }
    
    const data = await response.json()
    

    return  data.results



}
