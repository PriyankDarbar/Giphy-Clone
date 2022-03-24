import React from 'react';
import "./TrendingGiphy.css";

const TrendingGiphy = (props) => {
    return (
            <div className="trending-giphy" key={props.giphy.id}>              
                <img src={props.giphy.images.downsized.url} alt={props.giphy.title} ></img>
            </div>
    )
}

export default TrendingGiphy
