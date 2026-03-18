import React from 'react'

export const destinations = [
  "Gokul",
  "Mathura",
  "Vrindavan",
  "Govardhan",
  "Barsana",
  "Agra",
  "Fatehpur Sikri",
  "Delhi",
  "Bhandirvan"
];





const DANDestination = ({  destination , onChange, editorType }: {  destination: string, onChange: any, editorType: "Blog" | "Package" }) => {
    return (
        <div className="space-y-3">
            {/* Blog Title */}



            <div>
                <label className="text-sm text-white/70">Destinations</label>
                <select
                    required
                    value={destination}
                    onChange={(e) => onChange("destination", e.target.value)}
                    className="mt-2 w-full px-5 py-3 rounded-xl bg-white/5 text-white
                        border border-white/10 focus:ring-2 focus:ring-sky-500 transition cursor-pointer"
                >

                    <option value="">Select Destinations</option>
                    {
                        destinations.map((des, index) => {
                            return <option key={index} value={des} className="bg-[#0b1220]">
                                {des}
                            </option>


                        })
                    }

                </select>
            </div>

            {/* Day and Night */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                


            </div>
        </div>
    )
}

export default DANDestination