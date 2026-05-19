import Image from 'next/image'
import React from 'react'


interface data {
    artist_name: string,
    artist_href: string,
    source_url: string,
    url: string,
    dimensions: dimensions
     

}
    interface dimensions{
        width: number,
        height : number
    } 


export const NSimpleCard = (props:data) => {
  return (
    <div className='pb-2.5'>

    <div className='bg-amber-100 text-white items-center justify-center h-full flex'>
        {
        props.url ? <Image
        className='w-5/12 h-auto'
        width={400}
        height={400}
        src={props.url}  
        loading='eager'
        alt={props.artist_name}  
        unoptimized    
        />
      : <div className='text-black'>Imagen no disponible</div>
      }
        
    </div>
    <div className='bg-amber-200'>
        <h3 className='text-xl text-black text-center'>{props.artist_name}</h3>

    </div>
    </div>

  )
}
