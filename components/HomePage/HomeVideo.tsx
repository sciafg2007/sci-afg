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

const HomeVideo = ({ src }: MyPlayerProps) => {
  return (
    <div className={styles.home__video}>
      <Player.Provider>
        <BackgroundVideoSkin>
          <BackgroundVideo src={src} playsInline muted controls autoPlay loop />
        </BackgroundVideoSkin>
      </Player.Provider>
    </div>
  );
};

export default HomeVideo;
