import React from 'react'
import dynamic from 'next/dynamic';
import "suneditor/dist/css/suneditor.min.css";


const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});

const CMSContentSection = ({ subContent, content, onChange }: { subContent: string, content: string, onChange: any, editorType : "Blog" | "Package" | "Temple"}) => {
    return (
        <div className='space-y-6'>
            {/* SubContent */}
            <div>
                <label className="text-sm text-white/70">Sub Content</label>
                <textarea
                    required
                    rows={5}
                    value={subContent}
                    onChange={(e) => { onChange("subContent", e.target.value) }}
                    placeholder="Let’s be real for a second..."
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
          border border-white/10 focus:ring-2 focus:ring-sky-500 transition resize-none"
                />
            </div>



            <div className="dark-sun-editor h-[85vh] w-full rounded-2xl p-5 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-400 border border-indigo-400 shadow-indigo-400 hover:border-2 hover:border-indigo-400 transition cursor-pointer">

                <SunEditor

                    defaultValue={content}
                    setOptions={{
                        minHeight: "65vh",
                        maxHeight: "70vh",
                        buttonList: [
                            ["undo", "redo"],
                            ["formatBlock"],   // H1, H2, H3 works here
                            ["bold", "italic", "underline"],
                            ["list"],
                            ["align"],
                            ["link", "image"],
                            ["table"]
                        ],
                    }}

                    onChange={(content) => {
                        onChange("content", content)
                    }}
                />
            </div>
        </div>
    )
}

export default CMSContentSection