"use client";

import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";
import styles from "../../styles/ReUsables/videojs.module.scss";

type VideoJSProps = {
  options: any;
  poster?: string; // URL of poster image (recommended)
};

export const VideoJS: React.FC<VideoJSProps> = ({ options, poster }) => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video");
      videoElement.className = "video-js vjs-big-play-centered";
      videoElement.setAttribute("playsinline", "true");

      // set poster BEFORE appending/initializing video.js
      if (poster) videoElement.setAttribute("poster", poster);

      videoRef.current.appendChild(videoElement);

      playerRef.current = videojs(videoElement, options);
    } else if (playerRef.current) {
      const player = playerRef.current;
      if (options.sources) player.src(options.sources as any);
      if (typeof options.autoplay !== "undefined") player.autoplay(Boolean(options.autoplay));
    }

    return () => {
      const player = playerRef.current;
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
      if (videoRef.current) videoRef.current.innerHTML = "";
    };
  }, [options, poster]);

  return (
    <div data-vjs-player className={styles.video__wrapper}>
      <div ref={videoRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default VideoJS;

