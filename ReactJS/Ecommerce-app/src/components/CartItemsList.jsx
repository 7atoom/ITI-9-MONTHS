import React from 'react'
import CartItem from './CartItem';

function CartItemsList({cartItems, handleIncrement, handleDecrement, handleDelete, itemsError, itemsLoading}) {
  if (itemsError) {
    return (
      <div className="text-red-500 text-sm py-4">
        Error loading items: {itemsError}
      </div>
    );
  }

  if (itemsLoading) {
    return (
      <div className="flex justify-center py-10">
        <div className="loading loading-spinner loading-md"></div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400 gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-16 h-16">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        <p className="text-xl font-medium">Your cart is empty</p>
        <p className="text-sm">Add some items to get started!</p>
      </div>
    );
  }

  return (
    <div>
      {/* Column headers */}
      <div className="flex items-center gap-4 pb-2 border-b border-gray-200 text-xs font-semibold text-gray-400 uppercase tracking-wide">
        <div className="flex-1">Product</div>
        <div className="w-20 text-right">Price</div>
        <div className="w-28 text-center">Quantity</div>
        <div className="w-24 text-right">Total</div>
        <div className="w-5 ml-2"></div>
      </div>

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          item={item}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default CartItemsList;
