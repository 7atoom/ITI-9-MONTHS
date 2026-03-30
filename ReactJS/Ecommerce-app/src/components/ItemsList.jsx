import AddToCart from './AddToCart';

function ItemsList({ currentItems, handleToggleAddToCart }) {
  return (
    <table className="w-full mt-6 border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
        <tr>
          <th className="text-left px-6 py-3">Name</th>
          <th className="text-left px-6 py-3">Price</th>
          <th className="text-left px-6 py-3">Add to Cart</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {currentItems.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 font-medium text-gray-800">{item.name}</td>
            <td className="px-6 py-4 text-gray-600">${item.price}</td>
            <td className="px-6 py-4">
              <AddToCart
                item={item}
                handleToggleAddToCart={handleToggleAddToCart}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemsList