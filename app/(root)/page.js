import CategoryComponent from '@/components/CategoryComponent'
import Landing from '@/components/Landing'
import NewsLetter from '@/components/NewsLetter'
import Slider from '@/components/Slider'
import React from 'react'



const Home = () => {
  return (
    <div className=''>
      <Landing />
 
    
      <CategoryComponent />

 
      <Slider />
      <NewsLetter />
    </div>
  )
}

export default Home