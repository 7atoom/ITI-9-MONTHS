import CartItemsList from "../components/CartItemsList";

function Cart(props) {
  const {
    cartItems,
    handleIncrement,
    handleDecrement,
    handleDelete,
    resetCartItems,
    itemsError,
    itemsLoading,
  } = props;
  console.log(cartItems);

  return (
    <div className="max-w-6xl mx-auto py-8">
      <CartItemsList cartItems={cartItems} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleDelete={handleDelete} itemsError={itemsError} itemsLoading={itemsLoading} />
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
    </div>
  );
}

export default Cart;
