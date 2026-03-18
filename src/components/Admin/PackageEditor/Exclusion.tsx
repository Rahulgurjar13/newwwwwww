import React, { useState } from 'react'

type Exclusions = {
    id: string
    description: string
}

const Exclusion = ({ exclusions , setExclusions }: { exclusions : Exclusions[], setExclusions: React.Dispatch<React.SetStateAction<Exclusions[]>>, editorType: "Blog" | "Package" }) => {


    const handleAddExclusions = () => {
        setExclusions((prev) => {
            return [...prev, { id: crypto.randomUUID(), description: "" }]
        })
    }

    const handleExclusionChange = (exclusionId: string, value: string) => {
        setExclusions((prev) => {
            return prev.map((exclusion) => {
                return exclusion.id == exclusionId ? {
                    ...exclusion,
                    description: value
                } : exclusion
            })
        })
    }

    const handleDeleteExclusion = (exclusionId: string) => {

        setExclusions((prev) => {
            return prev.filter((exclusion) => {
                return exclusion.id != exclusionId
            })
        })
    }

    return (
        <div className='border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 hover:shadow-lg cursor-pointer transition'>
            <div className='w-full text-3xl text-extrabold text-white text-center mb-5'>Exclusion</div>

            {exclusions.map((exclusion) => (
                <div key={exclusion.id} className='border-2 border-indigo-500 rounded-3xl w-full p-6 shadow-md shadow-indigo-500 cursor-pointer mb-5'>
                    <textarea rows={3}
                        required
                        placeholder="Enter the description of your Exclusions"
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-sky-500 transition resize-none"
                        value={exclusion.description}
                        onChange={(e) => { handleExclusionChange(exclusion.id, e.target.value) }}
                    >

                    </textarea>

                    <div className='mt-4'>
                        <button className='px-3 py-2 rounded-3xl text-white cursor-pointer bg-red-400 hover:bg-red-500 transition' onClick={() => handleDeleteExclusion(exclusion.id)}>
                            Delete Button
                        </button>
                    </div>
                </div>
            ))}
            <div className='mt-10 w-full flex justify-center'>
                <button onClick={handleAddExclusions} type='button' className='px-16 py-4 rounded-4xl bg-[#080874] text-white hover:bg-green-500 cursor-pointer transition'>
                    Add Exclusions
                </button>
            </div>
        </div>
    )
}

export default Exclusion