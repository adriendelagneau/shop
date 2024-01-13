"use client"
import React, { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
 

const SliderComponent = ({ data }) => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  const [offset, setOffset] = useState(0);
console.log(offset)
  useEffect(() => {
    if (containerRef.current && sliderRef.current) {
      const difference = sliderRef.current.offsetWidth - containerRef.current.offsetWidth;
      console.log(difference);
    }
  }, []); // No dependencies, runs once after the initial render

  const handleClick = (direction) => {
    const containerWidth = containerRef.current.offsetWidth;
    const cardWidth = sliderRef.current.children[0].offsetWidth+25; // Assuming all cards have the same width

    const maxOffset = sliderRef.current.offsetWidth - containerWidth;
    
    if (direction === 'next' && offset < maxOffset) {
      setOffset(offset + cardWidth);
    } else if (direction === 'prev' && offset > 0) {
      setOffset(offset - cardWidth);
    }
  };

    useEffect(() => {
    const handleResize = () => {
      // Reset offset to 0 on window resize
      setOffset(0);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // No dependencies, runs once after the initial render
    
  return (
    <>
    <div
      className="relative overflow-hidden z-10 h-[440px] w-[90%] xl:w-screen-2xl my-[100px] mx-auto  group"
      ref={containerRef}
      >
      <div className="absolute top-0 flex gap-[25px] transition-all mx-2" ref={sliderRef}    style={{ transform: `translateX(-${offset}px)` }}>
        {data.map((item, index) => (
          <ProductCard productData={item} key={index} />
          ))}
        </div>
        <button onClick={() => handleClick('prev')} className='absolute top-[40%] left-0 z-20 group-hover:inline-block hidden transition-all '>
        <ChevronLeft />
        </button>
        <button onClick={() => handleClick('next')} className='absolute top-[40%] right-0 z-20 group-hover:inline-block hidden transition-all'>
        <ChevronRight />
        </button>
    </div>
      <div>
        
      </div>
          </>
  );
};

export default SliderComponent;

