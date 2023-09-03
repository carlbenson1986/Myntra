"use client";
import React from "react";
import { AppDispatch, useAppSelector } from "@/redux/store";
import BagItems from "../components/bag/BagItems";
import Navbar from "../components/Navbar/Navbar";
import { Button } from "@material-tailwind/react";
import TotalAmount from "../components/bag/TotalAmount";

export default function page() {
 

    // console.log(items);
    
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-24 p-4">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

        {/* Add a container for the cart items */}
        <BagItems/>

        {/* Add a container for the total and "Proceed to Buy" button */}
       <TotalAmount/>
      </div>
      
    </div>
  );
}






























// <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
//    <li class="pb-3 sm:pb-4">
//       <div class="flex items-center space-x-4">
//          <div class="flex-shrink-0">
//             <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image">
//          </div>
      
//          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
//             $320
//          </div>
//       </div>
//    </li>

