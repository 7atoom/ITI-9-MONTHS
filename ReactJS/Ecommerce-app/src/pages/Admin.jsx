import { useCallback, useState } from "react";
import ItemsList from "../components/ItemsList";
import PaginatedPages from "../components/PaginatedItems";
import Filter from "../components/Filter";

function Admin({
  items,
  itemsError,
  itemsLoading,
  categories,
  categoriesLoading,
  handleEditItem,
  handleDeleteItem,
  handleSelectCategoryId,
  selectedCategory,
  categoriesError,
}) {
  const [selectedPage, setSelectedPage] = useState(0);
  const [itemsOffset, setItemsOffset] = useState(0);

  const endOffset = itemsOffset + 5;
  const currentItems = items.slice(itemsOffset, endOffset);
  const pageCount = Math.ceil(items.length / 5);

  const handleSelectPage = useCallback(
    (id) => {
      setSelectedPage(id);
      const newOffset = (id * 5) % items.length;
      setItemsOffset(newOffset);
    },
    [items.length]
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Filter
        categories={categories}
        handleSelectCategoryId={handleSelectCategoryId}
        selectedCategory={selectedCategory}
        categoriesError={categoriesError}
        categoriesLoading={categoriesLoading}
      />
      <ItemsList
        currentItems={currentItems}
        itemsError={itemsError}
        itemsLoading={itemsLoading}
        isAdmin={true}
        categories={categories}
        categoriesLoading={categoriesLoading}
        handleEditItem={handleEditItem}
        handleDeleteItem={handleDeleteItem}
      />
      <PaginatedPages
        pageCount={pageCount}
        selectedPage={selectedPage}
        handleSelectPage={handleSelectPage}
      />
    </div>
  );
}

export default Admin;
