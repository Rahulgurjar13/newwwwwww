"use client"
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";
import toast from "react-hot-toast";
import Link from "next/link";
import CMSLoading from "@/components/Admin/CMS/CMSLoading";

const CATEGORIES = [
  "Explore All",
  "1 Day Tour Package", ,
  "2 Day Tour Package",
  "3 Day Tour Package",
  "4 Day Tour Package",
  "5 Day Tour Package",
  "6 Day Tour Package",
  "7 Day Tour Package",
  "8 Day Tour Package",
  "9 Day Tour Package",
  "10 Day Tour Package",

]

export default function ProductCards() {
  const [packages, setPackage] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Explore All");



  useEffect(() => {
    const getBlogs = async () => {
      const { data, error } = await supabase
        .from("Package")
        .select("*").order("created_at" , {ascending : false});

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setPackage(data ?? []);
      setLoading(false);
    };

    getBlogs();
  }, []);

 
   const filteredPackages = activeCategory === "Explore All" ? packages : packages.filter(
    (pkg: any) => pkg.category === activeCategory
  )



  const handleDelete = async () => {
    if (!selectedId) {
      return;
    }
    const { error } = await supabase
      .from("Package")
      .delete()
      .eq("id", selectedId);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Package Deleted Successfully");

    setPackage((prev) => prev.filter((b) => b.id !== selectedId));
    setSelectedId("");
    setOpen(false);
  };

  if (loading) {
    return <CMSLoading />
  }

  if (packages.length === 0) {
    return <p className="text-white">No blogs found.</p>;
  }

  return (
    <>
      <DeleteConfirmModal open={open} onConfirm={handleDelete} onCancel={() => setOpen(false)} />
     <section className="min-h-screen p-6 md:p-10">

        {/* Categories */}
        <div className="flex gap-3 flex-wrap mb-8">

          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat ?? "")}
              className={`px-5 py-2 text-xs font-medium rounded-full
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

        </div>

        <div
          className="grid gap-8 cursor-pointer"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {filteredPackages.map((packag) => (
            <article
              key={packag.id}
              className="group relative rounded-2xl overflow-hidden
            bg-gradient-to-br from-[#0b1437] to-[#060b1f]
            border border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,0.6)]
            hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]
            transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={packag.heroimage.image}
                  alt={packag.title}
                  className="w-full h-full object-cover
                group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <span className="inline-block mb-3 px-3 py-1 text-xs
                rounded-full bg-blue-500/10 text-blue-400 border border-blue-400/20">
                  {packag.category}
                </span>

                <h3 className="text-base font-semibold text-white mb-2">
                  {packag.title}
                </h3>

                <p className="text-sm text-gray-400 line-clamp-3">
                  {packag.itinerary[0].description}
                </p>


                <div className="flex justify-between transition mt-5">
                  <Link href={`/admin-x9AqP7mK2/products/edit/${packag.id}`} className="px-6 py-2 rounded-2xl
                  bg-blue-600/20 border border-blue-500/30
                  hover:bg-blue-600/30 transition text-white">
                    Edit
                  </Link>


                  <button
                    disabled={open}
                    onClick={() => {
                      setSelectedId(packag.id);
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
                <span className="text-sm text-gray-300">{packag.price}</span>
                <span className="text-xs text-gray-500">
                  {new Date(packag.created_at).toDateString()}
                </span>
              </div>
            </article>
          ))}


        </div>
      </section>
    </>
  );
}
