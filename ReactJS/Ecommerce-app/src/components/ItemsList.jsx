import { useNavigate } from "react-router";
import AddToCart from "./AddToCart";
import FloatingButton from "./FloatingButton";
import { memo, useMemo } from "react";

function ItemsList({
  currentItems,
  handleToggleAddToCart,
  itemsError,
  itemsLoading,
  isAdmin,
  categories = [],
  categoriesLoading,
  handleDeleteItem,
}) {
  const categoryNames = useMemo(() => {
    return categories.reduce((acc, cat) => {
      acc[cat.id] = cat.name;
      return acc;
    }, {});
  }, [categories]);

  const navigate = useNavigate();
  const handleNavigateToEdit = (id) => {
    navigate(`/admin/${id}`);
  };

  if (currentItems.length === 0 && !itemsLoading && !itemsError) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 text-lg">No items found.</p>
      </div>
    );
  }

  return (
    <>
      <table className="w-full mt-6 border border-gray-200 rounded-lg overflow-hidden">
        {/* Table Header */}
        <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
          <tr>
            <th className="text-center px-6 py-3">Name</th>
            <th className="text-center px-6 py-3">Price</th>
            <th className="text-center px-6 py-3">Category</th>
            {isAdmin ? (
              <th className="text-center px-6 py-3">Edit Items</th>
            ) : null}
            {isAdmin ? (
              <th className="text-center px-6 py-3">Delete Items</th>
            ) : null}
            {!isAdmin && <th className="text-center px-6 py-3">Add to Cart</th>}
          </tr>
        </thead>
        {/* Table Body */}
        <tbody className="divide-y divide-gray-100 text-center">
          {itemsError && (
            <tr className="text-center">
              <td
                colSpan="3"
                className="text-red-500 text-sm px-6 py-4 text-center"
              >
                Error loading items: {itemsError}
              </td>
            </tr>
          )}
          {/* Loading State */}
          {itemsLoading && (
            <tr>
              <td colSpan="3" className="text-center py-4">
                <span className="loading loading-spinner loading-md"></span>
              </td>
            </tr>
          )}
          {/* Item Rows */}
          {currentItems.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-50 text-center transition-colors"
            >
              {/* Item Name */}
              <td className="px-6 py-4 font-medium text-gray-800">
                {item.name}
              </td>
              {/* Item Price */}
              <td className="px-6 py-4 text-gray-600">${item.price}</td>
              {/* Item Category */}
              <td className="px-6 py-4 text-gray-600">
                {categoriesLoading ? (
                  <span className="inline-block w-20 h-4 bg-gray-200 rounded animate-pulse" />
                ) : (
                  categoryNames[+item.categoryId] || "Unknown"
                )}
              </td>
              {/* Edit Item */}
              {isAdmin ? (
                <td
                  className="px-6 py-4 text-blue-500 cursor-pointer"
                  onClick={() => handleNavigateToEdit(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </td>
              ) : null}
              {/* Delete Item */}
              {isAdmin ? (
                <td
                  className="px-6 py-4 text-red-500 cursor-pointer"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </td>
              ) : null}
              {/* Add to Cart */}
              {!isAdmin && (
                <td className="px-6 py-4">
                  <AddToCart
                    item={item}
                    handleToggleAddToCart={handleToggleAddToCart}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {isAdmin && <FloatingButton route="/admin/new" />}
    </>
  );
}

export default memo(ItemsList);
