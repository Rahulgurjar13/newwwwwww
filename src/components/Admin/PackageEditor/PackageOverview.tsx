import React from 'react'
import dynamic from 'next/dynamic';
import "suneditor/dist/css/suneditor.min.css";


const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});

const PackageOverview = ({ overview, onChange}: { overview: string, onChange: any, editorType : "Blog" | "Package" }) => {

     console.log("Overview", overview)
    return (
        <div className='border-2 border-indigo-500 rounded-3xl w-full p-8 shadow-md shadow-indigo-500 hover:shadow-lg cursor-pointer transition'>
            {/* SubContent */}
   
            <div className='w-full text-3xl text-extrabold text-white text-center mb-5'>Package Overview</div>


            <div className="dark-sun-editor h-[85vh] w-full rounded-2xl p-5 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-400 border border-indigo-400 shadow-indigo-400 hover:border-2 hover:border-indigo-400 transition cursor-pointer">

                <SunEditor

                    setContents={overview}
                    setOptions={{
                        minHeight: "65vh",
                        maxHeight: "70vh",
                        buttonList: [
                            ["undo", "redo"],
                            ["formatBlock"],   // H1, H2, H3 works here
                            ["bold", "italic", "underline"],
                            ["list"],
                            ["align"],
                            ["link", "image"],
                            ["table"]
                        ],
                    }}

                    onChange={(value) => {
                        onChange("overview", value)
                    }}
                />
            </div>
        </div>
    )
}

export default PackageOverview