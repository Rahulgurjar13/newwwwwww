import React from 'react'

interface CMSActionsProps {
    actionType : 'create' | 'update';
    editorType : "Blog" | "Package" | "Temple"
    onPreview : ()=>void;
    onPublish : ()=>void;
    loading? :boolean;
}

const CMSActions = ({actionType, editorType, 
                onPreview, onPublish,
     loading = false}: CMSActionsProps
    ) => {

    return (
        <div className="mt-10 flex gap-4">
            <button type="submit" disabled={loading} className="px-6 py-3 rounded-xl bg-sky-600 text-white
            hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/30 cursor-pointer
            transition active:scale-95">
                {actionType==='update' ?  "Update" : "Publish"}
            </button>


            {onPreview && (
                <button
                    onClick={onPreview}
                    className="px-6 py-3 rounded-xl bg-slate-600 text-gray-400
            hover:bg-slate-500 transition active:scale-95 cursor-pointer"
                >
                    Preview
                </button>
            )}

            {onPublish && (
                <button onClick={onPublish} disabled className="px-6 py-3 rounded-xl bg-emerald-600 text-white
            hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30
            transition active:scale-95 cursor-pointer">
                Save Draft
            </button>
             )
            }

                <span className="ml-auto text-sm text-gray-400 self-center cursor-pointer">
                    Editing {editorType}
                </span>
            </div>
        )
    }
    

export default CMSActions