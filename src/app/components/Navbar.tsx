export default function Navbar() {
    return (
      <nav className="bg-white 
      top-0  left-0 right-0 fixed z-50 p-4 flex 
      justify-between items-center drop-shadow-md">
        {/* Logo */}
        <div className="flex items-center ">
          <img
            src="https://ww1.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png"
            alt=""
            className="md:h-9 max-sm:h-8 max-sm:mr-1 md:mx-5"
          />
  
          {/* Menu Items */}
          <ul className="flex md:space-x-6 max-sm:space-x-2">
            <li>
              <a href="#" className="font-semibold md:text-sm  max-sm:text-xs">
                MEN
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold md:text-sm   max-sm:text-xs">
                WOMEN
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold md:text-sm   max-sm:text-xs">
                  KIDS
                </a>
            </li>
            <li>
              <a href="#" className="font-semibold max-sm:hidden text-sm">
                HOME & LIVING
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold  max-sm:text-xs md:text-sm">
                BEAUTY
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold  max-sm:text-xs text-sm ">
                STUDIO</a>
            </li>
          </ul>
        </div>
        {/* Search Bar and Cart */}
        <div className="flex items-center max-sm:hidden space-x-10">
          <input
            type="text"
            placeholder="Search for products,brands and more"
            className="px-4 py-2 bg-slate-100  focus:outline-none w-80 text-sm focus:border-gray-400"
          />
          <a href="#" className="text-xs">
            <span>Profile</span>
          </a>
          <a href="#" className="text-xs ">
            <span>WishList</span>
          </a>
          <a href="#" className=" text-xs">
            <span>Bag</span>
          </a>
        </div>
      </nav>
    );
  };