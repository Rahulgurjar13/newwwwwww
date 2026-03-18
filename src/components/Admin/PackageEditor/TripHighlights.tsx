import React, { useState } from 'react'

type HighLights = {
    id: string
    description: string
}

const TripHighlights = ({ highLights, setHighLights }: { highLights: HighLights[], setHighLights: React.Dispatch<React.SetStateAction<HighLights[]>>, editorType: "Blog" | "Package" }) => {


    const handleAddHighlights = () => {
        setHighLights((prev) => {
            return [...prev, { id: crypto.randomUUID(), description: "" }]
        })
    }

    const handleHighlightChnage = (highlightId: string, value: string) => {
        setHighLights((prev) => {
            return prev.map((highlight) => {
                return highlight.id == highlightId ? {
                    ...highlight,
                    description: value
                } : highlight
            })
        })
    }

    const handleDeleteHighLight = (highlightId: string) => {

        setHighLights((prev) => {
            return prev.filter((highlight) => {
                return highlight.id != highlightId
            })
        })
    }

    return (
        <div className='border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 hover:shadow-lg cursor-pointer transition'>
            <div className='w-full text-3xl text-extrabold text-white text-center mb-5'>Trip HighLights</div>

            {highLights.map((highLight) => (
                <div key={highLight.id} className='border-2 border-indigo-500 rounded-3xl w-full p-6 shadow-md shadow-indigo-500 cursor-pointer mb-5'>
                    <textarea rows={3}
                        required
                        placeholder="Enter the description of your trip highlights"
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-sky-500 transition resize-none"
                        value={highLight.description}
                        onChange={(e) => { handleHighlightChnage(highLight.id, e.target.value) }}
                    >

                    </textarea>

                    <div className='mt-4'>
                        <button className='px-3 py-2 rounded-3xl text-white cursor-pointer bg-red-400 hover:bg-red-500 transition' onClick={() => handleDeleteHighLight(highLight.id)}>
                            Delete Button
                        </button>
                    </div>
                </div>
            ))}
            <div className='mt-10 w-full flex justify-center'>
                <button onClick={handleAddHighlights} type='button' className='px-16 py-4 rounded-4xl bg-[#080874] text-white hover:bg-green-500 cursor-pointer transition'>
                    Add HighLights
                </button>
            </div>
        </div>
    )
}

export default TripHighlights