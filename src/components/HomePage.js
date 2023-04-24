import React, { useState } from "react";
import "../styling/Home.css"

import { FaPlay } from "react-icons/fa"
import {AiFillCloseCircle} from "react-icons/ai"
import Header from "./Header";
import rcbPod from '../images/rcbPod.jpg'
import ReactPlayer from "react-player";
function HomePage() {
    const [playing, setPlaying] = useState(false);
    const [mediaType, setMediaType] = useState(null);
    const [mediaUrl, setMediaUrl] = useState(null);

    const handlePlay = (type, url) => {
        setPlaying(true);
        setMediaType(type);
        setMediaUrl(url);
    };

    const handlePause = () => {
        setPlaying(false);
        setMediaType(null);
        setMediaUrl(null);
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="banner">
                    <h1>Welcome to SoundSurff</h1>
                    
                    <p>Our voice meets your perspective</p>
                    <p>Listen to the latest and greatest podcasts</p>
                </div>
                <div className="podcast-list">
                    <div className="podcast-item">
                        <img src={rcbPod} alt="Podcast" />
                        <div className="play-button">
                            <FaPlay
                                size={30}
                                visibility={"faded"}
                                onClick={() =>
                                    handlePlay(
                                        "audio",
                                        "https://soundcloud.com/twoplayrsmusic/powerplayremix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="podcast-item">
                        <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/newhoustonwehaveapodcast.png" alt="Podcast" />
                        <div className="play-button">
                            <FaPlay
                                size={30}
                                opacity={3}
                                onClick={() =>
                                    handlePlay(
                                        "video",
                                        "https://youtu.be/ycS5PagXvhQ"
                                    )
                                }
                            />
                        </div>
                    </div>
                    {/* Add more podcast items here */}
                </div>
                {playing && (
                    <div className="player">
                        <div style={{width:"100%"}}>
                            <AiFillCloseCircle size={30} style={{float:"right", marginRight:"1%"}} onClick={()=>setPlaying(false)}/>
                        </div>
                        {mediaType === "audio" && (
                            <ReactPlayer
                            url={mediaUrl}
                            playing={true}
                            controls={true}
                            onEnded={handlePause}
                            width="100%"
                            height="auto"
                            style={{ marginTop: '2rem', position:"absolute" }}
                          />
                        )}
                        {mediaType === "video" && (
                            <ReactPlayer
                            url={mediaUrl}
                            playing={true}
                            controls={true}
                            width="100%"
                            height="700px"
                            onEnded={handlePause}
                            style={{ marginTop: '2rem',position:"absolute"}}
                            config={{
                              file: {
                                attributes: {
                                  type: mediaType
                                }
                              }
                            }}
                            onPlay={()=>window.scrollTo({
                                top:document.body.scrollHeight-100,
                                left:0,
                                behavior:"smooth"})}
                          />
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default HomePage;
