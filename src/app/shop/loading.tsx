import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "../components/Navbar/Navbar";

export default function loading() {
  return (
    <div className="text-center  justify-center">
      <Navbar />
      <div className="mt-32 flex">
        <h1 className="font-bold p-2 mr-32 ml-3 mb-1">FILTERS</h1>

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

      <div className="flex  ">
        {/* <div className="container mx-auto mt-8 p-4">
          <h1 className="text-2xl font-bold mb-4">Loading your to Bag ...</h1>
          <Skeleton count={3} />
        </div> */}
        <div className="flex-none hover:shadow-xl border-2 border-slate-100 ">
          <div className="border-2  border-slate-100  flex pl-4 pr-32 py-4">
            <div className="flex flex-col pb-3">
              <div>
                <input type="radio" name="Men" id="" />
                <label form="Men" className="font-semibold p-2 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div>
                <input type="radio" name="Men" id="" />
                <label form="Men" className="font-semibold p-2 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div>
                <input type="radio" name="Men" id="" />
                <label form="Men" className="font-semibold p-2 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div>
                <input type="radio" name="Men" id="" />
                <label form="Men" className="font-semibold p-2 text-xs">
                  <Skeleton />
                </label>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-100">
            <h3 className="uppercase font-semibold p-3 text-sm">
              {" "}
              <Skeleton />
            </h3>
            <div className=" pl-4 pb-3 ">
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-100">
            <h3 className="uppercase font-semibold text-sm p-3 ">
              {" "}
              <Skeleton />
            </h3>
            <div className=" pl-4  pb-3">
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
            </div>
          </div>




          
          <div className="border-2 border-slate-100">
            <h3 className="uppercase font-semibold p-3">price</h3>
            <div className=" pl-4  pb-3">
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-100">
            <h3 className="uppercase p-3 font-semibold  text-sm">
              {" "}
              <Skeleton />
            </h3>
            <div className=" pl-4 pb-3 ">
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />{" "}
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />{" "}
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />{" "}
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />{" "}
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="checkbox" name="" id="" />
                <label form="" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-100">
            <h3 className="uppercase font-semibold text-sm p-3">
              {" "}
              <Skeleton />
            </h3>
            <div className=" pl-4  pb-3">
              <div className="flex ">
                <input className="" type="radio" name="ds" id="" />
                <label form="discount" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="radio" name="ds" id="" />
                <label form="discount" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="radio" name="ds" id="" />
                <label form="discount" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="radio" name="ds" id="" />
                <label form="discount" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="radio" name="ds" id="" />
                <label form="discount" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="radio" name="ds" id="" />
                <label form="discount" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="radio" name="ds" id="" />
                <label form="discount" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
              <div className="flex ">
                <input className="" type="radio" name="ds" id="" />
                <label form="discount" className="font-light p-1 text-xs">
                  <Skeleton />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4">
          <div className="max-w-lg hover:shadow-xl bg-white rounded-lg overflow-hidden m-4 item-container">
            <Skeleton
              width={200}
              height={200}
              className="h-40 my-6 object-cover"
            />
            <div className="px-4 py-2">
              <div className="text-gray-900 font-semibold text-lg">
                <Skeleton />
              </div>
              <div className="text-gray-600 text-sm">
                <Skeleton />
              </div>
              <div className="flex items-center mt-2">
                <Skeleton />
                <span className="text-yellow-500 ml-1">
                  <Skeleton />
                </span>
              </div>
              <div className="text-gray-900 font-semibold mt-2">
                <Skeleton />
              </div>
            </div>
          </div>
          <div className="max-w-lg hover:shadow-xl bg-white rounded-lg overflow-hidden m-4 item-container">
            <Skeleton
              width={200}
              height={200}
              className="h-40 my-6 object-cover"
            />
            <div className="px-4 py-2">
              <div className="text-gray-900 font-semibold text-lg">
                <Skeleton />
              </div>
              <div className="text-gray-600 text-sm">
                <Skeleton />
              </div>
              <div className="flex items-center mt-2">
                <Skeleton />
                <span className="text-yellow-500 ml-1">
                  <Skeleton />
                </span>
              </div>
              <div className="text-gray-900 font-semibold mt-2">
                <Skeleton />
              </div>
            </div>
          </div>
          <div className="max-w-lg hover:shadow-xl bg-white rounded-lg overflow-hidden m-4 item-container">
            <Skeleton
              width={200}
              height={200}
              className="h-40 my-6 object-cover"
            />
            <div className="px-4 py-2">
              <div className="text-gray-900 font-semibold text-lg">
                <Skeleton />
              </div>
              <div className="text-gray-600 text-sm">
                <Skeleton />
              </div>
              <div className="flex items-center mt-2">
                <Skeleton />
                <span className="text-yellow-500 ml-1">
                  <Skeleton />
                </span>
              </div>
              <div className="text-gray-900 font-semibold mt-2">
                <Skeleton />
              </div>
            </div>
          </div>
          <div className="max-w-lg hover:shadow-xl bg-white rounded-lg overflow-hidden m-4 item-container">
            <Skeleton
              width={200}
              height={200}
              className="h-40 my-6 object-cover"
            />
            <div className="px-4 py-2">
              <div className="text-gray-900 font-semibold text-lg">
                <Skeleton />
              </div>
              <div className="text-gray-600 text-sm">
                <Skeleton />
              </div>
              <div className="flex items-center mt-2">
                <Skeleton />
                <span className="text-yellow-500 ml-1">
                  <Skeleton />
                </span>
              </div>
              <div className="text-gray-900 font-semibold mt-2">
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
