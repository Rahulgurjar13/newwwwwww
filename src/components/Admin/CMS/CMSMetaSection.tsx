import React from 'react'

export const categories = [

    "1 Day Tour Package",

    "2 Day Tour Package",

    "3 Day Tour Package",

    "4 Day Tour Package",

    "5 Day Tour Package",

    "6 Day Tour Package",

    "7 Day Tour Package",

    "8 Day Tour Package",

    "9 Day Tour Package",

    "10 Day Tour Package"
];

const Blogcategories = [
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

const Templecategories = [
  "All",
  "Vrindavan",
  "Mathura",
  "Barsana",
  "Gokul",
  "Govardhan",
  "Nandgaon",
  "Baldeo",
  "Rawal",
];





const CMSMetaSection = ({ title, category, slug, onChange, editorType }: { title: string, category: string, slug: string, onChange: any, editorType: "Blog" | "Package" | "Temple" }) => {
    return (
        <div className="space-y-6">
            {/* Blog Title */}
            <div>
                <label className="text-sm text-white/70">{editorType} Title</label>
                <input
                    value={title}
                    placeholder="A Way to Grow Your Online Business With Krishna"
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                             placeholder-white/40 border border-white/10
                               focus:ring-2 focus:ring-sky-500 transition"
                    required

                    onChange={(e) => { onChange("title", e.target.value) }}
                />
            </div>

            {/* category + Slug */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="text-sm text-white/70">Category</label>
                    <select
                        required
                        value={category}
                        onChange={(e) => onChange("category", e.target.value)}
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                        border border-white/10 focus:ring-2 focus:ring-sky-500 transition cursor-pointer"
                    >

                        {
                            editorType == "Blog" ?
                                <>
                                    <option value="">Select Category</option>
                                    {
                                        Blogcategories.map((cat) => {
                                            return <option value={cat} className="bg-[#0b1220]">
                                                {cat}
                                            </option>


                                        })
                                    }
                                </> : editorType == "Package" ? 
                                <>
                                    <option value="">Select Category</option>
                                    {
                                        categories.map((cat,idx) => {
                                            return <option key={idx} value={cat} className="bg-[#0b1220]">
                                                        {cat}
                                                    </option>
                                        })
                                    }
                                </> : <>
                                    <option value="">Select Location</option>
                                    {
                                        Templecategories.map((cat,idx) => {
                                            return <option key={idx} value={cat} className="bg-[#0b1220]">
                                                        {cat}
                                                    </option>
                                        })
                                    }
                                </>
                                
                        }
                    </select>
                </div>


                <div>
                    <label className="text-sm text-white/70">Slug  <span className='text-red-500'>*</span></label>
                    <input
                        value={slug}
                        onChange={(e) => { onChange("slug", e.target.value) }}
                        placeholder="a-human-approach-to-meet-krishna"
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                        required
                    />
                </div>

            </div>
        </div>
    )
}

export default CMSMetaSection