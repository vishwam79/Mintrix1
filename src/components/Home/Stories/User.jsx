"use client";
import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactCardFlip from "react-card-flip";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

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
    breakpoint: { max: 300, min: 300 },
    items: 1,
    slidesToSlide: 1,
  },
};

const sliderImageUrl = [
  {
    url: "/usecase1.jpg",
    urlback:"/usecase2.jpg",
    title: "TEACHERS",
    flip: "AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.",
  },
  {
    url: "/usecase1.jpg",
    title: "STUDENTS",
    urlback:"/usecase2.jpg",
    flip: "AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.",
  },
  {
    url: "/usecase1.jpg",
    urlback:"/usecase2.jpg",
    title: "STAFF",
    flip: "AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.",
  },
  {
    url: "/usecase1.jpg",
    urlback:"/usecase2.jpg",
    title: "PARENTS",
    flip: " AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.",
  },
  {
    url: "/usecase1.jpg",
    title: "OTHERS",
    flip: "AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.AI-Powered Solutions Tailored for Every Role in Your School.",
  },
];

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
        <h2 className="text-3xl text-white font-semibold">Users</h2>
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
          {sliderImageUrl.map((imageUrl, index) => (
            <ReactCardFlip
              isFlipped={!!flippedStates[index]}
              flipDirection="horizontal"
              key={index}
            >
              {/* Front Side */}
              <div
                onMouseEnter={() => hoverHandle(index)} 
                className="slider object-cover h-[440px] rounded-md flex justify-start items-center"
                style={{ backgroundImage: `url(${imageUrl.url})` }}
              >
                <h1 className="px-5 text-xl font-bold text-white">
                  {imageUrl.title}
                </h1>
              </div>

              {/* Back Side */}
              <div
                onMouseLeave={() => hoverHandle(index)}
                className="slider object-cover h-[440px] rounded-md flex justify-start items-end"
                style={{ backgroundImage: `url(${imageUrl.urlback})` }}
              >
                <h1 className="px-5 font-semibold text-white">
                  {imageUrl.flip} 
                </h1>
              </div>
            </ReactCardFlip>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Step;
