import CartItemsList from "../components/CartItemsList";
import OrderSummary from "../components/OrderSummary";

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

  const totalItems = cartItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
        {cartItems.length > 0 && (
          <span className="bg-gray-100 text-gray-600 text-sm font-medium px-2.5 py-0.5 rounded-full">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Items list */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <CartItemsList
            cartItems={cartItems}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
            itemsError={itemsError}
            itemsLoading={itemsLoading}
          />
        </div>

        {/* Order summary */}
        <OrderSummary
          cartItems={cartItems}
          resetCartItems={resetCartItems}
          totalItems={totalItems}
        />
      </div>
    </div>
  );
}

export default Cart;
