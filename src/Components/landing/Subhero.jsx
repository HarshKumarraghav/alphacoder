import React from "react";
import SubHeroImg from "../../Assets/landing/subhero.svg";
const Subhero = () => {
  return (
    <div className="w-full h-full flex justify-center items-center font-bold px-10 flex-col lg:flex-row gap-6">
      <div className="w-full h-1/2 lg:w-1/2 lg:h:full hover:-translate-y-3 hover:transition-all flex justify-center items-center">
        <img src={SubHeroImg} className="md:w-3/4 lg:w-full" />
      </div>
      <div className="w-full lg:w-1/2 lg:h-full flex items-center flex-col justify-center gap-y-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl ">
          What&nbsp;
          <span className="font-head ">
            <span className="text-primary-color">&lt;/&gt;</span>Alphacoder
          </span>
          &nbsp;offers?
        </h1>
        <ul className="text-xl md:text-2xl lg:text-3xl list-disc marker:text-primary-color">
          <li>
            All the famous&nbsp;
            <span className="text-primary-color hover:underline hover:transition-all">
              DSA sheet
            </span>
            &nbsp;out their.
          </li>
          <li>Topicwise question </li>
          <li>group discuss section</li>
          <li>Code submission</li>
          <li>Leader board</li>
        </ul>
      </div>
    </div>
  );
};

export default Subhero;
