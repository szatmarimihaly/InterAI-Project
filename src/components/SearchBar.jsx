import React from 'react'
import { useState, useEffect } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

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
    <div className='flex items-center gap-2 bg-gray-500 px-2 py-2 rounded-2xl shadow-md w-80 md:w-120 hover:bg-gray-600 transition duration-500 mt-10'>
        <i className="ri-search-line text-white text-lg"></i>
        <input 
        type="text"
        placeholder='Search for Interview...'
        className='w-full bg-transparent outline-none text-lg'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
  )
}

export default SearchBar