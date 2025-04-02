import React, { useState } from 'react'
import "remixicon/fonts/remixicon.css"

const DropdownFilter = ({ setCategory, category }) => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleFilterSelect = (category) => {
    setCategory(category);
    setDropdownOpen(false);
  }

    return (

        // Container komponens a szűrő és kártyák számára
        <div className="space-y-6">
            {/* Szűrő container fix magassággal */}
            <div className="h-[40px]"> {/* Állítsd be a filter gomb magasságának megfelelően */}
                <div className='relative'>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className='flex items-center gap-2 px-4 py-2.5 bg-gray-800/40 
                                backdrop-blur-sm rounded-xl border border-gray-700/50 
                                shadow-lg hover:bg-gray-700/50 transition-all duration-300 
                                text-gray-200 font-medium group'
                    >
                        <i className={`${category === "all" ? "ri-filter-line" : "ri-filter-fill"} 
                                    group-hover:rotate-12 transform transition-transform duration-300`}>
                        </i>
                        Filter
                    </button>

                    {/* Módosított dropdown */}
                    <div className={`
                        mt-2 w-44 transition-all duration-300 origin-top
                        ${dropdownOpen 
                            ? 'opacity-100 h-auto transform scale-y-100' 
                            : 'opacity-0 h-0 transform scale-y-0'}
                    `}>
                        <div className='bg-gray-800/40 backdrop-blur-lg 
                                    shadow-xl rounded-xl border border-gray-700/50 
                                    overflow-hidden'>
                            {[
                                { id: 'all', label: 'All' },
                                { id: 'programming', label: 'Programming' },
                                { id: 'company', label: 'Company' },
                                { id: 'framework', label: 'Framework' }
                            ].map((item) => (
                                <button 
                                    key={item.id}
                                    onClick={() => handleFilterSelect(item.id)}
                                    className={`block w-full px-4 py-2.5 text-left hover:bg-gray-700/50 
                                            transition-all duration-300 text-gray-200
                                            ${category === item.id ? 'bg-gray-700/50 font-medium' : ''}
                                            first:rounded-t-xl last:rounded-b-xl`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

    {/* Kártya grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* ... kártya komponensek ... */}
    </div>
</div>
  
    )
}

export default DropdownFilter