import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Link href={"/products"}>All Products</Link>
    </div>
  )
}

export default Home