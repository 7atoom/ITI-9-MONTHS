import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Admin from "./pages/Admin";
import axios from "axios";
import Form from "./components/ProductForm";

function App() {
  // ------ States ------ //
  const [items, setItems] = useState([]);
  const [itemsError, setItemsError] = useState(null);
  const [itemsLoading, setItemsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoriesError, setCategoriesError] = useState(null);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);

  // ------ Effects ------ //
  useEffect(() => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const fetchItems = async () => {
      const controller = new AbortController();

      setItemsError(null);
      setItemsLoading(true);
      try {
        await delay(2000);
        const { data } = await axios.get("http://localhost:3000/items", {
          signal: controller.signal,
        });
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
        setItemsError(error.message);
      } finally {
        setItemsLoading(false);
      }
    };

    const fetchCategories = async () => {
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));

      const controller = new AbortController();
      setCategoriesError(null);
      setCategoriesLoading(true);
      try {
        await delay(2000);

        const { data } = await axios.get("http://localhost:3000/categories", {
          signal: controller.signal,
        });
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategoriesError(error.message);
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchItems();
    fetchCategories();
  }, []);

  // ----- Handlers ------ //
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
    ? items.filter((item) => +item.categoryId === +selectedCategory)
    : items;

  const noCartItems = items.filter((item) => item.isInCart).length;

  const handledCartItems = items.filter(
    (item) => item.isInCart && item.count > 0
  );

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleEditItem = (editedItem) => {
    const newItems = items.map((item) =>
      item.id === editedItem.id ? editedItem : item
    );
    setItems(newItems);
  };

  return (
    <>
      <div>
        <NavBar noCartItems={noCartItems} />
        <Routes>
          <Route
            index
            element={
              <Home
                items={filteredItems}
                handleToggleAddToCart={handleToggleAddToCart}
                categories={categories}
                handleSelectCategoryId={handleSelectCategoryId}
                selectedCategory={selectedCategory}
                itmesPerPage={4}
                itemsError={itemsError}
                itemsLoading={itemsLoading}
                categoriesError={categoriesError}
                categoriesLoading={categoriesLoading}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <Admin
                items={items}
                itemsError={itemsError}
                itemsLoading={itemsLoading}
              />
            }
          />
          <Route path="/admin/new" element={<Form />} />
          <Route path="/admin/:id" element={<Form />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={handledCartItems}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
                resetCartItems={resetCartItems}
                itemsError={itemsError}
                itemsLoading={itemsLoading}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
