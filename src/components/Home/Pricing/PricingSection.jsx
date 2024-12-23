import React from "react";

const PricingSection = () => {
  return (
    <div className="bg-zinc-950 border-opacity-50  border-gray-700 border-[1px] text-white mt-40 mb-40 py-8 flex flex-col lg:flex-row p-10 justify-start item-start lg:justify-between max-w-[1280px] mx-auto rounded-xl shadow-lg h-full gap-20">
      <div className="lg:w-3/4 lg:mb-0  ">
        <h2 className="lg:text-5xl font-semibold md:text-6xl  sm:text-3xl text-white mb-10">
          One Account for all AI needs
        </h2>

        <div className="justify-between items-center -mt-10 lg:flex md:flex sm:flex-1">
          <div>
            <ul className="list-decimal list-inside text-white font-normal text-[18px] leading-loose">
              <li>The best AI tool to Research, Write & Summarize</li>
              <li>20x higher limits than ChatGPT</li>
              <li>Best alternative to Poe, Perplexity, ChatPDF, etc</li>
              <li>Official partnerships with all top LLM providers</li>
              <li>SOC2, GDPR, ISO compliant</li>
            </ul>
          </div>

          <div>
            <img
              src="/aiimage.png"
              alt="AI illustration"
              className="hidden md:block lg:w-72 md:w-48 object-cover rounded-full lg:rounded-none -mt-20"
            />
          </div>
        </div>
      </div>

      <div className="lg:w-1/4  flex flex-col items-center justify-between min-h-[300px]  border-white border-l-[1px] border-dashed  mt-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-50">$19</h1>
          <p className="text-white">per month</p>
          <p className="text-white">billed annually</p>
        </div>

        <div className="mt-auto">
          <button className="px-14 py-2 bg-gradient-to-t from-gray-400 to-slate-50 text-black rounded-md hover:text-white hover:border hover:border-white hover:bg-none  transition duration-300">
            View our pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
