"use client";

import { supabase } from "@/lib/supabase/SupabaseConfig";
import { useEffect, useState } from "react";
import Link from "next/link";
import DeleteConfirmModal from "@/utils/Admin/DeleteConfirmModal";
import toast from "react-hot-toast";
import CMSLoading from "@/components/Admin/CMS/CMSLoading";

type TempleType = {
  id: string;
  title: string;
  location: string;
};

export default function TempleTable() {

  const [temples, setTemples] = useState<TempleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [open , setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {

    const getTemples = async () => {

      const { data, error } = await supabase
        .from("Temple")
        .select("id, title, location");

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

  if (loading) {
      return <CMSLoading />
  }


  if (temples.length === 0) {
    return <p className="text-white">No temples found.</p>;
  }

  const handleDelete = async () => {

    if(!selectedId) return;

    const { error } = await supabase
      .from("Temple")
      .delete()
      .eq("id", selectedId);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Temple Deleted Successfully");

    setTemples((prev) => prev.filter((t) => t.id !== selectedId));

    setSelectedId(null);
    setOpen(false);
  };


  return (
    <>
      <DeleteConfirmModal
        open={open}
        onConfirm={handleDelete}
        onCancel={() => setOpen(false)}
      />

      <div className="w-full overflow-x-auto rounded-2xl 
        bg-gradient-to-br from-[#050b1f] via-[#071233] to-[#040817]
        border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">

        <table className="w-full text-left text-sm text-gray-300">

          <thead className="border-b border-white/10">
            <tr className="text-gray-400 uppercase text-xs tracking-wider">
              <th className="px-6 py-4">Temple Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4 text-center">Edit</th>
              <th className="px-6 py-4 text-center">Delete</th>
            </tr>
          </thead>

          <tbody>
            {temples.map((temple) => (
              <tr
                key={temple.id}
                className="border-b border-white/5 hover:bg-white/5 transition"
              >

                <td className="px-6 py-4 font-medium text-white">
                  {temple.title}
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs
                    bg-blue-500/10 text-blue-400 border border-blue-400/20">
                     Category
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {temple.location}
                </td>

                <td className="px-6 py-4 text-center">
                  <Link
                    href={`/admin-x9AqP7mK2/temples/edit/${temple.id}`}
                    className="px-4 py-1.5 text-sm bg-blue-600/20 text-blue-400
                    border border-blue-500/30 hover:bg-blue-600/30 transition rounded-2xl flex justify-center"
                  >
                    Edit
                  </Link>
                </td>

                <td className="px-6 py-4 text-center">
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
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </>
  );
}