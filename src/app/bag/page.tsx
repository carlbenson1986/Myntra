import React from "react";
import Navbar from "../components/Navbar";
import CartItem from "./CartItem";

export default function page() {
  const cartItems = [
    { name: "Product 1", price: 20.0, quantity: 2, subtotal: 40.0 },
    { name: "Product 2", price: 15.0, quantity: 1, subtotal: 15.0 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.subtotal, 0);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-24 p-4">
        <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

        {/* Add a container for the cart items */}
        <div className="bg-white border rounded-lg shadow-md p-4 mb-4">
          {cartItems.map((item, index) => (
            <CartItem key={index} {...item} />
          ))}
        </div>

        {/* Add a container for the total and "Proceed to Buy" button */}
        <div className="bg-white border rounded-lg shadow-md p-4">
          <div className="total">
            <p className="font-bold">Total: ${total.toFixed(2)}</p>
          </div>
          <button
            data-ripple-light="true"
            data-popover-target="popover-animation"
            className="middle none center rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Proceed To Buy
          </button>
          <div
            data-popover="popover-animation"
            data-popover-mount="opacity-100 scale-100"
            data-popover-unmount="opacity-0 scale-0 pointer-events-none"
            data-popover-transition="transition-all duration-200 origin-bottom"
            className="absolute w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
          >
            Your are heading to Payment Gateway...
          </div>
        </div>
      </div>
      <script
        type="module"
        src="node_modules/@material-tailwind/html@latest/scripts/popover.js"
      ></script>

      <script
        type="module"
        src="https://unpkg.com/@material-tailwind/html@latest/scripts/popover.js"
      ></script>
    </div>
  );
}
