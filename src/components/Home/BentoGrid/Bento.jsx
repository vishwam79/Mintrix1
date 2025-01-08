import React from "react";
import Bentocenter from "../BentoCenter/Bentocenter.jsx";
import { TypeAnimation } from 'react-type-animation';

const Index = () => {
  return (
    <div className=" h-full bg-[#09090b] w-full mx-auto text-white z-[5]">
      <div className="flex flex-col md:flex-row justify-center max-w-[1280px] gap-8 mx-auto py-8">
        {/* Left Section */}
        <div className="flex flex-col z-[5]">
          <div className="flex w-auto md:h-[396px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col justify-center items-start flex-nowrap bg-[#31316433]  bg-no-repeat rounded-[24px]  z-[27] gap-10">
            <div className="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[28]">
              <div className="w-[52.544px] h-[44px] shrink-0 bg-[url(/assets/images/prompt_icon.png)] bg-cover bg-no-repeat relative overflow-hidden z-[29]" />
              <span className="flex w-full md:h-[120px] justify-start items-start self-stretch shrink-0  text-[36px] font-semibold leading-[46px]  relative text-start z-30">
                Effortless Admistration & Learing
              </span>
            </div>

            <div className="bg-[#2a2a6f33] p-2 rounded-md">
              <button className="md:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-2 rounded-md text-white text-lg flex ">
                <img src="/assets/images/image_icon.png" className="w-6 h-6" />{" "}
                Learn More
              </button>
            </div>
          </div>

          <div className="flex w- h-[244px] pt-[34px] pr-[32px] pb-[30px] pl-[32px] flex-col mt-8 gap-[20px]   flex-nowrap bg-[#31316433] bg-no-repeat rounded-[24px] z-[34]">
            <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[35]">
              <span className="h-[46px] self-stretch shrink-0 basis-auto font-bold text-[62px] leading-[46px] tracking-[-1.24px] relative text-start whitespace-nowrap z-[36] text-yellow-600">
                20 X
              </span>
              <span className="flex w-full h-[20px] justify-start items-end  text-[18px] font-normal leading-[13px] text-[#b1a0fc] relative text-start whitespace-nowrap z-[37] ">
                Higher Efficiency than Traditional System
              </span>
            </div>

            <div className="flex w-[144px] pt-px pr-0 pb-px pl-0 gap-[-12px]  shrink-0 flex-nowrap relative z-[38]">
              <div className=" border-blue border-[3px] [flex w-[20px] h-[20px] pt-[17px] pr-[16px] pb-[17px] pl-[16px] gap-[4px] items-center shrink-0 flex-nowrap bg-[url(/assets/images/profile1.png)] bg-cover bg-no-repeat rounded-full relative box-content overflow-hidden z-[39]" />

              <div className="flex border-blue border-[3px] w-[20px] h-[20px] pt-[17px] pr-[16px] pb-[17px] pl-[16px] gap-[4px] items-center shrink-0 flex-nowrap bg-[url(/assets/images/profile1.png)] bg-cover bg-no-repeat rounded-full relative box-content overflow-hidden z-[42] right-2" />
              <div className="flex border-blue border-[3px] w-[20px] h-[20px] pt-[17px] pr-[16px] pb-[17px] pl-[16px] gap-[4px] items-center shrink-0 flex-nowrap bg-[url(/assets/images/profile1.png)] bg-cover bg-no-repeat rounded-full relative box-content overflow-hidden z-[42] right-4" />
            </div>
          </div>

          <div className="w-auto h-[140px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex  items-start flex-nowrap bg-[#31316433] mt-8 bg-no-repeat rounded-[24px]  z-[44]">
            <div className="bg-[#2a2a6f33] p-2 rounded-md">
              <button className="md:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-2 rounded-md text-white text-lg flex ">
                <img src="/assets/images/image_icon.png" className="w-6 h-6" />{" "}
                Talk To an Expert
              </button>
            </div>
          </div>
        </div>

       

        {/* Middle Section */}
        <div className="flex flex-col z-[5]">
          <Bentocenter />
        </div>

        {/* Right Section */}
        <div className="flex flex-col z-[5] min-w-[400px]">
          <div className="flex w-auto h-[164px] pt-[32px] pr-[32px] pb-[32px] pl-[32px]  md:justify-center items-center flex-nowrap bg-[#31316433] bg-no-repeat rounded-[24px]  font-bold z-[44]  font-semibold leading-[40px] ">



              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Effortless Admistration',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Automate Administrations',
        1000,
        ' Revolutionizing	Education	with	AI',
        1000
      ]}
      wrapper="span"
      speed={200}
      style={{ fontSize: '30px', display: 'inline-block' }}
      repeat={Infinity}
    />
          </div>

          <div className="flex w-auto h-[220px] pt-[34px] pr-[32px] pb-[30px] pl-[32px] flex-col mt-8 gap-[20px] justify-center items-center flex-nowrap bg-[#31316433] bg-no-repeat rounded-[24px] z-[34]">
            <div className="flex w-auto flex-col gap-[12px]  max-w-[180px] pl-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[35]">
              <span className="h-[46px] self-stretch shrink-0 basis-auto  text-[62px] font-bold leading-[46px] tracking-[-1.24px] relative md:text-center whitespace-nowrap z-[36] text-blue-900 from-blue-800 to-teal-700">
                23+
              </span>

              <div className="flex mt-3 gap-4 justify-center items-center bg-gradient-to-r from-[#31316433] to-black-900  transparent opacity-70 z-0 px-7 rounded-sm py-1">
                <img
                  src="/assets/images/25K_icon_line.png"
                  alt=""
                  className="h-7"
                />

                <span className="flex w-full h-[13px] mt-4 justify-center items-end shrink-0  text-[15px] font-normal leading-[13px] text-white relative text-center whitespace-nowrap z-[37] px-2 py-3">
                  Educators Need Us
                </span>
                <img
                  src="/assets/images/25K_icon_line.png"
                  alt=""
                  className="h-7 "
                />
              </div>
            </div>
          </div>

          <div className="flex w-auto mt-8   h-[396px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col justify-between items-start flex-nowrap bg-[#31316433]  bg-no-repeat rounded-[24px]  z-[27]">
            <div className="flex w-auto flex-col gap-[5px] items-start self-stretch shrink-0 flex-nowrap relative z-[28]">
              <span className="text-[20px] font-bold ">
                All in one Internal Tool
              </span>

              <span className="text-[14px]">
                AI powered Agents for Reducing Labor & Enhance Learning
              </span>
            </div>

            <div className="w-full h-[261.755px] shrink-0 relative overflow-hidden z-[3]  rounded-lg p-4">
             

                <div className="w-[100px] h-[35px] flex items-center justify-center bg-[rgba(98,106,181,0.21)] rounded-md border-[2px] border-violet-600 -rotate-30  ml-16 mt-3 ">
                  <span className="font-['Plus_Jakarta_Sans'] text-[15px] font-medium text-[#e9e5ff] ">
                    Apply Leave
                  </span>
                </div>

                <div className="w-[100px] h-[35px]  flex items-center justify-center bg-[rgba(98,106,181,0.21)] rounded-md border-[2px] border-violet-600  -rotate-30 mt-10 ml-10">
                  <span className="font-['Plus_Jakarta_Sans'] text-[15px] font-medium text-[#e9e5ff] ">
                  Schedule
                  </span>
                </div>

                

                <div className="flex min-h-fit my-10 px-2 gap-2 h-10 justify-center rounded-xl bg-[rgba(98,106,181,0.18)] -rotate-90 -mt-16 -mr-44
                 ">


                  <button className="flex  items-center gap-1 justify-center  rounded-md  text-[#ddd6ff]  text-[13px] font-base">
                    <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
                    Learn
                  </button>
                  <button className="flex items-center gap-2 justify-center   rounded-full   text-[#ddd6ff]  text-[13px] font-medium">
                    <span className="w-3 h-3 bg-yellow-600 rounded-full"></span>
                    Teach
                  </button>
                  <button className="flex items-center gap-2 justify-center  text-[#ddd6ff]  text-[13px] font-medium">
                    <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                    Track
                  </button>
                </div>

               <img
                  src="/assets/images/camera_icon.png"
                  alt=""
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full -mt-10 -ml-2"
                />
<div className="w-[100px] h-[35px]  flex items-center justify-center bg-[rgba(98,106,181,0.21)] rounded-md border-[2px] border-violet-600 rotate-20  mt-10 ml-10">
                  <span className="font-['Plus_Jakarta_Sans'] text-[15px] font-medium text-[#e9e5ff] ">
                  Collaborate
                  </span>
                </div>


                <img
                  src="/assets/images/camera_icon.png"
                  alt=""
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-full -mt-20 ml-20"
                />


                
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Index;
