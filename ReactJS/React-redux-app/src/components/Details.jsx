import React from "react";
import { useSelector } from "react-redux";

function Details() {
  const product = useSelector((state) => state.selectProduct.product);

  if (!product) {
    return (
      <div className="text-center text-gray-500 m-2">
        Select a product to see details
      </div>
    );
  }
  return (
    <div className="border p-4 m-2">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-lg">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default Details;
