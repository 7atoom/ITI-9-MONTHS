import React from 'react'
import CartItem from './CartItem';

function CartItemsList({cartItems, handleIncrement, handleDecrement, handleDelete}) {
  return (
    <div>
      <div className="flex flex-wrap gap-4">
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