// import React from "react";
// import VideoJS from "../ReUsables/VideoJS";
// import styles from "../../styles/HomePage/homehero.module.scss";

// const HomeVideo = () => {
//   //Video JS
//   const videoJsOptions = {
//     autoplay: true,
//     muted: true,
//     loop: true,
//     controls: false,
//     playsinline: true,
//     responsive: true,
//     fluid: true,
//     sources: [
//       {
//         src: "/images/sam.mp4",
//         type: "video/mp4",
//       },
//     ],
//   };

//   return (
//     <div className={styles.home__video}>
//       <VideoJS options={videoJsOptions} poster={"/images/poster.png"} />
//     </div>
//   );
// };

// export default HomeVideo;
"use client";

import "@videojs/react/background/skin.css";
import { createPlayer, backgroundFeatures } from "@videojs/react";
import {
  BackgroundVideoSkin,
  BackgroundVideo,
} from "@videojs/react/background";
import styles from "../../styles/HomePage/homehero.module.scss";

const Player = createPlayer({ features: backgroundFeatures });

interface MyPlayerProps {
  src: string;
}

export const MyPlayer = ({ src }: MyPlayerProps) => {
  return (
    <div className={styles.home__video}></div>
    <Player.Provider>
      <BackgroundVideoSkin>
        <BackgroundVideo src={src} playsInline />
      </BackgroundVideoSkin>
    </Player.Provider>
    <div>
  );
};
