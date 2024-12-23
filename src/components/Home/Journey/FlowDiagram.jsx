import React from "react";
import { MapPin, ArrowUpDown, Timer, Send, Files } from "lucide-react";
import About from "./About.jsx";

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
              strokeWidth="4"
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
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold">
              Start
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
            <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-white font-semibold">
              End
            </div>
          </div>

          {/* Steps */}
          <div className="relative flex justify-between items-center h-[400px] -mt-28 mx-16">
            {/* 111111 */}
            <div className="relative mb-16 flex flex-col items-center">
              {/* Icon Circle */}

              <div>
                <span className="absolute -top-8 text-white text-sm font-medium whitespace-nowrap">
                  Audit/Deep Dive
                </span>

                <div className="w-12 h-12 rounded-full border border-white/30 bg-[#09090b] flex items-center justify-center ">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Vertical Line */}

              <div className="relative h-56  w-[1px] bg-white/30" />

              {/* White Dot on Curve */}

              <div className="absolute w-3 h-3 rounded-full bg-white mx-16 bottom-[50px] " />

              {/* Number Box with Line */}
              <div className="absolute -bottom-12 ml-4  flex flex-col items-center">
                <div className="relative">
                  <div className="w-8 h-8 rounded bg-[#09090b] border border-white/30 flex items-center justify-center text-white text-sm">
                    1
                  </div>
                  <div className="relative w-8 h-8 ml-5 bg-[#09090b] border-white/30 border-l border-b flex items-center justify-center text-white text-sm"></div>
                  {/* Horizontal Line */}
                  <div className="absolute -bottom-1 -right-16 w-16 h-[5px] bg-purple-500" />
                </div>
              </div>

              
            </div>

            {/* 22222*/}

            <div className="relative -mb-28 flex flex-col items-center">
              {/* Icon Circle */}

              <div>
                <div className="relative w-8 h-6 ml-5 bg-[#09090b] border-white/30 border-l border-t flex items-center justify-center text-white text-sm">
                  <div className="absolute -top-1 -right-16 w-16 h-[5px] bg-purple-500" />
                </div>
                {/* Horizontal Line */}

                <div className="w-8 h-8 ml-3 rounded bg-[#09090b] border border-white/30 flex items-center justify-center text-white text-sm">
                  2
                </div>
              </div>

              {/* Vertical Line */}

              <div className="relative h-56  w-[1px] bg-white/30" />

              {/* White Dot on Curve */}

              <div className="absolute w-3 h-3 rounded-full bg-white mx-16 top-[105px] " />

              {/* Number Box with Line */}
              <div className="absolute -bottom-12 ml-4  flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border border-white/30 bg-[#09090b] flex items-center justify-center mr-4 ">
                    <Timer className="w-6 h-6 text-white" />
                  </div>

                  <span className="-top-8 text-white text-sm font-medium whitespace-nowrap">
                    Offer Review
                  </span>
                </div>
              </div>

             
            </div>

            {/* 33333 */}

            <div className="relative mb-16 flex flex-col items-center">
              {/* Icon Circle */}

              <div>
                <span className="absolute -top-8 text-white text-sm font-medium whitespace-nowrap">
                  User Journey
                </span>

                <div className="w-12 h-12 rounded-full border border-white/30 bg-[#09090b] flex items-center justify-center ">
                  <ArrowUpDown className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Vertical Line */}

              <div className="relative h-56  w-[1px] bg-white/30" />

              {/* White Dot on Curve */}

              <div className="absolute w-3 h-3 rounded-full bg-white mx-16 bottom-[44px] " />

              {/* Number Box with Line */}
              <div className="absolute -bottom-12 ml-4  flex flex-col items-center">
                <div className="relative">
                  <div className="w-8 h-8 rounded bg-[#09090b] border border-white/30 flex items-center justify-center text-white text-sm">
                    3
                  </div>
                  <div className="relative w-8 h-8 ml-5 bg-[#09090b] border-white/30 border-l border-b flex items-center justify-center text-white text-sm"></div>
                  {/* Horizontal Line */}
                  <div className="absolute -bottom-1 -right-16 w-16 h-[5px] bg-purple-500" />
                </div>
              </div>

             
            </div>

            {/* 444444 */}

            <div className="relative -mb-28 flex flex-col items-center">
              {/* Icon Circle */}

              <div>
                <div className="relative w-8 h-6 ml-5 bg-[#09090b] border-white/30 border-l border-t flex items-center justify-center text-white text-sm">
                  <div className="absolute -top-1 -right-16 w-16 h-[5px] bg-purple-500" />
                </div>
                {/* Horizontal Line */}

                <div className="w-8 h-8 ml-3 rounded bg-[#09090b] border border-white/30 flex items-center justify-center text-white text-sm">
                  4
                </div>
              </div>

              {/* Vertical Line */}

              <div className="relative h-56  w-[1px] bg-white/30" />

              {/* White Dot on Curve */}

              <div className="absolute w-3 h-3 rounded-full bg-white mx-16 bottom-[105px] " />

              {/* Number Box with Line */}
              <div className="absolute -bottom-12 ml-4  flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border border-white/30 bg-[#09090b] flex items-center justify-center ml-6 ">
                    <Send className="w-6 h-6 text-white" />
                  </div>

                  <span className="-top-8 text-white text-sm font-medium whitespace-nowrap ">
                    Sales Copywritting
                  </span>
                </div>
              </div>

            
            </div>

            {/* 555555 */}

            <div className="relative mb-1 flex flex-col items-center">
              {/* Icon Circle */}

              <div>
                <span className="absolute -top-8 text-white text-sm font-medium whitespace-nowrap">
                  Nurture Campaigns
                </span>

                <div className="w-12 h-12 rounded-full border border-white/30 bg-[#09090b] flex items-center justify-center ">
                  <Files className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Vertical Line */}

              <div className="relative h-56  w-[1px] bg-white/30" />

              {/* White Dot on Curve */}

              <div className="absolute w-3 h-3 rounded-full bg-white mx-16 bottom-[60px] " />

              {/* Number Box with Line */}
              <div className="absolute -bottom-12 ml-4  flex flex-col items-center">
                <div className="relative">
                  <div className="w-8 h-8 rounded bg-[#09090b] border border-white/30 flex items-center justify-center text-white text-sm">
                    5
                  </div>
                  <div className="relative w-8 h-8 ml-5 bg-[#09090b] border-white/30 border-l border-b flex items-center justify-center text-white text-sm"></div>
                  {/* Horizontal Line */}
                  <div className="absolute -bottom-1 -right-16 w-16 h-[5px] bg-purple-500" />
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
