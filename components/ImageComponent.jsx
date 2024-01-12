"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ImageComponent = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0])
    return (
        <div className='flex flex-col-reverse mx-auto md:flex-row md:w-[500px] 2xl:w-[600px]'>
            <div className='flex gap-2 mt-4 md:mt-0 md:flex-col'>
                {images.map((image, i) => (
                    <div key={i} className='w-[63px] h-[63px] sm:w-[76px] sm:h-[76px] lg:w-[80px]'>
                        
                    <Image
                        src={image}
                        width={63}
                        height={63}
                        alt=''
                        className='border cursor-pointer'
                        onClick={() => setSelectedImage(images[i])}
                        />
                        </div>
                ))}
            </div>
            <div className='w-full'>

            <Image src={selectedImage} width={1050} height={1050} alt='' className='border-4 rounded ' />
            </div>
        </div>
    )
}

export default ImageComponent