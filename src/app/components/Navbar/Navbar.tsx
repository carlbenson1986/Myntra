"use client";

import LogoAndMenuItems from "./LogoAndMenuItems";
import SearchBar from "./SearchBar";

export default function Navbar() {

  return (
    <nav
      className="bg-white 
      top-0  left-0 right-0 fixed z-50 p-4 flex 
      justify-between items-center drop-shadow-md"
    >
      {/* Logo */}
      <LogoAndMenuItems/>

      {/* Search Bar and Cart */}
        <SearchBar/>
    </nav>
  );
}
