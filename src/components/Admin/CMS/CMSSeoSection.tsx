import React from 'react'

const CMSSeoSection = ({ metaTitle, metaDescription, onChange }: { metaTitle: string, metaDescription: string, onChange: any , editorType : "Blog" | "Package" | "Temple"}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="text-sm text-white/70">Meta Title</label>
                <input
                    value={metaTitle}
                    required
                    placeholder="A Human Approach to Meet Krishna"
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                    onChange={(e) => { onChange("metaTitle", e.target.value) }}
                />
            </div>

            <div>
                <label className="text-sm text-white/70">Meta Description</label>
                <input
                    value={metaDescription}
                    required
                    onChange={(e) => { onChange("metaDescription", e.target.value) }}
                    placeholder="Growing  Spirtuality In you"
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                        border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                />
            </div>
        </div>
    )
}

export default CMSSeoSection