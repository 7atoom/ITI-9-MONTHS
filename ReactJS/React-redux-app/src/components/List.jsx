import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../redux/selectProductSlice";
import { fetchProducts } from "../redux/productsSlice";

function List() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong!!</div>;
  }

  return (
    <div>
      {data.map((product) => (
        <div
          className="border p-2 cursor-pointer m-2"
          onClick={() => dispatch(selectProduct(product))}
          key={product.id}
        >
          {product.name} - ${product.price}
        </div>
      ))}
    </div>
  );
}

export default List;
