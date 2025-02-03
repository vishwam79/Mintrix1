"use client";
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const sliderImageUrl = [
  {
    url: "/Blog.png",
    title:
      "How Mintrix is changing lives of Teachers",
  },

  {
    url: "/Blog.png",
    title:
      "How Mintrix is changing lives of Teachers",
  },

  {
    url: "/Blog.png",
    title:
      "How Mintrix is changing lives of Teachers",
  },

  {
    url: "/Blog.png",
    title:
      "How Mintrix is changing lives of Teachers",
  },

  {
    url: "/Blog.png",
    title:
      "How Mintrix is changing lives of Teachers",
  },
  {
    url: "/Blog.png",
    title:
      "How Mintrix is changing lives of Teachers",
  },
];

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-10 -top-1   text-white p-2 rounded-full z-10 shadow-md hover:bg-gray-700"
    >
      <MdArrowBackIos size={24} />
    </button>
  );
};

// Custom Right Arrow
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 -top-1   text-white p-2 rounded-full z-10 shadow-md hover:bg-gray-700"
    >
      <MdArrowForwardIos size={24} />
    </button>
  );
};

const Slider = () => {
  const carouselRef = useRef();

  const handleNext = () => {
    carouselRef.current.next(); // Move to the next slide
  };

  const handlePrev = () => {
    carouselRef.current.previous(); // Move to the previous slide
  };

  return (
    <div className="w-full">
    <div className="max-w-[1280px] mx-auto relative mt-32 mb-10">
      <div className="my-12 mx-6 flex justify-between items-center">
        <CustomLeftArrow onClick={handlePrev} />
        <h2 className="text-3xl text-white font-semibold sm:ml-2">Blogs</h2>
        <CustomRightArrow onClick={handleNext} />
      </div>

      </div>
      <div className="flex justify-center w-full  ">

      <div className="max-w-[1280px]">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={true}
          arrows={false} 
          containerClass="flex-col"
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div
                className="mx-[10px] py-[2rem] transform transition-transform hover:scale-110  object-cover h-[400px] rounded-md flex justify-center items-end w-[300px]"
                key={index}
                style={{ backgroundImage: `url(${imageUrl.url})` }}
              >
                <div className=" px-5  gap-4">
                <div className="w-10 h-10 overflow-x-auto"><img src="/testimonial.jpeg" alt="" className=" rounded-full" /></div>
                 <div className="flex justify-between items-center gap-3"><h1 className=" font-semibold text-[19px] text-white">
                  {imageUrl.title}
                  
                </h1>
                <MdArrowOutward className="text-white w-10 h-10" />
                </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>

    </div>
  );
};

export default Slider;
