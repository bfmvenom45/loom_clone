import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants'
import React from 'react'

export type Visibility = 'public' | 'private';

const Page = () => {
  return (
    <main className='wrapper page'>
      <Header title='All Videos' subHeader='Public Library' />
       <section className='video-grid'>

        {dummyCards.map((card) => (
          <VideoCard
            key={card.id}
            {...card}
            visibility={card.visibility as Visibility}
          />
        ))}
        </section>
    </main>
  )
}

export default Page