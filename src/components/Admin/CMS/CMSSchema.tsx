import React from 'react'

const CMSSchema = ({ schemaTitle, schemaDescription, onChange }: { schemaTitle: string, schemaDescription: string, onChange: any , editorType : "Blog" | "Package" | "Temple"}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="text-sm text-white/70">Schema Title</label>
                <input
                    value={schemaTitle}
                    required
                    placeholder="A Human Approach to Meet Krishna"
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                    onChange={(e) => { onChange("schemaTitle", e.target.value) }}
                />
            </div>

            <div>
                <label className="text-sm text-white/70">Schema Description</label>
                <input
                    value={schemaDescription}
                    required
                    onChange={(e) => { onChange("schemaDescription", e.target.value) }}
                    placeholder="Growing Spirtuality In you"
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                        border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                />
            </div>
        </div>
    )
}

export default CMSSchema