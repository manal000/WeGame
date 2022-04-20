import React from "react";
import './SearchBar.css';

const SearchBar = () => {
    return(
        <div className="searchbody">
        <div className="search">
            <div className="container">
            <input className="input" type="text" placeholder="Search"></input>
        </div>
            </div>
            </div>
    )
}

export default SearchBar;