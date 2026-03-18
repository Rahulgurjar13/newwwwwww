const products = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    stock: 120,
    status: "Active",
  },
  {
    name: "Running Shoes",
    category: "Apparel",
    stock: 45,
    status: "Out of Stock",
  },
  {
    name: "Smartwatch",
    category: "Gadgets",
    stock: 78,
    status: "Active",
  }
];

export default function CurrentProductTable() {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10">
      <h3 className="font-semibold mb-4 text-white">Product List</h3>

      <table className="w-full text-sm">
        <thead className="text-white/60 border-b border-white/10">
          <tr>
            <th className="text-left py-2">Product</th>
            <th className="text-left">Category</th>
            <th className="text-left">Stock</th>
            <th className="text-left">Status</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, i) => (
            <tr
              key={i}
              className="border-b border-white/5 hover:bg-white/5 transition text-white"
            >
              <td className="py-3">{product.name}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    product.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {product.status}
                </span>
              </td>
              <td className="text-right space-x-2">
                <button className="hover:text-blue-400">✏️</button>
                <button className="hover:text-red-400">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
