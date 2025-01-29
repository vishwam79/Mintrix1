"use client";
import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactCardFlip from "react-card-flip";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import "./Users.css";
import { Data } from "./Data.js";
import { MdArrowOutward } from "react-icons/md";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 }, // Proper mobile range
    items: 1.1,
    slidesToSlide: 1,
  },
};



const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick} className="absolute right-6 text-white p-2 z-10">
    <MdArrowBackIos size={24} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick} className="absolute right-0 text-white p-2 z-10">
    <MdArrowForwardIos size={24} />
  </button>
);

const Step = () => {
  const [flippedStates, setFlippedStates] = useState({});
  const carouselRef = useRef();

  const hoverHandle = (index) => {
    setFlippedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-[1280px] mx-auto relative mt-32 mb-10">
      <div className="my-12 flex justify-between items-center">
        <CustomLeftArrow onClick={() => carouselRef.current.previous()} />
        <h2 className="text-3xl text-white font-semibold ml-2">Users</h2>
        <CustomRightArrow onClick={() => carouselRef.current.next()} />
      </div>

      <div className=" relative ml-2">
        <Carousel
          ref={carouselRef}
          responsive={responsive} 
          autoPlay={false}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
          arrows={false}
        >
          {Data.map((imageUrl, index) => (
            <ReactCardFlip
              isFlipped={!!flippedStates[index]}
              flipDirection="horizontal"
              flipSpeedBackToFront={0.6}
              flipSpeedFrontToBack={0.6}
              key={index}
            >
              {/* Front Side */}
              <div
                onMouseEnter={() => hoverHandle(index)}  
                className="slider card-front object-contain  max-w-[354px] h-[489px] rounded-md flex justify-start items-end hover:transform hover:transition-transform hover:duration-300"
                style={{ backgroundImage: `url(${imageUrl.url})` }}
              >
                <h1 className="px-5 text-xl font-bold text-white">
                  {imageUrl.title}
                </h1>
              </div>

              {/* Back Side */}
              <div
               onMouseLeave={() => hoverHandle(index)}
                className="relative card-back slider object-cover bg-no-repeat h-[489px] max-w-[354px] rounded-md text-white "
                style={{ backgroundImage: `url(${imageUrl.url})` }}
              >
                <div className="absolute top-0 bg-black h-[100%] bg-cover bg-opacity-70 shadow-lg rounded-lg p-4 space-y-3 text-gray-200">
                  <h2 className="text-[28px] ">
                    {imageUrl.headline}
                  </h2>
                  <h3 className="text-[22px] text-gray-300">
                    {imageUrl.subheadline}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-[16px]">
                    {imageUrl.content.map((item, index) => (
                      <li key={index} className="">
                        {item}
                      </li>
                    ))}
                  </ul>

                  
                    <button className="md:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded text-white text-[16px] flex">
                      {imageUrl.cta}
                      <MdArrowOutward />
                    </button>
                  


                </div>
              </div>
            </ReactCardFlip>





          






          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Step;
