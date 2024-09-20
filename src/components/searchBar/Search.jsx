import React, { useState } from 'react';
import './search.css';
import SearchBarInput from './SearchBarInput'; 

const tabs = ['Buy', 'Rent', 'Sold'];

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('Buy'); 
  const [searchText, setSearchText] = useState('Quincy, MA');  

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  return (
    <div className='banner'>
      <div className='searchContent'>
        <h2 className='bannerQuote'>
          Discover a place <br /> you'll love to live
        </h2>
        <div className='btnSpan'>
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button" 
              className={`tabBtns ${activeTab === tab ? 'active' : ''}`} 
              onClick={() => setActiveTab(tab)} 
              aria-pressed={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>
        <SearchBarInput 
          searchText={searchText}
          setSearchText={setSearchText}
          handleSearch={handleSearch}
        />
      </div> 
    </div>
  );
}

export default SearchBar;
