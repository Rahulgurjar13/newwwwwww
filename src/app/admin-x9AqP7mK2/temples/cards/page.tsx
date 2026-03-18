"use client"

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";
import toast from "react-hot-toast";
import Link from "next/link";
import CMSLoading from "@/components/Admin/CMS/CMSLoading";

export default function TempleCards() {

  const [temples, setTemples] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {

    const getTemples = async () => {

      const { data, error } = await supabase
        .from("Temple")
        .select("*");

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      setTemples(data ?? []);
      setLoading(false);

    };

    getTemples();

  }, []);


  const handleDelete = async () => {

    if (!selectedId) return;

    const { error } = await supabase
      .from("Temple")
      .delete()
      .eq("id", selectedId).order("created_at", {ascending : false});

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Temple Deleted Successfully");

    setTemples((prev) => prev.filter((temple) => temple.id !== selectedId));

    setSelectedId(null);
    setOpen(false);
  };


  if (loading) {
    return <CMSLoading />
  }

  if (temples.length === 0) {
    return <p className="text-white">No temples found.</p>;
  }

  return (
    <>
      <DeleteConfirmModal
        open={open}
        onConfirm={handleDelete}
        onCancel={() => setOpen(false)}
      />

      <section className="min-h-screen p-6 md:p-10">

        <div
          className="grid gap-8 cursor-pointer"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >

          {temples.map((temple) => (

            <article
              key={temple.id}
              className="group relative rounded-2xl overflow-hidden
              bg-gradient-to-br from-[#0b1437] to-[#060b1f]
              border border-white/10
              shadow-[0_10px_40px_rgba(0,0,0,0.6)]
              hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]
              transition-all duration-300"
            >

              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={temple.image}
                  alt={temple.title}
                  className="w-full h-full object-cover
                  group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <span className="inline-block mb-3 px-3 py-1 text-xs
                rounded-full bg-orange-500/10 text-orange-400 border border-orange-400/20">
                  {temple.location}
                </span>

                <h3 className="text-base font-semibold text-white mb-2">
                  {temple.title}
                </h3>

                <p className="text-sm text-gray-400 line-clamp-3">
                  {temple.description}
                </p>

                <div className="flex justify-between mt-5">

                  <Link
                    href={`/admin-x9AqP7mK2/temples/edit/${temple.id}`}
                    className="px-6 py-2 rounded-2xl
                    bg-blue-600/20 border border-blue-500/30
                    hover:bg-blue-600/30 transition text-white"
                  >
                    Edit
                  </Link>

                  <button
                    disabled={open}
                    onClick={() => {
                      setSelectedId(temple.id);
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

              {/* Footer */}
              <div className="px-5 py-4 border-t border-white/10 flex justify-between">

                <span className="text-sm text-gray-300">
                  {temple.location}
                </span>

                <span className="text-xs text-gray-500">
                  {new Date(temple.created_at).toDateString()}
                </span>

              </div>

            </article>

          ))}

        </div>

      </section>
    </>
  );
}