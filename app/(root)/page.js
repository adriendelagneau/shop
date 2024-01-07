import CategoryComponent from '@/components/CategoryComponent'
import Landing from '@/components/Landing'
import Link from 'next/link'
import React from 'react'



const Home = () => {
  return (
    <div>
      <Landing />
      <div className='h-screen '></div>
<CategoryComponent />
      
      <Link href={"/products"}>All Products</Link>
    </div>
  )
}

export default Home