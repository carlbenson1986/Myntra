import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "../components/Navbar/Navbar";
export default function loading() {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto mt-24 p-4">
        <h1 className="text-2xl font-bold mb-4">Taking you to Bag ...</h1>
        <Skeleton count={3} />
      </div>
    </div>
  );
}
