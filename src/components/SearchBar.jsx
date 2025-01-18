import React from 'react'
import './SearchBar.css'

function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-bar">
        <input type="text" placeholder="Search agents..." />
        <select>
          <option>Date Added</option>
        </select>
        <button className="filters-btn">Filters</button>
        <button className="reset-btn">Reset All</button>
      </div>
    </div>
  )
}

export default SearchBar
