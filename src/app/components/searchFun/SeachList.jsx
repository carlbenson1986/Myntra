import React from "react";
import { nanoid } from "nanoid";
import AddToBagButton from "./AddToBag";
import { useDispatch } from "react-redux";
import { addToBag , addPrice} from "@/redux/features/manageBag";

export default function SearchList(data) {
  const sortedProducts = [];
  const currentItem = [];

  Object.entries(data.data).forEach(([key, value]) => {
    const product = {
      name: value.name,
      imageUrl: value.imageUrl,
      price: value.price,
    };

    sortedProducts.push(product);
  });

  const id = nanoid(20);

  const dispatch = useDispatch();
  
  const addItem = (item) => {
    dispatch(addPrice(item.price));
    dispatch(addToBag(item));
  };

  return (
    <div className="h-screen overflow-y-scroll">
      {/* ^ Apply this class to enable vertical scrolling */}

      {sortedProducts && (
        <div>
          <div>
            {sortedProducts.map((item) => (
              <div className="flex rounded-md items-center mb-4 border-2 hover:shadow-xl ">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-12 h-12 px-2 rounded-full mr-4"
                />
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-500">${item.price}</p>
                </div>

                <div onClick={() => addItem(item)}>
                  <div className="hidden">{currentItem.push(item)}</div>
                  <AddToBagButton />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
