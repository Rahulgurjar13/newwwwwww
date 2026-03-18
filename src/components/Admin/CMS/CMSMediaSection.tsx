import React from "react";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import toast from "react-hot-toast";

type EditorType = "Blog" | "Package" | "Temple";

interface CMSMediaSectionProps {
  image: string;
  alt: string;
  editorType: EditorType;
  onChange: (field: "image" | "alt", value: string) => void;
}

const CMSMediaSection = ({
  image,
  alt,
  onChange,
  editorType,
}: CMSMediaSectionProps) => {

  const bucketName = editorType === "Blog" ? "BlogImages" : editorType === "Package" ? "ProductImages" : "TempleImages";

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

  
   

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be under 2MB");
      return;
    }

    if (file.type !== "image/webp") {
    toast.error("Only WEBP images are allowed");
    return;
  }

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file, { upsert: true });

    if (error) {
      console.error(error.message);
      return;
    }

    const { data } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    onChange("image", data.publicUrl);
  };

  return (
    <div className="space-y-6">

      {/* IMAGE UPLOAD */}
      <div>
        <label className="text-sm text-white/70">
          {editorType} Image
        </label>

        <label
          htmlFor="image-upload"
          className="mt-3 block rounded-xl border-2 border-dashed border-white/20
          p-6 text-center cursor-pointer hover:border-sky-400 hover:bg-white/5 transition"
        >
          {image ? (
            <img
              src={image}
              alt={alt}
              className="mx-auto max-h-40 rounded-lg object-contain"
            />
          ) : (
            <>
              <p className="text-white/60 text-sm">
                Drag & drop image or <span className="text-sky-400">Upload</span>
              </p>
              <p className="text-xs text-white/40 mt-1">
                One and Only webp up to 2MB
              </p>
            </>
          )}

          <input
            id="image-upload"
            type="file"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>

      {/* ALT TEXT */}
      <div>
        <label className="text-sm text-white/70">
          Alt Tag For Image
        </label>
        <input
          value={alt}
          required
          onChange={(e) => onChange("alt", e.target.value)}
          placeholder="Describe the image for SEO"
          className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
          border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
        />
      </div>

    </div>
  );
};

export default CMSMediaSection;
