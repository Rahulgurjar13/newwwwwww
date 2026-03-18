import React, { useState } from 'react'

type faq = {
    id: string,
    question: string,
    answer: string
}

const FaqHandler = ({ faqs, setFaqs }: { faqs: faq[], setFaqs: React.Dispatch<React.SetStateAction<faq[]>>, editorType : "Blog" | "Package" | "Temple"}) => {


    const handleAddFaq = () => {

        setFaqs((prev) => {

            return [...prev, { id: crypto.randomUUID(), question: "", answer: "" }]

        });

    }

    
    const handleDeleteFaq = (FaqId: string) => {
        setFaqs((prev) => {
            return prev.filter((faq) => faq.id != FaqId)
        })
    }

    const handleQuestionChange = (FaqId: string, value: string) => {
        setFaqs((prev) => {
            return prev.map((faq) => {
                return faq.id == FaqId ? {
                    ...faq,
                    question: value
                } : faq
            })
        })
    }

    const handleAnswerChange = (FaqId: string, value: string) => {
        setFaqs((prev) => {
            return prev.map((faq) => {
                return faq.id == FaqId ? {
                    ...faq,
                    answer: value
                } : faq
            })
        })
    }

    return (
        <div className='border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 hover:shadow-lg cursor-pointer transition'>
            <div className='w-full text-3xl text-extrabold text-white text-center mb-5'>FAQS</div>
            {faqs.map((faq: faq) => (
                <div key={faq.id} className='border-2 border-indigo-500 rounded-3xl w-full p-6 shadow-md shadow-indigo-500 cursor-pointer mb-5'>
                    <input
                        required
                        type='text'
                        placeholder='Enter the question of your faq'
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                        value={faq.question}
                        onChange={(e) => { handleQuestionChange(faq.id, e.target.value) }}

                    />

                    <textarea rows={3}
                        required
                        placeholder="Enter the answer of your faq"
                        className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white border border-white/10 focus:ring-2 focus:ring-sky-500 transition resize-none"
                        value={faq.answer}
                        onChange={(e) => { handleAnswerChange(faq.id, e.target.value) }}
                    >

                    </textarea>

                    <div className='mt-4'>
                        <button className='px-3 py-2 rounded-3xl text-white cursor-pointer bg-red-400 hover:bg-red-500 transition' onClick={() => handleDeleteFaq(faq.id)}>
                            Delete Button
                        </button>
                    </div>
                </div>
            ))}

            <div className='mt-10 w-full flex justify-center'>
                <button type='button' onClick={handleAddFaq} className='px-16 py-4 rounded-4xl bg-[#080874] text-white hover:bg-green-500 cursor-pointer transition'>
                    Add Faq
                </button>
            </div>

        </div>
    )
}

export default FaqHandler