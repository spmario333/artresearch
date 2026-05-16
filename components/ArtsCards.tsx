import { useContext } from 'react'
import { SimpleCard } from './SimpleCard'
import { ArtContext } from '@/context/artContext'

export const ArtsCards = () => {
  const { data } = useContext(ArtContext)

  return (
    <div className='grid grid-cols-3 bg-gray-50 gap-5'>
      {
        data.map(a =>
          <SimpleCard {...a} key={a.id} />

        )
      }
    </div>
  )
}
