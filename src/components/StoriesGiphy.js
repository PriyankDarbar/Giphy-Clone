import React from 'react';
import './Stories.css';

const StoriesGiphy = (props) => {

    const getGiphy = () => {
        let randomIndex = Math.floor(Math.random() * 31) + 0;
        let storyRandom = props.storyArray[randomIndex];

        if (storyRandom){
            return storyRandom;
        }
    }

    const getColoredBorders = () => {
        const colors = ["purple", "sunshine", "bluepurple", "turqoise"];
        let randomIndex = Math.floor(Math.random() * 4) + 0;
        return colors[randomIndex];
    }

    const StoryTile = ({giphy}) => {
       let base_url = giphy ? giphy.images.downsized.url : "";
        let colorBorders = getColoredBorders();

        return(
            <div className="tile">
                <div className="giphy-tile">
                    <div className="text-tile">
                        <h1>{giphy?.title}</h1>
                    </div>
                    <img src={base_url} />
                    <div className={`overlay-${colorBorders}`}>
                        
                    </div>
                </div>

                <div className="line-box">
                    <div className={`line-top-${colorBorders}`}> </div>
                    <div className={`line-middle-${colorBorders}`}> </div>
                    <div className={`line-bottom-${colorBorders}`}> </div>
                </div>

            </div>
        )
    }

    const gridGiphyconfig = [           
    ["landscape-left-row",3],
    ["landscape-right-row",3],
    ["no-landscape-row",4],
    ["landscape-middle-row",3],
    ["no-landscape-row",4],
]
    const createTiles = (numTiles) =>{
        let tiles=[];
        for (let i=0; i < numTiles; i++){
            tiles.push(<StoryTile  giphy={getGiphy()} key={i} />)
        }
        return tiles;
    }

    return(
        <div className="stories-section">
            {/* extracting or mapping the values in landscape */}
            {gridGiphyconfig.map(([layoutClass,numTiles], index) => {
                const tiles = createTiles(numTiles);
                return (
                    <div className={layoutClass} key={index}>
                        {tiles}
                    </div>
                );
            })}
            {/* <div className="landscape-left-row">
                <StoryTile  giphy={getGiphy()}/>
                <StoryTile  giphy={getGiphy()}/>
                <StoryTile  giphy={getGiphy()}/>
            </div>
            <div className="landscape-right-row">
            <StoryTile  giphy={getGiphy()}/>
            <StoryTile  giphy={getGiphy()}/>
            <StoryTile  giphy={getGiphy()}/>
            </div>
            <div className="no-landscape-row">
            <StoryTile  giphy={getGiphy()}/>
            <StoryTile  giphy={getGiphy()}/>
            <StoryTile  giphy={getGiphy()}/>
            <StoryTile  giphy={getGiphy()}/>
            </div>
            <div className="landscape-middle-row">
            <StoryTile  giphy={getGiphy()}/>
            <StoryTile  giphy={getGiphy()}/>
            <StoryTile  giphy={getGiphy()}/>
            </div>
            <div className="no-landscape-row">
            <StoryTile  giphy={getGiphy()}/>
            <StoryTile  giphy={getGiphy()}/>
            <StoryTile  giphy={getGiphy()}/>
            <StoryTile  giphy={getGiphy()}/>
            </div> */}
        </div>
    )
};

export default StoriesGiphy;