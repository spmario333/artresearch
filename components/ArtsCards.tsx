import { result } from '@/data/dataFake'
import React from 'react'
import { SimpleCard } from './SimpleCard'
import { getArt } from '@/API/fetch'

export const ArtsCards = () => {


  return (
    <div className='grid grid-cols-3 bg-gray-50 gap-5'>
        {
          artworks.map(a=>
              <SimpleCard {...a} key={a.id}/>

          )
        }
    </div>
  )
}
