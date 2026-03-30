import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Admin from "./pages/Admin";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "small burger",
      count: 2,
      price: 50,
      categoryId: 1,
      isInCart: true,
    },
    {
      id: 2,
      name: "medium burger",
      count: 1,
      price: 70,
      categoryId: 1,
      isInCart: true,
    },
    {
      id: 3,
      name: "large burger",
      count: 0,
      price: 90,
      categoryId: 1,
      isInCart: false,
    },

    {
      id: 4,
      name: "small pizza",
      count: 1,
      price: 80,
      categoryId: 2,
      isInCart: true,
    },
    {
      id: 5,
      name: "medium pizza",
      count: 0,
      price: 120,
      categoryId: 2,
      isInCart: false,
    },
    {
      id: 6,
      name: "large pizza",
      count: 0,
      price: 150,
      categoryId: 2,
      isInCart: false,
    },

    {
      id: 7,
      name: "small fries",
      count: 3,
      price: 25,
      categoryId: 3,
      isInCart: true,
    },
    {
      id: 8,
      name: "medium fries",
      count: 1,
      price: 35,
      categoryId: 3,
      isInCart: true,
    },
    {
      id: 9,
      name: "large fries",
      count: 0,
      price: 45,
      categoryId: 3,
      isInCart: false,
    },

    {
      id: 10,
      name: "small cola",
      count: 2,
      price: 15,
      categoryId: 4,
      isInCart: true,
    },
    {
      id: 11,
      name: "large cola",
      count: 1,
      price: 25,
      categoryId: 4,
      isInCart: true,
    },
    {
      id: 12,
      name: "water bottle",
      count: 5,
      price: 10,
      categoryId: 4,
      isInCart: true,
    },

    {
      id: 13,
      name: "small ice cream",
      count: 1,
      price: 30,
      categoryId: 5,
      isInCart: true,
    },
    {
      id: 14,
      name: "large ice cream",
      count: 0,
      price: 50,
      categoryId: 5,
      isInCart: false,
    },
    {
      id: 15,
      name: "cake slice",
      count: 2,
      price: 45,
      categoryId: 5,
      isInCart: true,
    },
  ]);

  const categories = [
    { id: 1, name: "Burger" },
    { id: 2, name: "Pizza" },
    { id: 3, name: "Fries" },
    { id: 4, name: "Drinks" },
    { id: 5, name: "Desserts" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleIncrement = (id) => {
    // clone & edit
    const newItems = items.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    // setState
    setItems(newItems);
  };

  const handleDecrement = (id) => {
    const newItems = items.map((item) =>
      item.id === id && item.count > 0
        ? { ...item, count: item.count - 1 }
        : item
    );
    setItems(newItems);
  };

  const handleDelete = (id) => {
    handleToggleAddToCart(id);
  };

  const resetCartItems = () => {
    const newItems = items.map((item) => ({
      ...item,
      count: (item.count = 1),
    }));
    setItems(newItems);
  };

  const handleToggleAddToCart = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const isInCart = !item.isInCart;
        return { ...item, isInCart: isInCart, count: isInCart ? 1 : 0 };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleSelectCategoryId = (id) => {
    setSelectedCategory(id);
  };

  const filteredItems = selectedCategory
    ? items.filter((item) => item.categoryId === selectedCategory)
    : items;

  const noCartItems = items.filter((item) => item.isInCart).length;
  console.log(noCartItems);
  console.log(filteredItems);

  const handledCartItems = items.filter(
    (item) => item.isInCart && item.count > 0
  );

  return (
    <>
      <div>
        <NavBar noCartItems={noCartItems} />
        <Routes>
          <Route
            index
            element={
              <Home
                cartItems={filteredItems}
                handleToggleAddToCart={handleToggleAddToCart}
                categories={categories}
                handleSelectCategoryId={handleSelectCategoryId}
                selectedCategory={selectedCategory}
                itmesPerPage={4}
              />
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={handledCartItems}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
                resetCartItems={resetCartItems}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
