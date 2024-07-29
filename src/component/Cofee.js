import React from "react";
import cofee from "./assets/cofee.jpg";

const Cofee = () => {
  return (
    <div className="bg-neutral-200 h-[500px] mt-10">
      <div className="flex justify-between pt-5">
        <p className="ml-28 font-bold text-2xl">
          Learn more about the world of cofee!
        </p>
        <p className="mr-28 text-[#195e45] text-xs font-bold ">Discover more</p>
      </div>
      <div
        className={`mt-9 pt-7 w-[1300px] h-[370px] bg-[url('/public/cofee.jpg')] bg-cover mx-auto bg-center bg-no-repeat rounded-lg hover:brightness-[0.5] hover:transition-all`}>
          
        <div className="pl-5 font-bold text-xs text-[#195e45] bg-white w-28 rounded-md ml-5">cofee culture</div>
        <div className="text-white pl-10 pt-36">
          <p className="text-2xl font-bold">Art and Science of Cofee Brewing</p>
          <p className="text-sm pt-5">Master the perfect brew with Starbucks! Learn the art and science of cofee brewing</p>
          <div className="bg-white text-[#195e45] mt-12 h-7 text-sm font-bold w-56 flex items-center justify-center rounded-full">learn more</div>
        </div>
      </div>
    </div>
  );
};

export default Cofee;
