import React, { useState } from "react";
import AddToCart from "../components/AddToCart";
import Filter from "../components/Filter";
import PaginatedPages from "../components/PaginatedItems";
import ItemsList from "../components/ItemsList";

function Home(props) {
  const {
    categories,
    items,
    handleToggleAddToCart,
    handleSelectCategoryId,
    selectedCategory,
    itmesPerPage,
    itemsError,
    categoriesError,
    itemsLoading,
    categoriesLoading,
  } = props;

  const [selectedPage, setSelectedPage] = useState(0);
  const [itemsOffset, setItemsOffset] = useState(0);
  console.log(selectedPage);

  const endOffset = itemsOffset + itmesPerPage;
  console.log(`Loading items from ${itemsOffset} to ${endOffset}`);
  const currentItems = items.slice(itemsOffset, endOffset);
  console.log(currentItems);
  const pageCount = Math.ceil(items.length / itmesPerPage);

  const handleSelectPage = (id) => {
    setSelectedPage(id);
    const newOffset = (id * itmesPerPage) % items.length;
    setItemsOffset(newOffset);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Filter
        categories={categories}
        handleSelectCategoryId={(id) => {
          if (id !== 0) {
            setSelectedPage(0);
            setItemsOffset(0);
          }
          handleSelectCategoryId(id);
        }}
        selectedCategory={selectedCategory}
        categoriesError={categoriesError}
        categoriesLoading={categoriesLoading}
      />
      <ItemsList
        currentItems={currentItems}
        handleToggleAddToCart={handleToggleAddToCart}
        itemsError={itemsError}
        itemsLoading={itemsLoading}
        categories={categories}
        categoriesLoading={categoriesLoading}
      />
      <PaginatedPages
        selectedPage={selectedPage}
        handleSelectPage={handleSelectPage}
        pageCount={pageCount}
      />
    </div>
  );
}

export default Home;
