import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import dataP from "../components/data/data";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import Image from "next/image";

export default function loading() {
  return (
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
        <h3 className="uppercase p-3 font-semibold  text-sm">                <Skeleton />
</h3>
        <div className=" pl-4 pb-3 ">
          <div className="flex ">
            <input className="" type="checkbox" name="" id="" />
            <label form="" className="font-light p-1 text-xs">
            <Skeleton />
{" "}
            </label>
          </div>
          <div className="flex ">
            <input className="" type="checkbox" name="" id="" />
            <label form="" className="font-light p-1 text-xs">
            <Skeleton />
{" "}
            </label>
          </div>
          <div className="flex ">
            <input className="" type="checkbox" name="" id="" />
            <label form="" className="font-light p-1 text-xs">
            <Skeleton />
{" "}
            </label>
          </div>
          <div className="flex ">
            <input className="" type="checkbox" name="" id="" />
            <label form="" className="font-light p-1 text-xs">
            <Skeleton />
{" "}
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
        <h3 className="uppercase font-semibold text-sm p-3">                <Skeleton />
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
  );
}
