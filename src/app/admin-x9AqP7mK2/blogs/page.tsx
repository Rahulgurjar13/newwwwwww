import {
  LayoutGrid,
  Table2,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";

const modes = [
  {
    title: "Card View",
    description:
      "View all blogs and content in a beautiful card-based layout with images and quick actions.",
    icon: LayoutGrid,
    buttonText: "View Cards",
    gradient: "from-cyan-500 to-blue-600",
    route : "cards"
  },
  {
    title: "Table View",
    description:
      "Manage content in a structured table with sorting, status tags, and fast actions.",
    icon: Table2,
    buttonText: "View Table",
    gradient: "from-violet-500 to-purple-600",
    route : "table"
  },
  {
    title: "Add New Content",
    description:
      "Create a new blog or content with images, rich text editor, and publish instantly.",
    icon: PlusCircle,
    buttonText: "Add Blog",
    gradient: "from-emerald-500 to-green-600",
    route : "create-new"
  },
];

export default function Blogs() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {modes.map((mode, i) => (
        <div
          key={i}
          className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5"
        >
          {/* Glow Border */}
          <div
            className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition bg-gradient-to-br ${mode.gradient}`}
          />

          {/* Card */}
          <div className="relative h-full rounded-2xl bg-[#0b1220] p-6 border border-white/10 group-hover:border-white/20 transition cursor-pointer">
            {/* Icon */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${mode.gradient} mb-4`}
            >
              <mode.icon size={22} />
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold mb-2 text-white">
              {mode.title}
            </h3>

            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              {mode.description}
            </p>

            {/* Action Button */}
            <Link href={`/admin-x9AqP7mK2/blogs/${mode.route}`}>
              <button
                className={`mt-auto w-full py-2 rounded-lg font-medium bg-gradient-to-r cursor-pointer ${mode.gradient} hover:opacity-90 transition`}
              >
                {mode.buttonText}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
