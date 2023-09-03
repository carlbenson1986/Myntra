"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

function BagItems() {
  const items = useAppSelector((state) => state.reducers.bag);
  const removePriceAndBag=()=>{}

  return (
    <div className="bg-white border rounded-lg shadow-md overflow-scroll h-72 p-4 mb-4">
      {Object.entries(items).map((item) => (
        <div className="flex justify-between items-center my-4">
          {item.length && (
            <div className="flex items-center  w-64 flex-none">
              <img
                src={`${item[1].imageUrl}`}
                alt=""
                className="w-16 h-16 object-cover"
              />
              <div className="ml-4 flex-none">
                <p className="font-bold text-lg">{item[1].name}</p>
                <p className="text-gray-500">${item[1].price}</p>
              </div>
              <div className="ml-36">
              <button type="button" onClick={removePriceAndBag} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none text-xl
              focus:ring-4 focus:ring-red-300 font-medium rounded-full  px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600
               dark:hover:bg-red-700 dark:focus:ring-red-900"><AiFillDelete></AiFillDelete></button>

              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BagItems;
