import React from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
const SearchContainer = () => {
    return (
        <div className="search-container"> 
            <input type="text" placeholder="Search all the GIFS and Stickers here" />
            <div className="search-icon">
                <SearchIcon />
            </div>
        </div>
    )
}

export {SearchContainer}
