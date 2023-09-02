import React from 'react'

const CartItem = (props:any) => {
    return (
      <div className="flex justify-between items-center my-4">
        <div className="flex items-center">
          <img src="product-image.jpg" alt={props.name} className="w-16 h-16 object-cover" />
          <div className="ml-4">
            <p className="font-bold text-lg">{props.name}</p>
            <p className="text-gray-500">${props.price}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="mr-4">{props.quantity} x ${props.price}</p>
          <p className="font-bold">${props.subtotal}</p>
        </div>
      </div>
    );
  };

export default CartItem