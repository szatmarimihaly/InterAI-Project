import React, { useState } from 'react'
import "remixicon/fonts/remixicon.css"

const DropdownFilter = ({ setCategory, category }) => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleFilterSelect = (category) => {
    setCategory(category);
    setDropdownOpen(false);
  }

    return (

        <div className=''>

            {/* Filter Button */}
            <div className='relative'>
                <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='flex items-center gap-2 px-4 py-2 bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 transition duration-500'
                >
                <i className={category === "all" ? "ri-filter-line" : "ri-filter-fill"}></i>
                Filter
                </button>

                {dropdownOpen && (
                <div className='absolute left-0 top-12 bg-gray-500 shadow-lg rounded-lg w-40 text-center'>
                    <button onClick={() => handleFilterSelect("all")} className='block w-full py-2 hover:bg-gray-400 rounded-lg'>All</button>
                    <button onClick={() => handleFilterSelect("programming")} className='block w-full py-2 hover:bg-gray-400 rounded-lg'>Programming</button>
                    <button onClick={() => handleFilterSelect("company")} className='block w-full py-2 hover:bg-gray-400 rounded-lg'>Company</button>
                    <button onClick={() => handleFilterSelect("framework")} className='block w-full py-2 hover:bg-gray-400 rounded-lg'>Framework</button>
                </div>
                )}
            </div>            
        </div>
  
    )
}

export default DropdownFilter