"use client"

import React, { useEffect } from 'react'
import { runFireworks } from '@/utils/fireworks' 

const Success = () => {
    useEffect(() => {
runFireworks()
    },[])
  return (
    <div className='h-[calc(100vh-60px)] max-w-screen-2xl mx-auto'>success</div>
  )
}

export default Success