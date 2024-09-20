import React, { useState } from 'react';
import './search.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SearchIcon from '@mui/icons-material/Search';

const suggestionsData = [
  { icon: <TelegramIcon />, text: 'Current Location' },
  { icon: <DirectionsCarIcon />, text: 'Search by Commute Time' },
];

const SearchBarInput = ({ searchText, setSearchText, handleSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestionsData);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleFocus = () => {
    setIsFocused(true);
    setSearchText('');
    setFilteredSuggestions(suggestionsData);
  };

  const handleCancel = () => {
    setSearchText('');
    setIsFocused(false);
    setFilteredSuggestions(suggestionsData);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % filteredSuggestions.length);
    } else if (e.key === 'ArrowUp') {
      setHighlightedIndex((prevIndex) => (prevIndex - 1 + filteredSuggestions.length) % filteredSuggestions.length);
    } else if (e.key === 'Enter') {
      if (highlightedIndex >= 0) {
        setSearchText(filteredSuggestions[highlightedIndex].text);
        setIsFocused(false);
      }
    }
  };

  return (
    <div className={`searchBarContainer ${isFocused ? 'focused' : ''}`}>
      <SearchIcon className='searchIcon' />
      <input
        type='text'
        className='searchInput'
        value={searchText}
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Search here...'
        aria-label="Search"
      />
      {isFocused ? (
        <button className='cancelBtn' onClick={handleCancel}>Cancel</button>
      ) : (
        <button className='searchBtn' onClick={handleSearch}>
          <SearchIcon style={{ fontSize: '1.7rem' }} />
        </button>
      )}
      {isFocused && (
        <ul className='suggestions' role="listbox">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => {
                setSearchText(suggestion.text);
                setIsFocused(false);
              }}
              className={highlightedIndex === index ? 'highlighted' : ''}
              role="option"
              aria-selected={highlightedIndex === index}
            >
              {suggestion.icon} {suggestion.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBarInput;
