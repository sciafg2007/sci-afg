import React from "react";
import VideoJS from "../ReUsables/VideoJS";
import styles from "../../styles/HomePage/"

const HomeVideo = () => {
  //Video JS
  const videoJsOptions = {
    autoplay: true,
    muted: true,
    loop: true,
    controls: false,
    playsinline: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/images/video.mp4",
        type: "video/mp4",
      },
    ],
  };

  return <div>

  </div>>;
};

export default HomeVideo;
