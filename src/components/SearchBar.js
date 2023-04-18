import React from 'react';
import '../index.css';

const SearchBar = ({formSubmit, value,handleSearch,clearSearch}) => {
    <div className ='searchBar-wrap'>
        <form onSubmit={formSubmit}>
            < input 
            type='text'
            placeholder='Search by Category'
            value={value}
            onChange={handleSearch}
            />
            {value && <span onClick = {clearSearch}>X</span>}
            <button>Go</button>
        </form>
    </div>
}

export default SearchBar;