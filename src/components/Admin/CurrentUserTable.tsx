const users = [
  {
    name: "Sarah Johnson",
    email: "sarah@email.com",
    role: "Admin",
  },
  {
    name: "Mark Williams",
    email: "mark@email.com",
    role: "Editor",
  },
  {
    name: "Lisa Brown",
    email: "lisa@email.com",
    role: "Subscriber",
  },
];

export default function CurrentUserTable() {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/10">
      <h3 className="font-semibold mb-4">User Management</h3>

      <table className="w-full text-sm">
        <thead className="text-white/60 border-b border-white/10">
          <tr>
            <th className="text-left py-2">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Role</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, i) => (
            <tr
              key={i}
              className="border-b border-white/5 hover:bg-white/5 transition"
            >
              <td className="py-3">{user.name}</td>
              <td className="text-white/70">{user.email}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    user.role === "Admin"
                      ? "bg-blue-500/20 text-blue-400"
                      : user.role === "Editor"
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-gray-500/20 text-gray-300"
                  }`}
                >
                  {user.role}
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
