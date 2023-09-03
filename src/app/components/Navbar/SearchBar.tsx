import React, { useState } from "react";
import SearchList from "../searchFun/SeachList";
import Profile from "./Profile";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import dataP from "../data/data";

function SearchBar() {
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
    <div className="flex items-center max-sm:hidden space-x-8">
        {/* search bar */}
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
        {/* product from seach parameter */}
        {showPopup && (
          <div className=" absolute mt-20 w-80 top-5 h-80 overflow-hidden bg-white shadow-lg rounded px-4 py-2 ">
            {/* Contents of your floating div */}
            <SearchList data={sortedProduct} />
          </div>
        )}
      </div>

      {/* profile  */}
      <div className="text-center text-stone-600 pl-2 text-xl ">
        <Profile />
      </div>
      {/* wishlist */}
      <a href="#" className="text-xs ">
        <div className="text-center text-stone-600 pl-2 text-xl ">
          <AiOutlineHeart />
        </div>
        <span>WishList</span>
      </a>
      {/* Bag */}
      <Link href="/bag" className="text-xs">
        <div className="text-center text-stone-600 text-xl ">
          <BsBag />
        </div>
        <span>Bag</span>
      </Link>
    </div>
  );
}

export default SearchBar;
