const blogs = [
  {
    title: "Summer Travel Guide",
    author: "John Smith",
    status: "Published",
  },
  {
    title: "Tech Trends 2022",
    author: "Emily Clark",
    status: "Draft",
  },
  {
    title: "Healthy Recipes",
    author: "David Lee",
    status: "Published",
  },
];

export default function TopBlogTable() {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10 w-[38vw]">
      <h3 className="font-semibold mb-4 text-white">Recent Blog Posts</h3>

      <table className="w-full text-sm">
        <thead className="text-white/60 border-b border-white/10">
          <tr>
            <th className="py-4 text-center">Title</th>
            <th className="text-center">Author</th>
            <th className="text-center">Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog, i) => (
            <tr
              key={i}
              className="border-b border-white/5 hover:bg-white/5 transition text-white"
            >
              <td className="px-5 py-2 text-center">{blog.title}</td>
              <td className="px-5 py-2 text-center">{blog.author}</td>
              <td className="px-5 py-2 text-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    blog.status === "Published"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {blog.status}
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

      {/* Pagination */}
      <div className="flex justify-end gap-2 mt-4 text-xs">
        <button className="px-2 py-1 bg-white/10 rounded">1</button>
        <button className="px-2 py-1 bg-white/10 rounded">2</button>
        <button className="px-2 py-1 bg-white/10 rounded">Next</button>
      </div>
    </div>
  );
}
