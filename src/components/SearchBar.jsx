import React from 'react'
import { useState, useEffect } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
        setDebouncedSearchTerm(searchTerm);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm.trim() !== "") {
      onSearch(debouncedSearchTerm);
    } else {
        onSearch("");
    }

    return () => clearTimeout();
  }, [debouncedSearchTerm, onSearch]);

  
    return (
      <div className='flex items-center gap-3 bg-gray-800/40 backdrop-blur-sm px-4 py-3 
                rounded-2xl shadow-lg w-80 md:w-[32rem] hover:bg-gray-700/50 
                transition-all duration-300 mt-10 border border-gray-700/50 
                focus-within:border-gray-500 focus-within:bg-gray-700/50 
                focus-within:scale-[1.02] hover:scale-[1.02] group'>
        <i className="ri-search-line text-gray-400 text-xl group-hover:text-gray-300 
                 group-focus-within:text-white transition-colors duration-300
                 group-focus-within:rotate-12 transform"></i>
        <input 
        type="text"
        placeholder='Search for Interview...'
        className='w-full bg-transparent outline-none text-lg text-white 
                   placeholder-gray-400 font-light transition-all duration-300'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
  )
}

export default SearchBar