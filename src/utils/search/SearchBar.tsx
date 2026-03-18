"use client"

import DestinationDropdown from '@/utils/search/DestinationDropDown'
import { Calendar, Search, Users } from 'lucide-react'
import React, { useState } from 'react'
import CategoryDropDown from './CategoryDropDown'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
    const router = useRouter();
    const [filter , setFilter] = useState({
        selectedDest : [],
        category : "",
        travellers : ""
    });

    const params = new URLSearchParams();
    

    console.log("THE DATA OF THE FILTER IS : ");
    console.log(filter);

    const updateFilter = (type : string , value : string) => {
        setFilter((prev) => {
            return {...prev , [type] : value}
        });
    }

    const handleSearch = () => {
        filter.selectedDest.forEach((place)=>{
            params.append('destination', place);
        })
        router.push(`/filter?${params.toString()}&duration=${filter.category}`)
    }


    return (

        <div
            className="mt-10 rounded-4xl bg-white/90 p-4 sm:p-5 shadow-lg shadow-orange-400 backdrop-blur-md hover:shadow-xl hover:shadow-yellow-500 transition border-2 border-orange-400 ">
            <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-3 sm:gap-4
              "
            >
                {/* Destination */}
                <DestinationDropdown selectedDest={filter.selectedDest} onChange={updateFilter}/>

                {/* Category */}
                <CategoryDropDown category={filter.category} onChange={updateFilter}/>
                

                {/* Travelers */}
                <div
                    className="
                    flex items-center gap-3
                    rounded-xl
                    bg-orange-50
                    px-4
                    py-3 sm:py-3.5
                    "
                >
                    <Users className="text-black shrink-0" />
                    <input
                        type="number"
                        value={filter.travellers}
                        placeholder="No. Of Travelers"
                        onChange={(e)=>{updateFilter("travellers", e.target.value)}}
                        className="
                        w-full
                        bg-transparent
                        text-sm sm:text-base
                        outline-none
              "
                    />
                </div>

                {/* Button */}
                <button
                    className="
                    flex items-center justify-center gap-2
                    rounded-3xl
                    bg-gradient-to-r from-orange-500 to-orange-600
                    px-6
                    py-3 sm:py-3.5
                    font-semibold
                    text-white
                    transition-all
                    hover:scale-[1.02]
                    hover:shadow-lg
                    w-full cursor-pointer
            "

            onClick={handleSearch}
                >
                    <Search size={18} />
                    Search
                </button>
            </div>

        </div>
    )
}

export default SearchBar