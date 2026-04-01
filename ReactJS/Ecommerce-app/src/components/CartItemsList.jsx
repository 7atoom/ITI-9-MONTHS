import React from 'react'
import CartItem from './CartItem';

function CartItemsList({cartItems, handleIncrement, handleDecrement, handleDelete, itemsError, itemsLoading}) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-wrap gap-4">
        {itemsError && (
          <div className="text-red-500 text-sm mb-2">
            Error loading items: {itemsError}
          </div>
        )}
        {itemsLoading && (
          <div className="loading loading-spinner loading-md"></div>
        )}
        {cartItems.length === 0 && (
          <div className="flex items-center justify-center gap-2">
            <div className="text-3xl text-center">No items in the cart!</div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </span>
          </div>
        ) }
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
    </div>
  );
}

export default CartItemsList;