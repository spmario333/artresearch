import Image from 'next/image'
import React from 'react'
interface Props {
    
      id: number,
      title: string,
      image: string
    
}



export const SimpleCard = (props:Props) => {
  return (
    <div className='pb-2.5'>

    <div className='bg-amber-100 text-white items-center justify-center h-full flex'>
        <Image
        className='w-5/12 h-auto'
        width={400}
        height={400}
        src={props.image}  
        loading='eager'
        alt={props.title}      
        />
        
    </div>
    <div className='bg-amber-200'>
        <h3 className='text-xl text-black text-center'>{props.title}</h3>

    </div>
    </div>

  )
}
