import React from "react";

import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { Footer } from "../components/Footer";
import Skeleton from "react-loading-skeleton";

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="mt-32 flex">
        <h1 className="font-bold p-2 mr-32 ml-3 mb-1">FILTERS</h1>

        <div className="flex  ">
              <div className="flex flex-row sm:mr-56 sm:ml-5">
                    <h2 className="font-light py-2 px-4 text-sm">Bundles</h2>
                    <h2 className="font-light py-2 px-4 text-sm">Country of Origin</h2>
                    <h2 className="font-light py-2 px-4 text-sm">Size</h2>
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
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}
