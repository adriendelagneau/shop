import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const CategoryComponent = () => {
    return (
        <div className="w-[80%] h-[500px] mx-auto pb-10 flex ">
            <div className='flex-1 h-full transition-all duration-500 cursor-pointer img img1 group'>
                <p className='absolute bottom-0 left-0 p-2 text-lg uppercase transition-all duration-300 origin-top-left transform -rotate-90 bg-stone-950 text-sky-50 group-hover:rotate-0'>femme</p>
            </div>
            <div className='flex-1 h-full transition-all duration-500 cursor-pointer img img2 group'>
                <p className='absolute bottom-0 left-0 p-2 text-lg uppercase transition-all duration-300 origin-top-left transform -rotate-90 bg-stone-950 text-sky-50 group-hover:rotate-0'>homme</p>
            </div>
            <div className='flex-1 h-full transition-all duration-500 img img3 group'>
                <p className='absolute bottom-0 left-0 p-2 text-lg uppercase transition-all duration-300 origin-top-left transform -rotate-90 bg-stone-950 text-sky-50 group-hover:rotate-0'>enfant</p>
            </div>
        </div>
    );
}

export default CategoryComponent