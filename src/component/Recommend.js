import React, { useEffect, useState } from "react";
import place from "./assets/placeholder1.webp";
import veg from "./assets/veg.svg";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useRef } from "react";

const Recommend = () => {
  const recom = [
    {
      image: place,
      name: "Cappuccino",
      size: "Short()",
      cost: " 283.50",
    },
    {
      image: place,
      name: "Signature Hot Chocolate",
      size: "Short(273ml).284kcal",
      cost: " 294.00",
    },
    {
      image: place,
      name: "Vanilla Milkshake",
      size: "Tall(354ml)-531kcal",
      cost: " 367.50",
    },
    {
      image: place,
      name: "Cold Brew Black",
      size: "Short(SHORT cold brew black)",
      cost: " 299.25",
    },
    {
      image: place,
      name: "Tall Javachip Frapaccinno",
      size: "Tall()",
      cost: " 267.50",
    },
  ];

  const [index, setIndex] = useState({
    start: 0,
    end: 3,
  });
  const [showPopup, setShowPopup] = useState(null);

  const [visibleArray, setVisibleArray] = useState(
    recom.slice(index.start, index.end)
  );

  const container = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const moveRight = () => {
    if (index.end < recom.length)
      setIndex((prev) => ({ start: prev.start + 1, end: prev.end + 1 }));
  };
  const moveLeft = () => {
    if (index.start > 0)
      setIndex((prev) => ({ start: prev.start - 1, end: prev.end - 1 }));
  };

  useEffect(() => {
    setVisibleArray(recom.slice(index.start, index.end));
  }, [index]);

  return (
    <div className="bg-neutral-200 pt-6 min-h-80">
      {showPopup ? (
        <div
          onClick={() => setShowPopup(null)}
          className="fixed z-50 no-scrollbar w-full h-screen left-0 top-0 bg-black/20 backdrop-blur-md flex items-center justify-center"
        >
          <div className="w-2/5 h-96 bg-white text-black">
            {recom[showPopup].name}
          </div>
        </div>
      ) : null}
      <div className="flex justify-between">
        <p className="ml-28 text-2xl font-bold">Barista Recommends</p>
        <p className="text-[#195e45] font-bold text-xs mr-28">View Menu</p>
      </div>
      <div className="flex justify-center">
        <button
          className={`flex items-center z-10 disabled:opacity-20 disabled:pointer-events-none`}
          disabled={index.start === 0}
          onClick={moveLeft}
          ref={leftRef}
        >
          <FaCircleArrowLeft className="shrink-0 h-10 w-10 ml-20" />
        </button>
        {/* from here scrolling bar starts  */}
        <div
          className="flex overflow-x-scroll overflow-hidden w-[1300px] mx-auto pt-10 no-scrollbar"
          ref={container}
        >
          {visibleArray.map((recommend, index) => {
            return (
              <div
                key={index}
                className="bg-white w-[400px] h-40 rounded-xl mr-10 flex-none border-solid border-[1px] border-black"
                onClick={() => setShowPopup(index)}
              >
                <div className="flex pl-6 pt-6">
                  <img className="size-16 rounded-lg" src={recommend.image} />
                  <div className="pl-6">
                    <img src={veg} />
                    <p className="font-bold text-sm">{recommend.name}</p>
                    <p className="font-thin text-xs">{recommend.size}</p>
                  </div>
                </div>
                <div className="flex justify-around pt-2">
                  <span className="font-bold">&#8377;{recommend.cost}</span>
                  <p className="w-28 h-7 flex bg-[#195e] text-white text-center rounded-full justify-center">
                    Add Item
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className={`flex items-center z-10 disabled:opacity-20 disabled:pointer-events-none`}
          disabled={index.end === recom.length}
          onClick={moveRight}
          ref={rightRef}
        >
          <FaCircleArrowRight className="shrink-0 h-10 w-10 mr-20 " />
        </button>
      </div>
    </div>
  );
};

export default Recommend;
