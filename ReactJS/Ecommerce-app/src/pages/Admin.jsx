import { useState } from "react";
import ItemsList from "../components/ItemsList";
import PaginatedPages from "../components/PaginatedItems";

function Admin({ items, itemsError, itemsLoading }) {
  const [selectedPage, setSelectedPage] = useState(0);
    const [itemsOffset, setItemsOffset] = useState(0);

  const endOffset = itemsOffset + 5;
  const currentItems = items.slice(itemsOffset, endOffset);
  const pageCount = Math.ceil(items.length / 5);

  const handleSelectPage = (id) => {
    setSelectedPage(id);
    const newOffset = (id * 5) % items.length;
    setItemsOffset(newOffset);
  };

  return (
    <div>
      <ItemsList
        currentItems={currentItems}
        itemsError={itemsError}
        itemsLoading={itemsLoading}
        handleToggleAddToCart={() => {}}
        isAdmin={true}
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
