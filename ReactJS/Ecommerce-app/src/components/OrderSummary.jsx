import React from "react";

function OrderSummary({ cartItems, resetCartItems, totalItems }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  return (
    <div>
      {cartItems.length > 0 && (
        <div className="lg:w-72">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex justify-between">
                <span>Items ({totalItems})</span>
                <span>{totalPrice} EGP</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 mb-6">
              <div className="flex justify-between font-bold text-gray-800 text-base">
                <span>Total</span>
                <span>{totalPrice} EGP</span>
              </div>
            </div>

            <button className="w-full bg-gray-800 text-white py-2.5 rounded-xl font-medium hover:bg-gray-700 transition-colors mb-3 cursor-pointer">
              Checkout
            </button>
            <button
              className="w-full border border-red-300 text-red-500 py-2 rounded-xl text-sm hover:bg-red-50 transition-colors cursor-pointer"
              onClick={resetCartItems}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
