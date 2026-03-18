import React, { useState } from 'react'

type Inclusions = {
    id: string
    description: string
}

const Inclusion = ({ inclusions, setInclusions }: { inclusions: Inclusions[], setInclusions: React.Dispatch<React.SetStateAction<Inclusions[]>>, editorType: "Blog" | "Package" }) => {


    const handleAddInclusions = () => {
        setInclusions((prev) => {
            return [...prev, { id: crypto.randomUUID(), description: "" }]
        })
    }

    const handleInclusionChange = (inclusionId: string, value: string) => {
        setInclusions((prev) => {
            return prev.map((inclusion) => {
                return inclusion.id == inclusionId ? {
                    ...inclusion,
                    description: value
                } : inclusion
            })
        })
    }

    const handleDeleteInclusion = (inclusionId: string) => {

        setInclusions((prev) => {
            return prev.filter((inclusion) => {
                return inclusion.id != inclusionId
            })
        })
    }

    return (
        <div className='border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 hover:shadow-lg cursor-pointer transition'>
            <div className='w-full text-3xl text-extrabold text-white text-center mb-5'>Inclusion</div>

            {inclusions.map((inclusion) => (
                <div key={inclusion.id} className='border-2 border-indigo-500 rounded-3xl w-full p-6 shadow-md shadow-indigo-500 cursor-pointer mb-5'>
                    <textarea rows={3}
                        required
                        placeholder="Enter the description of your Inclusion"
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-sky-500 transition resize-none"
                        value={inclusion.description}
                        onChange={(e) => { handleInclusionChange(inclusion.id, e.target.value) }}
                    >

                    </textarea>

                    <div className='mt-4'>
                        <button className='px-3 py-2 rounded-3xl text-white cursor-pointer bg-red-400 hover:bg-red-500 transition' onClick={() => handleDeleteInclusion(inclusion.id)}>
                            Delete Button
                        </button>
                    </div>
                </div>
            ))}
            <div className='mt-10 w-full flex justify-center'>
                <button onClick={handleAddInclusions} type='button' className='px-16 py-4 rounded-4xl bg-[#080874] text-white hover:bg-green-500 cursor-pointer transition'>
                    Add Inclusions
                </button>
            </div>
        </div>
    )
}

export default Inclusion