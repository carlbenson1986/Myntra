import React from "react";
import { nanoid } from "nanoid";
import AddToBagButton from "./AddToBag";
import { useDispatch } from "react-redux";
import { addToBag, addPrice } from "@/redux/features/manageBag";


export default function SearchList(data:any) {
 
  const id = nanoid(20);

  const dispatch = useDispatch();

  const addItem = (item:any) => {
    dispatch(addPrice(item.price));
    dispatch(addToBag(item));
  };
  {
    Object.entries(data.data).map(item=>{console.log(item);})
  }
  return (
    <div className="h-screen overflow-y-scroll">
        {
          Object.entries(data.data).map((item:any)=>
          <div key={item[0]}>
             <div className="flex rounded-md items-center mb-4 border-2 hover:shadow-xl " >
                <img
                  src={item[1].imageUrl}
                  alt={item[1].name}
                  className="w-12 h-12 px-2 rounded-full mr-4"
                />
                <div>
                  <p className="text-lg font-semibold">{item[1].name}</p>
                  <p className="text-gray-500">${item[1].price}</p>
                </div>

                <div onClick={() => addItem(item[1])}>
                  <AddToBagButton />
                </div>
              </div>
          </div>)
        }
     
      
    </div>
  );
}
