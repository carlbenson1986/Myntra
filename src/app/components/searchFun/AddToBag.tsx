import React, { useState } from "react";
import { BsBag } from "react-icons/bs";

export default function AddToBagButton() {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        isAdded
          ? "bg-green-500 hover:bg-green-600 active:bg-green-700"
          : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
      } text-white font-semibold 
      py-2 px-3 ml-6
      text-sm 
      rounded-full 
      shadow-md transform 
      transition-transform 
       hover:scale-105 
       focus:outline-none`}
    >
      {isAdded ? (
        <>
          <div className="px-2">
            <BsBag />
          </div>
        </>
      ) : (
        "Add to Bag"
      )}
    </button>
  );
}
