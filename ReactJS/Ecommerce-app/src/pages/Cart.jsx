import CartItemsList from "../components/CartItemsList";

function Cart(props) {
  const {
    cartItems,
    handleIncrement,
    handleDecrement,
    handleDelete,
    resetCartItems,
  } = props;
  console.log(cartItems);

  return (
    <div className="max-w-6xl mx-auto py-8">
      <CartItemsList cartItems={cartItems} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleDelete={handleDelete} />
      {cartItems.length > 0 && (
        <div className="mt-6">
          <button
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors"
            onClick={resetCartItems}
          >
            Reset Items
          </button>
        </div>
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
      )}
    </div>
  );
}

export default Cart;
