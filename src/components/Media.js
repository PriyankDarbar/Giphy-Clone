import React,{useState, useEffect} from 'react';
import { fetchSearchedGiphys, fetchTrending } from '../api/GiphyApi';
import './Media.css';
import TrendingGiphy from '../components/TrendingGiphy';
import gArtists from '../artists';
import ArtistGiphy from "../components/ArtistGiphy";
import ClipsGiphy from "../components/ClipsGiphy";
import StoriesGiphy from "../components/StoriesGiphy";

const Media = () => {
    const [trending,setTrending] = useState([]);
    const [artists,setArtists] = useState([]);
    const [clips,setClips] = useState([]);
    const [stories,setStories] = useState([]);

    // For split the gifs from occurring in same order
    const randomData = (content) => {
        return content.data.sort(() => Math.random() - 0.5);
    }

    const getTrending = async () => {
        // To get by doing API call
        //For setting trending gifs
        const trending = await fetchTrending();
        setTrending(randomData(trending.data));
    }

    const getArtists = async () => {
        const artists = await Promise.all(
            // map artists
            //API call
            gArtists.map( async (gArtists) => {
                return fetchSearchedGiphys(gArtists).then((res) => res.data.data);
        })
        );
    setArtists(artists.flat());
    };

    const getClips = async (query, setState) => {
    const sclips = await fetchSearchedGiphys(query);
    setState(randomData(sclips.data));
    };

    const getStories = async (query, setState) => {
        const Searchedstories = await fetchSearchedGiphys(query);
        setState(randomData(Searchedstories.data));
        };

    useEffect(()=>{
        getTrending();
        getArtists();
        getClips("coffee",setClips);
        getStories("post",setStories);
    },[])


    return (
        <div className="media">
            <div className="row">
                <div className="row-header">
                    <img src="/images/trending.svg" alt="Trending" />
                    <h1>Trending</h1>
                </div>
                <div className="trending-container">
                    {/* Trending gifs */}
                    {trending?.map((trend, index) => {
                        return <TrendingGiphy giphy={trend} key={index}/>
                    })}
                </div>
            </div>
            <div className="row">
                <div className="row-header">
                    <img src="/images/artists.svg" alt="Artists" />
                    <h1>Artists</h1>
                </div>
                <div className="artists-container">
                    {/* gifs for the artists */}
                    
                            {artists?.map((art, index) => {
                                return (
                                    <>
                                        <ArtistGiphy giphy={art} key={index}/>
                                    </>
                                )
                            })}    
                                      
                </div>
            </div>
            <div className="row">
                <div className="row-header">
                    <img src="/images/clips.svg" alt="Clips" />
                    <h1>Clips</h1>
                </div>
                <div className="clips-container">
                    {/*clips here  */}
                    <ClipsGiphy clipsArray={clips} />
                </div>
            </div>
            <div className="row">
                <div className="row-header">
                    <img src="/images/stories.svg" alt="Stories" />
                    <h1>Stories</h1>
                </div>
                <div className="stories-container">
                    <StoriesGiphy storyArray={stories} />
                </div>
            </div>
        </div>
    )
}

export {Media}
 