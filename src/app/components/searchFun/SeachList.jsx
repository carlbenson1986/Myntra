import React from "react";
import { nanoid } from "nanoid";
import AddToBagButton from "./AddToBag";

export default function SearchList(data) {
  const sortedProducts = [];

  Object.entries(data.data).forEach(([key, value]) => {
    const product = {
      name: value.name,
      imageUrl: value.imageUrl,
      price: value.price,
    };

    sortedProducts.push(product);
  });

  const id = nanoid(20);

  return (
    <div className="h-screen overflow-y-scroll">
      {/* ^ Apply this class to enable vertical scrolling */}
      {sortedProducts && (
        <div>
          <ul>
            {sortedProducts.map((item) => (
              <li
                className="flex rounded-md items-center mb-4 border-2 hover:shadow-xl "
                key={id}
              >
                  
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-12 h-12 px-2 rounded-full mr-4"
                />
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-500">${item.price}</p>
                </div>
                {/* <button className=
                "bg-blue-500 
                hover:bg-blue-600 
                ml-6 
                active:bg-blue-700
                 text-white font-semibold 
                py-2 px-3 
                text-sm
                 rounded-full 
                shadow-md transform 
                transition-transform 
                hover:scale-105
                 focus:outline-none">
                  Add to Bag
                </button> */}
                <AddToBagButton/>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
