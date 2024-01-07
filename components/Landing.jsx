import Image from 'next/image'
import React from 'react'

const Landing = () => {
  return (
    <div className='h-[calc(100vh-60px)] bg-gradient-to-r from-cyan-500 to-blue-500 w-full'>
      <div className='flex flex-col-reverse h-full lg:flex-row items'>

        <div className='flex items-center justify-center w-full gap-3 text-center h-1/2 lg:w-1/2 lg:flex lg:justify-center lg:h-full font-Lemon'>
          <div className='m-auto text-5xl uppercase w-[80%] text-sky-50 tracking-wider lg:tracking-wider lg:text-6xl 2xl:text-7xl'>
            <p>your sneakers</p>
            <p className='my-2 2xl:my-12'>at</p>
            <p>the best prices</p>
            
            
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:flex lg:items-center lg:justify-center lg:h-full'>
          <Image
            src='https://res.cloudinary.com/dos8mey8r/image/upload/v1704549722/shoes/removal.ai__638aa178-7607-43b8-aa19-d22f805e5176-tst-extra_large-507x507-pad-600x600-f8f8f8_e1fuwv.png'
            alt="colored grafitti airmax"
            width={570}
            height={570}
            sizes="(min-width: 620px) 570px, calc(90vw + 30px)" 
            className='m-auto' />
        </div>
        
      </div>
    </div>
  )
}

export default Landing