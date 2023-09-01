import { BsBag } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineSearch,
} from "react-icons/ai";
export default function Navbar() {
  return (
    <nav
      className="bg-white 
      top-0  left-0 right-0 fixed z-50 p-4 flex 
      justify-between items-center drop-shadow-md"
    >
      {/* Logo */}
      <div className="flex items-center ">
        <a href="/">
          <img
            src="https://ww1.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png"
            alt=""
            className="md:h-9 max-sm:h-8 max-sm:mr-1 md:mx-5"
          />
        </a>
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
            <a
              href="/shop"
              className="font-semibold md:text-sm   max-sm:text-xs"
            >
              KIDS
            </a>
          </li>
          <li>
            <a href="/shop" className="font-semibold max-sm:hidden text-sm">
              HOME & LIVING
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className="font-semibold  max-sm:text-xs md:text-sm"
            >
              BEAUTY
            </a>
          </li>
          <li>
            <a href="/shop" className="font-semibold  max-sm:text-xs text-sm ">
              STUDIO
            </a>
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
          />
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
        <a href="#" className=" text-xs">
          <div className="text-center text-stone-600 text-xl ">
            <BsBag />
          </div>
          <span>Bag</span>
        </a>
      </div>
    </nav>
  );
}
