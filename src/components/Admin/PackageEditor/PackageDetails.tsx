import React from 'react'

const PackageDetails = ({ price , duration , onChange, rating, reviews }: { price : string, duration: string, rating : string , reviews : string , onChange: any , editorType : "Blog" | "Package"}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="text-sm text-white/70">Price</label>
                <input
                    value={price}
                    required
                    type='number'
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                    onChange={(e) => { onChange("price", e.target.value) }}
                    placeholder='5999'
                />
            </div>

            <div>
                <label className="text-sm text-white/70">Duration <span className='text-red-500'>*</span></label>
                <input
                    value={duration}
                    required
                    placeholder='eg : one-day, four-day '
                    onChange={(e) => { onChange("duration", e.target.value) }}
                    type='text '
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                        border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                />
                    
            </div>

            <div>

                <label className="text-sm text-white/70">Rating</label>
                <input
                    value={rating}
                    required
                    type='text'
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                    onChange={(e) => { onChange("rating", e.target.value) }}
                    placeholder='4.8'
                />

            </div>

            <div>
                <label className="text-sm text-white/70">Reviews</label>
                <input
                    value={reviews}
                    required
                    type='text'
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
            border border-white/10 focus:ring-2 focus:ring-sky-500 transition"
                    onChange={(e) => { onChange("reviews", e.target.value) }}
                    placeholder='120'
                />
            </div>
        </div>
    )
}

export default PackageDetails