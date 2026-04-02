import React from "react";

function Filter(props) {
  const {
    handleSelectCategoryId,
    categories,
    selectedCategory,
    categoriesError,
    categoriesLoading,
  } = props;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
      {categoriesError && (
        <div className="text-red-500 text-sm mb-2">
          Error loading categories: {categoriesError}
        </div>
      )}
      {categoriesLoading && (
        <div className="loading loading-spinner loading-md"></div>
      )}
      {[{ id: 0, name: "all" }, ...categories].map((c, i) => (
        <div
          className={
            "px-4 py-2 rounded-full text-sm font-medium cursor-pointer border transition-colors " +
            (selectedCategory === c.id
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-500")
          }
          key={i}
          onClick={() => handleSelectCategoryId(c.id)}
        >
          {c.name}
        </div>
      ))}
    </div>
  );
}

export default Filter;
