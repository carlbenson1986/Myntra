"use client";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { removeFromBag, removePrice } from "@/redux/features/manageBag";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";

interface Item {
  imageUrl: string;
  name: string;
  price: number;
}

function BagItems() {
  const items = useAppSelector((state) => state.reducers.bag);
  const dispatch = useDispatch();
  const removePriceAndBag = (item: Item) => {
    
    if (Object.keys(item).length === 0) {
      return;
    }
    dispatch(removeFromBag(item));

    dispatch(removePrice(item.price));
    console.log(item);
  };

  Object.entries(items).map(([itemId, item]) => {
    // console.log(item.name);
  });
  return (
    <div className="bg-white border rounded-lg shadow-md overflow-scroll h-72 p-4 mb-4">
      {Object.entries(items).map((item: any) => (
        <div className="flex justify-between items-center my-4" key={item[0]}>
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
                <button
                  type="button"
                  onClick={() => removePriceAndBag(item[1])}
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none text-xl
              focus:ring-4 focus:ring-red-300 font-medium rounded-full  px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600
               dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  <AiFillDelete></AiFillDelete>
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BagItems;
