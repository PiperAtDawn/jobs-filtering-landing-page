import React from 'react'

function Filters ({filters, clearFilters, handleFilterClick}) {
    return (
        <div className="filters" style={{display: filters.length > 0 ? "flex" : "none"}}>
            <div className="filter-btn-container">
            {filters.map((filter) => 
            <button type="button" className="filter-btn" >
                <span>{filter}</span>
                <img src={process.env.PUBLIC_URL+"/images/icon-remove.svg"} onClick={() => handleFilterClick(filter)} alt="Close button"/>
                </button>)}
            </div>
            <button type="button" className="clear-btn" onClick={() => clearFilters()}>Clear</button>
        </div>
    )
}

export default Filters;