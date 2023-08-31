export default function Navbar() {
    return (
      <nav className="bg-white top-0  left-0 right-0 fixed  p-4 flex justify-between items-center drop-shadow-md">
        {/* Logo */}
        <div className="flex items-center ">
          <img
            src="https://ww1.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png"
            alt=""
            className="h-9 mx-5"
          />
  
          {/* Menu Items */}
          <ul className="flex space-x-6 ">
            <li>
              <a href="#" className="font-semibold text-sm">
                MEN
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold text-sm">
                WOMEN
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold text-sm">
                KIDS{" "}
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold text-sm">
                HOME & LIVING
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold text-sm">
                BEAUTY
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold text-sm">
                STUDIO
              </a>
            </li>
          </ul>
        </div>
        {/* Search Bar and Cart */}
        <div className="flex items-center space-x-10">
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