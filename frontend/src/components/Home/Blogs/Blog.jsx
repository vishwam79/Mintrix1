import React,{useRef} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Blog.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

// Responsive Settings
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 3, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 767, min: 464 }, items: 2, slidesToSlide: 1 },
};

// Image Data
const sliderImageUrl = [
  { url: "/Blog.png" },
  { url: "/Blog.png" },
  { url: "/Blog.png" },
  { url: "/Blog.png" },
  { url: "/Blog.png" },
];

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-6 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full z-10 shadow-md hover:bg-gray-700"
  >
    <MdArrowBackIos size={24} />
  </button>
);

// Custom Right Arrow
const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full z-10 shadow-md hover:bg-gray-700"
  >
    <MdArrowForwardIos size={24} />
  </button>
);

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
      <div className="max-w-[1280px] mx-auto relative mt-32 mb-10 px-4">
        <h2 className="text-3xl text-white font-semibold text-start mb-6">
          Blogs
        </h2>
        <CustomLeftArrow onClick={handlePrev} />
        <CustomRightArrow onClick={handleNext} />
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="max-w-[1280px] w-full relative">
          <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={true}
            arrows={false}
            ref={carouselRef}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {sliderImageUrl.map((imageUrl, index) => (

<div className="p-2 relative hover:scale-105" key={index}>
  {/* Image */}
  <img
    className="w-full object-cover rounded-lg"
    src={imageUrl.url}
    alt="Blog"
  />

  {/* Text Overlay at Bottom */}
  <div className="absolute bottom-2 left-0 w-full  text-start p-2">
    <h1 className="text-white text-sm md:text-lg px-3 font-semibold">
      How Mintrix is changing lives of Teachers
    </h1>
  </div>
</div>

            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
