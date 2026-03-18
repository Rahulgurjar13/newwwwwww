"use client";

import React from "react";
import { supabase } from "@/lib/supabase/SupabaseConfig";
import toast from "react-hot-toast";

type ChildImage = {
    id: string;
    image: string;
    alt: string;
};

const ChildImagePicker = ({
    childImage,
    setChildImage,
}: {
    childImage: ChildImage[];
    setChildImage: React.Dispatch<React.SetStateAction<ChildImage[]>>;
}) => {
    const bucketName = "ProductImages";

    // ➕ Add new image block
    const handleChildImageAdd = () => {
        if(childImage.length >= 4) {
            toast.error("You Have Already Add 4 Child Image We Do Not Required to Add More Than That");
            return;
        }
        setChildImage((prev) => [
            ...prev,
            { id: crypto.randomUUID(), image: "", alt: "" },
        ]);
    };

    // 🖼 Upload image
    const handleImageUpload = async (
        e: React.ChangeEvent<HTMLInputElement>,
        id: string
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Size validation
        if (file.size > 2 * 1024 * 1024) {
            toast.error("Image must be under 2MB");
            return;
        }

        // Type validation
        if (file.type !== "image/webp") {
            toast.error("Only WEBP images are allowed");
            return;
        }

        const fileName = `${Date.now()}-${file.name}`;

        const { error } = await supabase.storage
            .from(bucketName)
            .upload(fileName, file, { upsert: true });

        if (error) {
            toast.error(error.message);
            return;
        }

        const { data } = supabase.storage
            .from(bucketName)
            .getPublicUrl(fileName);

        // ✅ Update correct image
        setChildImage((prev) =>
            prev.map((img) =>
                img.id === id ? { ...img, image: data.publicUrl } : img
            )
        );

        toast.success("Image uploaded successfully");
    };

    // ✏ Update alt text
    const handleAltChange = (id: string, value: string) => {
        setChildImage((prev) =>
            prev.map((img) =>
                img.id === id ? { ...img, alt: value } : img
            )
        );
    };

    const handleDeletChildImage = (ImageId : string) => {
        setChildImage((prev) => {
            return prev.filter((image) => image.id !== ImageId)
        })
    }

    return (
        <div className='border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 hover:shadow-lg cursor-pointer transition'>
            <div className='w-full text-3xl text-extrabold text-white text-center mb-5'>Other Four Images</div>
            {childImage.map((img) => (
                <div key={img.id} className='border-2 border-indigo-500 rounded-3xl w-full p-6 shadow-md shadow-indigo-500 cursor-pointer mb-5'>


                    {/* IMAGE UPLOAD */}
                    <div>
                        <label className="text-sm text-white/70">
                            Upload Child Image
                        </label>

                        <label
                            htmlFor={`image-${img.id}`}
                            className="mt-3 block rounded-xl border-2 border-dashed border-white/20
              p-6 text-center cursor-pointer hover:border-sky-400 hover:bg-white/5 transition"
                        >
                            {img.image ? (
                                <img
                                    src={img.image}
                                    alt={img.alt}
                                    className="mx-auto max-h-40 rounded-lg object-contain"
                                />
                            ) : (
                                <>
                                    <p className="text-white/60 text-sm">
                                        Drag & drop image or{" "}
                                        <span className="text-sky-400">Upload</span>
                                    </p>
                                    <p className="text-xs text-white/40 mt-1">
                                        Only WEBP • Max 2MB
                                    </p>
                                </>
                            )}

                            <input
                                id={`image-${img.id}`}
                                type="file"
                                accept="image/webp"
                                className="hidden"
                                onChange={(e) => handleImageUpload(e, img.id)}
                            />
                        </label>
                    </div>

                    {/* ALT TEXT */}
                    <div>
                        <label className="text-sm text-white/70">
                            Alt Tag For Image
                        </label>
                        <input
                            value={img.alt}
                            required
                            onChange={(e) =>
                                handleAltChange(img.id, e.target.value)
                            }
                            placeholder="Describe the image for SEO"
                            className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
              border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                        />
                    </div>

                    <div className='mt-4'>
                        <button className='px-3 py-2 rounded-3xl text-white cursor-pointer bg-red-400 hover:bg-red-500 transition' onClick={() => handleDeletChildImage(img.id)}>
                            Delete Button
                        </button>
                    </div>
                </div>
            ))}

            {/* ADD BUTTON */}
            <button
                type="button"
                onClick={handleChildImageAdd}
                className="px-6 py-3 rounded-xl bg-sky-500 text-white hover:bg-sky-600 transition"
            >
                ➕ Add Child Image
            </button>
        </div>
    );
};

export default ChildImagePicker;
