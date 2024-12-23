"use client";
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Usecase.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
};

const sliderImageUrl = [
  {
    url: "/usecase1.jpg",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, fugiat.",
  },
  {
    url: "/usecase1.jpg",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, fugiat.",
  },
  {
    url: "/usecase1.jpg",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, fugiat.",
  },
  {
    url: "/usecase1.jpg",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, fugiat.",
  },
  {
    url: "/usecase1.jpg",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, fugiat.",
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
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.previous();
  };

  return (
    <div className="max-w-[1280px]  mx-auto relative mt-32 mb-10">
      <div className="my-12 mx-6 flex justify-between items-center">
        <CustomLeftArrow onClick={handlePrev} />
        <h2 className="text-3xl text-white font-semibold">Everyday Usecase</h2>
        <CustomRightArrow onClick={handleNext} />
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
          arrows={false} // Disable default arrows
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div
                className="slider  object-cover h-[440px] rounded-md flex justify-start items-end"
                key={index}
                style={{ backgroundImage: `url(${imageUrl.url})` }}
              >
                <h1 className="px-5 font-semibold text-white">
                  {imageUrl.title}
                </h1>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
