
const slideLeft = () => {
    const currentPosition = parseFloat(
        getComputedStyle(sliderRef.current).transform.split(",")[4]
    );
    const newPosition = currentPosition + 320;

    if (newPosition <= 0) {
        GSAP.to(sliderRef.current, {
            x: newPosition,
            ease: Power2.easeInOut,
            duration: 0.5,
        });
    } else {
        GSAP.to(sliderRef.current, {
            x: 0,
            ease: Power2.easeInOut,
            duration: 0.5,
        });
    }
};

const slideRight = () => {
    const currentPosition = parseFloat(
        getComputedStyle(sliderRef.current).transform.split(",")[4]
    );
    const newPosition = currentPosition - 320;
    const sliderContainerWidth = sliderContainerRef.current.offsetWidth;
    const sliderWidth = sliderRef.current.offsetWidth;

    if (sliderWidth + newPosition >= sliderContainerWidth) {
        GSAP.to(sliderRef.current, {
            x: newPosition,
            ease: Power2.easeInOut,
            duration: 0.5,
        });
    } else {
        GSAP.to(sliderRef.current, {
            x: -(sliderWidth - sliderContainerWidth + 40),
            ease: Power2.easeInOut,
            duration: 0.5,
        });
    }
};

     // Set up Draggable for the slider
     Draggable.create(slider, {
        type: "x", // Only allow horizontal dragging
        edgeResistance: 0.5, // Add a resistance at the edges
        onDrag: function () {
            if (this.x > 0) {
                this.x = 0; // Prevent dragging more than 0
                GSAP.to(slider, { x: 0, ease: Power2.easeInOut, duration: 0.5 });
            } else if (
                this.x <
                -slider.offsetWidth + sliderContainerRef.current.offsetWidth - 40
            ) {
                this.x =
                    -slider.offsetWidth + sliderContainerRef.current.offsetWidth - 40; // Prevent dragging more than 0
                GSAP.to(slider, {
                    x:
                        -slider.offsetWidth + sliderContainerRef.current.offsetWidth - 40,
                    ease: Power2.easeInOut,
                    duration: 0.5,
                });
            }
        },
     });
    


     import React, { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';

const SliderComponent = ({ data }) => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (containerRef.current && sliderRef.current) {
      const difference = sliderRef.current.offsetWidth - containerRef.current.offsetWidth;
      console.log(difference);
    }
  }, []); // No dependencies, runs once after the initial render

  const handleClick = (direction) => {
    const containerWidth = containerRef.current.offsetWidth;
    const cardWidth = sliderRef.current.children[0].offsetWidth; // Assuming all cards have the same width

    const maxOffset = sliderRef.current.offsetWidth - containerWidth;
    
    if (direction === 'next' && offset < maxOffset) {
      setOffset(offset + cardWidth);
    } else if (direction === 'prev' && offset > 0) {
      setOffset(offset - cardWidth);
    }
  };

  return (
    <div className='mx-auto my-12 overflow-hidden max-w-screen-2xl' ref={containerRef}>
      <div
        className='flex gap-8 bg-green-100 flex-nowrap'
        ref={sliderRef}
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {data.map((p, i) => (
          <ProductCard productData={p} key={i} />
        ))}
      </div>
      <div>
        <button onClick={() => handleClick('prev')}>Previous</button>
        <button onClick={() => handleClick('next')}>Next</button>
      </div>
    </div>
  );
};

export default SliderComponent;



const handleClick = (direction) => {
    const containerWidth = containerRef.current.offsetWidth;
    const cardWidth = sliderRef.current.children[0].offsetWidth; // Assuming all cards have the same width

    const maxOffset = sliderRef.current.offsetWidth - containerWidth;
    
    if (direction === 'next' && offset < maxOffset) {
      setOffset(offset + cardWidth);
    } else if (direction === 'prev' && offset > 0) {
      setOffset(offset - cardWidth);
    }
  };