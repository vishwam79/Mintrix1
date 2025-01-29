"use client";
import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactCardFlip from "react-card-flip";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import "./Automation.css";
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

const Automation = () => {

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
        <h2 className="text-3xl text-white font-semibold">Automation</h2>
        <CustomRightArrow onClick={() => carouselRef.current.next()} />
      </div>

      <div className="parent max-w-[1280px] mx-auto relative">
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
              key={index}
            >
              {/* Front Side */}
              <div
                onMouseEnter={() => hoverHandle(index)}  
                className="slider object-contain  max-w-[354px]  h-[489px] rounded-md flex justify-start items-end"
                style={{ backgroundImage: `url(${imageUrl.url})` }}
              >
                <h1 className="px-5 text-xl font-bold text-white">
                  {imageUrl.title}
                </h1>
              </div>

              {/* Back Side */}
              <div
               onMouseLeave={() => hoverHandle(index)}
                className="slider object-cover rounded-md max-h-[489px]   max-w-[354px] flex justify-center items-center text-white"
                style={{ backgroundImage: `url(${imageUrl.url})` }}
              >
                <div className="top-0 bg-black opacity-60  rounded-lg p-6 text-gray-200 h-[489px]">
                  <h2 className="text-2xl font-bold mb-2">
                    {imageUrl.title}
                  </h2>
                  
                  <ul className="list-disc list-inside mb-4">
                    {imageUrl.content.map((item, index) => (
                      <li key={index} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a href="/chat">
                    <button className="md:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded text-white text-sm flex">
                      {imageUrl.cta}
                      <MdArrowOutward />
                    </button>
                  </a>


                </div>
              </div>
            </ReactCardFlip>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Automation;
