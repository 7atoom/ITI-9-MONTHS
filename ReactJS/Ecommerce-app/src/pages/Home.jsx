import React, { useState } from "react";
import AddToCart from "../components/AddToCart";
import Filter from "../components/Filter";
import PaginatedPages from "../components/PaginatedItems";
import ItemsList from "../components/ItemsList";

function Home(props) {
  const {
    categories,
    cartItems,
    handleToggleAddToCart,
    handleSelectCategoryId,
    selectedCategory,
    itmesPerPage,
  } = props;

  const [selectedPage, setSelectedPage] = useState(0);
  const [itemsOffset, setItemsOffset] = useState(0);
  console.log(selectedPage);

  const endOffset = itemsOffset + itmesPerPage;
  console.log(`Loading items from ${itemsOffset} to ${endOffset}`);
  const currentItems = cartItems.slice(itemsOffset, endOffset);
  console.log(currentItems);
  const pageCount = Math.ceil(cartItems.length / itmesPerPage);

  const handleSelectPage = (id) => {
    setSelectedPage(id);
    const newOffset = (id * itmesPerPage) % cartItems.length;
    setItemsOffset(newOffset);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Filter
        categories={categories}
        handleSelectCategoryId={handleSelectCategoryId}
        selectedCategory={selectedCategory}
      />
      <ItemsList currentItems={currentItems} handleToggleAddToCart={handleToggleAddToCart} />
      <PaginatedPages
        selectedPage={selectedPage}
        handleSelectPage={handleSelectPage}
        pageCount={pageCount}
      />
    </div>
  );
}

export default Home;
