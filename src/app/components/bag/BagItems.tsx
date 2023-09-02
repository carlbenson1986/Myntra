"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";

function BagItems() {
  const items = useAppSelector((state) => state.reducers.bag);
  const d = ()=>{
        items.splice(0,1);

    }
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 mb-4" onClick={d}>
      {Object.entries(items).map((item) => (
        <div className="flex justify-between items-center my-4">
          {item.length && (
            <div className="flex items-center">
              <img
              src={`${item[1].imageUrl}`}
              alt=""
              className="w-16 h-16 object-cover"
            />
              <div className="ml-4">
                <p className="font-bold text-lg">{item[1].name}</p>
                <p className="text-gray-500">${item[1].price}</p>
              </div>
            </div>
          )}
          
          
        </div>
      ))}
    </div>
  );
}

export default BagItems;
