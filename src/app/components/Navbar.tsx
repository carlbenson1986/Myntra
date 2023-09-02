"use client";
import { BsBag } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";

import { useEffect, useState } from "react";
import dataP from "./data/data";
import SearchList from "./searchFun/SeachList";
import Link from "next/link";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // getting the query and storing sorted data in sortedProduct
  const filteredProducts = dataP.filter((product) => {
    let a = product.name.toUpperCase().includes(query);
    return a;
  });
  const filteredProductsBrand = dataP.filter((product) => {
    let a = product.brand.toUpperCase().includes(query);
    return a;
  });
  const sortedProduct = { ...filteredProducts, ...filteredProductsBrand };

  //  showing the seached product to user

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSearchKeyPress = (event: any) => {
    if (event.key === "Enter") {
      togglePopup();
    }
  };

  return (
    <nav
      className="bg-white 
      top-0  left-0 right-0 fixed z-50 p-4 flex 
      justify-between items-center drop-shadow-md"
    >
      {/* Logo */}
      <div className="flex items-center ">
        <Link href={"/"}>
          <img
            src="https://ww1.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png"
            alt=""
            className="md:h-9 max-sm:h-8 max-sm:mr-1 md:mx-5"
          />
        </Link>
        {/* Menu Items */}
        <ul className="flex md:space-x-6 max-sm:space-x-2">
          <li>
            <a
              href="/shop"
              className="font-semibold md:text-sm  max-sm:text-xs"
            >
              MEN
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className="font-semibold md:text-sm   max-sm:text-xs"
            >
              WOMEN
            </a>
          </li>
          <li>
            <Link
              href={"/shop"}
              className="font-semibold max-sm:text-xs text-sm"
            >
              KIDS
            </Link>
          </li>
          <li>
            <Link
              href={"/shop"}
              className="font-semibold max-sm:text-xs text-sm"
            >
              HOME & LIVING
            </Link>
          </li>
          <li>
            <Link
              href={"/shop"}
              className="font-semibold max-sm:text-xs text-sm"
            >
              BEAUTY
            </Link>
          </li>
          <li>
            <Link
              href={"/shop"}
              className="font-semibold max-sm:text-xs text-sm"
            >
              STUDIO
            </Link>
          </li>
        </ul>
      </div>
      {/* Search Bar and Cart */}
      <div className="flex items-center max-sm:hidden space-x-8">
        <div className="flex">
          <div className="bg-slate-100 text-center pt-2 pl-2 text-lg text-stone-600 ">
            <AiOutlineSearch />
          </div>
          <input
            className="px-4 py-2 bg-slate-100  focus:outline-none w-80 text-sm focus:border-gray-400"
            type="text"
            placeholder="Search for products,brands and more"
            value={query}
            onChange={(event) => setQuery(event.target.value.toUpperCase())}
            onKeyDown={handleSearchKeyPress}
          />
          {showPopup && (
            <div className=" absolute mt-20 w-80 top-5 h-80 overflow-hidden bg-white shadow-lg rounded px-4 py-2 ">
              {/* Contents of your floating div */}
              <SearchList data={sortedProduct} />
            </div>
          )}
        </div>

        <a href="#" className="text-xs ">
          <div className="text-center text-stone-600 pl-2 text-xl ">
            <AiOutlineUser />
          </div>
          <span>Profile</span>
        </a>
        <a href="#" className="text-xs ">
          <div className="text-center text-stone-600 pl-2 text-xl ">
            <AiOutlineHeart />
          </div>
          <span>WishList</span>
        </a>
        <Link href="/bag" className="text-xs">
          <div className="text-center text-stone-600 text-xl ">
            <BsBag />
          </div>
          <span>Bag</span>
        </Link>
      </div>
    </nav>
  );
}
