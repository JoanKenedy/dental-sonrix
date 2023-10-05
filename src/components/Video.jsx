import React from "react";
import "../styles/video.css";
import videosonrix from "../assets/Somos-dental-sonrix.mp4";
import poster from "../assets/poster-video.png";


const Video = () => {

  return (
    <div className="video-container">
      <video src={videosonrix} controls poster={poster}></video>
    </div>
  );
};

export default Video;