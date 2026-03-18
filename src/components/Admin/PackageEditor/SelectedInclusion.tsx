
export default function ({transfer_included, stay_included, breakfast_included, sightseeing_included , onChange} : {transfer_included : boolean, stay_included : boolean, breakfast_included : boolean, sightseeing_included : boolean , onChange : any}){
    return (
        <>
        <h3 className="text-md mb-4 text-gray-300">Select Benefits Overview</h3>
        <div className=" text-white p-6 rounded-xl shadow-sm border border-gray-700">
          

            <div className="grid grid-cols-2 gap-4">

                {/* Transfer */}
                <label className="flex items-center gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    checked={transfer_included}
                    onChange={(e) =>
                    {
                        onChange('transfer_included', e.target.checked)
                    }
                    }
                    className="w-5 h-5 accent-green-600 cursor-pointer"
                />
                <span>Transfer Included</span>
                </label>

                {/* Stay */}
                <label className="flex items-center gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    checked={stay_included}
                    onChange={(e) =>
                     {
                        onChange('stay_included', e.target.checked)
                    }
                    }
                    className="w-5 h-5 accent-green-600 cursor-pointer "
                />
                <span>Stay Included</span>
                </label>

                {/* Breakfast */}
                <label className="flex items-center gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    checked={breakfast_included}
                    onChange={(e) =>
                     {
                        onChange('breakfast_included', e.target.checked)
                     }
                    }
                    className="w-5 h-5 accent-green-600 cursor-pointer"
                />
                <span>Breakfast Included</span>
                </label>

                {/* Sightseeing */}
                <label className="flex items-center gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    checked={sightseeing_included}
                    onChange={(e) =>
                     {
                        onChange('sightseeing_included', e.target.checked)
                     }
                    }
                    className="w-5 h-5 accent-green-600 cursor-pointer"
                />
                <span>Sightseeing Included</span>
                </label>

            </div>
     </div>
     </>
    )
}