import Link from 'next/link'
import React from 'react'

export const Principal = () => {
  return (
    <div>
        <h1>Bienvenido a varios consumos de API's </h1>
        <div>
            <Link 
            href={'/arts'}
            className='bg-amber-500 text-white px-4 py-2 rounded'
            >ArtAPI</Link>
        </div>
    </div>
  )
}
