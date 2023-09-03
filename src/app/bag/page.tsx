"use client";
import React from "react";
import BagItems from "../components/bag/BagItems";
import Navbar from "../components/Navbar/Navbar";
import TotalAmount from "../components/bag/TotalAmount";

export default function page() {


  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-24 p-4">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

        {/* Add a container for the cart items */}
        <BagItems />

        {/* Add a container for the total and "Proceed to Buy" button */}
        <TotalAmount />
      </div>
    </div>
  );
}