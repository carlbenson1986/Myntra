"use client";
import React from "react";
import dataP from "./data";
import Image from "next/image";
import { data } from "autoprefixer";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Product = (product: any) => {
  return (
    <>
      <div className="max-w-lg hover:shadow-xl bg-white rounded-lg overflow-hidden m-4 item-container">
       
        <Image
          width={200}
          height={300}
          src={product.p.imageUrl || <Skeleton count={1} baseColor="#074a66"/>}
          alt="i"
          className="h-40 my-6  object-cover"
        />
        <div className="px-4 py-2">
          <div className="text-gray-900 font-semibold text-lg">
            {product.p.name}
          </div>
          <div className="text-gray-600 text-sm">{product.p.category}</div>
          <div className="flex items-center mt-2">
            <svg
              className="w-4 h-4 fill-current text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 
              6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v7h-2zm0 9h2v2h-2z" />
            </svg>
            <span className="text-yellow-500 ml-1">{product.p.rating}</span>
          </div>
          <div className="text-gray-900 font-semibold mt-2">
            {product.p.price}
          </div>
        </div>
      </div>
    </>
  );
};
export default function ProductList() {
    dataP.sort();
  return (
    <div className="flex-none px-8 hover:shadow-2xl">
      <div className="grid grid-cols-4 border-y-2 w-full border-slate-100">
       

        {dataP.map((product ,index) => (
          <Product p={product} key={index} />
        ))}
      </div>
    </div>
  );
}
