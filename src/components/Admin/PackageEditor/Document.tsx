import React, { useState } from 'react'

type Documents  = {
    id: string
    description: string
}

const Document = ({ documents , setDocuments }: { documents : Documents[], setDocuments: React.Dispatch<React.SetStateAction<Documents[]>>, editorType: "Blog" | "Package" }) => {


    const handleAddInclusions = () => {
        setDocuments((prev) => {
            return [...prev, { id: crypto.randomUUID(), description: "" }]
        })
    }

    const handleInclusionChange = (documentId: string, value: string) => {
        setDocuments((prev) => {
            return prev.map((document) => {
                return document.id == documentId ? {
                    ...document,
                    description: value
                } : document
            })
        })
    }

    const handleDeleteInclusion = (documentId: string) => {

        setDocuments((prev) => {
            return prev.filter((document) => {
                return document.id != documentId
            })
        })
    }

    return (
        <div className='border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 hover:shadow-lg cursor-pointer transition'>
            <div className='w-full text-3xl text-extrabold text-white text-center mb-5'>Know Before You Go</div>

            {documents.map((document) => (
                <div key={document.id} className='border-2 border-indigo-500 rounded-3xl w-full p-6 shadow-md shadow-indigo-500 cursor-pointer mb-5'>
                    <textarea rows={3}
                        required
                        placeholder="Enter the description of your Inclusion"
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-sky-500 transition resize-none"
                        value={document.description}
                        onChange={(e) => { handleInclusionChange(document.id, e.target.value) }}
                    >

                    </textarea>

                    <div className='mt-4'>
                        <button className='px-3 py-2 rounded-3xl text-white cursor-pointer bg-red-400 hover:bg-red-500 transition' onClick={() => handleDeleteInclusion(document.id)}>
                            Delete Button
                        </button>
                    </div>
                </div>
            ))}
            <div className='mt-10 w-full flex justify-center'>
                <button onClick={handleAddInclusions} type='button' className='px-16 py-4 rounded-4xl bg-[#080874] text-white hover:bg-green-500 cursor-pointer transition'>
                    Add Document
                </button>
            </div>
        </div>
    )
}

export default Document