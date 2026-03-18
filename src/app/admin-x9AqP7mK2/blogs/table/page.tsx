"use client";

import { supabase } from "@/lib/supabase/SupabaseConfig";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";
import toast from "react-hot-toast";

type BlogType = {
  id: string;
  title: string;
  category: string;
  author: string;
};

const categories = [
    "All Blogs",
    "Krishna Leela & Spirtuality",
    "Temple Guides",
    "Sacred Places & Nature",
    "Travel Guides",
    "Festivals & Events",
    "Pilgrimage & Yatra",
    "Food & Culture",
    "Tour Packages & Services",
    "Stories & Experiences",
];


export default function BlogTable() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [open , setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All Blogs');
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [showAuthorDropdown, setShowAuthorDropdown] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      const { data, error } = await supabase
        .from("Blog")
        .select("id, title, category, author").order("created_at" , {ascending : false});

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setBlogs(data ?? []);
      setLoading(false);
    };

    getBlogs();
  }, []);

  
  function toNormalCase(name: string): string {
          return name
              .toLowerCase()
              .split(" ")
              .filter(Boolean)
              .map(word => word[0].toUpperCase() + word.slice(1))
              .join(" ");
      }
  
      const authors = useMemo(() => {
          return [...new Set(blogs.map((blog) => toNormalCase(blog.author).trim()))]
      }, [blogs]);
  
  
      const filteredBlogs = useMemo(() => {
          return blogs.filter((blog) => {
              if (selectedAuthor) return toNormalCase(blog.author) === selectedAuthor;
              if (activeCategory === "All Blogs") return true;
              return activeCategory === blog.category;
          });
      }, [blogs, activeCategory, selectedAuthor]);
  

  if (loading) {
    return <p className="text-white">Loading blogs...</p>;
  }

  if (blogs.length === 0) {
    return <p className="text-white">No blogs found.</p>;
  }

  const handleDelete = async () => {
    if(!selectedId){
      return;
    }
    const { error } = await supabase
      .from("Blog")
      .delete()
      .eq("id", selectedId);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Blog Deleted Successfully");

    setBlogs((prev) => prev.filter((b) => b.id !== selectedId));
    setSelectedId("");
    setOpen(false);
  };


  return (
    <>
    <DeleteConfirmModal open={open} onConfirm={handleDelete} onCancel={()=>setOpen(false)}/>
    <div className="w-full overflow-x-auto rounded-2xl 
      bg-gradient-to-br from-[#050b1f] via-[#071233] to-[#040817]
      border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 my-12 mx-6">

          {/* Category Buttons */}
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedAuthor("");
              }}
              className={`px-4 py-2 text-xs font-medium rounded-full cursor-pointer
              border transition-all duration-200 
              ${
                activeCategory === cat
                  ? "bg-blue-500/20 text-blue-300 border-blue-400/30"
                  : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}

          {/* Author Dropdown */}
          <div className="relative">

            <button
              onClick={() => setShowAuthorDropdown(!showAuthorDropdown)}
              className="px-4 py-2 text-xs font-medium rounded-full
              border border-white/10
              bg-white/5 text-gray-300
              hover:bg-white/10 transition cursor-pointer"
            >
              By {selectedAuthor ? selectedAuthor : "Author"}
              <span
                className={`ml-1 inline-block transition-transform ${
                  showAuthorDropdown ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {showAuthorDropdown && (
              <div
                className="absolute left-0 mt-2 w-44
                bg-[#0b1437]
                border border-white/10
                rounded-xl shadow-xl z-20 overflow-hidden"
              >
                {authors.map((author) => (
                  <button
                    key={author}
                    onClick={() => {
                      setSelectedAuthor(author);
                      setShowAuthorDropdown(false);
                      setActiveCategory("All Blogs");
                    }}
                    className="block w-full text-left px-4 py-2 text-sm
                    text-gray-300 hover:bg-white/10 transition cursor-pointer"
                  >
                    {author}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

      <table className="w-full text-left text-sm text-gray-300">
        <thead className="border-b border-white/10">
          <tr className="text-gray-400 uppercase text-xs tracking-wider">
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Author</th>
            <th className="px-6 py-4 text-center">Edit</th>
            <th className="px-6 py-4 text-center">Delete</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog) => (
            <tr
              key={blog.id}
              className="border-b border-white/5 hover:bg-white/5 transition"
            >
              <td className="px-6 py-4 font-medium text-white">
                {blog.title.slice(0,70)}...
              </td>

              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs
                  bg-blue-500/10 text-blue-400 border border-blue-400/20">
                  {blog.category}
                </span>
              </td>

              <td className="px-6 py-4 text-gray-300">
                {blog.author}
              </td>

              <td className="px-6 py-4 text-center">
                <Link href={`/admin-x9AqP7mK2/blogs/edit/${blog.id}`}  className="px-4 py-1.5 text-sm bg-blue-600/20 text-blue-400
                  border border-blue-500/30 hover:bg-blue-600/30 transition rounded-2xl flex justify-center">
                  Edit
                </Link>
              </td>

              <td className="px-6 py-4 text-center">
                <button
                  disabled={open}
                  onClick={() => {
                    setSelectedId(blog.id);
                    setOpen(true);
                  }}
                  className="px-4 py-1.5 rounded-2xl text-sm
                  bg-red-600/20 text-red-400 border border-red-500/30
                  hover:bg-red-600/30 transition disabled:opacity-50"
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
