import React,{useState, useEffect} from 'react';
import './clips.css';
const ClipsGiphy = ({ clipsArray }) => {

    const [giphys,setGiphys] = useState([]);

    const randomData = (clipsArray) => {
        return clipsArray.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        let rData = randomData(clipsArray);
        setGiphys(rData.slice(0,3));
    }, [clipsArray]);

    return (
        <div className="clips-grid">
        {giphys &&  giphys.length ? (
            <>
                <div className="first-column">
                    <img src={giphys?.[0]?.images.downsized.url} />
                    <div className="text">
                        <img src="/images/giphyIconDark.png" alt="darkLogo"/>
                        <p>{giphys?.[0].title}</p>
                    </div>
                </div>
                <div className="second-column">
                    <img src={giphys?.[1]?.images.downsized.url} />
                    <div className="text">
                        <img src="/images/giphyIconDark.png" alt="darkLogo"/>
                        <p>{giphys?.[1].title}</p>
                    </div>
                    <img src={giphys?.[2]?.images.downsized.url} />
                    <div className="text">
                        <img src="/images/giphyIconDark.png" alt="darkLogo"/>
                        <p>{giphys?.[2].title}</p>
                    </div>
                </div>
            </>
        ): null}    
        </div>
    )
}

export default ClipsGiphy;
