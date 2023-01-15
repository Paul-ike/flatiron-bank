import React from "react";

function SearchBar({searchName, setSearch}) {
    function handleSearchChange(event) {
        setSearch(event.target.value)
    
      }
    return (
        <div className="container py-3">
            <input className="form-control me-2" type="search" placeholder="Search" onChange={handleSearchChange} />
        </div>
    )
}

export default SearchBar