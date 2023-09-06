import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Navbar from "../components/Navbar/Navbar";
import Filters from "./Filters";
import ProductList from "./ProductList";
import { Footer } from "../components/HomePage/Footer/Footer";
import dataP from "../components/data/data";

export default function page() {
  return (
    <div>
     

      <div className="mt-32 flex">
        {/* heading of filt */}
        <h1 className="font-bold p-2 mr-32 ml-3 mb-1">FILTERS</h1>
        {/* brief info for products */}
        <div className="flex  ">
          <div className="flex flex-row sm:mr-56 sm:ml-5">
            <h2 className="font-light py-2 px-4 flex text-sm">
              Bundles
              <div className="mt-1 px-1 mx-1 ">
                <AiOutlineArrowDown />
              </div>
            </h2>
            <h2 className="font-light py-2 px-4 flex text-sm">
              Country of Origin
              <div className="mt-1 px-1 mx-1 ">
                <AiOutlineArrowDown />
              </div>
            </h2>
            <h2 className="font-light py-2 px-4 flex text-sm">
              Size
              <div className="mt-1 px-1 mx-1 ">
                <AiOutlineArrowDown />
              </div>{" "}
            </h2>
          </div>

          <div>
            <button className="flex sm:ml-64 border-2 border-slate-100 px-4 py-1 space-x-8">
              <h3 className="font-light text-sm">Sort by:</h3>
              <h4 className="font-bolder text-sm">Recommended</h4>
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        <Filters />
        <ProductList data={dataP} />
      </div>

      <Footer />
    </div>
  );
}
