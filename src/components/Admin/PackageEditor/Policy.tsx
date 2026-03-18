import React from 'react'






const Policy = ({ refund , cancel , confirm , payment ,  onChange }: { refund : string, cancel : string,  confirm : string , payment : string , onChange: any, editorType : "Blog" | "Package" }) => {
    return (
        <div className='space-y-6 border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 hover:shadow-lg cursor-pointer transition'>

            <div className='w-full text-3xl text-extrabold text-white text-center mb-5'>Policy And Terms & Conditions</div>
            {/* SubContent */}
            <div>
                <label className="text-sm text-white/70">Refund Policy</label>
                <textarea
                    required
                    rows={5}
                    value={refund}
                    onChange={(e) => { onChange("refund", e.target.value) }}
                    placeholder="Let’s be real for a second..."
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
          border border-white/10 focus:ring-2 focus:ring-sky-500 transition resize-none"
                />
            </div>

            <div>
                <label className="text-sm text-white/70">Cancel Policy</label>
                <textarea
                    required
                    rows={5}
                    value={cancel}
                    onChange={(e) => { onChange("cancel", e.target.value) }}
                    placeholder="Let’s be real for a second..."
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
          border border-white/10 focus:ring-2 focus:ring-sky-500 transition resize-none"
                />
            </div>

            <div>
                <label className="text-sm text-white/70">Confirmation Policy</label>
                <textarea
                    required
                    rows={5}
                    value={confirm}
                    onChange={(e) => { onChange("confirmation", e.target.value) }}
                    placeholder="Let’s be real for a second..."
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
          border border-white/10 focus:ring-2 focus:ring-sky-500 transition resize-none"
                />
            </div>

            <div>
                <label className="text-sm text-white/70">Payment Policy</label>
                <textarea
                    required
                    rows={5}
                    value={payment}
                    onChange={(e) => { onChange("payment", e.target.value) }}
                    placeholder="Let’s be real for a second..."
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
          border border-white/10 focus:ring-2 focus:ring-sky-500 transition resize-none"
                />
            </div>



            
        </div>
    )
}

export default Policy