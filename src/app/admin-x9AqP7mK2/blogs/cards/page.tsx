"use client"
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";
import toast from "react-hot-toast";
import Link from "next/link";
import CMSLoading from "@/components/Admin/CMS/CMSLoading";

type BlogType = {
  id : string;
  title: string;
  category: string,
  slug: string,
  author : string,
  subcontent : string,
  metaTitle: string,
  metaDescription: string,
  image: string,
  alt: string,
  subContent: string
  content: string
  faqs : FAQ[]
  created_at : Date
}

type FAQ = {
  id : string, 
  question : string,
  answer : string
}

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






export default function ProductCards() {
   const [blogs, setBlogs] = useState<BlogType[]>([]);
   const [loading, setLoading] = useState(true);
   const [open, setOpen] = useState(false)
   const [selectedId, setSelectedId] = useState<string | null>(null);
   const [activeCategory, setActiveCategory] = useState('All Blogs');
   const [selectedAuthor, setSelectedAuthor] = useState("");
   const [showAuthorDropdown, setShowAuthorDropdown] = useState(false);

   

  

    useEffect(() => {
      const getBlogs = async () => {
        const { data, error } = await supabase
          .from("Blog")
          .select("*").order('created_at', {ascending : false});
  
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
  
    if (loading) {
      return <CMSLoading/>
    }
  
    if (blogs.length === 0) {
      return <p className="text-white">No blogs found.</p>;
    }
  
  return (
    <>
    <DeleteConfirmModal open={open} onConfirm={handleDelete} onCancel={()=>setOpen(false)}/>
   <section className="min-h-screen w-full p-6 md:p-10">

    {/* Filters */}
    <div className="flex flex-wrap items-center gap-3 mb-12">

      {/* Category Buttons */}
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            setActiveCategory(cat);
            setSelectedAuthor("");
          }}
          className={`px-4 py-2 text-xs font-medium rounded-full
          border transition-all duration-200 cursor-pointer
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
          hover:bg-white/10 transition"
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
                text-gray-300 hover:bg-white/10 transition"
              >
                {author}
              </button>
            ))}
          </div>
        )}
      </div>

    </div>
     {/* Cards */}
    <div
      className="grid grid-cols-3 gap-8 cursor-pointer"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      }}
    >
       {filteredBlogs.map((blog) => (
          <article
            key={blog.id}
            className="group relative rounded-2xl overflow-hidden
            bg-gradient-to-br from-[#0b1437] to-[#060b1f]
            border border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,0.6)]
            hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]
            transition-all duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover
                group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5">
              <span className="inline-block mb-3 px-3 py-1 text-xs
                rounded-full bg-blue-500/10 text-blue-400 border border-blue-400/20">
                {blog.category}
              </span>

              <h3 className="text-base font-semibold text-white mb-2">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-400 line-clamp-3">
                {blog.subcontent}
              </p>
              

              <div className="flex justify-between transition mt-5">
                <Link href={`/admin-x9AqP7mK2/blogs/edit/${blog.id}`} className="px-6 py-2 rounded-2xl
                  bg-blue-600/20 border border-blue-500/30
                  hover:bg-blue-600/30 transition text-white">
                  Edit
                </Link>
                

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

              </div>
            </div>

            <div className="px-5 py-4 border-t border-white/10 flex justify-between">
              <span className="text-sm text-gray-300">{blog.author}</span>
              <span className="text-xs text-gray-500">
                {new Date(blog.created_at).toDateString()}
              </span>
            </div>
          </article>
        ))}


      </div>
    </section>
    </>
  );
}
