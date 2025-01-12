import React from "react";

import About from "./About.jsx";

import { GiSandsOfTime } from "react-icons/gi";
import { CiEdit } from "react-icons/ci";
import { GoCpu } from "react-icons/go";
import { FaChartBar } from "react-icons/fa";
import { GrResources } from "react-icons/gr";

const FlowDiagram = () => {
  
  return (
    <>
      <About />

      <div className="w-full h-auto mt-40 bg-[#09090b] flex items-center  justify-center p-8">
        <div className="relative w-full max-w-4xl">
          {/* Curved Path */}

          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1000 200"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 100 C300 100, 300 50, 500 100 C700 150, 750 100, 1000 100"
              stroke="url(#gradient)"
              strokeWidth="6"
              fill="none"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1000" y2="0">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Start and End Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex flex-col">
            
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-semibold">
           <span className="-mt-24 ml-8"> Discovery  Call</span>
            </div>
            
           
          </div>
         

          

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
            <span className="-mt-32 md:ml-12 mr-5"> Upgrade & Updates</span>
            </div>
          </div>

          {/* Steps */}
          <div className="relative flex justify-between items-center h-[400px] -mt-28 mx-16">
            {/* 111111 */}
            <div className="relative h-80 flex flex-col items-center">
              {/* Icon Circle */}

              <div>
                <span className="absolute -top-12 text-white text-sm font-light whitespace-nowrap">
                Provisonal <br></br> Contract Signing
                </span>
               

                <div className="w-12 h-12 rounded-full border border-white/30 bg-[#09090b] flex items-center justify-center ">
                  <CiEdit className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="relative h-[100%]  w-[1px] bg-white/30" />
              <div className="absolute w-3 h-3 rounded-full bg-white bottom-[110px] "></div>
              <div className="absolute bottom-0 flex flex-col items-center">
                <div className="relative">
                  <div className="w-8 h-8 rounded bg-[#09090b] border border-white/30 flex items-center justify-center text-white text-sm">
                    1
                  </div>
                </div>
              </div>
            </div>

            {/* 22222*/}

            <div className="relative top-20 flex flex-col items-center">
              {/* Icon Circle */}

              <div>
               
                {/* Horizontal Line */}

                <div className="w-8 h-8  rounded bg-[#09090b] border border-white/30 flex items-center justify-center text-white text-sm">
                  2
                </div>
              </div>

              {/* Vertical Line */}

              <div className="relative h-56  w-[1px] bg-white/30" />

              {/* White Dot on Curve */}

              <div className="absolute w-3 h-3 rounded-full bg-white top-16 " />

              {/* Number Box with Line */}
              <div className="absolute -bottom-12 ml-4  flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border border-white/30 bg-[#09090b] flex items-center justify-center ">
                    <GiSandsOfTime className="w-6 h-6 text-white" />
                  </div>

                  <span className="-top-8 text-white text-sm font-light whitespace-nowrap ">
                  Assessment
                  </span>
                </div>
              </div>
            </div>

            {/* 33333 */}

            <div className="relative h-56 flex flex-col items-center">
              {/* Icon Circle */}

              <div>
                <span className="absolute -top-12 text-white text-sm font-light whitespace-nowrap">
                Operations <br></br>
                Mapping
                </span>

                <div className="w-12 h-12 rounded-full border border-white/30 bg-[#09090b] flex items-center justify-center ">
                  <FaChartBar className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="relative h-[100%]  w-[1px] bg-white/30" />
              <div className="absolute w-3 h-3 rounded-full bg-white bottom-[52px] "></div>
              <div className="absolute bottom-0 flex flex-col items-center">
                <div className="relative">
                  <div className="w-8 h-8 rounded bg-[#09090b] border border-white/30 flex items-center justify-center text-white text-sm">
                    3
                  </div>
                </div>
              </div>
            </div>
            {/* 444444 */}

            <div className="relative mt-72 flex flex-col items-center">
              {/* Icon Circle */}

              <div>
               
                {/* Horizontal Line */}

                <div className="w-8 h-8  rounded bg-[#09090b] border border-white/30 flex items-center justify-center text-white text-sm">
                  4
                </div>
              </div>

              {/* Vertical Line */}

              <div className="relative h-56  w-[1px] bg-white/30" />

              {/* White Dot on Curve */}

              <div className="absolute w-3 h-3 rounded-full bg-white top-16 " />

              {/* Number Box with Line */}
              <div className="absolute -bottom-12 ml-4  flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border border-white/30 bg-[#09090b] flex items-center justify-center  ">
                    <GoCpu className="w-6 h-6 text-white" />
                  </div>

                  <span className="-top-10 text-white text-sm font-light whitespace-nowrap ">
                  Resource <br></br>
                  Evaluation
                  </span>
                </div>
              </div>
            </div>


            {/* 555555 */}

            <div className="relative h-56 mt-16 flex flex-col items-center">
              {/* Icon Circle */}

              <div>
                <span className="absolute -top-12 text-white text-sm font-light whitespace-nowrap">
                Devlopment <br></br>&
                Deployment
                </span>

                <div className="w-12 h-12 rounded-full border border-white/30 bg-[#09090b] flex items-center justify-center ">
                  <GrResources className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="relative h-[100%]  w-[1px] bg-white/30" />
              <div className="absolute w-3 h-3 rounded-full bg-white bottom-[62px] "></div>
              <div className="absolute bottom-0 flex flex-col items-center">
                <div className="relative">
                  <div className="w-8 h-8 rounded bg-[#09090b] border border-white/30 flex items-center justify-center text-white text-sm">
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowDiagram;
