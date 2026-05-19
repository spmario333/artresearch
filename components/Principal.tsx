import Link from 'next/link'
import React from 'react'

export const Principal = () => {
  return (
    <div>
        <h1>Bienvenido a varios consumos de API's </h1>
        <div className='grid grid-cols-4 pt-5'>

        <div>
            <Link 
            href={'/arts'}
            className='bg-amber-500 text-white px-4 py-2 rounded'
            >ArtAPI</Link>
        </div>
        <div>
            <Link 
            href={'/neko'}
            className='bg-amber-700 text-white px-4 py-2 rounded'
            >NekoAPI</Link>
        </div>
        </div>
    </div>
  )
}
