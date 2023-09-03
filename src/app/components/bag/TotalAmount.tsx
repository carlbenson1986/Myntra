"use client";
import { useAppSelector } from "@/redux/store";
import { Button } from "@material-tailwind/react";

import React, { useState } from "react";

function TotalAmount() {
  // const [amount, setAmount] = useState(0);

  let amount = 0;
  amount = useAppSelector((state) => state.reducers.totalAmount);

  return (
    <div className="bg-white border rounded-lg shadow-md p-4">
      <div className="mb-5  mt-2 mx-1 ">
        <p className="font-bold text-xl">Total: ${amount}</p>
      </div>
      <div className="my-2">
        <a
          href="#_"
          className="relative  px-5 py-3 mt-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-xl shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full rounded-xl h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200  group-hover:text-white ease">
            Proceed To Buy
          </span>
        </a>
      </div>
    </div>
  );
}

export default TotalAmount;
