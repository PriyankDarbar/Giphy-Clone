import React from 'react';
import './Artist.css';

const ArtistGiphy =(props) => {
    return (
        <div className="artist-giphy">
            <img src={props.giphy.images.downsized.url} alt={props.giphy.title} />
        </div>
    )
}

export default ArtistGiphy;
